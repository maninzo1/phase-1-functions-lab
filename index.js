function distanceFromHqInBlocks(street){
    const initial = 42
    return Math.abs(street - initial)  
}

console.log(distanceFromHqInBlocks)


function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

console.log(distanceFromHqInFeet)

function distanceTravelledInFeet(a,b){
    return Math.abs(a - b) * 264
}

console.log(distanceTravelledInFeet)

function calculatesFarePrice(a, b){
const feetTravelled = distanceTravelledInFeet(a,b);
 if (feetTravelled <= 400){
 return 0 ;
 }else if (feetTravelled >400 && feetTravelled <=2000){
     return (feetTravelled-400) * 0.02 ;
 }else if (feetTravelled >2000 && feetTravelled <= 2500){
     return 25;
 }else
    return 'cannot travel that far';
 }

   

