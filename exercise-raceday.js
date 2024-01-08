/*
Race Day
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been 
hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this:registration-timeline

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
*/

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly=true;//try for vaious and check
let runnerAge=18;////try for vaious and check
if(runnerAge>18 && registeredEarly){
  raceNumber+=1000;
}
if(runnerAge>18 && registeredEarly){
  console.log(`Your Racenumber:- ${raceNumber} and your Race Starts at 9:30am`);
}
else if(runnerAge>18 && !registeredEarly){
  console.log(`Your Racenumber:- ${raceNumber} and your Race Starts at 11:00am`);
}
else if(runnerAge< 18){
  console.log(`Your Racenumber:- ${raceNumber} and your Race Starts at 12:30pm`);
}
else{
  console.log("Since you are exactly 18 we request you to visit the registration desk,Thank you!!");
}
