import { toggleHiddenElement, changeToFunkyColor } from './es6secretmessagejs(export).js';
//importing methods fro other file using es6 syntax

const buttonElement = document.getElementById('but');
const pElement = document.getElementById('p1');//use of dom manipulating

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});