using DG.Tweening;
using UnityEngine;

public class UIDotweenUpDown : MonoBehaviour
{
	public float moveHeight = 30f;

	public float moveDuration = 0.5f;

	private RectTransform targetUI;

	private Tweener sequence;

	private void Awake()
	{
		targetUI = GetComponent<RectTransform>();
	}

	private void OnEnable()
	{
		StartMoving();
	}

	private void OnDisable()
	{
		StopMoving();
	}

	private void Start()
	{
		StartMoving();
	}

	public void StartMoving()
	{
		sequence?.Kill();
		Vector2 startPos = targetUI.anchoredPosition;
		sequence = targetUI.DOAnchorPosY(startPos.y + moveHeight, moveDuration).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
	}

	public void StopMoving()
	{
		sequence?.Kill();
		sequence = null;
	}
}
