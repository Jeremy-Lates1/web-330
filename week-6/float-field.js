"use strict";
/*
============================================
 Title:  float-field.js
 Author: Jeremy Lates
  Original Author: Code adapted from Professor Krasso class examples
 Date:   11/25/2023
 Description:  

    1. Code is adapted from https://www.w3schools.com/jsref/jsref_isnan.asp
 
===========================================
*/
export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }
  validate() {
    //console.log("Entered validate FloatField");
    // console.log(`Parsed Field is : ${parseFloat(this.field)}`);

    if (!isNaN(parseFloat(this.field))) {
      //console.log(`Field is : ${this.field}`);
      //if true than which means I cannot parse Float
      return false;
    } else {
      // This means it is a float value
      return true;
    }
  }
  getMessage() {
    return `${this.name} must be a float value. You entered ${this.field}`;
  }
}
