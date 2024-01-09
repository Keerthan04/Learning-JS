//block and scope
const city='New York City';
function logCitySkyline(){
  let skyscraper='Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());//the city is global but skyscraper is local(inside block)


/*
  Scope
    An important idea in programming is scope. Scope defines where variables can be accessed or referenced. 
    While some variables can be accessed from anywhere within a program, other variables may only be 
    available in a specific context.

    You can think of scope like the view of the night sky from your window. Everyone who lives on the planet
    Earth is in the global scope of the stars. The stars are accessible globally. Meanwhile, if you live in 
    a city, you may see the city skyline or the river. The skyline and river are only accessible locally in 
    your city, but you can still see the stars that are available globally.

  1.Blocks and Scope
    Before we talk more about scope, we first need to talk about blocks.

    We’ve seen blocks used before in functions and if statements. A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

    A block of code could be a function, like this:

    const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // blue 
    }

    Notice that the function body is actually a block of code.

    Observe the block in an if statement:

    if (dusk) {
    let color = 'pink';
    console.log(color); // pink
    }

  2.Global Scope
    Scope is the context in which our variables are declared. We think about scope in relation to blocks 
    because variables can exist either outside of or within these blocks.

    In global scope, variables are declared outside of blocks. These variables are called global variables. 
    Because global variables are not bound inside a block, they can be accessed by any code in the program, 
    including code in blocks.

    Let’s take a look at an example of global scope:

    const color = 'blue';

    const returnSkyColor = () => {
    return color; // blue 
    };

    console.log(returnSkyColor()); // blue

    Even though the color variable is defined outside of the block, it can be accessed in the function block,
    giving it global scope.
    In turn, color can be accessed within the returnSkyColor function block.

*/