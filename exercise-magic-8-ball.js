/*
Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.
*/
let userName='Venkatesh';
userName? console.log(`Hello, ${userName}!`) : console.log("Hello!");
let userQuestion='is 2024 going to be good year for me';
console.log(`Username:-${userName},question : ${userQuestion}`);
let randomNumber=Math.floor(Math.random() * 8);
let eightBall='';
switch(randomNumber){
  case 1:
    eightBall='It is certain';
    break;
  case 2:
    eightBall='It is decidedly so';
    break;
  case 3:
    eightBall='Reply hazy try again';
    break;
  case 4:
    eightBall='Cannot predict now';
    break;
  case 5:
    eightBall='Do not count on it';
    break;
  case 6:
    eightBall='My sources say no';
    break;
  case 7:
    eightBall='Outlook not so good';
    break;
  case 8:
    eightBall='Signs point to yes';
    break;
}
console.log(`Magic Eight Balls answer: ${eightBall}`);