"use strict";
/*
============================================
 Title:  finance-calculator.js
 Author: Jeremy Lates
   Original Author: Code adapted from Professor Krasso class examples
 Date:   11/25/2023
 Description:  

    1. Code is adapted from https://www.w3schools.com/jsref/jsref_tofixed.asp
    2. Code is adapted from https://www.w3schools.com/jsref/jsref_pow.asp
 
===========================================
*/
export class FinanceCalculator {
  constructor() {}
  static MONTHS_IN_YEAR = 12;
  static calculateFutureValue(monthlyPayment, rate, years) {
    let month = years * this.MONTHS_IN_YEAR;
    let interestRate = 1 + rate / 100;
    let presentValue = monthlyPayment * month;
    let futureValue = presentValue * Math.pow(interestRate, month);

    return futureValue.toFixed(2);
  }
  static convertToCurrency(field) {
    let currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "Currency",
      currency: "USD",
    });
    return currencyFormatter.format(field);
  }
}
