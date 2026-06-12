function print(){
    console.log("Normal function");
}

function placeOrder (ClipboardItem ,Pramodcallback){
    console.log("Hi , Your order is placed");
    Pramodcallback();

}



//first  way 
placeOrder("Pizzza",print);

//Second way Anonymous function 

placeOrder ("Burger", function () {
    console.log ("Anonymous function,I am also function without name!");

})

//Third  way Arrow function 

placeOrder ("Momos", () => {
    console.log ("Arrow function,I am also function without name!");

})

