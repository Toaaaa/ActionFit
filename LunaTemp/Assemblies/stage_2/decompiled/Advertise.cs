using DG.Tweening;
using UnityEngine;

public class Advertise : MonoBehaviour
{
	[SerializeField]
	private RectTransform playNowUI;

	[SerializeField]
	private float scaleAmount = 1.2f;

	[SerializeField]
	private float scaleDuration = 0.5f;

	private void Start()
	{
		Vector3 originalScale = playNowUI.localScale;
		playNowUI.DOScale(originalScale * scaleAmount, scaleDuration).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
	}

	public void CloseAd()
	{
		base.gameObject.SetActive(false);
	}
}
