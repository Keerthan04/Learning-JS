//creating an array
const hobbies = ['playing','dancing','singing'];
console.log(hobbies);//prints with [] and as written only

//accessing elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 
'Where there is love there is life.'];

let listItem= famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);//since only three ele out of bounds comes as undefined(prints undefined)

//updating elements
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1]='avocados';
console.log(groceryList);

//reassigning between let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

console.log(condiments);

utensils[3] = 'Spoon';//const array the value like elements can be changed

console.log(utensils);
//utensils=['spoon']//the entire array being reassigned with another cant like in let

/*
  Arrays
    Organizing and storing data is a foundational concept of programming.

    One way we organize data in real life is by making lists. Let’s make one here:

    New Year's Resolutions:

    1. Keep a journal 
    2. Take a falconry class
    3. Learn to juggle
    Let’s now write this list in JavaScript, as an array:

    let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

    Arrays are JavaScript’s way of making lists. Arrays can store any data types 
    (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item 
    has a numbered position.

    Here’s an array of the concepts we’ll cover:

    let concepts = ['creating arrays', 'array structures', 'array manipulation'];

  1.Create an Array
    One way we can create an array is to use an array literal. An array literal creates an array by wrapping 
    items in square brackets []. Remember from the previous exercise, arrays can store any data type — we 
    can have an array that holds all the same data types or an array that holds different data types.

    Diagram outlining an array literal that has 3 separate elements, a comma separates each 
    element (a string, a number, and a boolean) and the elements are wrapped with square brackets
    Let’s take a closer look at the syntax in the array example:

    The array is represented by the square brackets [] and the content inside.
    Each content item inside an array is called an element.
    There are three different elements inside the array.
    Each element inside the array is a different data type.
    We can also save an array to a variable. You may have noticed we did this in the previous exercise:

    let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
    can have different dtypes in one array also

  2.Accessing Elements
    Each element in an array has a numbered position known as its index. We can access individual items 
    using their index, which is similar to referencing an item in a list based on the item’s position.

    Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. 
    Therefore, the first item in an array will be at position 0. Let’s see how we could access an element 
    in an array:

    Diagram outlining how to access the property of an array using the index of the element
      const cities=['new york','london','dubai'];
    In the code snippet above:

    cities is an array that has three elements.
    We’re using bracket notation, [] with the index after the name of the array to access the element.
    cities[0] will access the element at index 0 in the array cities. You can think of cities[0] as accessing the space in memory that holds the string 'New York'.
    You can also access individual characters in a string using bracket notation and the index. For instance, you can write:

    const hello = 'Hello World';
    console.log(hello[6]);
    // Output: W

    The console will display W since it is the character that is at index 6.

  3.Update Elements
    In the previous exercise, you learned how to access elements inside an array or a string by using an index.
    Once you have access to an element in an array, you can update its value.

      let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

      seasons[3] = 'Autumn';
      console.log(seasons); 
      //Output: ['Winter', 'Spring', 'Summer', 'Autumn']

    In the example above, the seasons array contained the names of the four seasons.

    However, we decided that we preferred to say 'Autumn' instead of 'Fall'.

    The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of the seasons array 
    to be 'Autumn' instead of what is already there.

  4.Arrays with let and const
    You may recall that you can declare variables with both the let and const keywords. Variables declared 
    with let can be reassigned.

    Variables declared with the const keyword cannot be reassigned. However, elements in an array declared 
    with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign 
    a new array or a different value.
    ex
      let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

      const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

      condiments[0] = 'Mayo';

      console.log(condiments);

      condiments = ['Mayo'];

      console.log(condiments);

      utensils[3] = 'Spoon';//const array the value like elements can be changed

      console.log(utensils);
      //utensils=['spoon']//the entire array being reassigned with another cant like in let

  5.The .length property
    One of an array’s built-in properties is length and it returns the number of items in the array. We 
    access the .length property just like we do with strings. Check the example below:

    const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

    console.log(newYearsResolutions.length);
    // Output: 2

    In the example above, we log newYearsResolutions.length to the console using the following steps:

    We use dot notation, chaining a period with the property name to the array, to access the length 
    property of the newYearsResolutions array.
    Then we log the length of newYearsResolution to the console.
    Since newYearsResolution has two elements, 2 would be logged to the console
*/