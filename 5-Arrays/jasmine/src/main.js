let stack = [1,2,3,4,5,6,7,8,9,10];

//task1
let posistion = 5;
let getItemResult = stack[posistion];

//task2
postion = 6;  //overrides
replacementCard = 17;
stack[posistion] = replacementCard;
console.log(replacementCard);

//task3
let newCardTop = 25;
stack.unshift(newCardTop);

//task4
posistion = 8;
stack.splice(posistion, 1);

//task5
stack.shift();

//task6
let newCardBottom = 18;
stack.push(newCardBottom);

//task7 
stack.pop();
console.log(stack);

//task8
let stackSize = 9;
let checkSizeOfStackResult = stack.length === stackSize;

// if (stackSize == stack.length) {
//     checkSizeOfStackResult = true }
// else {
//     checkSizeOfStackResult = false
// }
console.log(checkSizeOfStackResult);