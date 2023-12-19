const startSection = document.querySelector(".start-box");
const startBtn = document.getElementById("start-btn");
const questionSection = document.querySelector(".question-section");
const questionEL = document.getElementById("question");
const btnList = document.querySelector(".btn-list");
const formSection = document.querySelector(".form-section");
const inputEl = document.getElementById("initials-input");
const submitBtn = document.getElementById("submit-btn");
const timerElement = document.querySelector(".timer-count");

let questionindex = 0;
let score = 0;
let timer;
let timerCount;

function startTimer() {
  timerCount = 60;
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
    }
  }, 1000);
  startTimer();
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
    //take time out of timer
  }
}

function endQuiz() {
  questionSection.classList.add("hide");
  formSection.classList.remove("hide");
}

startBtn.addEventListener("click", () => {
  startSection.classList.add("hide");
  questionSection.classList.remove("hide");
  showQuestions();
});

btnList.addEventListener("click", () => {
  const userChoice = this.event.target.textContent;
  checkAnswer(userChoice);
});
