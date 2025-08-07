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
            // �ڽ��� ��ġ�� ��ƼŬ ����
            GameObject particle = Instantiate(popParticlePrefab, this.transform);
            Vector2 partPos = WorldToUIPosition(GManager.Instance.UICanvas, boxPos, Camera.main);
            particle.GetComponent<RectTransform>().anchoredPosition = partPos - new Vector2(0, 10);
            // �����ð� �� ��ƼŬ ȸ��
            StartCoroutine(ParticleToQueue(particle));
        }
        else
        {
            // ť���� ��ƼŬ �������� + ��ġ ����
            GameObject particle = popParticles.Dequeue();
            Vector2 partPos = WorldToUIPosition(GManager.Instance.UICanvas, boxPos, Camera.main);
            particle.GetComponent<RectTransform>().anchoredPosition = partPos - new Vector2(0,10);
            particle.gameObject.SetActive(true);
            // ��ƼŬ ȸ��
            StartCoroutine(ParticleToQueue(particle));
        }
    }

    IEnumerator ParticleToQueue(GameObject particle)
    {
        ParticleSystem ps = particle.GetComponent<ParticleSystem>();
        float duration = ps.main.duration + ps.main.startLifetime.constantMax;

        yield return new WaitForSeconds(duration);

        // ��Ȱ��ȭ + ��ƼŬ�� ť�� ��ȯ
        particle.gameObject.SetActive(false);
        popParticles.Enqueue(particle);
    }

    Vector2 WorldToUIPosition(Canvas canvas, Vector3 worldPos, Camera camera)
    {
        Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(camera, worldPos);

        Vector2 uiLocalPos;
        RectTransform canvasRect = canvas.GetComponent<RectTransform>();

        // ��ũ�� ������ >> UI ���� ������
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            canvasRect, screenPoint, null, out uiLocalPos);

        return uiLocalPos;
    }
}
