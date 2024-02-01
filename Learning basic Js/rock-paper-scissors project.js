/*
    Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

const getUserChoice = userInput =>{
    userInput=userInput.toLowerCase();
    if(userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb'){
      return userInput;
    }
    else{
      console.log("not proper user input");
    }
  }
  
  
  const getComputerChoice = () =>{
    let choice = Math.floor(Math.random()*3);
    switch(choice){
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  const determineWinner = (userChoice,computerChoice)=>{
    if(userChoice === computerChoice){
      return "game was a tie";
    }
    else if(userChoice==='bomb'){
      return "user won";
    }
    else{
      if(userChoice==='rock'){
        if(computerChoice==='paper'){
          return "computer won";
        }
        else{
          return "user won";
        }
      }
        if(userChoice==='paper'){
          if(computerChoice==='scissors'){
            return "computer won";
          }
          else{
            return "user won";
          }
        }
        if(userChoice==='scissors'){
          if(computerChoice==='rock'){
            return "computer won";
          }
          else{
            return "user won";
          }
      }
    }
  };
  const playGame = ()=>{
    let userChoice=getUserChoice('bomb');
    console.log(userChoice)
    let computerChoice=getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  };
  playGame();