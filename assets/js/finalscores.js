var finalScoreEl = document.querySelector("#finalScore");
var clearEl = document.querySelector("#clear");
var goBackEl = document.querySelector("#goBack");

clearEl.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

function finalScore() {
  var score = JSON.parse(window.localStorage.getItem("userscores"));
  console.log(score);
  for (let index = 0; index < score.length; index++) {
    const element = score[index];
    const liEl = document.createElement("li");
    liEl.textContent = element.initial + "----" + element.score;
    finalScoreEl.appendChild(liEl);
  }
}

finalScore();

goBackEl.addEventListener("click", function () {
  window.location.replace("./index.html");
});
