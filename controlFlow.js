//control folw
//not all code should run immediately

//if condition
//only if condition is true then code will run

const isUserLoggedIn= true

if (isUserLoggedIn){
    console.log("user is logged in"); 
}

//we use comparison operator like <,>,<=,>=,==,!=,!==,=== check datatype also
//=== it is a strict equal
if(2==="2"){
    console.log("it is equal");
}

const temperature=39

if(temperature<45){
    console.log("less than 45 temp");
}
else{
    console.log("temperature is greater than 45");
}

const score = 200

if(score > 100){
    const power ="fly"
    console.log(`user power: ${power}`); 
}

const balance=9776

//implicit scope
if (balance>5000) console.log("test");
//console.log("test2"); it is unreadable code 

if(balance < 5000){
    console.log("less than 5000");
} else if (balance < 7500){
    console.log("less than 7500");
}else if (balance < 9000){
    console.log("less than 9000");
}else{
    console.log("less than 10000");
}

const userLoggedIn= true
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}

//switch case statement

const month =3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("augast");
        break;
    case 9:
        console.log("sept");
        break;
    case 10:
        console.log("oct");
        break;
    case 12:
        console.log("nov");
        break;
    case 12:
        console.log("dec");
        break;

    default:
        console.log("default case matched");
        break;
}
//without break after matching case all other case are executed expect default case

//truthy value
const useremail ="disha@gmail,com"
if(useremail){
    console.log("got user email");
}else{
    console.log("dont have user email");
}

//falsy values
//false,0,-ve val, BigInt ,"",null,undefined,NaN

//truthy values
//[],"0",'false'," ",{}//obj,function(){}//empty function

if (useremail.length === 0){
    console.log("array is empty"); 
}

const emptyObj={}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//false == 0,'' true
//0=='' true

//Nullish Coalesing Operator (??) : null undefined
//it is used when function execution when op is null or undefined 
let val1;
//val1 = 5 ?? 10  //5
val1 = null ?? 10  //10
//val1 =undefined ?? 15  //15
//val1=null ?? 10 ?? 20   //10
console.log(val1);

//terniary operator

//condition ? true : false

const teaPrice=100
teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");