function converttofaren(celsius){
     return celsius * (9/5) + 32;
}
const _converttofaren = converttofaren;
export { _converttofaren as converttofaren };
export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
  }
  //this is in es6

function converttofaren(celsius){//exporting two ways again is nodre runtime in es6 different
    return celsius * (9/5) + 32;
}
module.exports.converttofaren=converttofaren;//exporting two ways again is nodre runtime in es6 different
module.exports.fahrenheitToCelsius = function(fahrenheit) {
   return (fahrenheit - 32) * (5/9);
 };//running is in terminal node filename where we import that file and see 