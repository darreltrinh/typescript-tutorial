// abstraction allows us to create an object but not modify it
// you must extend it see below
abstract class TakePhoto2 {
  constructor( 
    public cameraMode: string,
    public filter: string,
  ){}
  // not going to provide definition just the method
  // implementation will be done in the child class
  abstract getSepia(): void 
  getReelTime(): number{
    // complex calc
    return 7
  }
    }

class Instagram2 extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    // this passes on the required properties 
    // in this case: cameraMode and filter for the app to take photos in this use case
    super(cameraMode, filter)
  }
    getSepia(): void {
      console.log("sepia")
  }
}

const hc = new Instagram2("burst", "sepia", 3)
hc.getReelTime()