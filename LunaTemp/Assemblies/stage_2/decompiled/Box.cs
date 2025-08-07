using UnityEngine;

public class Box : MonoBehaviour
{
	public int boxGroupIndex;

	public Transform goodsPos;

	public Goods goods;

	public void BoxPop()
	{
		GManager.Instance.particleController.SpawnUIParticle(base.transform.position);
	}
}
