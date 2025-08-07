using System;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using UnityEngine;

public class BoxSetController : MonoBehaviour
{
	public int lastGoodsMovedIndex = -10;

	[SerializeField]
	private GameObject boxPrefab;

	[SerializeField]
	private GameObject goodsPrefab;

	[SerializeField]
	private List<Box> boxList;

	[SerializeField]
	private List<Goods> allGoods;

	[Header("BoxSetting")]
	[SerializeField]
	private float xStart = -1.1f;

	[Tooltip("박스간의 x 간격")]
	[SerializeField]
	private float xOffset = 2.2f;

	[Tooltip("박스간의 y 간격")]
	[SerializeField]
	private float yOffset = -3.5f;

	[Header("Material")]
	[SerializeField]
	private Material[] boxMaterials;

	[SerializeField]
	private Material[] goodsMaterials;

	private int retryCount = 0;

	private const int maxRetry = 20;

	private void Awake()
	{
		GManager instance = GManager.Instance;
		instance.onGoodsMove = (Action)Delegate.Combine(instance.onGoodsMove, new Action(CheckLine));
	}

	public void SetBox(int levelCount)
	{
		boxList.Clear();
		if (goodsPrefab.TryGetComponent<Goods>(out var goods) && levelCount - 1 > goods.materials.Length)
		{
			Debug.LogError("굿즈의 마테리얼이 부족합니다. " + (levelCount - 1) + "개 이상의 마테리얼이 필요합니다.");
			levelCount = goods.materials.Length + 1;
		}
		for (int i = 0; i < levelCount; i++)
		{
			int count = i + 1;
			int levelIndex = 0;
			while (count > 0)
			{
				Vector3 pos = new Vector3((float)i * xStart + (float)levelIndex * xOffset, (float)i * yOffset, 0f);
				GameObject box = UnityEngine.Object.Instantiate(boxPrefab, pos, Quaternion.identity, base.transform);
				boxList.Add(box.GetComponent<Box>());
				box.GetComponent<Box>().boxGroupIndex = i + 1;
				box.GetComponent<MeshRenderer>().material = boxMaterials[i];
				count--;
				levelIndex++;
			}
		}
	}

	public void GenerateAllGoods(int levelCount)
	{
		allGoods.Clear();
		for (int i = 1; i < levelCount; i++)
		{
			for (int j = 0; j < i + 1; j++)
			{
				GameObject gObj = UnityEngine.Object.Instantiate(goodsPrefab);
				Goods g = gObj.GetComponent<Goods>();
				g.goodsGroupIndex = i - 1;
				g.GetComponent<MeshRenderer>().material = goodsMaterials[i - 1];
				allGoods.Add(g);
			}
		}
	}

	public void SetGoods()
	{
		if (retryCount >= 20)
		{
			return;
		}
		retryCount++;
		List<Goods> shuffledGoods = allGoods.OrderBy((Goods _) => UnityEngine.Random.value).ToList();
		List<Box> goodsBoxes = boxList.Where((Box b) => b.boxGroupIndex > 1).ToList();
		if (shuffledGoods.Count == goodsBoxes.Count)
		{
			for (int i = 0; i < goodsBoxes.Count; i++)
			{
				Box box = goodsBoxes[i];
				Goods goods = shuffledGoods[i];
				goods.transform.position = box.goodsPos.position;
				goods.boxplaced = box;
				box.goods = goods;
				goods.transform.SetParent(box.goodsPos);
			}
			int completedGroup = HasAnyAllSameColorLine();
			if (completedGroup != -1)
			{
				SetGoods();
			}
			else
			{
				retryCount = 0;
			}
		}
	}

	private int HasAnyAllSameColorLine()
	{
		int levelCount = boxList.Max((Box b) => b.boxGroupIndex);
		int level;
		for (level = 2; level <= levelCount; level++)
		{
			List<Box> levelBoxes = boxList.Where((Box b) => b.boxGroupIndex == level).ToList();
			if (levelBoxes.Count == 0)
			{
				continue;
			}
			List<int> groupIndices = new List<int>();
			foreach (Box box in levelBoxes)
			{
				int groupIndex = -1;
				if (box.goodsPos.childCount > 0)
				{
					Transform child = box.goodsPos.GetChild(0);
					Goods goods = child.GetComponent<Goods>();
					if (goods != null)
					{
						groupIndex = goods.goodsGroupIndex;
					}
				}
				groupIndices.Add(groupIndex);
			}
			if (groupIndices.All((int g) => g != -1 && g == groupIndices[0]))
			{
				return groupIndices[0] + 1;
			}
		}
		return -1;
	}

	public bool IsLastMovedLineCompleted()
	{
		int targetLevel = lastGoodsMovedIndex + 2;
		List<Box> targetBoxes = boxList.Where((Box b) => b.boxGroupIndex == targetLevel).ToList();
		if (targetBoxes.Count == 0)
		{
			return false;
		}
		foreach (Box box in targetBoxes)
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
			List<Box> matchedBoxes = boxList.Where((Box b) => b.boxGroupIndex == lastGoodsMovedIndex + 2).ToList();
			if (matchedBoxes.Count == 0)
			{
				return;
			}
			float centerX = matchedBoxes.Average((Box b) => b.transform.position.x);
			float centerY = matchedBoxes[0].gameObject.transform.position.y;
			Vector3 worldPos = new Vector3(centerX, centerY, 0f);
			Vector3 screenPos = Camera.main.WorldToScreenPoint(worldPos);
			RectTransformUtility.ScreenPointToLocalPointInRectangle(GManager.Instance.UICanvas.GetComponent<RectTransform>(), screenPos, null, out var uiPos);
			GManager.Instance.overlayText.rectTransform.anchoredPosition = uiPos;
			GManager.Instance.overlayText.gameObject.SetActive(true);
			foreach (Box box2 in matchedBoxes)
			{
				box2.BoxPop();
				if (box2.goods != null)
				{
					allGoods.Remove(box2.goods);
					UnityEngine.Object.Destroy(box2.goods.gameObject);
					boxList.Remove(box2);
					UnityEngine.Object.Destroy(box2.gameObject);
				}
			}
			foreach (Box box in boxList)
			{
				if (box.boxGroupIndex < lastGoodsMovedIndex + 2)
				{
					box.transform.DOMoveY(box.transform.position.y + yOffset, 0.3f).SetEase(Ease.InBack);
				}
			}
		}
		if (allGoods.Count == 0)
		{
			GManager.Instance.gameClear.SetClearTime(GManager.Instance.timePlayed);
			GManager.Instance.gameClear.gameObject.SetActive(true);
		}
	}
}
