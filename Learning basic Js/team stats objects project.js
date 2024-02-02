/*
    Team Stats
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, 
tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures 
at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights 
from them. For example, you might want to get the total number of games your team has played, or the 
average score of all of their games.
*/

const team={
    _players : [
      {
        firstName: 'keerthan',
        lastName: 'kumar',
        age: 21
      },
      {
        firstName: 'stephen',
        lastName: 'curry',
        age: 21
      },
      {
        firstName: 'lebron',
        lastName: 'james',
        age: 21
      }
    ],
    _games : [
      {
        opponent: 'team1',
        teamPoints: 50,
        opponentPoints: 35
      },
      {
        opponent: 'team2',
        teamPoints: 50,
        opponentPoints: 35
      },
      {
        opponent: 'team3',
        teamPoints: 50,
        opponentPoints: 35
      }
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName,newLastName,newAge){
      player ={
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      this._players.push(player);
    },
    addGame(newOpponent,newTeamPoints,newOpponentPoints){
      game={
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this._games.push(game);
    }
  };
  
  team.addPlayer('Bugs','Bunny',76);
  team.addGame('Titans',100,98);
  console.log(team._players);
  console.log(team._games);