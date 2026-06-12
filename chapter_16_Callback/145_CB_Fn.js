function cafe(item, callWhenTableisReady){
console.log("Finding....1");
console.log("Finding....2");
console.log("Finding....3");

callWhenTableisReady();

}
function callWhenTableisReady(){

    console.log("Calling 1234567891");

}

cafe("Burger",callWhenTableisReady);

cafe("Pizza", function(){
    console.log("calling 111111111111")
})


cafe("Momos", ()=>{
    console.log("calling 4564564562")
})
