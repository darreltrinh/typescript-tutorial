"use strict";
// abstraction allows us to create an object but not modify it
// you must extend it see below
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // complex calc
        return 7;
    }
}
class Instagram2 extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        // this passes on the required properties 
        // in this case: cameraMode and filter for the app to take photos in this use case
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const hc = new Instagram2("burst", "sepia", 3);
hc.getReelTime();
