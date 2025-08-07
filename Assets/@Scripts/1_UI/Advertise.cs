using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static UnityEngine.GraphicsBuffer;

public class Advertise : MonoBehaviour
{
    [SerializeField] RectTransform playNowUI;
    [SerializeField] private float scaleAmount = 1.2f;  // Ŀ���� ����
    [SerializeField] private float scaleDuration = 0.5f;

    private void Start()
    {
        // ���� ũ�� ����
        Vector3 originalScale = playNowUI.localScale;

        // DoTween �ִϸ��̼� ����
        playNowUI.DOScale(originalScale * scaleAmount, scaleDuration)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo);
    }

    public void CloseAd()
    {
        gameObject.SetActive(false);
    }
}
