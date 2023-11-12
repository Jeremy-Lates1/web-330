import { FoodModel } from "./food-model.js";

export class CalorieConverter extends FoodModel {
  constructor(id, name, calorie) {
    super(id, name, calorie);
  }
  static data = [
    new FoodModel("1007", "Egg", "78"),
    new FoodModel("1008", "Apple", "95"),
    new FoodModel("1009", "Hamburger", "354"),
    new FoodModel("1010", "Fries", "400"),
    new FoodModel("1011", "Banana", "105"),
    new FoodModel("1012", "Soda", "150"),
  ];

  //Test returning hello world from CalorieConverter class
  myHelloWorld() {
    return "Hello World";
  }
  //Get the static data
  static getData() {
    return this.data;
  }

  //Return the found food from data array
  static find(foodName) {
    //return this.data.filter((name) => name === foodName);

    const food = this.data.filter((food) => {
      if (food.name.toLowerCase() === foodName) {
        return food;
      }
    });

    return food;
  }
}
