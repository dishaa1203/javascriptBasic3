function calculateCartPrice(...num1){//rest operator ...
    return num1
}
//without rest only one value is passed
console.log(calculateCartPrice(200,300,400));//[ 200, 300, 400 ]

function calculateCart(val1,val2,...num1){//rest operator ...
    return num1
}
console.log(calculateCart(400,5,64,24,24));//[ 64, 24, 24 ]

const user = {
    username : "disha",
    price:299
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)//username is disha and price is 299

handleObject({
    username:"abc",
    price:897
})//username is abc and price is 897

const myarr=[24,32,43,5,454,64]

function returnSecondValue(getarray) {
    return getarray[1]
}

console.log(returnSecondValue(myarr));//32
