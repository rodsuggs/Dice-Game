var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceSource1 = "/images/dice" + randomNumber1 + ".png"; //creates a random dice 1 image source to set attribute

document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceSource2 = "/images/dice" + randomNumber2 + ".png"; //creates a random dice 2 image source to set attribute

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Play 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
