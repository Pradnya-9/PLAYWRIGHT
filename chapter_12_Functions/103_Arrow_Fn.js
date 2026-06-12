// Arrow Function (ES6)

// const greet = function (name1) {
//     return "Hi" + name1;
// }

// let r = greet("Pramod");
// console.log(r);

// const greet2 = (name1) => "Hi" + name1;
// let r2 = greet2("Pramod");
// console.log(r2);

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
// 

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Dutta");

function add(a, b) {
    return a + b;
}
const add2 = (a, b) => a + b;
console.log(add(10, 20));


function say(){
    console.log('hello');
}
say();

const say2= () =>'hi';
console.log(say2());

const say1= () => console.log('HELLO');
say1();


const greet= name=>{

    const message="HI "+ name ;
    return message;
}


console.log(greet("Pradnya"));