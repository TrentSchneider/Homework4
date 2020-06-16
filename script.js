var timerEl = document.getElementById("runningTimer"),
	timeLeft = 0,
	score,
	beginning = document.getElementById("intro"),
	middle = document.getElementById("quiz"),
	end = document.getElementById("end"),
	starter = document.querySelector("#start");

starter.addEventListener("click", function () {
	beginning.classList.add("hide");
	middle.classList.remove("hide");
	timeLeft = 61;
	function timer() {
		var timerInterval = setInterval(function () {
			timeLeft--;
			timerEl.textContent = timeLeft;

			if (timeLeft === 0) {
				middle.classList.add("hide");
				end.classList.remove("hide");
				clearInterval(timerInterval);
			}
		}, 1000);
	}
	timer();
});
