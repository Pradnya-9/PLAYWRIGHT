// Triangle Classifier:

// Write a program that classifies a triangle based on its side lengths.
//  Given three input values representing the lengths of the sides, determine 
// if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), 
// or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let side_a = 10;

let side_b = 20;

let side_c = 30;

if (side_a === side_b && side_b === side_c)

    console.log("It is an equilateral triangle");

else if (side_a === side_b || side_b === side_c || side_c === side_a)

    console.log("It is an isoceles triangle");

else if (side_a !== side_b && side_b !== side_c && side_c !== side_a)

    console.log("It is an scalene triangle");