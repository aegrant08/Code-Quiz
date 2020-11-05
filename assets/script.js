// quiz questions array containing questions, answer choices, and correct answers
var quizQuestions = [
    {
        header: "Question 1",
        title: "Commonly used data types do not include: ",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        answer: "c"
    },

    {
        header: "Question 2",
        title: "The condition in and if / else statement is enclosed with _____.",
        a: "Quotes",
        b: "Curly brackets",
        c: "Parentheses",
        d: "Square brackets",
        answer: "c"
    },

    {
        header: "Question 3",
        title: "Arrays in Javascript can be used to store _____.",
        a: "Numbers and strings",
        b: "Other Arrays",
        c: "Booleans",
        d: "All of the above",
        answer: "d"
    },

    {
        header: "Question 4",
        title: "String values must be enclosed within _____ when being assigned to variables.",
        a: "Commas",
        b: "Curly brackets",
        c: "Quotes",
        d: "Parentheses",
        answer: "c"
    },

    {
        header: "Question 5",
        title: "A very useful tool during development and debugging for printing content to the debugger is: ",
        a: "Console log",
        b: "Javascript",
        c: "Terminal/bash",
        d: "For loops",
        answer: "a"
    },
];

// global variables
var header = document.getElementById("header")
var question = document.getElementById("question");
var btnA = document.getElementById("a")
var btnB = document.getElementById("b")
var btnC = document.getElementById("c")
var btnD = document.getElementById("d")
var start = document.getElementById("start")
var reset = document.getElementById("reset")
var next = document.getElementById("next")
var post = document.getElementById("post")
var clear = document.getElementById("clear")
var startPage = document.getElementById("start-page")
var buttons = document.getElementById("buttons")
var end = document.getElementById("end")
var restart = document.getElementById("restart")
var currentQuestion = 0;
var scoreboard = document.getElementById("scoreboard")
var timeLeft = 45;
var score = 0;


// function to start quiz
function displayQuestion() {
    if (currentQuestion === 0) {
        startPage.classList.add("d-none")
        buttons.classList.remove("d-none")
    }

    header.innerHTML = quizQuestions[currentQuestion].header
    question.innerHTML = quizQuestions[currentQuestion].title
    btnA.innerHTML = quizQuestions[currentQuestion].a
    btnB.innerHTML = quizQuestions[currentQuestion].b
    btnC.innerHTML = quizQuestions[currentQuestion].c
    btnD.innerHTML = quizQuestions[currentQuestion].d

    // quiz timer to start when start button clicked, reset with 
    var countdownTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown").innerHTML = "Finished";
        } else {
            document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
        }
        timeLeft -= 1;
    }, 1000);
}

// function to go to next question
function nextQuestion() {
    if (currentQuestion === quizQuestions.length - 1) {
        buttons.classList.add("d-none");
        end.classList.remove("d-none");
        return
    }
    currentQuestion += 1
    displayQuestion()
}

// function to reset quiz button
function resetQuiz() {
    currentQuestion = 0
    displayQuestion();
    end.classList.add("d-none")
}

function userAnswer() {
    if (quizQuestions[currentQuestion].value != quizQuestions[currentQuestion].answer) {
        alert("Wrong answer! 10 seconds deducted from timer!")
        timeLeft -= 10
        nextQuestion()
    } else {
        alert("Correct answer! 2 points added to score!")
        score += 2
        nextQuestion()
    }
}

// function rightAnswer() {
//     alert("Correct answer! 2 points added to score!")
//     score += 2
//     nextQuestion()
// }

// var with empty array for scoreboard
var winners = []
console.log(typeof winners);
// saving scores to local storage
localStorage.setItem("winners", JSON.stringify("winners"));
// retrieving scores from local storage
var highscores = JSON.parse(window.localStorage.getItem("winners")) || [];

// function to post initials and high scores to score board
function addingScore() {
    var newScore = document.getElementById("initials").value
    var li = document.createElement("li");
    li.id = winners.length
    li.innerHTML = newScore
    winners.push(newScore);
    scoreboard.append(li);
}

// function to clear the high scores -- doesn't work - need to fix
function clearScores() {
    localStorage.clear()
}

// button event listeners
start.addEventListener("click", displayQuestion);
reset.addEventListener("click", resetQuiz);
post.addEventListener("click", addingScore);
clear.addEventListener("click", clearScores);
btnA.addEventListener("click", userAnswer, nextQuestion);
btnB.addEventListener("click", userAnswer, nextQuestion);
btnC.addEventListener("click", userAnswer, nextQuestion);
btnD.addEventListener("click", userAnswer, nextQuestion);


// restart button to restart quiz
restart.addEventListener("click", function (e) {
    location.reload();
}, false);
// event object .target .value to compare with answer for question maybe using if / else statements
