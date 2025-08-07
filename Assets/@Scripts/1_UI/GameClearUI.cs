using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GameClearUI : MonoBehaviour
{
    public TextMeshProUGUI clearTimeText;

    public void SetClearTime(float time)
    {
        // �ð� ������ "mm:ss"�� ��ȯ
        int minutes = Mathf.FloorToInt(time / 60);
        int seconds = Mathf.FloorToInt(time % 60);
        clearTimeText.text = $"{minutes:D2}:{seconds:D2}";
    }
}
