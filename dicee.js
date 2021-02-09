
// Setting random dice image at img1
var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
// console.log(randomNumber1)
var randomDiceimage1 = "dice"+ randomNumber1 + ".png";
var randomImageSource1 ="images/" + randomDiceimage1;
var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src" ,  randomImageSource1);

// Setting random dice image at img2
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
var randomDiceimage2 = "dice"+ randomNumber2 + ".png";
var randomImageSource2 ="images/" + randomDiceimage2;
var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src" , randomImageSource2);

// selecting the text on h1
let refresh = document.querySelector('h1');


// case 1 when player wins
if (randomNumber1 > randomNumber2) {
  refresh.textContent = "🚩Player 1 Wins!";
  //case 2 when player2 wins
} else if (randomNumber2 > randomNumber1) {
  refresh.textContent = " Player 2 Wins!🚩";

  // when there is Draw
}else {
  refresh.textContent = "Draw!";
}
