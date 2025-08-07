using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ParticleController : MonoBehaviour
{
    [SerializeField] GameObject popParticlePrefab;
    Queue<GameObject> popParticles = new Queue<GameObject>();

    public void SpawnUIParticle(Vector3 boxPos)
    {
        if(popParticles.Count == 0)
        {
            // 박스의 위치에 파티클 생성
            GameObject particle = Instantiate(popParticlePrefab, this.transform);
            Vector2 partPos = WorldToUIPosition(GManager.Instance.UICanvas, boxPos, Camera.main);
            particle.GetComponent<RectTransform>().anchoredPosition = partPos - new Vector2(0, 10);
            // 일정시간 후 파티클 회수
            StartCoroutine(ParticleToQueue(particle));
        }
        else
        {
            // 큐에서 파티클 가져오기 + 위치 설정
            GameObject particle = popParticles.Dequeue();
            Vector2 partPos = WorldToUIPosition(GManager.Instance.UICanvas, boxPos, Camera.main);
            particle.GetComponent<RectTransform>().anchoredPosition = partPos - new Vector2(0,10);
            particle.gameObject.SetActive(true);
            // 파티클 회수
            StartCoroutine(ParticleToQueue(particle));
        }
    }

    IEnumerator ParticleToQueue(GameObject particle)
    {
        ParticleSystem ps = particle.GetComponent<ParticleSystem>();
        float duration = ps.main.duration + ps.main.startLifetime.constantMax;

        yield return new WaitForSeconds(duration);

        // 비활성화 + 파티클을 큐에 반환
        particle.gameObject.SetActive(false);
        popParticles.Enqueue(particle);
    }

    Vector2 WorldToUIPosition(Canvas canvas, Vector3 worldPos, Camera camera)
    {
        Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(camera, worldPos);

        Vector2 uiLocalPos;
        RectTransform canvasRect = canvas.GetComponent<RectTransform>();

        // 스크린 포지션 >> UI 로컬 포지션
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            canvasRect, screenPoint, null, out uiLocalPos);

        return uiLocalPos;
    }
}
