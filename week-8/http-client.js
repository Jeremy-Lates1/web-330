"use strict";
/*
============================================
 Title:  http-client.js
 Author: Jeremy Lates
 Original Author: Code adapted from Professor Krasso class examples and assignment help
 Date:   12/08/2023
 Description:  

    1. Code is adapted from https://www.w3docs.com/learn-javascript/url-objects.html
    2. Code is adapted from https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
 
===========================================
*/
export default class HttpClient {
  constructor() {}
  async get(url, params = "") {
    url = new URL(url);
    url.search = new URLSearchParams(params);

    console.log(`url from inside of http client class : ${url.toString()}`);

    const res = await fetch(url.toString(), { method: "GET" });

    const data = await res.json();
    console.log(
      `==>I do not see title, description, pages, and authors in this data : ${JSON.stringify(
        data
      )} <==`
    );

    //return data;
    //console.log(`res data : ${JSON.stringify(res)}`);
    return JSON.stringify(res);
  }
}
