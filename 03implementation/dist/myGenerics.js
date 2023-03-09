"use strict";
const score = [];
const names = [];
// bad implementation of generics because you need to | in a new datatype everytime
function identityOne(val) {
    return val;
}
// any defeats the purpose of typescript
// any value can be returned as any value
function identityTwo(val) {
    return val;
}
// this is almost like any but it will then base the data type based on value passed in
function identifyThree(val) {
    return val;
}
// regardless what you change it to it will re-log the data type and type check the value passed in
identifyThree("wavey");
// exact same as <Type> but uses shorthand "<H>" is also valid
function identityFour(val) {
    return val;
}
// passes in parameters below based on interface to pass data around
identityFour({ brand: "coca cola", type: 2 });
// defining a generic
// T[] expects an array of type T - shorthand for Array<T>
function getSearchProducts(products) {
    // do db operations
    const myIndex = 3;
    return products[myIndex];
}
// 1. define generic type - <T>(arg): => {defintion}
// without the <T> it is just a regular error function - operates as syntactical sugar
// in react - <T,> denotes that it is into a JSX tag but generics are not JSX
const getMoreSearchResults = (products) => {
    const myIndex = 7;
    return products[myIndex];
};
// extends denote that U data type must be a number
// integrate interface to generics
function anotherFunc(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunc(3, { connection: "localhost", username: "wavey", password: "password" });
// to handle common cases that work with Interfaces instantiated
// reproducible classes for different use cases in a smoother way
class Sell {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
