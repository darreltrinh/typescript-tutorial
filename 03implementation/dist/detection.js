"use strict";
// caution must be taken writing for the business logic
// otherwise you need to check every single data type against the prop being passed through
function detectType(val) {
    if (typeof val === 'number') {
        return val + 7;
    }
    return val.toLowerCase();
}
function provideId(id) {
    if (!id) {
        console.log("no id provided");
        return;
    }
    id.toLowerCase();
}
// typeof acts a an operator to guard against data types being altered during runtime
function printAll(strs) {
    if (strs === null) {
        return;
    }
    else if (typeof strs === 'object') {
        for (const s of strs) {
            console.log(s);
        }
    }
    else {
        console.log(strs);
    }
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instanceof operator checks if object has an occurence in a class
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    // if the method swim exists then it is a fish
    return pet.swim !== undefined; // returns true or false
}
function getFood(pet) {
    if (isFish(pet)) {
        return "fish food";
    }
    return "bird food";
}
// example below makes it harder to integrate new types to the data type narrowing
// function getShape(shape: Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2 // if circle then return area of circle
//     }
//     return shape.sideLength ** 2 // if square then return area of square
// }
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.width * shape.length;
        // checks data types based on the kind property
        // always return never type 
        default:
            const _exhaustiveCheck = shape; // exhaustiveness check
            return _exhaustiveCheck;
    }
}
