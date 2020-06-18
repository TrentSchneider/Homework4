var timerEl = document.getElementById("runningTimer"),
  timeLeft = 5,
  score,
  beginning = document.getElementById("intro"),
  middle = document.getElementById("stage2"),
  end = document.getElementById("end"),
  starter = document.querySelector("#start"),
  submitScore = document.querySelector("#submit"),
  qSpace = document.querySelector(".questionSpace"),
  aSpace = document.querySelector(".answerSpace"),
  questionCount = 0;
starter.addEventListener("click", function () {
  beginning.classList.add("hide");
  middle.classList.remove("hide");
  timeLeft = 5;

  function timer() {
    var timerInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;

      if (timeLeft === 0 || questionCount === quizInfo.length) {
        middle.classList.add("hide");
        end.classList.remove("hide");
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  timer();
  function loadQs() {
    var questionInsert = document.createElement("h5");
    questionInsert.textContent = quizInfo[questionCount].question;
    qSpace.appendChild(questionInsert);

    for (let i = 0; i < quizInfo[questionCount].choices.length; i++) {
      var answerInsert = document.createElement("button");
      answerInsert.textContent = quizInfo[questionCount].choices[i];
      aSpace.appendChild(answerInsert);
    }
  }
  loadQs();
});

// creates and stores initials and score followed by sending the user to highscore.html
submitScore.addEventListener("click", function () {
  event.preventDefault();
  var scoreArray = JSON.parse(localStorage.getItem("highScore"));
  if (scoreArray === null) {
    scoreArray = [];
  }
  var initialToArray = document.querySelector("#initials").value;

  scoreArray.push({ initials: initialToArray, score: timeLeft });
  console.log(scoreArray);
  var initialToStor = JSON.stringify(scoreArray);
  console.log(scoreArray);
  localStorage.setItem("highScore", initialToStor);
  window.location.href = "highscore.html";
});
