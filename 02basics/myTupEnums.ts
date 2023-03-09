// for cases where the order of the data types of the array matter
// uses restrictions to make sure the order of the array is correct
let tupUser: [string, number, boolean] 

// the order of the array matters
// good for API calls with specific schemas
tupUser = ["wavey", 27, true]

// limitation can be used to restrict size of the array on top of order
let rgb: [number, number, number] = [255, 123, 69]

// tUser data type must be a tuple with a number and string
type tUser = [number, string]

let newUser: tUser = [1, "wavey"]

// though tuples are immutable you can destroy them using methods like push, pop, splice, etc.
newUser.push(3)