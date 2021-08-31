let blocksInFeet = 264;

function distanceFromHqInBlocks(pickUpLocation){
    let headQuarters = 42;
    return Math.abs(pickUpLocation - headQuarters);
}

function distanceFromHqInFeet(startingBlock){
    let distanceTravelledInBlocks = distanceFromHqInBlocks(startingBlock);
    return distanceTravelledInBlocks * blocksInFeet;
}

function distanceTravelledInFeet(startingBlock, destinationBlock){
    let distanceInBlocks =  Math.abs(startingBlock - destinationBlock)
    return distanceInBlocks * blocksInFeet;
}

function calculatesFarePrice(startingBlock, destinationBlock){
    let feetTravelled = distanceTravelledInFeet(startingBlock, destinationBlock);
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled < 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}