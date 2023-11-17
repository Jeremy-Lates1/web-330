"use strict";
/*
============================================
 Title:  shopping-cart.js
 Author: Jeremy Lates
 Original Author: Professor RIchard Krasso
 Date:   11/17/2023
 Description:  I adapted this code from fruit-manager.js https://github.com/buwebdev/web-330/blob/master/week-5/fruits/fruit-manager.js
 
===========================================
*/

export class ShoppingCart {
  constructor() {
    this.products = [];
  }
  count() {
    return this.products.length;
  }
  add(product) {
    this.products.push(product);
  }
  *[Symbol.iterator]() {
    for (let myProduct of this.products) {
      yield myProduct;
    }
  }
}
