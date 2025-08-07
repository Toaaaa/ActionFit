using TMPro;
using UnityEngine;

public class GameClearUI : MonoBehaviour
{
	public TextMeshProUGUI clearTimeText;

	public void SetClearTime(float time)
	{
		int minutes = Mathf.FloorToInt(time / 60f);
		int seconds = Mathf.FloorToInt(time % 60f);
		clearTimeText.text = $"{minutes:D2}:{seconds:D2}";
	}
}
