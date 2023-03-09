// caution must be taken writing for the business logic
// otherwise you need to check every single data type against the prop being passed through
function detectType(val: number | string) {
    if (typeof val === 'number') {
        return val + 7;
    }
    return val.toLowerCase();
}

function provideId(id: string | null) {
    if(!id) {
        console.log("no id provided")
        return 
    }
    id.toLowerCase()
}

// typeof acts a an operator to guard against data types being altered during runtime

function printAll(strs: string | string[] | null) {
    if (strs === null) {
        return
    } else if (typeof strs === 'object') {
        for (const s of strs) {
            console.log(s)
        }
    } else {
        console.log(strs)
    }
}

// using in operator to check if a property exists in an object
// commonly used in finding key: value pairs in objects indexing off key
// WILL BE USEFUL FOR GROUP CREATION AND ASSIGNING ADMIN OF GROUP CHAT
interface detUser {
    id: string,
    email: string
}

interface detAdmin {
    id: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: detUser | detAdmin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}


// instanceof operator checks if object has an occurence in a class
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish { // typecasts pet to Fish to pass through to getFood
    // if the method swim exists then it is a fish
    return (pet as Fish).swim !== undefined // returns true or false
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        return "fish food"
    }
    return "bird food"
}

// discriminated unions
// kind property is used to differentiate between the two interfaces
// kind is interchangeable with any other property name and is the power is meant to leverage the string literal stored to interface
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    sideLength: number
}

interface Rectangle {
    kind: "rectangle",
    width: number,
    length: number
}

type Shape = Circle | Square | Rectangle

// example below makes it harder to integrate new types to the data type narrowing
// function getShape(shape: Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2 // if circle then return area of circle
//     }
//     return shape.sideLength ** 2 // if square then return area of square
// }

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.sideLength ** 2
        case "rectangle":
            return shape.width * shape.length
        // checks data types based on the kind property
        // always return never type 
        default:
            const _exhaustiveCheck: never = shape // exhaustiveness check
            return _exhaustiveCheck
    }
}