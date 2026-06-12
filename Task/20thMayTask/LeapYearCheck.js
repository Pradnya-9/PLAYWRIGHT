// Problem: Take a year and check if it's a leap year.

// Rules:

// Divisible by 4 AND not divisible by 100 → Leap year

// OR divisible by 400 → Leap year
//Else → Not a leap year 

let Year=2020;
if((Year%4===0 && Year%100!==0) || (Year%400===0)){
    console.log(Year + " is a LEAP YEAR");
}let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}