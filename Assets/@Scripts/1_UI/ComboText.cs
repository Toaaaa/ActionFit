using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ComboText : MonoBehaviour
{
    private Image image;
    [SerializeField] private float fadeDuration = 2f;

    private void Awake()
    {
        image = GetComponent<Image>();
    }

    private void OnEnable()
    {
        FadeInOut();
    }
    void FadeInOut()
    {
        Color c = image.color;
        c.a = 0f;
        image.color = c;

        image.DOFade(1f, fadeDuration)
            .SetEase(Ease.InOutSine)
            .OnComplete(() =>
            {
                image.DOFade(0f, fadeDuration)
                    .SetEase(Ease.InOutSine)
                    .OnComplete(() =>
                    {
                        gameObject.SetActive(false); // 알파가 0되면 비활성화
                    });
            });
    }
}
