# Code-Quiz

Application Overview

The application is built using Bootstrap for responsive design and with JavaScript for dynamic pages. It tests the user's knowledge on JavaScript concepts. The user has 45 seconds to answer the questions. At the end, the user can enter their initials and score and add them to the highscores scoreboard.

Start Page

The first page of the quiz provides the user with the rules and the quiz and timer starts when the user clicks the start button.

![Start Page](assets/screen-shots/1-Start-Page.png?raw=true)

Question Pages

The user reads through the questions and then selects the correct answer. 

![Question Page](assets/screen-shots/2-Question-Page.png?raw=true)

If they select the correct answer, they will receive an alert saying the answer is correct and points will be added to their score. If they select the wrong answer, they will receive an alert saying the answer is incorrect and 10 seconds will be deducted from their time. If the timer runs out before they are done with the quiz, the quiz is over. The reset button above each question will take the user back to Question 1 and reset the timer.

Score Page

At the end of the quiz, the user will be able to input their initials and score in the textbox and add them to the highscores scoreboard. The scores are stored in local storage. The restart button will take the user back to the Start Page to restart the quiz.
