const score: Array<number> = []
const names: Array<string> = []

// bad implementation of generics because you need to | in a new datatype everytime
function identityOne(val: boolean | number): boolean | number {
    return val
}

// any defeats the purpose of typescript
// any value can be returned as any value
function identityTwo(val: any): any{
    return val
}

// this is almost like any but it will then base the data type based on value passed in
function identifyThree<Type>(val: Type): Type{
    return val
}

// regardless what you change it to it will re-log the data type and type check the value passed in
identifyThree("wavey")

// exact same as <Type> but uses shorthand "<H>" is also valid
function identityFour<T>(val: T): T {
    return val
}

// if <T> is too generic you can define your own interface and pass it through
interface Bottle{
    brand: string,
    type: number
}

// passes in parameters below based on interface to pass data around
identityFour<Bottle>({brand: "coca cola", type: 2})

// defining a generic
// T[] expects an array of type T - shorthand for Array<T>
function getSearchProducts<T>(products: T[]): T{
    // do db operations
    const myIndex = 3
    return products[myIndex]
}

// 1. define generic type - <T>(arg): => {defintion}
// without the <T> it is just a regular error function - operates as syntactical sugar
// in react - <T,> denotes that it is into a JSX tag but generics are not JSX
const getMoreSearchResults = <T,>(products: T[]): T => {
    const myIndex = 7
    return products[myIndex]
}

interface DB {
    connection: string,
    username: string,
    password: string
}

// extends denote that U data type must be a number
// integrate interface to generics
function anotherFunc<T, U extends DB>(valOne: T, valTwo: U):object {
    return {
        valOne, 
        valTwo
    }
}

anotherFunc(3, {connection: "localhost", username: "wavey", password: "password"})

// create a class where there can be a quiz or a course and you want to create a method to sell both
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    courseId: number
}

// to handle common cases that work with Interfaces instantiated
// reproducible classes for different use cases in a smoother way
class Sell<T extends Quiz | Course>{
    public cart: T[] = []
    public addToCart(item: T): void{
        this.cart.push(item)
    }
}
