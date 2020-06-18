var userScore = document.querySelector("#scoreList");
var listScore = localStorage.getItem("highScore");
var listScoreArray = JSON.parse(listScore);

// adds each score to the high score page
for (let i = 0; i < listScoreArray.length; i++) {
  var insertScore = document.createElement("h5");
  insertScore.textContent =
    listScoreArray[i].initials + " " + listScoreArray[i].score;
  userScore.appendChild(insertScore);
}
