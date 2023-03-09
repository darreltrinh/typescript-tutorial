// explain useful for data validation
// provides set list of values to choose from in code
const enum SeatChoice {
    AISLE = "Aisle",
    WINDOW = "Window",
    MIDDLE = "Middle",
    ANY = 0
}

// typescript will automatically assign numbers to the enum values proceeding it
// enum SeatChoice {
//     AISLE = "Aisle",
//     WINDOW = 3,
//     MIDDLE,
//     ANY 
// }



const hcSeat = SeatChoice.AISLE;