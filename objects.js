//creating objects
let fasterShip={
    'Fuel Type': 'Turbo Fuel',
    color : 'silver'
  };

//accessing properties
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  let crewCount=spaceship.numCrew;
  let planetArray=spaceship.flightPath;

//usage of bracket notation
let propName =  'Active Mission';

// Write your code below
let isActive=spaceship[propName];
console.log(isActive);
/*
  Introduction to Objects
    It’s time to learn more about the basic structure that permeates nearly every aspect of JavaScript 
    programming: objects.

    You’re probably already more comfortable with objects than you think, because JavaScript loves objects! 
    Many components of the language are actually objects under the hood, and even the parts that aren’t— like
    strings or numbers— can still act like objects in some instances.

    There are only seven fundamental data types in JavaScript, and six of those are the primitive data types:
    string, number, boolean, null, undefined, and symbol. With the seventh type, objects, we open our code 
    to more complex possibilities. We can use JavaScript objects to model real-world things, like a 
    basketball, or we can use objects to build the data structures that make the web possible.

    At their core, JavaScript objects are containers storing related data and functionality, but that 
    deceptively simple task is extremely powerful in practice. You’ve been using the power of objects all 
    along, but now it’s time to understand the mechanics of objects and start making your own!

  1.Creating Object Literals
    Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate
    an object literal:

    let spaceship = {}; // spaceship is an empty object

    We fill an object with unordered data. This data is organized into key-value pairs. A key is like a 
    variable name that points to a location in memory that holds a value.

    A key’s value can be of any data type in the language including functions or other objects.

    We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma (,). Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:

    // An object literal with two key-value pairs
    let spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
    };

    The spaceship object has two properties Fuel Type and color. 'Fuel Type' has quotation marks because 
    it contains a space character.

  2.Accessing Properties
    There are two ways we can access an object’s property. Let’s explore the first way— dot notation, ..

    You’ve used dot notation to access the properties and methods of built-in objects and data instances:

    'hello'.length; // Returns 5

    With property dot notation, we write the object’s name, followed by the dot operator and then the 
    property name (key):

    let spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
    };
    spaceship.homePlanet; // Returns 'Earth',
    spaceship.color; // Returns 'silver',


    If we try to access a property that does not exist on that object, undefined will be returned.

    spaceship.favoriteIcecream; // Returns undefined

    Let’s get some more practice using dot notation on an object!

  3.Bracket Notation
    The second way to access a key’s value is by using bracket notation, [ ].

    You’ve used bracket notation when indexing an array:

    ['A', 'B', 'C'][0]; // Returns 'A'

    To use bracket notation to access an object’s property, we pass in the property name (key) as a string.


    We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

    let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5
    };
    spaceship['Active Duty'];   // Returns true
    spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
    spaceship['numCrew'];   // Returns 5
    spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

    With bracket notation you can also use a variable inside the brackets to select the keys of an object. 
    This can be especially helpful when working with functions:

    let returnAnyProp = (objectName, propName) => objectName[propName];
    
    returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

    If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer 
    would look for a key of 'propName' on our object and not the value of the propName parameter.


*/