//immediately invoked function expressions IIFE
//function is immediately executed

function one(){
    console.log("db connected");
    
}

one();

//named IIFE
(function two(){
    console.log("db connected");
    
})();
//db connected

//Unnamed IIFE
((name)=>{
    console.log(`db connected two ${name}`);
    
})("disha");
//first parenthesis is function defination and second is function call
//it is used because of global scope pollution
//semicolne is needed at end 

