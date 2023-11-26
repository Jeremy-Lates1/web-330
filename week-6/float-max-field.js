"use strict";
/*
============================================
 Title:  float-max-field.js
 Author: Jeremy Lates
 Original Author: Code adapted from Professor Krasso class examples
 Date:   11/25/2023
 Description:  

    1. Code is adapted from https://www.w3schools.com/jsref/jsref_isnan.asp
    2. Code is adapted from https://www.w3schools.com/jsref/jsref_parsefloat.asp
 
===========================================
*/
export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }
  validate() {
    // console.log("entered Validate FLoatMaxFIeld function");
    let value = parseFloat(this.field);

    //If the parsed value is less than than max number then we return false otherwise return true.  You want to be lower than max
    if (value < this.max) {
      return false;
    } else {
      return true;
    }
  }
  getMessage() {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
  }
}
