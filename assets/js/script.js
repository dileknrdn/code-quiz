const startSection = document.querySelector(".start-box");
const startBtn = document.getElementById("start-btn");
const questionSection = document.querySelector(".question-section");
const questionEL = document.getElementById("question");
const btnList = document.querySelector(".btn-list");
const formSection = document.querySelector(".form-section");
const inputEl = document.getElementById("initials-input");
const submitBtn = document.getElementById("submit-btn");
const timerElement = document.querySelector(".timer-count");
const scoreSection = document.querySelector(".scoreSection");


let questionindex = 0;
let score = 0;
let timer;
let timerCount = 60;

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount <= 0) {
      // End game
      endQuiz();
    }
  }, 1000);
}

function showQuestions() {
  if (questionindex === questions.length) {
    endQuiz();
  }
    questionEL.textContent = questions[questionindex].question;
    btnList.innerHTML = "";
    for (let i = 0; i < questions[questionindex].answers.length; i++) {
      const btn = document.createElement("button");
      btn.setAttribute("class", "btn");
      btn.textContent = questions[questionindex].answers[i];

      btnList.append(btn);
    }
}

function checkAnswer(answer) {
  if (answer === questions[questionindex].correct) {
    questionindex++;
    score++;
    showQuestions();
  } else {
    questionindex++;
    showQuestions();
  }
}

function endQuiz() {
  clearInterval(timer);
  questionSection.classList.add("hide");
  formSection.classList.remove("hide");

  console.log(score);
}

submitBtn.addEventListener("click", () => {
  
  formSection.classList.add("hide");
  var intialInput = inputEl.value.trim();
  if (intialInput) {
    var allScores = JSON.parse(window.localStorage.getItem("userscores")) || [];

    var currentScore = {
      score: score,
      initial: intialInput,
    };

    allScores.push(currentScore);
    window.localStorage.setItem("userscores", JSON.stringify(allScores));

    // Show high scores section
    window.location.href = "scores.html";
  }
});

startBtn.addEventListener("click", () => {
  startSection.classList.add("hide");
  questionSection.classList.remove("hide");
  showQuestions();
  startTimer();
});

btnList.addEventListener("click", (event) => {
  const userChoice = this.event.target.textContent;
  checkAnswer(userChoice);
});
