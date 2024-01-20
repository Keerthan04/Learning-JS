/*
    Kelvin Weather
    Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

    Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: 
    All of his forecasts describe the temperature in Kelvin.

    With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit and newton.
*/

//constant variable to hold kelvin value
const kelvin = 293;
//constant variable to hold celsius value
const celsius= kelvin - 273;
//calculating fahrenheit value using celsius
let fahrenheit= celsius*(9/5)+32;
//rounding off decimal value to whole number using floor
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton=celsius*(33/100);
newton=Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);