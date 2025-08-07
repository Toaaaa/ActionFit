using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEngine;

public class BoxSetController : MonoBehaviour
{
    public int lastGoodsMovedIndex = -10; // 마지막으로 상호작용한 굿즈 인덱스
    [SerializeField] GameObject boxPrefab;
    [SerializeField] GameObject goodsPrefab;
    [SerializeField] List<Box> boxList; // 인게임에서 배치될 박스 리스트
    [SerializeField] List<Goods> allGoods; // 인게임에서 배치될 굿즈 리스트

    [Header("BoxSetting")]
    [SerializeField] float xStart = -1.1f;
    [Tooltip("박스간의 x 간격")]
    [SerializeField] float xOffset = 2.2f;
    [Tooltip("박스간의 y 간격")]
    [SerializeField] float yOffset = -3.5f;

    [Header("Material")]
    [SerializeField] Material[] boxMaterials;
    [SerializeField] Material[] goodsMaterials;


    private void Awake()
    {
        GManager.Instance.onGoodsMove += CheckLine;
    }
    /// <summary>
    /// 게임 시작시 박스 세팅
    /// </summary>
    /// <param name="levelCount">총 박스칸의 층수</param>
    public void SetBox(int levelCount)
    {
        boxList.Clear();
        if(goodsPrefab.TryGetComponent<Goods>(out Goods goods))
        {
            if(levelCount - 1 > goods.materials.Length)
            {
                Debug.LogError("굿즈의 마테리얼이 부족합니다. " + (levelCount - 1) + "개 이상의 마테리얼이 필요합니다.");
                levelCount = goods.materials.Length + 1; // 최소한의 마테리얼 개수로 제한
            }
        }

        for(int i = 0; i < levelCount; i++)
        {
            int count = i + 1; // 해당 층에 배치될 박스의 개수
            int levelIndex = 0; // 해당 층에서의 박스의 인덱스
            while(count > 0)
            {
                //생성 + 위치배치
                Vector3 pos = new Vector3(i * xStart + levelIndex * xOffset, i * yOffset, 0);
                GameObject box = Instantiate(boxPrefab, pos, Quaternion.identity, this.transform);
                boxList.Add(box.GetComponent<Box>());

                // 인덱스 그룹 변수 설정 + 색상 
                box.GetComponent<Box>().boxGroupIndex = i + 1; // 1칸 박스(빈칸) : 1, 2칸 박스 : 2....
                box.GetComponent<MeshRenderer>().material = boxMaterials[i];

                count--;
                levelIndex++;
            }
        }
    }
    public void GenerateAllGoods(int levelCount)
    {
        allGoods.Clear();

        for (int i = 1; i < levelCount; i++) // 1층은 제외
        {
            for (int j = 0; j < i + 1; j++)
            {
                GameObject gObj = Instantiate(goodsPrefab);
                Goods g = gObj.GetComponent<Goods>();
                g.goodsGroupIndex = i - 1;
                g.GetComponent<MeshRenderer>().material = goodsMaterials[i - 1];
                allGoods.Add(g);
            }
        }
    }



    private int retryCount = 0;
    private const int maxRetry = 20;

    public void SetGoods()
    {

        if(retryCount >= maxRetry) return;
        retryCount++;

        List<Goods> shuffledGoods = allGoods.OrderBy(_ => Random.value).ToList();

        // 1층은 빈칸이라 굿즈 배치 제외
        List<Box> goodsBoxes = boxList.Where(b => b.boxGroupIndex > 1).ToList();

        // 개수 불일치 리턴
        if (shuffledGoods.Count != goodsBoxes.Count) return;

        for (int i = 0; i < goodsBoxes.Count; i++)
        {
            var box = goodsBoxes[i];
            var goods = shuffledGoods[i];

            goods.transform.position = box.goodsPos.position; // 굿즈 위치 설정
            goods.boxplaced = box; // 굿즈가 배치된 박스 정보 저장
            box.goods = goods; // 박스에 굿즈 정보 저장
            goods.transform.SetParent(box.goodsPos);
        }

        // 줄이 완성되 버리면 재귀 호출
        int completedGroup = HasAnyAllSameColorLine();
        if (completedGroup != -1) SetGoods();
        else retryCount = 0; // 재시도 횟수 초기화
    }

    // 한줄 완성 확인
    private int HasAnyAllSameColorLine()
    {
        int levelCount = boxList.Max(b => b.boxGroupIndex);

        for (int level = 2; level <= levelCount; level++) // 1층은 제외
        {
            var levelBoxes = boxList.Where(b => b.boxGroupIndex == level).ToList();

            if (levelBoxes.Count == 0) continue;

            List<int> groupIndices = new List<int>();

            foreach (var box in levelBoxes)
            {
                int groupIndex = -1;

                if (box.goodsPos.childCount > 0)
                {
                    var child = box.goodsPos.GetChild(0);
                    var goods = child.GetComponent<Goods>();

                    if (goods != null)
                    {
                        groupIndex = goods.goodsGroupIndex;
                    }
                }

                groupIndices.Add(groupIndex);
            }

            if (groupIndices.All(g => g != -1 && g == groupIndices[0]))
            {
                return groupIndices[0] + 1;
            }
        }

        return -1;
    }
    // 마지막으로 이동한 굿즈의 줄이 완성되었는지 확인
    public bool IsLastMovedLineCompleted()
    {
        int targetLevel = lastGoodsMovedIndex + 2;

        var targetBoxes = boxList.Where(b => b.boxGroupIndex == targetLevel).ToList();

        if (targetBoxes.Count == 0) return false;

        foreach (var box in targetBoxes)
        {
            if (box.goods == null || box.goods.goodsGroupIndex != lastGoodsMovedIndex)
            {
                return false;
            }
        }

        return true;
    }

    public void CheckLine()
    {
        if (IsLastMovedLineCompleted())
        {
            //콤보 텍스트 중앙에 표시
            List<Box> matchedBoxes = boxList.Where(b => b.boxGroupIndex == lastGoodsMovedIndex+2).ToList();

            if (matchedBoxes.Count == 0) return; // 매칭된 박스가 없으면 리턴
            float centerX = matchedBoxes.Average(b => b.transform.position.x);
            float centerY = matchedBoxes[0].gameObject.transform.position.y;
            Vector3 worldPos = new Vector3(centerX, centerY, 0);

            // 월드 >> UI 좌표 변환 (콤보 텍스트 위치)
            Vector3 screenPos = Camera.main.WorldToScreenPoint(worldPos);
            RectTransformUtility.ScreenPointToLocalPointInRectangle(
                GManager.Instance.UICanvas.GetComponent<RectTransform>(), screenPos, null, out Vector2 uiPos);

            GManager.Instance.overlayText.rectTransform.anchoredPosition = uiPos;
            GManager.Instance.overlayText.gameObject.SetActive(true);

            // 박스 터지는 효과 재생 + 박스 제거
            foreach (var box in matchedBoxes)
            {
                box.BoxPop();
                if (box.goods != null)
                {
                    allGoods.Remove(box.goods); // 굿즈 리스트에서 제거
                    Destroy(box.goods.gameObject); // 시간이 있다면 오브젝트 풀링으로 여러 스테이지를 고려한 재사용을 하는 것이 좋다고 생각합니다.

                    boxList.Remove(box); // 박스 리스트에서 제거
                    Destroy(box.gameObject); // 박스 오브젝트 제거
                }
            }

            // 이후 상단의 박스가 존재한다면 아래로 내리기
            foreach (var box in boxList)
            {
                if (box.boxGroupIndex < lastGoodsMovedIndex + 2) // 현재 줄보다 아래에 있는 박스들
                {
                    box.transform.DOMoveY(box.transform.position.y + yOffset, 0.3f)
                                 .SetEase(Ease.InBack);
                }
            }
        }

        // 게임 종료 체크
        if (allGoods.Count == 0)
        {
            GManager.Instance.gameClear.SetClearTime(GManager.Instance.timePlayed);
            GManager.Instance.gameClear.gameObject.SetActive(true);
        }
    }
}
