using UnityEngine;
using UnityEngine.EventSystems;

public class Goods : MonoBehaviour, IBeginDragHandler, IEventSystemHandler, IDragHandler, IEndDragHandler
{
	public Material[] materials;

	public int goodsGroupIndex;

	public Box boxplaced;

	public Transform origianalParent;

	public void OnBeginDrag(PointerEventData eventData)
	{
		if (!GManager.Instance.isStarted)
		{
			GManager.Instance.StartGame();
		}
		origianalParent = base.transform.parent;
		base.transform.SetParent(null);
	}

	public void OnDrag(PointerEventData eventData)
	{
		float dis = GManager.Instance.goodsDistanceCamera;
		Vector3 worldPos = Camera.main.ScreenToWorldPoint(new Vector3(eventData.position.x, eventData.position.y, dis));
		base.transform.position = worldPos;
	}

	public void OnEndDrag(PointerEventData eventData)
	{
		Ray ray = Camera.main.ScreenPointToRay(eventData.position);
		if (Physics.Raycast(ray, out var hit))
		{
			Box box = hit.collider.GetComponent<Box>();
			if (box != null && box.goods == null)
			{
				boxplaced.goods = null;
				boxplaced = box;
				boxplaced.goods = this;
				origianalParent = boxplaced.goodsPos;
				base.transform.SetParent(boxplaced.goodsPos);
				base.transform.localPosition = Vector3.zero;
				GManager.Instance.boxSetController.lastGoodsMovedIndex = goodsGroupIndex;
				GManager.Instance.onGoodsMove?.Invoke();
			}
			else
			{
				base.transform.SetParent(origianalParent);
				base.transform.localPosition = Vector3.zero;
			}
		}
		else
		{
			base.transform.SetParent(origianalParent);
			base.transform.localPosition = Vector3.zero;
		}
	}
}
