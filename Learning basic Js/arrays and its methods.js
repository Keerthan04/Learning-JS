/*
    Secret Message
Using array methods, you will transform an array of strings into a secret message!

You should consult the Mozilla Developer Network (MDN) for reference on any method with which you are 
not familiar.
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to','Program');
let index=secretMessage.indexOf('easily');
secretMessage[index]='right';
secretMessage.splice(0,1);//from index 0 remove 1 element
secretMessage.splice(secretMessage.indexOf('get'), 1, 'know');//index of get and remove 1 element and add know
secretMessage.splice(secretMessage.indexOf('right'), 1);
secretMessage.splice(secretMessage.indexOf('the'), 1);
secretMessage.splice(secretMessage.indexOf('first'), 1);
secretMessage.splice(secretMessage.indexOf('time,'), 1);
secretMessage.unshift('Programming');//add to first
console.log(secretMessage.join());//join arrays
