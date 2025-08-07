using System.Collections;
using System.Collections.Generic;
using System.Net.Sockets;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.EventSystems;

public class Goods : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public Material[] materials; // ������ ���׸��� (5��)
    public int goodsGroupIndex;
    public Box boxplaced; // ��ġ�Ǿ��ִ� �ڽ�
    public Transform origianalParent;
    
    
    public void OnBeginDrag(PointerEventData eventData)
    {

        if(GManager.Instance.isStarted == false)
            GManager.Instance.StartGame();

        origianalParent = transform.parent;
        transform.SetParent(null);
    }

    public void OnDrag(PointerEventData eventData)
    {
        // �巡�� ���� ������ ��ġ�� ���콺 ��ġ�� ������Ʈ
        float dis = GManager.Instance.goodsDistanceCamera; // ����� ī�޶� ������ �Ÿ�
        Vector3 worldPos = Camera.main.ScreenToWorldPoint(new Vector3(eventData.position.x, eventData.position.y, dis));
        transform.position = worldPos;
    }
    public void OnEndDrag(PointerEventData eventData)
    {
        Ray ray = Camera.main.ScreenPointToRay(eventData.position);
        // �巡�װ� ������ ��, ��� �ڽ� ��ġ üŷ
        if (Physics.Raycast(ray, out RaycastHit hit))
        {
            Box box = hit.collider.GetComponent<Box>();
            if(box != null && box.goods == null)
            {
                // ������ ������Ʈ
                boxplaced.goods = null;
                boxplaced = box;
                boxplaced.goods = this;
                origianalParent = boxplaced.goodsPos; // �ڽ��� �θ�� ����
                // ��ġ ����
                transform.SetParent(boxplaced.goodsPos);
                transform.localPosition = Vector3.zero;

                GManager.Instance.boxSetController.lastGoodsMovedIndex = goodsGroupIndex;
                GManager.Instance.onGoodsMove?.Invoke(); // ���� �̵� �׼� ȣ��
            }
            else
            {
                transform.SetParent(origianalParent); // ���� �θ�� �ǵ�����
                transform.localPosition = Vector3.zero;
            }
        }
        else
        {
            transform.SetParent(origianalParent); // ���� �θ�� �ǵ�����
            transform.localPosition = Vector3.zero;
        }
    }
}
