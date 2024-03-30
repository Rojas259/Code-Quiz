var start = document.querySelector("#start-page");
startDiv.setAttribute("style", "display: none;");

var title = document.createElement("h1");
title.textContent = "Code Quiz";
title.setAttribute("style", "color: white; font-size: 20px; text-align: center;");

var description = document.createElement("p");
description.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
description.setAttribute("style", "color: white; font-size: 20px; text-align: center;");
description.setAttribute("id", "start-text");

var startButton = document.createElement("button");
startButton.textContent = "Start Quiz";
startButton.setAttribute("id", "start")

startButton.setAttribute("style", "color: white; font-size: 20px; text-align: center;");
startButton.addEventListener("mouseover", function() { 
    startButton.setAttribute("style", "color: white; font-size: 20px; text-align: center; background-color: blue;");
});
startButton.addEventListener("mouseout", function() { 
    startButton.setAttribute("style", "color: white; font-size: 20px; text-align: center;");
});

startDiv.appendChild(title);
startDiv.appendChild(description);
startDiv.appendChild(startButton);

var topBarSpacing = document.createElement("timer-header");
topBarSpacing.setAttribute("style", "height: 50px;");

var highScoreBtn = document.createElement("button");
highScoreBtn.textContent = "View highscores";
highScoreBtn.setAttribute("id", "highscore");
highScoreBtn.setAttribute("style", "color: white; font-size: 20px; text-align: center;");
highScoreBtn.addEventListener("mouseover", function() { 
highScoreBtn.setAttribute("style", "color: white; font-size: 20px; text-align: center; background-color: blue;");
});
highScoreBtn.addEventListener("mouseout", function() { 
    highScoreBtn.setAttribute("style", "color: white; font-size: 20px; text-align: center;");
});
highScoreBtn.addEventListener("click", function() {
    window.location.href = "highscores.html";
});

topBarSpacing.appendChild(highScoreBtn);

var timer = document.createElement("timer");
var startBtn = document.querySelector("#start");    
var startText = document.querySelector("#start-text");
var questionContainer = document.querySelector("#quiz");

var timeLeft = 75;
var timerInterval;

function startQuiz() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function showScorePage() {
    var quizSelction = document.querySelector("#quiz");
    var scoreSelction =  document.getElementById("score");

    clearInterval(timerInterval);
    var score = timeLeft;
    localStorage.setItem("highScore", score);
    window.location.href = "highscore.html";

    var userTime = time;
    var timeDisplay = document.createElement("p");
    timeDisplay.textContent = "Your final score is " + userTime + ".";
    scoreSelction.appendChild(timeDisplay);
    timeDisplay.setAttribute("style", "color: white; font-size: 20px; text-align: center;");

    var inputContainer = document.createElement("section");
    inputContainer.setAttribute("style", "text-align: center;");

    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Enter Your Initials");

    var submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("style", "color: white; font-size: 20px; text-align: center;");

    submitButton.addEventListener("click", function() {
        var userName = nameInput.value.trim();
        if (userName !== "") {
          if (userName.length <= 3) {
            var userTime = time;
            storeScore(userName, userTime);
           window.location.href = "highscores.html";
            } else {
                alert("Initials should be 3 characters or less.");
            }
            
        } else {
            alert("Initials should be 3 characters or less.");
        }
    });

    inputContainer.appendChild(nameInput);
    inputContainer.appendChild(submitBtn);
    scoreSelction.appendChild(inputContainer);

    var timeHeader = document.querySelector(".timer-header");
    quizSelection.classList.add("hidden");
    quizSelction.setAttribute("style", "display: none;");
    scoreSelction.classList.remove("hidden");
    quizSelction.innerHTML = "";
    timeHeader.setAttribute("style", "display: none;");
    timeHeader.classList.add("hidden");
}

function storeScore(userName, userTime) {
    var highscores = JSON.parse(localStorage.getItem("highScores")) || [];
    var newScore = {
        name: userName,
        score: userTime
    };
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

startBtn.addEventListener("click", function() {
    startText.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    questionContainer.setAttribute("style", "display: block;");
    timertextContent = time;
    timeInternal = setInterval(function() {
        timeLeft--;
        timer.textContent = time;

        checkTimeAndShowScore();
        }, 1000);
        displayQuestion();
})

var storedQuestions = JSON.parse(localStorage.getItem("questions"));
var questionIndex = 0;
var questionContainer = document.getElementById("quiz");
function displayQuestion() {
    var correctIndex = storedQuestions[questionIndex].correctIndex;
    var feedback = document.createElement("p");
    if (this.textContent === storedQuestions[questionIndex].choices[correctIndex]) {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Incorrect!";
        timeLeft -= 10;
    };
    feedback.setAttribute("style", "color: white; font-size: 20px; text-align: center;");
    feedbackContainer.appendChild(feedback);
    setTimeout(function() {
        feedback.textContent = "";
    }, 1000);
    if (this.textContent !== storedQuestions[questionIndex].choices[correctIndex]) {
        timeLeft -= 10;
    }
    if (questionIndex < (storedQuestions.length - 1)) {
        questionIndex++;
        displayQuestion();
    }else {
        showScorePage();
        clearInterval(timerInterval);
        console.log("Quiz Over");
    }
   }

   var answers = storedQuestions;
   for (var i= 0; i < answers.length; i++) {
       var answer = document.createElement("button");
       answer.textContent = answers[i];
       answerButton.classList.add("question-button");
       answerButton.textContent = answers[i];
       answerButton = addEventListener("click", displayQuestion);
       answerContainer.appendChild(answerButton);
   }

    
