//task1
let digits1 = [1,7,3] //173
let digits2 = [2,4,8] //248

let number1 = Number(digits1.join(""));
let number2 = Number(digits2.join(""));
let twoSum = number1 + number2;

//task2
let luckyInput = 12321;
let luckyInputStr = String(luckyInput);
let luckyNumber;
if(luckyInputStr.split("").reverse("").join("") == luckyInputStr){
    luckyNumber = true;
}
else{
    luckyNumber = false;
}
console.log(luckyNumber);

//task3
let userInput = "";
let errorMessage;
if(userInput==undefined || userInput==null || userInput==""){
    errorMessage = "required field";
}
else if(Number(userInput)==0 || isNaN(Number(userInput))){
    errorMessage = "Must be a number besides 0";
}
else{
    errorMessage = "";
}
console.log(errorMessage);