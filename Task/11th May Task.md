What is the difference between var, let, and const?

var is function-scoped, can be re-declared and re-assigned, and is hoisted with an initial value of undefined.
let is block-scoped, can be re-assigned but not re-declared in the same scope, and is hoisted 
but remains in the Temporal Dead Zone until declared.

const is also block-scoped and TDZ-protected, but it cannot be re-assigned and must be initialized
 when declared. For objects and arrays declared with const, 
 their contents can still be modified, but the reference cannot be changed.

What is the Hoisting in JavaScript?

Hoisting is JavaScript's behavior of processing declarations before code execution.
Variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but remain in the Temporal Dead Zone until their declaration is reached.
Function declarations are fully hoisted, but function expressions and arrow functions are not.

Can we change the value of a const variable? Explain with an example.


What is the difference between function scope and block scope? How does it relate to var vs let/const?


Function scope refers to the usage of variables within that function and can be called anywhere inside that function. 

Block scope refers to the usage of variables within the specified block and cannot be called outside to it. 


function f() {
  if (true) {
    var x = 1;
    let y = 2;
  }
  console.log(x); // 1
  console.log(y); // ReferenceError
}
What will be the output of the following code, and why?

 for (var i = 0; i < 3; i++) {
     setTimeout(() => console.log(i), 100);
   }

   for (let j = 0; j < 3; j++) {
     setTimeout(() => console.log(j), 100);
   }
   
The output is : 3 3 3 0 1 2 
      First loop (var i): var is function-scoped, so all callbacks close over the same i. By the time the timeouts run the loop has finished and i === 3, so each callback logs 3.

       Second loop (let j): let is block-scoped with a fresh binding each iteration, so each callb