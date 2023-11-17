"use strict";
/*
============================================
 Title:  product.js
 Author: Jeremy Lates
 Original Author: 
 Date:   11/17/2023
 Description:  
 
===========================================
*/
export class Product {
  constructor(name, price) {
    //this.id = Math.random().toString(radix:16).slice(2); //This code was pulled from project instructions. It is not working. What is radix?
    this.id = Math.random().toString(16).slice(2); //I would prefer to use an integer for the id
    this.name = name;
    this.price = price;
  }
}
