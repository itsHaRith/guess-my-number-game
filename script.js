const title = document.querySelector("h1");
const guess_input = document.querySelector(".guess");
const check_btn = document.querySelector(".check");
const score_label = document.querySelector(".score");
const body = document.querySelector("body");
const again_btn = document.querySelector(".again");
//
let score = 50;
score_label.textContent = score;
let computer_number = Math.floor((Math.random() * 20) + 1);
console.log(" Target Number:", computer_number);

again_btn.addEventListener("click", resetGame);
check_btn.addEventListener("click", playGame);

guess_input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    playGame();
  }
});
let high_score = localStorage.getItem("high_score") || 0;
document.querySelector(".high-score").textContent = high_score;




const number_box = document.querySelector(".number");

number_box.addEventListener("dblclick", function () {
  number_box.textContent = computer_number;
});

function endGame() {
    check_btn.disabled = true;
    guess_input.disabled = true;
    localStorage.setItem("last_score", score);
  }
function playGame() {
  let user_guess = Number(guess_input.value);

  if (!user_guess) {
    alert(" Please enter a number!");
    return;
  }

  if (user_guess === computer_number) {
    title.textContent = "Correct! Great job!";
    body.style.backgroundColor = "black";
    score += 5;
  } 
  else {
    title.textContent = " Oops! Try again.";
    body.style.backgroundColor = "#222";
    score -= 5;
  }

  score_label.textContent = score;

  if (score >= 100) {
    title.textContent = " Congratulations! You won the game!";
    body.style.backgroundColor = "#60b347";

    if(score > high_score){
      localStorage.setItem("high_score", score);
      document.querySelector(".high-score").textContent = score;
  }
    endGame();
    return;
  }

  if (score <= 0) {
    title.textContent = " Game Over! Better luck next time 💀.";
    body.style.backgroundColor = "#a52a2a";
    endGame();
    return;
  }

  computer_number = Math.floor((Math.random() * 20) + 1);
  console.log(" New Target:", computer_number);
  guess_input.value = "";
}
function resetGame() {
    score = 50;
    score_label.textContent = score;
    computer_number = Math.floor((Math.random() * 20) + 1);
    console.log(" Game Reset. Target Number:", computer_number);
    title.textContent = "Game Reset. New Number:";
    body.style.backgroundColor = "#222";
    guess_input.value = "";
    check_btn.disabled = false;
    guess_input.disabled = false;
  }
  