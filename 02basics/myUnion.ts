// when you don't know what data type is going to come in
// type of data in typescript is called a union

// keep it as strict as possible or else you are defeating point of typescript
// max 3 types in a union
let score: number | string = 7

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let wavey: User | Admin = {name: "wavey", id: 1}

wavey = {username:"waveyseal", id: 1}

function getDbId(id: number|string){
    if (typeof id === "string"){
        id.toLowerCase()
    }
}

getDbId(1)
getDbId("1")

const data: number[] = [1, 2, 3, 4, 5]
// if you want mixed data types in an array
const mixedData: (number|string)[] = [1, 2, 3, "4", "5"]
// make a type super strict
let pi:3.14 = 3.14

// application for a plane
// makes the types super strict for a more secure experience
let seatAllotment: "window" | "aisle" | "middle" 
// crew is not in type so it will throw an error because this is client facing so crew seats are not allowed
seatAllotment = "window"
seatAllotment = "aisle"
seatAllotment = "middle"