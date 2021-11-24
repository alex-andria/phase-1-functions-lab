// CODE

//declare global variabls
let pickup;
const hq = 42;
let fare;

function distanceFromHqInBlocks(value = 50){
    //returns the number of blocks given a value
    if (value >= hq) {
        return value - hq;
    }
    else{
        return hq - value;
    }
}

function distanceFromHqInFeet(value) {
    //returns the calculated value of feet using distanceFromHqInBlocks
    return 264 * distanceFromHqInBlocks(value);
}

function distanceTravelledInFeet(start, end) {
    //returns the nu9mber of feet traveled 
    return Math.abs((264 * start) - (264 * end));
    
}

function calculatesFarePrice (start, end) {
    //returns the fare for the customer
    let  distance = distanceTravelledInFeet(start, end);

    if (distance < 400) {
        return 0;
    }
    else if (distance >= 400 && distance <= 2000){
        return .02 * (distance - 400);
    }
    else if(distance > 2000 && distance <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}

