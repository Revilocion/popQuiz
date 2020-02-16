var allQuestions = [
  {
    question:
      "The _____ element represents a container for introductory content"
  },
  {
    question:
      "Which attribute would link another document into your HTML document?"
  },
  {
    question: "The sky is ____... Usually."
  },
  {
    question: "U.S.A. commonly stands for _____________ ."
  },
  {
    question: "What is the state you live in?"
  },
  {
    question: "Finish the name of the song: Smells like ______."
  }
];

var allAnswers1 = [
  {
    answer: "<h1>"
  },
  {
    answer: "href"
  },
  {
    answer: "Blue"
  },
  {
    answer: "United States of Aggression"
  },
  {
    answer: "Oregon"
  },
  {
    answer: "Body oder"
  }
];

var allAnswers2 = [
  {
    answer: "<p>"
  },
  {
    answer: "src"
  },
  {
    answer: "Cloudy"
  },
  {
    answer: "United States Of Asia"
  },
  {
    answer: "Idaho"
  },
  {
    answer: "Dirty socks"
  }
];

var allAnswers3 = [
  {
    answer: "<div>"
  },
  {
    answer: "alt"
  },
  {
    answer: "Red"
  },
  {
    answer: "United States of America"
  },
  {
    answer: "Washington"
  },
  {
    answer: "Teen Spirit"
  }
];

var a1 = document.getElementById("button1");
var a2 = document.getElementById("button2");
var a3 = document.getElementById("button3");
var space = document.getElementById("mark");
var index = 0;
var score = 0;
var onQuestion = document.getElementById("");
var secondsLeft = 15;

var startButton = document
  .getElementById("start")
  .addEventListener("click", function() {
    space.textContent = allQuestions[index].question;
    a1.textContent = allAnswers1[index].answer;
    a2.textContent = allAnswers2[index].answer;
    a3.textContent = allAnswers3[index].answer;
    index++;

    setTime();
    if (index > 5) {
      document.querySelectorAll("#header", "#container").empty();
    }
  });

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    document.getElementById("timer").textContent =
      secondsLeft + " seconds left! Go fast!";

    if (secondsLeft === -1) {
      clearInterval("timer");
      alert("OUT OF TIME");
    }
  }, 1000);
}

function sendMessage() {
  document.getElementsByClassName("container").textContent =
    "QUIZ OVER, PUT YOUR PENCILS DOWN";

  var replace = document.createElement("text");

  replace.setAttribute("replace");
  document.body.appendChild("replace");
}

var submit1 = document
  .getElementById("button1")
  .addEventListener("click", function() {
    space.textContent = allQuestions[index].question;
    a1.textContent = allAnswers1[index].answer;
    a2.textContent = allAnswers2[index].answer;
    a3.textContent = allAnswers3[index].answer;
    index++;
  });

var submit2 = document
  .getElementById("button2")
  .addEventListener("click", function() {
    space.textContent = allQuestions[index].question;
    a1.textContent = allAnswers1[index].answer;
    a2.textContent = allAnswers2[index].answer;
    a3.textContent = allAnswers3[index].answer;
    index++;
  });

var submit3 = document
  .getElementById("button3")
  .addEventListener("click", function() {
    space.textContent = allQuestions[index].question;
    a1.textContent = allAnswers1[index].answer;
    a2.textContent = allAnswers2[index].answer;
    a3.textContent = allAnswers3[index].answer;
    index++;
    if (submit3 === true) {
      document.getElementById("header").style.color = "red";
    }
  });

function end() {
  if (index === 0) {
    document.getElementById("queshion").textContent = "Quiz over";
  }
}
