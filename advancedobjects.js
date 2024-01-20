//use of this
const robot = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
  };
  console.log(robot.provideInfo());

  const robots = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)// dont use this and arrow func together
    }
  }
  
  robots.checkEnergy();

  //privacy
  const roboot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  roboot._energyLevel='high';//so now string(we can change but convention to not-so now string concat of 30)
  roboot.recharge();

  //use of getters
  const robott = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof(this._energyLevel)==='number'){
        return `My current energy level is ${this._energyLevel}`
      }else{
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  console.log(robott.energyLevel);

  //setters
  const roobot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){//same name for get and set but both are diff see
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if((typeof(num)==='number') && (num>=0)){
        this._numOfSensors = num;
      }
      else{
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  };
  roboot.numOfSensors=100;//goes to func and 40 as parameter if _numof.. then directly will be
  console.log(roboot.numOfSensors);//returning getter ka if _numOf.. then normal ka

/*
  Advanced Objects Introduction
    Remember, objects in JavaScript are containers that store data and functionality. In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.

    So if there are no objections, let’s learn more about objects!

    In this lesson we will cover these topics:

    how to use the this keyword.
    conveying privacy in JavaScript methods.
    defining getters and setters in objects.
    creating factory functions.
    using destructuring techniques.

  1.The this Keyword
    Objects are collections of related data and functionality. We store that functionality in methods on 
    our objects:

    const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    }
    };

    In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.

    goat.makeSound(); // Prints baaa

    Nice, we have a goat object that can print baaa to the console. Everything seems to be working fine. 
    What if we wanted to add a new method to our goat object called .diet() that prints the goat‘s dietType?

    const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(dietType);
    }
    };
    goat.diet(); 
    // Output will be "ReferenceError: dietType is not defined"

    That’s strange, why is dietType not defined even though it’s a property of goat? That’s because 
    inside the scope of the .diet() method, we don’t automatically have access to other properties of 
    the goat object.

    Here’s where the this keyword comes to the rescue. If we change the .diet() method to use the this, 
    the .diet() works! :

    const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(this.dietType);
    }
    };

    goat.diet(); 
    // Output: herbivore

    The this keyword references the calling object which provides access to the calling object’s properties. 
    In the example above, the calling object is goat and by using this we’re accessing the goat object 
    itself, and then the dietType property of goat by using property dot notation.

  2.Arrow Functions and this
    We saw in the previous exercise that for a method, the calling object is the object the method belongs 
    to. If we use the this keyword in a method then the value of this is the calling object. However, 
    it becomes a bit more complicated when we start using arrow functions for methods. Take a look at 
    the example below:

    const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet: () => {
        console.log(this.dietType);
    }
    };

    goat.diet(); // Prints undefined

    In the comment, you can see that goat.diet() would log undefined. So what happened? Notice that 
    the .diet() method is defined using an arrow function.

    Arrow functions inherently bind, or tie, an already defined this value to the function itself that 
    is NOT the calling object. In the code snippet above, the value of this is the global object, or 
    an object that exists in the global scope, which doesn’t have a dietType property and therefore 
    returns undefined.

    To read more about either arrow functions or the global object check out the MDN documentation of the 
    global object and arrow functions.

    The key takeaway from the example above is to avoid using arrow functions when using this in a method!

  3.Getters
    Getters are methods that get and return the internal properties of an object. But they can do more than 
    just retrieve the value of a property! Let’s take a look at a getter method:

    const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
        } else {
        return 'Missing a first name or a last name.';
        }
    }
    }

    // To call the getter method: 
    person.fullName; // 'John Doe'

    Notice that in the getter method above:

    We use the get keyword followed by a function.
    We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they 
        both return truthy values) and then return a different value depending on the result.
    We can access the calling object’s internal properties using this. In fullName, we’re accessing both 
    this._firstName and this._lastName.
    In the last line we call fullName on person. In general, getter methods do not need to be called with a 
    set of parentheses. Syntactically, it looks like we’re accessing a property.
    Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

    Getters can perform an action on the data when getting a property.
    Getters can return different values using conditionals.
    In a getter, we can access the properties of the calling object using this.
    The functionality of our code is easier for other developers to understand.
    Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the 
    same name as the getter/setter function. If we do so, then calling the method will result in an infinite
    call stack error. One workaround is to add an underscore before the property name like we did in the 
    example above.

  4.Setters
    Along with getter methods, we can also create setter methods which reassign values of existing 
    properties within an object. Let’s see an example of a setter method:

    const person = {
    _age: 37,
    set age(newAge){
        if (typeof newAge === 'number'){
        this._age = newAge;
        } else {
        console.log('You must assign a number to age');
        }
    }
    };

    Notice that in the example above:

    We can perform a check for what value is being assigned to this._age.
    When we use the setter method, only values that are numbers will reassign this._age
    There are different outputs depending on what values are used to reassign this._age.
    Then to use the setter method:

    person.age = 40;
    console.log(person._age); // Logs: 40
    person.age = '40'; // Logs: You must assign a number to age

    Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks 
    like we’re reassigning the value of a property.

    Like getter methods, there are similar advantages to using setter methods that include checking input, 
    performing actions on properties, and displaying a clear intention for how the object is supposed to be 
    used. Nonetheless, even with a setter method, it is still possible to directly reassign properties. For 
    example, in the example above, we can still set ._age directly:

    person._age = 'forty-five'
    console.log(person._age); // Prints forty-five

  5.Factory Functions
    So far we’ve been creating objects individually, but there are times where we want to create many 
    instances of an object quickly. Here’s where factory functions come in. A real world factory 
    manufactures multiple copies of an item quickly and on a massive scale. A factory function is a function 
    that returns an object and can be reused to make multiple object instances. Factory functions can also 
    have parameters allowing us to customize the object that gets returned.

    Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different 
    types of monsters and we could go about making each monster individually but we can also use a factory 
    function to make our lives easier. To achieve this diabolical plan of creating multiple monsters objects,
    we can use a factory function that has parameters:

    const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
        name: name,
        age: age, 
        energySource: energySource,
        scare() {
        console.log(catchPhrase);
        } 
    }
    };

    In the monsterFactory function above, it has four parameters and returns an object that has the 
    properties: name, age, energySource, and scare(). To make an object that represents a specific monster 
    like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a 
    variable:

    const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
    ghost.scare(); // 'BOO!'

    Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With 
    monsterFactory in place, we don’t have to create an object literal every time we need a new monster. 
    Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world 
    make a monster for us!
*/