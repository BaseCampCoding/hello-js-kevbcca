//task1
let visitorName = "Kaden";
let visitorAge = 45;
let visitorTicketId = "Tic48";

let visitor = {
    name: visitorName, 
    age:visitorTicketId,
    tickId:visitorTicketId,
}
console.log(visitor);

//task2
visitor.ticket = null;
console.log(visitor);

//task3
let tickets = {
    "Ticket48": null,
    "Ticket49": "Walker",
}
let ticketIdToCheck = "Ticket48";
let ticketStatusresult;
if(!(ticketIdToCheck in tickets)){
    ticketStatusresult = "unknown ticket id";
}
else if(tickets[ticketIdToCheck] == null){
    ticketStatusresult = "not sold";
}
else{
    ticketStatusresult = "sold to" + tickets[ticketIdToCheck];
}
console.log(ticketStatusresult);

//task4
let simpleTicketStatusResult;
if(ticketIdToCheck in tickets && tickets[ticketIdToCheck]){
    simpleTicketStatusResult = tickets[ticketIdToCheck];
}
else{
    simpleTicketStatusResult = "invalid ticket";
}
console.log(simpleTicketStatusResult);

//task5
let visitorWithGtc = {
    name: "Kaden",
    gtc: {verison: "v2.0"},
    name: "Walker"
}
let gtcVersion;
if(visitorWithGtc.gtc && visitorWithGtc.gtc.verison){
    gtcVersion = visitorWithGtc.gtc.verison;
}
console.log(gtcVersion)