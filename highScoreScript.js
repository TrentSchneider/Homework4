var userScore = document.querySelector("#scoreList");
var listScore = localStorage.getItem("initials");
userScore.textContent = listScore;
