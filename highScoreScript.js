var userScore = document.querySelector("#scoreList"),
  listScore = localStorage.getItem("highScore"),
  listScoreArray = JSON.parse(listScore),
  clearBtn = document.querySelector("#clear"),
  returnBtn = document.querySelector("#return");

clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  userScore.innerHTML = "";
});
returnBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});

// sorts the JSON array by score putting higher scores at the top
function sortByProperty(property) {
  return function (a, b) {
    if (a[property] > b[property]) return -1;
    else if (a[property] < b[property]) return 1;
    return 0;
  };
}
listScoreArray.sort(sortByProperty("score"));

// adds each score to the high score page
for (let i = 0; i < listScoreArray.length; i++) {
  var insertScore = document.createElement("h5");
  insertScore.textContent =
    listScoreArray[i].initials + " " + listScoreArray[i].score;
  userScore.appendChild(insertScore);
}
