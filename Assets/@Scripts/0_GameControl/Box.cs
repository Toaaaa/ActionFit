using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Box : MonoBehaviour
{
    public int boxGroupIndex; //1ĭ �ڽ�(��ĭ) : 1, 2ĭ �ڽ� : 2....
    public Transform goodsPos; // ������ ��ġ
    public Goods goods; // ��ġ�� ����
    
    public void BoxPop()
    {
        GManager.Instance.particleController.SpawnUIParticle(transform.position);
    }
}
