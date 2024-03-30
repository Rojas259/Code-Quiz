var header = document.querySelector("#high-score-header");
header.setAttribute("style", "color: white; font-size: 50px; text-align: center;");

var hightitle = document.createElement("h1");
hightitle.textContent = "High Scores";

var highScoreList = document.createElement("p");
headerText.textContent = "Top 5 High Scores";

header.appendChild(hightitle);
header.appendChild(highScoreList);

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var leaderBoard = document.querySelector("#leaders");

for (var i = 0; index < Math.min (5, highScores.length); index++) {
  var scoreItem = highScores[i] + " - " + highScores[i].time;

scoreItem.setAttribute("class", "leaders")
scoreItem.textContent = highScores[index].name + " - " + highScores[index].time;
leaderBoard.appendChild(scoreItem);
}
var leaders = document.querySelectorAll(".leaders")
leaders.forEach(function (leader) {
    leader.setAttribute("style", "color: white; font-size: 20px; text-align: center;");
});

var container = document.querySelector("#leaders");
container.computedStyleMap.dsiplay = "flex";
container.computedStyleMap.flexDirection = "column";
container.computedStyleMap.alignItems = "center";

var Buttons = document.createElement("button");
buttons.setAttribute("style", "color: white; font-size: 20px; text-align: center;");

var clearButton = document.createElement("button");
clearButton.textContent = "Back to Quiz";
clearButton.setAttribute("style", "color: white; font-size: 20px; text-align: center;");
clearButton.addEventListener("mouseover", function () {
    clearButton.setAttribute("style", "color: red; font-size: 20px; text-align: center;");
});
clearButton.addEventListener("mouseout", function () {
    clearButton.setAttribute("style", "color: white; font-size: 20px; text-align: center;");
});
clearButton.addEventListener("click", function () {
    window.location.href = "index.html";
});

header.appendChild(clearButton);

var clearButton = document.createElement("button");
clearButton.textContent = "Clear Highscores";
clearButton.setAttribute("");
clearButton.addEventListener("mouseover", function () {
    clearButton.setAttribute("style", "");
});
clearButton.addEventListener("mouseout", function () {
    clearButton.setAttribute("style", "");
});
clearButton.addEventListener("click", function () {
    localStorage.clear();
    leaderBoard.innerHTML = "";
});

header.appendChild(clearButton);


