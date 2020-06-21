var userScore = document.querySelector("#scoreList"),
	listScore = localStorage.getItem("highScore"),
	listScoreArray = JSON.parse(listScore),
	clearBtn = document.querySelector("#clear"),
	returnBtn = document.querySelector("#return"),
	insertScore;
// button to clear high scores
clearBtn.addEventListener("click", function (event) {
	event.preventDefault();
	localStorage.clear();
	userScore.innerHTML = "";
	noScore();
});
// button to return to quiz page
returnBtn.addEventListener("click", function (event) {
	event.preventDefault();
	window.location.href = "index.html";
});
// function to insert placeholder text on high score list
function noScore() {
	insertScore = document.createElement("h6");
	insertScore.setAttribute("class", "font-italic text-muted");
	insertScore.textContent = "No current high scores!";
	userScore.appendChild(insertScore);
}
// sorts the JSON array by score putting higher scores at the top
if (listScore == null) {
	noScore();
} else if (listScoreArray != null) {
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
		insertScore = document.createElement("h5");
		insertScore.textContent =
			i +
			1 +
			". " +
			listScoreArray[i].initials +
			" - " +
			listScoreArray[i].score;
		userScore.appendChild(insertScore);
	}
}
