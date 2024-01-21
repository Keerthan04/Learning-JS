//example of use of classes
class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  const halley = new Dog('Halley');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console

  //use of constructors
  class Surgeons{
    constructor(name,department){
      this.name=name;
      this.department=department
    }
  }
  //creating instances of class
const surgeonRomeros=new Surgeons('Francisco Romero','Cardiovascular');
console.log(surgeonRomeros.name);//no getter so direct the variable called
console.log(surgeonRomeros.department);
const surgeonJacksons=new Surgeons('Ruth Jackson','Orthopedics');
console.log(surgeonJacksons.name);
console.log(surgeonJacksons.department);

//use of getters and methods in classes
class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays=20;
    }
    get name(){
      return this._name;
    }
    get department(){
      return this._department;
    }
    get remainingVacationDays(){
      return this._remainingVacationDays;
    }
    takeVacationDays(daysOff){
     this._remainingVacationDays-=daysOff;
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

  //use of methods calling 
console.log(surgeonRomero.name);//calls the getter
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);
/*
  Introduction to Classes
    JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. In this 
    lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce 
    similar objects.

    Take, for example, an object representing a dog named halley. This dog’s name (a key) is "Halley" (a value) 
    and has a behavior (another key) of 0 (another value). We create the halley object below:

    let halley = {
    _name: 'Halley',
    _behavior: 0,
    
    get name() {
        return this._name;
    },
    
    get behavior() {
        return this._behavior;
    },
        
    incrementBehavior() {
        this._behavior++;
    }
    }

    Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. 
    Instead of using the syntax above for every dog that joins the daycare, we can create a Dog class that 
    serves as a template for creating new Dog objects. For each new dog, you can provide a value for 
    their name.

    As you can see, classes are a great way to reduce duplicate code and debugging time.

    After we lay the foundation for classes in the first few exercises, we will introduce inheritance and 
    static methods — two features that will make your code more efficient and meaningful.

  1.Constructor
    In the last exercise, you created a class called Dog, and used it to produce a Dog object.

    Although you may see similarities between class and object syntax, there is one important method that 
    sets them apart. It’s called the constructor method. JavaScript calls the constructor() method every 
    time it creates a new instance of a class.

    class Dog {
    constructor(name) {
        this.name = name;
        this.behavior = 0;
    }
    }

    Dog is the name of our class. By convention, we capitalize and PascalCase class names.
    JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
    This constructor() method accepts one argument, name.
    Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to 
    an instance of that class. In the Dog class, we use this to set the value of the Dog instance’s name 
    property to the name argument.
    Under this.name, we create a property called behavior, which will keep track of the number of times a 
    dog misbehaves. The behavior property is always initialized to zero.

  2.Instance
    Now, we’re ready to create class instances. An instance is an object that contains the property names 
    and methods of a class, but with unique property values. Let’s look at our Dog class example.

    class Dog {
    constructor(name) {
        this.name = name;
        this.behavior = 0;
    } 
    }

    const halley = new Dog('Halley'); // Create new Dog instance
    console.log(halley.name); // Log the name value saved to halley
    // Output: 'Halley'

    Below our Dog class, we use the new keyword to create an instance of our Dog class. Let’s consider the 
    line of code step-by-step.

    We create a new variable named halley that will store an instance of our Dog class.
    We use the new keyword to generate a new instance of the Dog class. The new keyword calls the 
    constructor(), runs the code inside of it, and then returns the new instance.
    We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
    Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.

  3.Methods
    At this point, we have a Dog class that spins up objects with name and behavior properties. Below, we 
    will add getters and a method to bring our class to life.

    Class method and getter syntax is the same as it is for objects except you can not include commas 
    between methods.

    class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }
        
    get name() {
        return this._name;
    }
    
    get behavior() {
        return this._behavior;
    }
    
    incrementBehavior() {
        this._behavior++;
    }
    }

    In the example above, we add getter methods for name and behavior. Notice, we also prepended our property
    names with underscores (_name and _behavior), which indicate these properties should not be accessed 
    directly. Under the getters, we add a method named .incrementBehavior(). When you call 
    .incrementBehavior() on a Dog instance, it adds 1 to the _behavior property. Between each of our 
    methods, we did not include commas.
    when getters used the names are _... done so that we can acces them only by getters(means calling that)

  4.Method Calls
    Finally, let’s use our new methods to access and manipulate data from Dog instances.

    class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }
        
    get name() {
        return this._name;
    }
    
    get behavior() {
        return this._behavior;
    }   
    
    incrementBehavior() {
        this._behavior++;
    }
    }

    const halley = new Dog('Halley');

    In the example above, we create the Dog class, then create an instance, and save it to a variable named 
    halley.

    The syntax for calling methods and getters on an instance is the same as calling them on an 
    object — append the instance with a period, then the property or method name. For methods, you must 
    also include opening and closing parentheses.

    Let’s take a moment to create two Dog instances and call our .incrementBehavior() method on one of them.

    let nikko = new Dog('Nikko'); // Create dog named Nikko
    nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
    let bradford = new Dog('Bradford'); // Create dog name Bradford
    console.log(nikko.behavior); // Logs 1 to the console
    console.log(bradford.behavior); // Logs 0 to the console

    In the example above, we create two new Dog instances, nikko and bradford. Because we increment the 
    behavior of our nikko instance, but not bradford, accessing nikko.behavior returns 1 and accessing 
    bradford.behavior returns 0.
*/