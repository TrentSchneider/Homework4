var timerEl = document.querySelector("runningTimer"),
	timeLeft = 60,
	score;

function timer() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		timerEl.textContent = timeLeft;
	});
}
