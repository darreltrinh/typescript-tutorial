// const User = {
//     name: "wavey",
//     email: "waveyseal@wavey.com",
//     isActive: true,
//     age: 27
// }

// // pass or return objects through a function in typescript 

// // createUser function takes in an object with the following properties
// function createUser(user: {name: string, email: string, isActive: boolean, age: number, isRich: boolean}){}

// createUser({name: User.name, email: User.email, isActive: User.isActive, age: User.age, isRich: true})

// function createCourse():{name:string, price: number}{
//     return {name: "Typescript", price: 100}
// }


// type Person = {
//     name: string,
//     email: string,
//     isActive: boolean,
//     isRich: boolean
// }

// function createWavey(user: Person): Person{
//     return user
// }

// createWavey({name: "wavey", email: "", isActive: true, isRich: true})

type User = {
    // nomenclature for mongoDB for immutable ID
    // readonly is for immutable properties 
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
}
// example of storing user's credit card details
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// find type based on the intersection of the two types
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myUser: User = {
    _id: "123",
    name: "wavey",
    email: "waveyseal@wavey.com",
    isActive: false
}

myUser.email = "hold_that@bow.com"


export {}