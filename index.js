// let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function(drivers) {
    let copyOfDrivers = drivers.slice(0,2)
    return copyOfDrivers;
} 

const returnLastTwoDrivers = function(drivers) {
    let copyOfDrivers = drivers.slice(-2)
    return copyOfDrivers;
} 

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => {
    return function(fare) {
        return int * fare; 
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, driversFunc) => {
    return driversFunc(drivers);
}