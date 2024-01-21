import { converttofaren, fahrenheitToCelsius } from './moduleexport.js';//this is of es6

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converttofaren(freezingPointC);//from that obj calling the function like this
const boilingPointF = fahrenheitToCelsius(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

import converters from './moduleexport.js';//so this is how we import but this is of node runtime 
//the editor shows of browser runtime where the module.exports and require not used instead import and export
//are used so 
//we require filepath passed all obj returned and stored in converters

////running is in terminal node filename where we import that file and see node moduleimport.js
const { celsiusToFahrenheit } = require('./converters.js');
//we need only one function not all so object destructuring we use
const celsiusInput = process.argv[2]; //used for user input like argv takes the 2nd para of input(node,filename,userinput for celsius)
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);//then direct use

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);