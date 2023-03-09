// creating a new user to start a trial and provide a discount code
// interface is a way to define a data class but you can also define functions within the interface
interface intUser {
    readonly dbId: number,
    email: string,
    userId: number,
    // ? denotes optional property
    googleId?: string
    // trial user example
    startTrial: () => string
    // another way of writing the function
    // startTrial2(): string
    // discount code example
    getDiscount(couponname:string, value: number): number
}

// this makes it so that you can update the schema of the object without having to change the prior interface block
interface intUser {
    githubToken: string
}
// types can't be extended but interfaces can!!!
// Admin builds on the intUser interface
interface intAdmin extends intUser {
    role: "admin" | "ta" | "instructor"
}

const intWavey: intAdmin = {
  dbId: 22,
  role: "admin",
  email: "wavey@seal.com",
  userId: 1,
  githubToken: "123",
  // pass function as a property of an object
  startTrial: () => {
    return "trial started"
  },
  getDiscount: (name: "wavey50", offer: 10) => {
    return offer
  }
};

