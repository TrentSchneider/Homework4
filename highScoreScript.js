var userScore = document.querySelector("#scoreList");
var listScore = JSON.parse(localStorage.getItem("initials"));
userScore.textContent = listScore;
console.log(initial);
