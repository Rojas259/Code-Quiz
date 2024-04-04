var headder = document.querySelector("#high-score-title");
headder.setAttribute("style", "text-align:center");

var headderTitle = document.createElement("h1");
headderTitle.textContent = "High Scores";

var headderText = document.createElement("p");
headderText.textContent = "Top 5 Leader Board" ;


headder.appendChild(headderTitle);
headder.appendChild(headderText);


var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var leaderBoard = document.querySelector("#leaders");

for (var index = 0; index < Math.min(5, highScores.length); index++) {
    var scoreItem = document.createElement("p");
    scoreItem.setAttribute("class", "leaders");
    scoreItem.textContent = highScores[index].name + ": " + highScores[index].time;
    
    leaderBoard.appendChild(scoreItem);
}
var leaders =document.querySelectorAll(".leaders")
leaders.forEach(function (leader) {
    leader.setAttribute("style","padding: 4px; border-radius: 10px; background-color: #63030a; color: #fff; width: 40%; align-items: center; margin: 4px; text-align: center; display: block;");
});

var container = document.querySelector("#leaders");
container.style.display = "flex";
container.style.flexDirection = "column"; 
container.style.alignItems = "center";

var buttons = document.querySelector("#buttons")
buttons.setAttribute("style", "text-align:center");

var backButton = document.createElement("button");
backButton.textContent = "Back to Quiz";
backButton.setAttribute("style", "margin: 16px; padding: 10px; cursor: pointer; border: none; background-color: #63030a; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%);")
backButton.addEventListener("mouseover", function () {
    backButton.style.boxShadow = "0 8px 13px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
})
backButton.addEventListener("mouseout", function () {
    backButton.style.boxShadow = "";
});
backButton.addEventListener("click", function () {
    window.location.href = "index.html";
})
var clearButton = document.createElement("button");
clearButton.textContent = "Reset High Scores";
clearButton.setAttribute("style", "margin: 16px; padding: 10px; cursor: pointer; border: none; background-color: #63030a; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%);")
clearButton.addEventListener("mouseover", function () {
    clearButton.style.boxShadow = "0 8px 13px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
})
clearButton.addEventListener("mouseout", function () {
    clearButton.style.boxShadow = "";
});
clearButton.addEventListener("click", function () {
    resetLeaderboard();
})

function resetLeaderboard() {
    localStorage.removeItem("highScores");
    window.location.reload();
}
buttons.appendChild(backButton);
buttons.appendChild(clearButton);