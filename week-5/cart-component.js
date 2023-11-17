"use strict";
/*
============================================
 Title:  cart-component.js
 Author: Jeremy Lates
 Original Author: Professor Richard Krasso
 Date:   11/16/2023
 Description: Create an HTML web component of a shopping cart.  
 I adapted the code from https://github.com/buwebdev/web-330/blob/master/week-5/fruits/basket-component.js
===========================================
*/
class cartComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // this.innerHTML = `<i id="basketIcon" class="fa fa-shopping-basket"></i> (<span id="basket-count"></span>)`;
    this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
  }
}

customElements.define("cart-component", cartComponent);
