using System;
using UnityEngine;
using UnityEngine.UI;

public class GManager : MonoBehaviour
{
	public static GManager Instance;

	[Header("GameControl")]
	[SerializeField]
	public bool isStarted;

	[SerializeField]
	private bool adShown;

	public BoxSetController boxSetController;

	public ParticleController particleController;

	[Space(10f)]
	[Header("GamePlay")]
	public float goodsDistanceCamera = 36f;

	public int boxCount;

	public float timePlayed;

	[Space(10f)]
	[Header("UI List")]
	[SerializeField]
	private GameObject startUI;

	[SerializeField]
	private Advertise ads;

	public Image overlayText;

	public GameClearUI gameClear;

	public Canvas UICanvas;

	public Action onGoodsMove;

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
			UnityEngine.Object.DontDestroyOnLoad(base.gameObject);
		}
		else
		{
			UnityEngine.Object.Destroy(base.gameObject);
		}
		Instance = this;
		UnityEngine.Object.DontDestroyOnLoad(base.gameObject);
	}

	private void Start()
	{
		if (boxSetController != null)
		{
			boxSetController.SetBox(boxCount);
			boxSetController.GenerateAllGoods(boxCount);
			boxSetController.SetGoods();
		}
	}

	private void Update()
	{
		if (isStarted)
		{
			timePlayed += Time.deltaTime;
		}
		if (!adShown && timePlayed > 20f)
		{
			ads.gameObject.SetActive(true);
			adShown = true;
		}
	}

	public void StartGame()
	{
		isStarted = true;
		startUI.SetActive(false);
	}
}
