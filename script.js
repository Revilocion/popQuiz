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

var space = document.getElementById("mark");
var index = 0;
var onQuestion = document.getElementById("")
var startButton = document
  .getElementById("start")
  .addEventListener("click", function() {
    space.textContent = allQuestions[index].question;
    index++;
  });

var answer = document.getElementById("choice1","choice2","choice3").addEventListener("click",function(){
    
});