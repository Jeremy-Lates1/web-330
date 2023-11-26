"use strict";
/*
============================================
 Title:  validator.js
 Author: Jeremy Lates
 Original Author: Code adapted from Professor Krasso class examples
 Date:   11/25/2023
 Description:  

    1. Code is adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
    2. Code is adapted from https://www.w3schools.com/js/js_loop_forof.asp

 
===========================================
*/
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
  constructor(name, field) {
    this.name = name;
    this.field = field;
    this.validators = [];
    this.messages = [];
  }

  addRequiredField() {
    let requiredField = new RequiredField(this.name, this.field);
    // console.log(`requiredField: ${JSON.stringify(requiredField)}`);

    this.validators.push(requiredField);
  }
  addRequiredFloatField() {
    let floatField = new FloatField(this.name, this.field);
    //console.log(`my floatField ${JSON.stringify(floatField)}`);
    this.validators.push(floatField);
    //console.log(`validators array : ${JSON.stringify(this.validators)}`);
  }
  addFloatMinField(min) {
    let floatMinField = new FloatMinField(this.name, this.field, min);
    this.validators.push(floatMinField);
  }
  addFloatMaxField(max) {
    let floatMaxField = new FloatMaxField(this.name, this.field, max);
    this.validators.push(floatMaxField);
  }
  validate() {
    //console.log(`validators array: ${JSON.stringify(this.validators)}`);
    // console.log(`Validators length : ${this.validators.length}`);

    let issueCount = 0;

    for (let item of this.validators) {
      //console.log(`item validate status: ${JSON.stringify(item.validate())}`);
      //console.log(`typeof item: ${JSON.stringify(typeof item.validate())}`);
      if (item.validate() === true) {
        //console.log("Message pushed to array");
        this.messages.push(item.getMessage());
        issueCount++;
        //return false;
      } else {
        // console.log(`item validate: ${JSON.stringify(item.validate())}`);
        // console.log(
        //   `typeof item validate: ${JSON.stringify(typeof item.validate())}`
        // );
        // return true;
      }
    }
    if (issueCount > 0) return false;
    else return true;
  }
}
