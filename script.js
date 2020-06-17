var timerEl = document.getElementById("runningTimer"),
  timeLeft = 5,
  score,
  beginning = document.getElementById("intro"),
  middle = document.getElementById("quiz"),
  end = document.getElementById("end"),
  starter = document.querySelector("#start"),
  submitScore = document.querySelector("#submit");

starter.addEventListener("click", function () {
  beginning.classList.add("hide");
  middle.classList.remove("hide");
  timeLeft = 5;
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
submitScore.addEventListener("click", function () {
  event.preventDefault();
  var initial = document.querySelector("#initials").value;
  localStorage.setItem("initials", initial);
  console.log(initial);
  window.location.href = "highscore.html";
});
