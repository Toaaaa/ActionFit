using System.Collections;
using System.Collections.Generic;
using System.Net.Sockets;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.EventSystems;

public class Goods : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public Material[] materials; // 굿즈의 마테리얼 (5종)
    public int goodsGroupIndex;
    public Box boxplaced; // 배치되어있던 박스
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
        // 드래그 중인 굿즈의 위치를 마우스 위치로 업데이트
        float dis = GManager.Instance.goodsDistanceCamera; // 굿즈와 카메라 사이의 거리
        Vector3 worldPos = Camera.main.ScreenToWorldPoint(new Vector3(eventData.position.x, eventData.position.y, dis));
        transform.position = worldPos;
    }
    public void OnEndDrag(PointerEventData eventData)
    {
        Ray ray = Camera.main.ScreenPointToRay(eventData.position);
        // 드래그가 끝났을 때, 굿즈를 박스 배치 체킹
        if (Physics.Raycast(ray, out RaycastHit hit))
        {
            Box box = hit.collider.GetComponent<Box>();
            if(box != null && box.goods == null)
            {
                // 데이터 업데이트
                boxplaced.goods = null;
                boxplaced = box;
                boxplaced.goods = this;
                origianalParent = boxplaced.goodsPos; // 박스의 부모로 설정
                // 위치 이전
                transform.SetParent(boxplaced.goodsPos);
                transform.localPosition = Vector3.zero;

                GManager.Instance.boxSetController.lastGoodsMovedIndex = goodsGroupIndex;
                GManager.Instance.onGoodsMove?.Invoke(); // 굿즈 이동 액션 호출
            }
            else
            {
                transform.SetParent(origianalParent); // 원래 부모로 되돌리기
                transform.localPosition = Vector3.zero;
            }
        }
        else
        {
            transform.SetParent(origianalParent); // 원래 부모로 되돌리기
            transform.localPosition = Vector3.zero;
        }
    }
}
