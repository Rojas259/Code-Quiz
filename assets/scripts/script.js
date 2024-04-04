var startDiv = document.querySelector("#start-page");
startDiv.setAttribute("style", "text-align: center");

var title = document.createElement("h1");
title.textContent = "JavaScript Basics Quiz";
title.setAttribute("style", "text-align: center; font-size: 3em; font-weight: bold");

var description = document.createElement("p");
description.setAttribute("id", "start-text");
description.textContent = "Welcome to my vanilla JavaScript Quiz! You have 75 seconds to complete the quiz. If you answer a question incorrectly, 10 seconds will be subtracted from your remaining time. Enter your initials and store your time on the High Score Page";
description.setAttribute("style", "text-align: center; font-size: 16px; font-weight: 400; margin: 10px;");

var startButton = document.createElement("button");
startButton.setAttribute("id", "start")
startButton.textContent = "Start Quiz!";

startButton.setAttribute("style", "border: none; background-color: #5F43F7; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); display: inline-block; font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 14px 34px; text-align: center; cursor: pointer;")
startButton.addEventListener("mouseover", function () {
    startButton.style.boxShadow = "0 8px 13px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
})
startButton.addEventListener("mouseout", function () {
    startButton.style.boxShadow = "";
});


startDiv.appendChild(title);
startDiv.appendChild(description);
startDiv.appendChild(startButton);

// Code for the Timer and highscore button
var topBarSpacing = document.querySelector(".time-header");
topBarSpacing.setAttribute("style", "display: flex; justify-content: space-between");

var highScoreBtn = document.createElement("button");
highScoreBtn.setAttribute("id", "high-score-page");
highScoreBtn.setAttribute("style", "margin: 16px; cursor: pointer; border: none; background-color: #5F43F7; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%);")
highScoreBtn.textContent = "High Scores";
highScoreBtn.addEventListener("mouseover", function () {
    highScoreBtn.style.boxShadow = "0 8px 13px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
})
highScoreBtn.addEventListener("mouseout", function () {
    highScoreBtn.style.boxShadow = "";
});
highScoreBtn.addEventListener("click", function () {
    window.location.href = "highscore.html";
});

topBarSpacing.appendChild(highScoreBtn);



// Timer and Button Logic
var timer = document.querySelector('#timer');
var startBtn = document.querySelector('#start');
var startText = document.querySelector('#start-page');
var questionContainer = document.querySelector('#quiz');


let time = 75;

var timerInterval;

function checkTimeAndShowScore() {
    if (time <= 0) {
        clearInterval(timerInterval);
        showScorePage();
    }
}
;
// This is the function that runs after the quiz
// This will start the score section.
function showScorePage() {
    // debugger
    var quizSection = document.getElementById("quiz");
    var scoreSection = document.getElementById("score");

    clearInterval(timerInterval);
    var scoreHeading = document.createElement("h2");
    scoreHeading.textContent = "All Done!";
    scoreHeading.setAttribute("style", "text-align: center");
    scoreSection.appendChild(scoreHeading);

    var userTime = time;
    var timeDisplay = document.createElement("p");
    timeDisplay.textContent = "Your Time: " + userTime + " seconds";
    timeDisplay.setAttribute("style", "text-align: center");
    scoreSection.appendChild(timeDisplay);

    var inputContainer = document.createElement("section")
    inputContainer.setAttribute("style", "display: flex; justify-content: center; margin-top: 20px;")

    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Enter Your Initials");


    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("style", "margin: 5px; padding: 4px; cursor: pointer; border: none; background-color: #5F43F7; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%);")

    submitButton.addEventListener("click", function () {
        var userName = nameInput.value.trim();
        if (userName !== "") {
            if (userName.length <= 3) {
                var userTime = time;
                storeScore(userName, userTime);
                window.location.href = "highscore.html";
            } else {
                alert("Initials should be 3 characters or less.")
            }

        } else {
            alert("Please enter your initials.")
        }
    });

    inputContainer.appendChild(nameInput);
    inputContainer.appendChild(submitButton);

    scoreSection.appendChild(inputContainer);

    var timeHeader = document.querySelector(".time-header")
    // Hides quiz section and shows Score page
    quizSection.classList.add("hidden");
    quizSection.setAttribute("style", "display: none");
    scoreSection.classList.remove("hidden");
    quizSection.innerHTML = "";
    timeHeader.classList.add("hidden");
    timeHeader.setAttribute("style", "display: none");

}

// This is the Function that will store the score and name in local storage
function storeScore(userName, userTime) {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    var newScore = {
        name: userName,
        time: userTime
    };
    highScores.push(newScore);
    highScores.sort(function (b, a) {
        return a.time - b.time;
    });

    localStorage.setItem("highScores", JSON.stringify(highScores));
}

// This is the function that will start the quiz when the user hits the startBtn
startBtn.addEventListener("click", function () {
    startText.classList.add("hidden")

    questionContainer.classList.remove("hidden")
    questionContainer.setAttribute("style", "text-align: center; margin: auto; display: flex; flex-direction: column; align-items: center;");

    timer.textContent = time;
    timerInterval = setInterval(function () {
        time--;
        timer.textContent = time;

        checkTimeAndShowScore();
        // if (time <= 0) {
        //     clearInterval(timerInterval);
        // }
    }, 1000)

    displayQuestion();
})


// This is the code for our quiz logic. 
var storedQuestions = JSON.parse(localStorage.getItem("questions"));
var questionIndex = 0;

var questionContainer = document.getElementById("quiz");

function displayQuestion() {

    questionContainer.innerHTML = "";

    // Creates the question
    var desiredQuestion = storedQuestions[questionIndex].question;
    var prompt = document.createElement("h3")
    prompt.textContent = desiredQuestion;
    prompt.setAttribute("style", "text-align: center");
    prompt.setAttribute("id", "quiz");
    questionContainer.appendChild(prompt);


    var feedbackContainer = document.getElementById("feedback-container");

    function handleButtonClick() {
        var correctIndex = storedQuestions[questionIndex].correctIndex;
        // debugger
        var feedback = document.createElement("p");
        if (this.textContent === storedQuestions[questionIndex].choices[correctIndex]) {
            feedback.textContent = "Correct!";
        } else {
            feedback.textContent = "Incorrect!";
        };
        feedback.setAttribute("style", "margin-top: 10px; color: gray; font-style: italic; text-align: center;");
        feedbackContainer.appendChild(feedback);

        setTimeout(function () {
            feedback.remove();
        }, 2000);

        if (this.textContent !== storedQuestions[questionIndex].choices[correctIndex]) {
            time -= 10;
        }

        if (questionIndex < storedQuestions.length - 1) {
            questionIndex++;
            displayQuestion();
        } else {
            clearInterval(timerInterval);
            showScorePage();
            console.log("Quiz completed!");
        }
    }
    
    // Creates the multiple choice answer buttons

    var answers = storedQuestions[questionIndex].choices;
    for (var i = 0; i < answers.length; i++) {

        var answerButton = document.createElement("button");
        answerButton.classList.add("question-button");
        answerButton.textContent = answers[i];

        answerButton.addEventListener("click", handleButtonClick);


        questionContainer.appendChild(answerButton);
    }

}