function validateStatusCode(status){
    if( status>=200&& status<300){
        console.log("Request is fine ");
    }else console.log("Server Error ");
}

const validateStatusCode_Exp = function (status){
    if (status >=200 && status <=300){
        console.log("Request is fine");

    }else console.log(" Server Error ");
}

const validateStatusCode_Arrow = status=>{
if (status >=200 && status <=300){
        console.log("Request is fine");

}else 
    
        console.log("Server Error ");
    
}

 validateStatusCode(400);
 validateStatusCode_Exp(0);
 validateStatusCode_Arrow(400);
 