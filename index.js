var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice"+randomNumber1+".png";
document.querySelector("img.img1").src=randomImage1;


var randomNumber2= (Math.floor(Math.random()*6)+1);
var randomImage2="images/dice"+randomNumber2+".png";
document.querySelector("img.img2").src=randomImage2;

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 WON!";
} else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 WON!";
} else{
  document.querySelector("h1").innerHTML="It's a DRAW";
}
