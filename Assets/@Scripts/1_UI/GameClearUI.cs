using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GameClearUI : MonoBehaviour
{
    public TextMeshProUGUI clearTimeText;

    public void SetClearTime(float time)
    {
        // 시간 포맷을 "mm:ss"로 변환
        int minutes = Mathf.FloorToInt(time / 60);
        int seconds = Mathf.FloorToInt(time % 60);
        clearTimeText.text = $"{minutes:D2}:{seconds:D2}";
    }
}
