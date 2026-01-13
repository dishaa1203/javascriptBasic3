//high order array loops

//loops related to arrays

// for of  

["",""," "]
[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

/*each char is  
each char is w
each char is o
each char is r
each char is l
each char is d
*/

//maps

//they are like array , it has unique value, it is an object
//it has key value pair
//it remembers order
//no duplicate value

const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map);
//loops on map

for (const [key ,value] of map) {
    console.log(key,':-',value);
    
}

const myobj ={
    'game1':'NFS',
    'game2':'Spiderman'
}
//for (const [key,value] of myobj) {
//   console.log(myobj);   
//}
// for of loop does not work on objects


const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

//for in loop
//it can be used for obects

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(key);
}
//prints arrays key like num when  console.log(key);
for (const key in programming) {
    console.log(programming[key]);
}

for (const key in map) {
    console.log(key);
    
}
//map is not iteratable therefor for in loop does not work

//for of is for array , map
//for in is for objects

//for each loop
//uses function and give callback function dont have name and parameter is of array like item or val

const coding =["js","cpp","ruby","python","swift","css"]

coding.forEach(function (item){
    console.log(item);
})

coding.forEach((val)=>{
    console.log(val);
})

//we can also declare it like function
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding =[
    {
        languageName:"javscript",
        languageFileName:"js"
    },
        {
        languageName:"java",
        languageFileName:"java"
    },
        {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
//for each is used for array which has objects in it 