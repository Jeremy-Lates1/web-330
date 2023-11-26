"use strict";
/*
============================================
 Title:  float-min-field.js
 Author: Jeremy Lates
 Original Author: Code adapted from Professor Krasso class examples
 Date:   11/25/2023
 Description:  

    1. Code is adapted from https://www.w3schools.com/jsref/jsref_isnan.asp
    2. Code is adapted from https://www.w3schools.com/jsref/jsref_parsefloat.asp
 
===========================================
*/
export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }
  validate() {
    // console.log("Validate FloatMInField function");
    // console.log(`min is : ${this.min}`);
    let value = parseFloat(this.field);
    //console.log(`value is : ${value}`);

    //If the parsed value is greater than min number then we return true otherwise return false
    if (value > this.min) {
      // console.log(`value ${value} is greater than ${this.min}`);
      return false;
    } else {
      // console.log(`value ${value} is less than ${this.min}`);
      return true;
    }
  }
  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
  }
}
