//how code executes 
//execution context
 //js execution context
 //global execution context
 // it is reffere by this 
 //browser is window access


//global execution context
//functional execution context
//Eval execution context


//code => memory creation phase => execution phase
//memory creation => var memory is allocate
//execution=>code is executed

let val1 = 10
let val2 =50
function addNum(num1,num2){
    let total =num1 + num2
    return total 
}
let result1 = addNum(val1,val2)
let result2 = addNum(2,5)

/*first cycle 
   1)global phase  =>this

   2)memory phase
    val1=>undefined
    val2=>undefined
    addNum=>definiton
    result1=>undefined
    result2=>undefined

  second cycle  
   3)execution phase
    val1=10
    val2=50
    addNum=>new executional contex=>new variable environment + execution thread
      1)memory phase
       val1=>undefined
       val2=>undefined
       total=>undefined
      2)execution context
       num1=10
       num2=50
       total=60
       global execution is deleted after completion
    addNum=>new executional contex=>new variable environment + execution thread
      1)memory phase
       val1=>undefined
       val2=>undefined
       total=>undefined
      2)execution context
       num1=2
       num2=5
       total=7
       global execution is deleted after completion

  call stack=>functions are called and they use stack for nested function
  use LIFO

*/

function one() {
    three()
    console.log("one");
    two() 
}

function two() {
    console.log("two"); 
    three()
}

function three() {
    console.log("three");
}    
one()
//two()
//three()
/*three
one
two
three
*/