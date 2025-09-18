//task1
let kind = "car";
let needLicenseResult;

if (kind === "car" || kind === "truck") {
    needLicenseResult = true;
}
else {
    needLicenseResult = false;
}

//task2
let option1 = "toyota";
let option2 = "honda";

let chooseVehicleResult;
if (option1 > option2) {
    chooseVehicleResult = option2 + " is clearly the better choice.";
}
else {
    chooseVehicleResult = option1 + " is clearly the better choice.";
}
console.log(chooseVehicleResult);

//task3
let originalPrice = 10000;
let age = 5;
let calculateResellPriceResult;

if (age < 3) {
    calculateResellPriceResult = originalPrice * 0.8;
}
else if (age > 10) {
    calculateResellPriceResult = originalPrice * 0.5;
}
else if (age >= 3 && age < 10) {
    calculateResellPriceResult = originalPrice * 0.7;
}
console.log(calculateResellPriceResult);