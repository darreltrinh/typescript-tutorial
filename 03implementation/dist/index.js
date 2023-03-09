"use strict";
// class User {
//     // state the values and types of the properties before passing to constructor
//     email: string;
//     name: string;
//     // needs to be initialized with some sort of value if not passed thru to constructor
//     private readonly city: string = "new york fucking city";
//     // private keyword - not accessible client side // # is shortnote for "hashing" in JS similar to 
//     // private keyword
//     // readonly keyword - immutable property still accessible client side
//     // constructor will ingest data based on the defined dtypes above
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//         // note city is still available in constructor
//         this.city
//     }
// }
// equivalent to above class
class User {
    constructor(email, name
    // private userId: string
    ) {
        this.email = email;
        this.name = name;
        // if they want to access and manipulate the value you can set a getter and setter
        // course count will have a method for user to access and manipulate the value
        // protected keyword - like private but can now be inherited by children classes
        this._courseCount = 1;
        this.city = "new york fucking city";
    }
    deleteToken() {
        console.log("deleted token");
    }
    // get doesn't require a setter
    // if you want to expose a property to the client side but don't want manipulation than you don't
    // need a setter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // set access property based on the private property
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("must be greater than 1");
        } // otherwise return the value
        this._courseCount = courseNum;
    }
}
// User Parent Class where subUser is the child class
// child cannot access parent's private properties
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
// don't need to call the column names when creating a new instance of the class
// constructor already knows what to expect. just make sure same data type passed thru
// const wavey = new User("wavey@seal.com", "wavey")
