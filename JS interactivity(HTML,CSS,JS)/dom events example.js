let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
const showInfo = ()=>{
  moreInfo.style.display='block';
}

readMore.addEventListener('click',showInfo);//added on the element that is target for the event

//onevents and event listener
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
function textChange(){
  view.innerHTML='Hello, World!';
}
function textReturn(){
  view.innerHTML='View';
}
view.onclick=textChange;
close.onclick=textReturn;
//we can use target function .onevent=functiontodo as another way than addeventlistenrs and all
//onclick assigns to only one function when many we use addEventlistener

//removeeventListener
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  //add your code here
  button.removeEventListener('click',showFortune);//see how iniside the function we removed the event listener as once clikced the function executes so removed there only so that only once if another way shd do make another event listner inside only
}

button.addEventListener('click', showFortune);


//using event and its properties
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = 'You shared the puppy photo in ' 
  + event.timeStamp + ' ms.';
}

share.addEventListener('click', sharePhoto);//inside function the event direct passed

//diff events
// This variable stores the "Pick a Color" button
let buttons = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.backgroundColor=randomColor;
}
buttons.onclick=colorChange;
mysteryButton.onwheel=colorChange;//for wheel move this event
//learn different events refer documentation

//mouseevents
// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
function increaseWidth(){
  itemOne.style.width = '500px';
}

itemOne.addEventListener('mouseover', increaseWidth);

function changeBackground(){
  itemTwo.style.backgroundColor = 'green';
}

itemTwo.addEventListener('mouseup', changeBackground);

function changeText(){
  itemThree.innerHTML = 'The mouse has left the element';
}

itemThree.addEventListener('mouseout', changeText);

function showItem(){
  itemFive.style.display = 'block';
}

itemFour.addEventListener('mousedown', showItem);
//mousedown is when clicked it turns
//mouseup is when clicked and released
//mouse over is when hover the content into the content
//mouse out is when hover the content out of the content goes

//keyboard events
let ball = document.getElementById('float-circle');

// Write your code below
function up(){
  ball.style.bottom='250px';
}
function down(){
  ball.style.bottom='50px';
}
document.addEventListener('keydown',up);//keydown is when pressed
//document is target as wherever we are(means when clicked on it and then pressed and all)(learn what specifically)
document.addEventListener('keyup',down);//keyup is when released 
//keypress is clicked and released