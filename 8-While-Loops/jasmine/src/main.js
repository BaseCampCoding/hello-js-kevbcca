//task1
let juice = "Energizer";
let timeToMixJuiceResults;

if (juice == "Pure Strawberry Joy") {
    timeToMixJuiceResults = 0.5;
}
else if  (juice == "Pure Strawberry Joy" || juice == "Energizer") {
    timeToMixJuiceResults = 1.5;
}
else if (juice == "Tropical Island") {
    timeToMixJuiceResults = 3
}
else if (juice == "All or Nothing") {
    timeToMixJuiceResults = 5;
}
else {
    timeToMixJuiceResults = 2.5;
}
console.log(timeToMixJuiceResults);

//task2
let wedgeNeeded = 20;
let limes = ["small", "large", "medium", "large"];
let wedgesCut = 0;
let limesCut = 0;
while (wedgesCut > wedgeNeeded && i < limes.length) {
    if (limes[i] == "small") {
        wedgesCut += 6;
    }
    else if (limes[i] == "medium") {
        wedgesCut += 8;
    }
    else if (limes[i] == "large") {
        wedgesCut += 10;
    }
    limesCut++
    i++
}
console.log(wedgesCut);
console.log(limesCut)

//task3
let timeLeft = 40;
let orders = ["Energizer", "All or Nothing", "Green Garden", "Tropical Island"];
let totalTime = 0;
for (let i=0; i<orders.length; i++) {
    if (juice == "Pure Strawberry Joy"){
        timeToMixJuiceResults = 0.5;
    }
    else if (juice == "Energizer" || juice == "Green Garden"){
        timeToMixJuiceResults = 1.5;
    }
    else if (juice == "Tropical Island"){
        timeToMixJuiceResults = 3;
    }
    else if (juice == "All or Nothing"){
        timeToMixJuiceResults = 3;
    }
    else {
        timeToMixJuiceResults = 2.5;
    }
    orderTrack.push(juice);
    totalTime += timeToMixJuiceResults
}

while (totalTime < timeLeft && index < orderTrack) {
    
}