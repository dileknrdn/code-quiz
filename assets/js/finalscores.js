var finalScore = document.querySelector("#finalScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Retreives local stroage

function finalScore() {
  var score = localStorage.getItem("userscores");
  {
    score = JSON.parse(window.localStorage.getItem("userscores"));

    console.log(JSON.parse(window.localStorage.getItem("userscore")));
  }
}

goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});
