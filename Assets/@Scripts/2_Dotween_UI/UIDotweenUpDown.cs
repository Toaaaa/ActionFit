using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static UnityEngine.GraphicsBuffer;

public class UIDotweenUpDown : MonoBehaviour
{

    public float moveHeight = 30f; // �̵� ����
    public float moveDuration = 0.5f; // �̵� �ð�

    RectTransform targetUI; // �̵��� UI ���
    Tweener sequence;


    private void Awake()
    {
        targetUI = this.GetComponent<RectTransform>();
    }
    private void OnEnable()
    {
        StartMoving();
    }
    private void OnDisable()
    {
        StopMoving();
    }
    void Start()
    {
        StartMoving();
    }

    public void StartMoving()
    {
        sequence?.Kill();

        Vector2 startPos = targetUI.anchoredPosition;
        sequence = targetUI
            .DOAnchorPosY(startPos.y + moveHeight, moveDuration)
            .SetEase(Ease.Linear)
            .SetLoops(-1, LoopType.Yoyo);
    }

    public void StopMoving()
    {
        sequence?.Kill();
        sequence = null;
    }
}
