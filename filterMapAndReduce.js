// filter map and reduce

// for each loop 

const coding =["js","cpp","ruby","python","swift","css"]

const values = coding.forEach((item)=>{
    console.log(item);
    return item

})
console.log(values);
//undefined
//it does not print values 

const myNum=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNum.filter((num)=>num>4)
console.log(newNums);
//[ 5, 6, 7, 8, 9, 10 ]

const newNum=myNum.filter((num)=>{
    return num>4
})
//[] for num>4 without return
console.log(newNum);
//[ 5, 6, 7, 8, 9, 10 ]

const myNums =[]

myNums.forEach(()=>{
    if (num > 4) {
        newNums.push(num)   
    }
})

console.log(newNum);

const student = [
    {name:'disha',subject:"DBMS",course:"computer",year:2023},
    {name:'shreya',subject:"TOC",course:"entc",year:2020},
    {name:'sami',subject:"DBMS",course:"aids",year:2019},
    {name:'stella',subject:"TOC",course:"aiml",year:2017},
    {name:'flora',subject:"SPOS",course:"ai",year:2024},
    {name:'bloom',subject:"SPM",course:"software",year:2026},
    {name:'winter',subject:"DBMS",course:"computer eng",year:2018},
    {name:'aurora',subject:"SPOS",course:"computer",year:2025}
]

const userStudent1= student.filter((std)=>std.subject==="DBMS")

const userStudent2= student.filter((std)=>std.course==="ai")

const userStudent= student.filter((std)=>{
    return std.year >= 2023 && std.name==="disha"
})
console.log(userStudent);

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

//map and filter are callback function

const newNumbers1= myNumbers.map((num)=>num*10)

//chaining 
const newNumbers=myNumbers
        .map((num)=> num * 10)
        .map((num)=>num + 1)  
        .filter((num)=>num>=40)
console.log(newNumbers);

//reduce method 
const array =[1,2,3,4,5,6,7,8,9,10]

const myTotal = array.reduce(function(acc,curVal){
    console.log(`accumulator:${acc} and current value:${curVal}`);
    return acc+ curVal
},0)
//0 is accumulator's initialization
console.log(myTotal);

const mySum=array.reduce((acc,curr)=>acc+curr,0)
console.log(mySum);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev corse",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

const priceToPay= shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);