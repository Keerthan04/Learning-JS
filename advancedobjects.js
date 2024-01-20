//use of this
const robot = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
  };
  console.log(robot.provideInfo());

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
*/