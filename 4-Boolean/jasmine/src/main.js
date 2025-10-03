//task1
let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwaken = true;
let petDogIsPresent = true;

let canExcuteFastAttack = !knightIsAwake;
console.log(canExcuteFastAttack);
// if (knightIsAwake == false) {
//     canExcuteFastAttack = true
// }
// else{
//     canExcuteFastAttack = false
// }

//task2
let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwaken;
console.log(canSpy);

//task3
let canSignalPrisoner = prisonerIsAwaken && !archerIsAwake;
console.log(canSignalPrisoner);

//task4
if(petDogIsPresent && archerIsAwake || !petDogIsPresent && archerIsAwake && !knightIsAwake && prisonerIsAwaken){
    canFreePrisoner = true;
} else {
    canFreePrisoner = false;
}
console.log(canFreePrisoner);