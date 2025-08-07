using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class ComboText : MonoBehaviour
{
	private Image image;

	[SerializeField]
	private float fadeDuration = 2f;

	private void Awake()
	{
		image = GetComponent<Image>();
	}

	private void OnEnable()
	{
		FadeInOut();
	}

	private void FadeInOut()
	{
		Color c = image.color;
		c.a = 0f;
		image.color = c;
		image.DOFade(1f, fadeDuration).SetEase(Ease.InOutSine).OnComplete(delegate
		{
			image.DOFade(0f, fadeDuration).SetEase(Ease.InOutSine).OnComplete(delegate
			{
				base.gameObject.SetActive(false);
			});
		});
	}
}
