//global and local scope

var c=300
let a =233
if(true){
    let a = 10
const b=4
var c=3
}
//{} are scope

console.log(a);
//console.log(b);
console.log(c);
array=[3,345,3543,23]
for (let i=0;i<array.length;i++){
    const element =array[i]
}


//scope level and mini hosting

function one(){
    const username = "disha"
    
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
    
}
one()//disha
//child fuction can access parent function variable

if (true){
    const username ="disha"
    if (username==="disha"){
        const website = " youtube"
        console.log(username + website);//disha youtube
        
    }
    //console.log(website);
    
}
//console.log(username);

// interesting example

console.log(addOne(6));//7

function addOne(num) {
    return num + 1
    
}

addOne(5)


//console.log(addTwo(8));
//can not access before declaration when storing in variable

//expression
const addTwo = function (num){
    return num + 2
}

