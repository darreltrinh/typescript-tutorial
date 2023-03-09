// add a 2 to an input number
function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isRich: boolean){
    // do something
}

let loginUser = (username: string, gotMoney: boolean = true, age: number) => {}

addTwo(5)
getUpper("wavey")

signUpUser("wavey", "wavey.seal@wavey.com", true)
loginUser("wavey", true, 27)

// can't do this because the types don't match but there are use cases where this is an acceptable output - will go over later
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }

//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const gang = ["wavey", "seal", "wavey seal"]

gang.map((gang): string => {
    return `gang is ${gang}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {}