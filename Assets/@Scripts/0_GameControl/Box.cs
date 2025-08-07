using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Box : MonoBehaviour
{
    public int boxGroupIndex; //1Ä­ ¹Ú½º(ºóÄ­) : 1, 2Ä­ ¹Ú½º : 2....
    public Transform goodsPos; // ±ÂÁîÀÇ À§Ä¡
    public Goods goods; // ¹èÄ¡µÈ ±ÂÁî
    
    public void BoxPop()
    {
        GManager.Instance.particleController.SpawnUIParticle(transform.position);
    }
}
