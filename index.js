// Set the initial text of the h1 element
document.querySelector("h1").innerHTML = "Refresh me";

// Generate a random number for dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

// Generate the corresponding image source for dice 1
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - dice6.png

// Set the image source for the first dice
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Generate a random number for dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Generate the corresponding image source for dice 2
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Set the image source for the second dice
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Determine the winner and update the h1 element
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
