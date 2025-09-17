// let ratePerHour = 60;
// let dayRate = ratePerHour * 8;
// let budget = 1000;
// let workdays = budget / dayRate;
// let billable = 22;
// let monthlyDiscount = 20;

let hourlyRate = 60;
let dayRate = hourlyRate * 8;
let budget = 1000;
let workdays = Math.floor(budget / dayRate);
console.log(workdays);
let billableDays = 22;
let monthlyDiscount = 0.2;
let fullMonths = Math.floor(35 / billableDays);
console.log(fullMonths);
let remainingDays = 35 - billableDays;
console.log(remainingDays);
let remainingCost = remainingDays * dayRate;
console.log(remainingCost)
let discountedMonthlyRate = dayRate * billableDays * (1 - monthlyDiscount);
console.log(discountedMonthlyRate)
let totalProjectCost = Math.ceil(discountedMonthlyRate + remainingCost);
console.log(totalProjectCost);