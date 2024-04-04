var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correctIndex: 1,
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        choices: ["quotes", 
        "curly brackets", 
        "parentheses", 
        "square brackets"
    ],
        correctIndex: 2,
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctIndex: 3,
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        correctIndex: 2,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctIndex: 3,
    },
];

localStorage.setItem("questions", JSON.stringify(questions));