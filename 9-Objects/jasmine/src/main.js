//task1
let scoreBoard = {"The Best Ever": 1000000, "Kode": 7000}

//task2
let newPlayerName = "Labron";
let newPlayerScore = 5000;
scoreBoard[newPlayerName] = newPlayerScore;
console.log(scoreBoard);

//task3
let playerToRemove = "The Best Ever";
delete scoreBoard[playerToRemove];
console.log(scoreBoard);

//task4 
let playerNameToUpdate = "Labron";
let scoreToUpdate = 1000;

scoreBoard[playerNameToUpdate] += 1000;
console.log(scoreBoard);

//task5
let mondayBonus = 100;
for(let player in scoreBoard){
    scoreBoard[player] += mondayBonus;
}
console.log(scoreBoard);