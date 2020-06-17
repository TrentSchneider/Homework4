var timerEl = document.getElementById("runningTimer"),
  timeLeft = 5,
  score,
  beginning = document.getElementById("intro"),
  middle = document.getElementById("stage2"),
  end = document.getElementById("end"),
  starter = document.querySelector("#start"),
  submitScore = document.querySelector("#submit"),
  qSpace = document.getElementById("questionSpace"),
  aSpace = document.getElementById("answerSpace"),
  questionCount;

starter.addEventListener("click", function () {
  beginning.classList.add("hide");
  middle.classList.remove("hide");
  timeLeft = 5;

  function timer() {
    var timerInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;

      if (timeLeft === 0 || questionCount < quizInfo.length) {
        middle.classList.add("hide");
        end.classList.remove("hide");
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  timer();
  for (
    let questionCount = 0;
    questionCount < quizInfo.length;
    questionCount++
  ) {
    console.log(quizInfo[questionCount].question);
    var questionInsert = document.createElement("button");
    questionInsert.textContent = quizInfo[questionCount].question;
    qSpace.appendChild(questionInsert);
  }
});
submitScore.addEventListener("click", function () {
  event.preventDefault();
  var initial = document.querySelector("#initials").value;
  localStorage.setItem("initials", initial);
  window.location.href = "highscore.html";
});
