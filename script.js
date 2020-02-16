var allQuestions = [
  {
    question: "What is my name?"
  },
  {
    question: "What's your favorite color?"
  },
  {
    question: ";asldkfj"
  }
];

var allAnswers1 = [
  {
    answer: "Marquis"
  },
  {
    answer: "Blue"
  }
];

var allAnswers2 = [
  {
    answer: "Mike"
  },
  {}
];

var allAnswers3 = [
  {
    answer: "John"
  }
];

var a1 = document.getElementById("button1");
var a2 = document.getElementById("button2");
var a3 = document.getElementById("button3");
var space = document.getElementById("mark");
var index = 0;
var onQuestion = document.getElementById("");

var startButton = document
  .getElementById("start")
  .addEventListener("click", function() {
    space.textContent = allQuestions[index].question;
    a1.textContent = allAnswers1[index].answer;
    a2.textContent = allAnswers2[index].answer;
    a3.textContent = allAnswers3[index].answer;
    index++;
  });

var submit1 = document
  .getElementById("button1")
  .addEventListener("click", function() {
    space.textContent = allQuestions[index].question;
    index++;
  });

var submit2 = document
  .getElementById("button2")
  .addEventListener("click", function() {
    space.textContent = allQuestions[index].question;
    index++;
  });

var submit3 = document
  .getElementById("button3")
  .addEventListener("click", function() {
    space.textContent = allQuestions[index].question;
    index++;
  });
