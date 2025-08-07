using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GManager : MonoBehaviour
{
    public static GManager Instance;

    [Header("GameControl")]
    [SerializeField] public bool isStarted;
    [SerializeField] bool adShown;
    public BoxSetController boxSetController;
    public ParticleController particleController;

    [Space(10)]
    [Header("GamePlay")]
    public float goodsDistanceCamera = 36f; // ����� ī�޶� ������ �Ÿ�
    public int boxCount;
    public float timePlayed;

    [Space(10)]
    [Header("UI List")]
    [SerializeField] GameObject startUI;
    [SerializeField] Advertise ads;
    public Image overlayText;
    public GameClearUI gameClear;
    public Canvas UICanvas; // �������� UI ĵ����


    public Action onGoodsMove;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }


    private void Start()
    {
        if(boxSetController != null)
        {
            boxSetController.SetBox(boxCount);
            boxSetController.GenerateAllGoods(boxCount);
            boxSetController.SetGoods();
        }
    }

    private void Update()
    {
        if (isStarted)
            timePlayed += Time.deltaTime;

        // 20�� ���� ���� ǥ��
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
