export class Bill {
  constructor() {}

  _beverages = [];
  _appetizers = [];
  _mainCourses = [];
  _desserts = [];

  //Add beverage to _beverages array
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }
  //Add appetizer to _appetizers array
  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }
  // add main course to _maincourses array
  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }
  // add main dessert to _desserts array
  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  getTotal() {
    let total = 0;

    function sum(item) {
      total += parseFloat(item.price);
    }

    //loop through beverages and add price to total
    this._beverages.forEach(sum);

    //loop through appetizers and add price to total
    this._appetizers.forEach(sum);

    //loop through maincourses and add price to total
    this._mainCourses.forEach(sum);

    //loop through desserts and add price to total
    this._desserts.forEach(sum);

    // Format the currency value
    function formatCurrency(value) {
      return value.toLocaleString("en-US", { minimumFractionDigits: 2 }); // Format the currency value to US dollars with two decimal places
    }
    return formatCurrency(total);
  }
}
