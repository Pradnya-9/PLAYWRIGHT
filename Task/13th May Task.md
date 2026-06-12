Research Hoisting and TDZ for the var, let and const with explain.
HOISTING

Hoisting is a JavaScript behavior where the interpreter appears to move the declarations of functions, variables, and classes to the top of their scope before the code executes. 

Technically, JavaScript doesn't actually "move" your code. Instead, during the compilation phase, the engine scans for declarations and sets up memory space for them before it starts the execution phase. 

1. Variable Hoisting

How a variable hoists depends on how it was declared:

var: Declarations are hoisted and initialized with undefined. You can reference a var variable before its line of declaration without an error, but its value will be undefined until the code execution reaches the assignment.


let and const: These are also hoisted but are not initialized. They enter a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration is reached. Accessing them before declaration results in a ReferenceError

The Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the period between the start of a scope and the point where a variable is declared and initialized. 

Behavior: If you attempt to access a let or const variable during this period, JavaScript throws a Reference Error.

Purpose: It was introduced in ES6 to make code safer by preventing the use of variables before they are properly initialized, making bugs easier to track.

End of TDZ: The zone ends the moment the variable is initialized with a value or its declaration line is executed. 