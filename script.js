let squares = document.querySelectorAll(".square");
let turn = document.querySelector("#turn");
let isOnn = true;

const con1 = [squares[0], squares[1], squares[2]];
const con2 = [squares[3], squares[4], squares[5]];
const con3 = [squares[6], squares[7], squares[8]];
const con4 = [squares[0], squares[3], squares[6]];
const con5 = [squares[1], squares[4], squares[7]];
const con6 = [squares[2], squares[5], squares[8]];
const con7 = [squares[0], squares[4], squares[8]];
const con8 = [squares[2], squares[4], squares[6]];

function cellClick() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
      if (turn.textContent == "X's turn") {
        squares[i].innerHTML = "X";
        squares[i].classList.add("clicked");
        turn.textContent = "O's turn";
      } else {
        squares[i].innerHTML = "O";
        squares[i].classList.add("clicked");
        turn.textContent = "X's turn";
      }
    });
  }
}
cellClick();

// squares.forEach((cell) =>
//   cell.addEventListener("click", () => {
//     if (turn.textContent == "X's turn") {
//       squares[cell].innerHTML = "X";
//       turn.textContent = "O's turn";
//     } else {
//       squares[cell].innerHTML = "O";
//       turn.textContent = "X's turn";
//     }
//   })
// );

function checkMatch() {
  if (
    squares[0].textContent === "X" &&
    squares[1].textContent === "X" &&
    squares[2].textContent === "X"
  ) {
    alert("X wins");
    turn.textContent = "X wins";
  } else if (
    squares[0].textContent === "X" &&
    squares[3].textContent === "X" &&
    squares[6].textContent === "X"
  ) {
    alert("X wins");
    turn.textContent = "X wins";
  } else if (
    squares[1].textContent === "X" &&
    squares[4].textContent === "X" &&
    squares[7].textContent === "X"
  ) {
    alert("X wins");
    turn.textContent = "X wins";
  } else if (
    squares[2].textContent === "X" &&
    squares[5].textContent === "X" &&
    squares[8].textContent === "X"
  ) {
    alert("X wins");
    turn.textContent = "X wins";
  } else if (
    squares[0].textContent === "X" &&
    squares[4].textContent === "X" &&
    squares[8].textContent === "X"
  ) {
    alert("X wins");
    turn.textContent = "X wins";
  } else if (
    squares[2].textContent === "X" &&
    squares[4].textContent === "X" &&
    squares[6].textContent === "X"
  ) {
    alert("X wins");
    turn.textContent = "X wins";
  } else if (
    squares[3].textContent === "X" &&
    squares[4].textContent === "X" &&
    squares[5].textContent === "X"
  ) {
    alert("X wins");
    turn.textContent = "X wins";
  } else if (
    squares[6].textContent === "X" &&
    squares[7].textContent === "X" &&
    squares[8].textContent === "X"
  ) {
    alert("X wins");
    turn.textContent = "X wins";
  } else if (
    squares[0].textContent === "O" &&
    squares[1].textContent === "O" &&
    squares[2].textContent === "O"
  ) {
    alert("O wins");
    turn.textContent = "O wins";
  } else if (
    squares[0].textContent === "O" &&
    squares[3].textContent === "O" &&
    squares[6].textContent === "O"
  ) {
    alert("O wins");
    turn.textContent = "O wins";
  } else if (
    squares[1].textContent === "O" &&
    squares[4].textContent === "O" &&
    squares[7].textContent === "O"
  ) {
    alert("O wins");
    turn.textContent = "O wins";
  } else if (
    squares[2].textContent === "O" &&
    squares[5].textContent === "O" &&
    squares[8].textContent === "O"
  ) {
    alert("O wins");
    turn.textContent = "O wins";
  } else if (
    squares[0].textContent === "O" &&
    squares[4].textContent === "O" &&
    squares[8].textContent === "O"
  ) {
    alert("O wins");
    turn.textContent = "O wins";
  } else if (
    squares[2].textContent === "O" &&
    squares[4].textContent === "O" &&
    squares[6].textContent === "O"
  ) {
    alert("O wins");
    turn.textContent = "O wins";
  } else if (
    squares[3].textContent === "O" &&
    squares[4].textContent === "O" &&
    squares[5].textContent === "O"
  ) {
    alert("O wins");
    turn.textContent = "O wins";
  } else if (
    squares[6].textContent === "O" &&
    squares[7].textContent === "O" &&
    squares[8].textContent === "O"
  ) {
    alert("O wins");
    turn.textContent = "O wins";
  } else {
    alert("draw");
  }
}

setTimeout("checkMatch()", 10000);
