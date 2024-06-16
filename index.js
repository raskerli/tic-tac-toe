var countForX = 0;
var countForO = 0;
var allLines = ["", "", "", "", "", "", "", "", ""];

for (var i = 0; i < document.querySelectorAll(".box").length; i++) {
  document.querySelectorAll(".box")[i].addEventListener("click", function () {
    var testClass = this.className.split(" ")[0];
    var index;

    switch (testClass) {
      case "one":
        index = 0;
        break;
      case "two":
        index = 1;
        break;
      case "three":
        index = 2;
        break;
      case "four":
        index = 3;
        break;
      case "five":
        index = 4;
        break;
      case "six":
        index = 5;
        break;
      case "seven":
        index = 6;
        break;
      case "eight":
        index = 7;
        break;
      case "nine":
        index = 8;
        break;
      default:
        return;
    }

    if (this.innerHTML === "") {
      if (countForX <= countForO) {
        this.innerHTML = "<h3>X</h3>";
        countForX++;
        allLines[index] = "x";
      } else {
        this.innerHTML = "<h3>O</h3>";
        countForO++;
        allLines[index] = "o";
      }
      checkForWin();
    }
  });
}

function checkForWin() {
  //Check Horizontal
  if (
    (allLines[0] != "" &&
      allLines[0] == allLines[1] &&
      allLines[1] == allLines[2]) ||
    (allLines[3] != "" &&
      allLines[3] == allLines[4] &&
      allLines[4] == allLines[5]) ||
    (allLines[6] != "" &&
      allLines[6] == allLines[7] &&
      allLines[7] == allLines[8])
  ) {
    document.querySelector("h1").innerHTML = "You Win";
  }
  //Check Vertical
  else if (
    (allLines[0] != "" &&
      allLines[0] == allLines[3] &&
      allLines[3] == allLines[6]) ||
    (allLines[1] != "" &&
      allLines[1] == allLines[4] &&
      allLines[4] == allLines[7]) ||
    (allLines[2] != "" &&
      allLines[2] == allLines[5] &&
      allLines[5] == allLines[8])
  ) {
    document.querySelector("h1").innerHTML = "You Win";
  }
  //Check Diagonal
  else if (
    (allLines[0] != "" &&
      allLines[0] == allLines[4] &&
      allLines[4] == allLines[8]) ||
    (allLines[2] != "" &&
      allLines[2] == allLines[4] &&
      allLines[4] == allLines[6])
  ) {
    document.querySelector("h1").innerHTML = "You Win";
  } else document.querySelector("h1").innerHTML = "Draw";
}
