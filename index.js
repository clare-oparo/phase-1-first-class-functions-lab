// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num1){
    return function (fare) {
        return num1 * fare;
    }
}

const fareDoubler = createFareMultiplier (2);

const fareTripler = createFareMultiplier (3);

const selectDifferentDrivers= function(driversArray, driversReturned){
    return driversReturned(driversArray);

}

