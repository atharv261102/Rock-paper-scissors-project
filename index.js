let count = {
  wincount: 0,
  losecount: 0,
  tiecount: 0,
};
// dispMoves();
function dispMoves(compOutput, userOutput) {
  document.querySelector(".displayMoves").innerHTML = `You
   <button class="btn"> <img src="${userOutput}.png"/></button> <button class="btn"><img src="${compOutput}.png"/></button>Computer
  `;
}
displayScore();
function displayScore() {
  document.querySelector(
    ".display"
  ).innerHTML = `Wins: ${count.wincount}; Losses: ${count.losecount}; Ties: ${count.tiecount}`;
}
function computerOutput() {
  let randomNo = Math.random();
  if (randomNo >= 0 && randomNo < 1 / 3) {
    return "rock";
  } else if (randomNo >= 1 / 3 && randomNo < 2 / 3) {
    return "paper";
  } else if (randomNo >= 2 / 3 && randomNo < 1) {
    return "scissors";
  }
}
function generateOutput(computerOp, userIp) {
  if (userIp === "rock") {
    if (computerOp === "rock") {
      document.querySelector(".displayResult").innerHTML = `It's a Tie!`;
      console.log(computerOp);
      count.tiecount += 1;
      dispMoves(computerOp, "rock");
      displayScore();
    } else if (computerOp === "paper") {
      document.querySelector(".displayResult").innerHTML = `You Lose!`;
      console.log(computerOp);
      count.losecount += 1;
      dispMoves(computerOp, "rock");
      displayScore();
    } else {
      document.querySelector(".displayResult").innerHTML = `You Win`;
      console.log(computerOp);
      count.wincount += 1;
      dispMoves(computerOp, "rock");
      displayScore();
    }
  }
  if (userIp === "paper") {
    if (computerOp === "rock") {
      document.querySelector(".displayResult").innerHTML = `You Win`;
      console.log(computerOp);
      count.wincount += 1;
      dispMoves(computerOp, "paper");
      displayScore();
    } else if (computerOp === "paper") {
      document.querySelector(".displayResult").innerHTML = `It's a Tie!`;
      console.log(computerOp);
      count.tiecount += 1;
      dispMoves(computerOp, "paper");
      displayScore();
    } else {
      document.querySelector(".displayResult").innerHTML = `You Lose!`;
      console.log(computerOp);
      count.losecount += 1;
      dispMoves(computerOp, "paper");
      displayScore();
    }
  }
  if (userIp === "scissors") {
    if (computerOp === "rock") {
      document.querySelector(".displayResult").innerHTML = `You Lose!`;
      console.log(computerOp);
      count.losecount += 1;
      dispMoves(computerOp, "scissors");
      displayScore();
    } else if (computerOp === "paper") {
      document.querySelector(".displayResult").innerHTML = `You Win`;
      console.log(computerOp);
      dispMoves(computerOp, "scissors");
      displayScore();
    } else {
      document.querySelector(".displayResult").innerHTML = `It's a Tie!`;
      console.log(computerOp);
      count.tiecount += 1;
      dispMoves(computerOp, "scissors");
      displayScore();
    }
  }
}
function resetScores() {
  count.wincount = 0;
  count.losecount = 0;
  count.tiecount = 0;
  document.querySelector(".displayResult").innerHTML = null;
  document.querySelector(".displayMoves").innerHTML = null;
  displayScore();
}
