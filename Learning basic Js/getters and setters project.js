/*
    Meal Maker
A restaurant has hired you to create a function for their website that allows them to set a meal and 
price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone 
who uses the new function can generate a meal and a price for Today’s Special without any embarrassing
errors!
*/
const menu={
    _meal: '',
    _price: 0,
    set meal(mealToCheck){
      if(typeof mealToCheck === 'string'){
        this._meal=mealToCheck;
      }
    },
    set price(priceToCheck){
      if(typeof priceToCheck === 'number'){
        this._price=priceToCheck;
      }
    },
    get todaysSpecial(){
      if(this._meal && this._price){
        return `Todays Special is ${this._meal} for $${this._price}`;
      }
      else{
        return "Meal or Price was not set Correctly!";
      }
    }
  };
  menu.price=48;
  menu.meal='Paneer Pizza';
  console.log(menu);
  console.log(menu.todaysSpecial);
  