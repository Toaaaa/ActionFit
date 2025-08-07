using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ParticleController : MonoBehaviour
{
	[SerializeField]
	private GameObject popParticlePrefab;

	private Queue<GameObject> popParticles = new Queue<GameObject>();

	public void SpawnUIParticle(Vector3 boxPos)
	{
		if (popParticles.Count == 0)
		{
			GameObject particle2 = Object.Instantiate(popParticlePrefab, base.transform);
			Vector2 partPos2 = WorldToUIPosition(GManager.Instance.UICanvas, boxPos, Camera.main);
			particle2.GetComponent<RectTransform>().anchoredPosition = partPos2 - new Vector2(0f, 10f);
			StartCoroutine(ParticleToQueue(particle2));
		}
		else
		{
			GameObject particle = popParticles.Dequeue();
			Vector2 partPos = WorldToUIPosition(GManager.Instance.UICanvas, boxPos, Camera.main);
			particle.GetComponent<RectTransform>().anchoredPosition = partPos - new Vector2(0f, 10f);
			particle.gameObject.SetActive(true);
			StartCoroutine(ParticleToQueue(particle));
		}
	}

	private IEnumerator ParticleToQueue(GameObject particle)
	{
		ParticleSystem ps = particle.GetComponent<ParticleSystem>();
		float duration = ps.main.duration + ps.main.startLifetime.constantMax;
		yield return new WaitForSeconds(duration);
		particle.gameObject.SetActive(false);
		popParticles.Enqueue(particle);
	}

	private Vector2 WorldToUIPosition(Canvas canvas, Vector3 worldPos, Camera camera)
	{
		Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(camera, worldPos);
		RectTransform canvasRect = canvas.GetComponent<RectTransform>();
		RectTransformUtility.ScreenPointToLocalPointInRectangle(canvasRect, screenPoint, null, out var uiLocalPos);
		return uiLocalPos;
	}
}
