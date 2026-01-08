//this keyword
//this function is for current context

const user ={
    username:"disha",
    price:786,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
        /*disha, welcome to website
{ username: 'disha', price: 786, welcomeMsg: [Function: welcomeMsg] }
sam, welcome to website
{ username: 'sam', price: 786, welcomeMsg: [Function: welcomeMsg] }
{}*/
    }

}

user.welcomeMsg()//disha, welcome to website

user.username="sam"

user.welcomeMsg()//sam, welcome to website

console.log(this);
/*disha, welcome to website
sam, welcome to website
{}*/

//arrow function

function one(){
    let username="disha"
    console.log(this.username);//undefined
    
}
one()

const two =function(){
    let username="disha"
    console.log(this.username);//undefined

}
two()

//arrow function
const three = () =>{
    let username="disha"
    console.log(this.username);//undefined
}
three()

const addTwo= (num1,num2)=>{
    return num1+num2
}

console.log(addTwo(3,5));

//implicit return
//const additionnum = (num1,num2)=> num1+num2

const additionnum = (num1,num2)=> (num1+num2)
//return is not nedded to be written

const namePrint = (name) => ({username:"disha"})
console.log(namePrint());

const myArray =[3,43,65,456,3657]

myArray.forEach()