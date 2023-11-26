"use strict";
/*
============================================
 Title:  required-field.js
 Author: Jeremy Lates
 Original Author: Code adapted from Professor Krasso class examples
 Date:   11/25/2023
 Description:  

    1. Code is adapted from https://www.freecodecamp.org/news/check-if-string-is-empty-or-null-javascript/
 
===========================================
*/
export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }
  validate() {
    if (this.field === "") {
      //console.log("Field is empty");

      return true;
    } else if (this.field === isNaN) {
      //console.log("Field is empty");

      return true;
    } else {
      //console.log("Field is NOT empty");

      return false;
    }
  }
  getMessage() {
    return `${this.name} is a required field`;
  }
}
