const PI = Math.PI;

// Define and export circleArea() and squareArea() below
module.exports.circleArea=function circleArea(radius){
  return PI*(radius**2);
}
module.exports.squareArea=function squareArea(side){
  return side*side;
}