using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static UnityEngine.GraphicsBuffer;

public class Advertise : MonoBehaviour
{
    [SerializeField] RectTransform playNowUI;
    [SerializeField] private float scaleAmount = 1.2f;  // 커지는 비율
    [SerializeField] private float scaleDuration = 0.5f;

    private void Start()
    {
        // 시작 크기 저장
        Vector3 originalScale = playNowUI.localScale;

        // DoTween 애니메이션 실행
        playNowUI.DOScale(originalScale * scaleAmount, scaleDuration)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo);
    }

    public void CloseAd()
    {
        gameObject.SetActive(false);
    }
}
