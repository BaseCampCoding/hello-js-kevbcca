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
let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwaken;
console.log(canSpy);
let canSignalPrisoner = prisonerIsAwaken && !archerIsAwake;
console.log(canSignalPrisoner);
let canFreePrisoner = (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && !knightIsAwake && !archerIsAwake);
console.log(canFreePrisoner);