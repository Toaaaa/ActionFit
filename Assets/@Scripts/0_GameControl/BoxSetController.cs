using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEngine;

public class BoxSetController : MonoBehaviour
{
    public int lastGoodsMovedIndex = -10; // ���������� ��ȣ�ۿ��� ���� �ε���
    [SerializeField] GameObject boxPrefab;
    [SerializeField] GameObject goodsPrefab;
    [SerializeField] List<Box> boxList; // �ΰ��ӿ��� ��ġ�� �ڽ� ����Ʈ
    [SerializeField] List<Goods> allGoods; // �ΰ��ӿ��� ��ġ�� ���� ����Ʈ

    [Header("BoxSetting")]
    [SerializeField] float xStart = -1.1f;
    [Tooltip("�ڽ����� x ����")]
    [SerializeField] float xOffset = 2.2f;
    [Tooltip("�ڽ����� y ����")]
    [SerializeField] float yOffset = -3.5f;

    [Header("Material")]
    [SerializeField] Material[] boxMaterials;
    [SerializeField] Material[] goodsMaterials;


    private void Awake()
    {
        GManager.Instance.onGoodsMove += CheckLine;
    }
    /// <summary>
    /// ���� ���۽� �ڽ� ����
    /// </summary>
    /// <param name="levelCount">�� �ڽ�ĭ�� ����</param>
    public void SetBox(int levelCount)
    {
        boxList.Clear();
        if(goodsPrefab.TryGetComponent<Goods>(out Goods goods))
        {
            if(levelCount - 1 > goods.materials.Length)
            {
                Debug.LogError("������ ���׸����� �����մϴ�. " + (levelCount - 1) + "�� �̻��� ���׸����� �ʿ��մϴ�.");
                levelCount = goods.materials.Length + 1; // �ּ����� ���׸��� ������ ����
            }
        }

        for(int i = 0; i < levelCount; i++)
        {
            int count = i + 1; // �ش� ���� ��ġ�� �ڽ��� ����
            int levelIndex = 0; // �ش� �������� �ڽ��� �ε���
            while(count > 0)
            {
                //���� + ��ġ��ġ
                Vector3 pos = new Vector3(i * xStart + levelIndex * xOffset, i * yOffset, 0);
                GameObject box = Instantiate(boxPrefab, pos, Quaternion.identity, this.transform);
                boxList.Add(box.GetComponent<Box>());

                // �ε��� �׷� ���� ���� + ���� 
                box.GetComponent<Box>().boxGroupIndex = i + 1; // 1ĭ �ڽ�(��ĭ) : 1, 2ĭ �ڽ� : 2....
                box.GetComponent<MeshRenderer>().material = boxMaterials[i];

                count--;
                levelIndex++;
            }
        }
    }
    public void GenerateAllGoods(int levelCount)
    {
        allGoods.Clear();

        for (int i = 1; i < levelCount; i++) // 1���� ����
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

        // 1���� ��ĭ�̶� ���� ��ġ ����
        List<Box> goodsBoxes = boxList.Where(b => b.boxGroupIndex > 1).ToList();

        // ���� ����ġ ����
        if (shuffledGoods.Count != goodsBoxes.Count) return;

        for (int i = 0; i < goodsBoxes.Count; i++)
        {
            var box = goodsBoxes[i];
            var goods = shuffledGoods[i];

            goods.transform.position = box.goodsPos.position; // ���� ��ġ ����
            goods.boxplaced = box; // ��� ��ġ�� �ڽ� ���� ����
            box.goods = goods; // �ڽ��� ���� ���� ����
            goods.transform.SetParent(box.goodsPos);
        }

        // ���� �ϼ��� ������ ��� ȣ��
        int completedGroup = HasAnyAllSameColorLine();
        if (completedGroup != -1) SetGoods();
        else retryCount = 0; // ��õ� Ƚ�� �ʱ�ȭ
    }

    // ���� �ϼ� Ȯ��
    private int HasAnyAllSameColorLine()
    {
        int levelCount = boxList.Max(b => b.boxGroupIndex);

        for (int level = 2; level <= levelCount; level++) // 1���� ����
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
    // ���������� �̵��� ������ ���� �ϼ��Ǿ����� Ȯ��
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
            //�޺� �ؽ�Ʈ �߾ӿ� ǥ��
            List<Box> matchedBoxes = boxList.Where(b => b.boxGroupIndex == lastGoodsMovedIndex+2).ToList();

            if (matchedBoxes.Count == 0) return; // ��Ī�� �ڽ��� ������ ����
            float centerX = matchedBoxes.Average(b => b.transform.position.x);
            float centerY = matchedBoxes[0].gameObject.transform.position.y;
            Vector3 worldPos = new Vector3(centerX, centerY, 0);

            // ���� >> UI ��ǥ ��ȯ (�޺� �ؽ�Ʈ ��ġ)
            Vector3 screenPos = Camera.main.WorldToScreenPoint(worldPos);
            RectTransformUtility.ScreenPointToLocalPointInRectangle(
                GManager.Instance.UICanvas.GetComponent<RectTransform>(), screenPos, null, out Vector2 uiPos);

            GManager.Instance.overlayText.rectTransform.anchoredPosition = uiPos;
            GManager.Instance.overlayText.gameObject.SetActive(true);

            // �ڽ� ������ ȿ�� ��� + �ڽ� ����
            foreach (var box in matchedBoxes)
            {
                box.BoxPop();
                if (box.goods != null)
                {
                    allGoods.Remove(box.goods); // ���� ����Ʈ���� ����
                    Destroy(box.goods.gameObject); // �ð��� �ִٸ� ������Ʈ Ǯ������ ���� ���������� ����� ������ �ϴ� ���� ���ٰ� �����մϴ�.

                    boxList.Remove(box); // �ڽ� ����Ʈ���� ����
                    Destroy(box.gameObject); // �ڽ� ������Ʈ ����
                }
            }

            // ���� ����� �ڽ��� �����Ѵٸ� �Ʒ��� ������
            foreach (var box in boxList)
            {
                if (box.boxGroupIndex < lastGoodsMovedIndex + 2) // ���� �ٺ��� �Ʒ��� �ִ� �ڽ���
                {
                    box.transform.DOMoveY(box.transform.position.y + yOffset, 0.3f)
                                 .SetEase(Ease.InBack);
                }
            }
        }

        // ���� ���� üũ
        if (allGoods.Count == 0)
        {
            GManager.Instance.gameClear.SetClearTime(GManager.Instance.timePlayed);
            GManager.Instance.gameClear.gameObject.SetActive(true);
        }
    }
}
