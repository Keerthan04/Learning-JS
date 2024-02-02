document.querySelector('h1').innerHTML="Most Popular Harry Potter characters";
//we can have queryselector all also to get all and if classname then .classname same for id #id
document.getElementById('fourth').innerHTML="Professor Snape";

document.getElementsByClassName('slytherin')[0].innerHTML="Salazar Slytherin";

document.getElementsByTagName('li')[0].innerHTML="Dobby";

//styling
document.body.style.backgroundColor='#201F2E';

document.querySelector('.heading').style.fontFamily = 'Roboto';//use queryselector or queryselectorall for better

//parent children
let first=document.body.children[0];//accessing the first children
first.innerHTML="BROWN BEARS ARE AWESOME!";

first.parentNode.style.backgroundColor="beige";

//create and insert an element
let newAttraction =document.createElement('li');
newAttraction.id='vespa';
newAttraction.innerHTML="Rent a Vespa";
document.getElementById('italy-attractions').appendChild(newAttraction);//always added to its last

//removing an element
let elementToRemove=document.getElementById('vespa');
document.getElementById('italy-attractions').removeChild(elementToRemove);//shd select the parent element
//hiding elements
document.getElementById('italy-attractions').hidden=true;

//adding click events
let element = document.querySelector('button');

function turnButtonRed(){
  // Add code to turn button red
  element.style.backgroundColor='red';
  element.style.color='white';
  element.innerHTML='Red Button';
}
element.onclick=turnButtonRed;
//can be wrriten like this also
element.onclick=function(){
    element.style.backgroundColor='blue';
}
//we can also access the src attribute of the element
//create text node
let node = document.createElement('li');
let text = document.createTextNode('earth');//similar to just text earth adding in innerHTML
node.appendChild(text);
document.getElementById('list').appendChild(node);
