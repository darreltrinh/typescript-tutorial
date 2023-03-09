// building a ios function that takes a photo with the camera
// if a core component is using this it should use the interface
// this standardizes the data payload being moved around JS
interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

// interface doesn't define definitions

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
//    adding property is fine, you can always implement more but you must use the interface props
        public short: string
    ){}
    createStory(): void {
        console.log("story created")
    }
}

