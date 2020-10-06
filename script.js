// quiz questions array containing questions, answer choices, and correct answers
var quizQuestions = [
    {
        header: "Question 1",
        title: "Commonly used data types do not include: ",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        answer: "C"
    },

    {
        header: "Question 2",
        title: "The condition in and if / else statement is enclosed with _____.",
        a: "Quotes",
        b: "Curly brackets",
        c: "Parentheses",
        d: "Square brackets",
        answer: "C"
    },

    {
        header: "Question 3",
        title: "Arrays in Javascript can be used to store _____.",
        a: "Numbers and strings",
        b: "Other Arrays",
        c: "Booleans",
        d: "All of the above",
        answer: "D"
    },

    {
        header: "Question 4",
        title: "String values must be enclosed within _____ when being assigned to variables.",
        a: "Commas",
        b: "Curly brackets",
        c: "Quotes",
        d: "Parentheses",
        answer: "C"
    },

    {
        header: "Question 5",
        title: "A very useful tool during development and debugging for printing content to the debugger is: ",
        a: "Console log",
        b: "Javascript",
        c: "Terminal/bash",
        d: "For loops",
        answer: "A"
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
var winners = [];
var highScoresList = document.getElementById("scoreboard")
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

function wrongAnswer() {
    timeLeft -= 10
    nextQuestion()
}

function rightAnswer() {
    score += 2
    nextQuestion()
}



// function to post initials and high scores to score board
function addingScore() {
    var newScore = document.getElementById("initials").value
    var li = document.createElement("li");
    li.id = winners.length
    li.innerHTML = newScore
    winners.push(newScore);
    highScoresList.append(li);
}

// function to clear the high scores -- doesn't work - need to fix
function clearScores(winners) {
    winners.length = 0;
}

// button event listeners
start.addEventListener("click", displayQuestion);
reset.addEventListener("click", resetQuiz);
post.addEventListener("click", addingScore);
clear.addEventListener("click", clearScores);
next.addEventListener("click", nextQuestion);
btnA.addEventListener("click", nextQuestion);
btnB.addEventListener("click", nextQuestion);
btnC.addEventListener("click", nextQuestion);
btnD.addEventListener("click", nextQuestion);


// restart button to restart quiz
restart.addEventListener("click", function (e) {
    location.reload();
}, false);
// event object .target .value to compare with answer for question maybe using if / else statements



// iteration 2
// letting user know whether answer is correct or not
// if / else statements to compare answers and update score
// display score at end of quiz

// iteration 3
// when user clicks start button the timer starts
// if / else statement to reduce time if incorrect answer selected
// add functionality if time is zero the quiz ends and user is taken to end page

// iteration 4
// add to end screen the highscores table
// current score added to highscores
// textbox for user to enter initials to post to scoreboard

// iteration 5
// persisting data - highscore data should show when page is refreshed
// use local storage to save highscore data