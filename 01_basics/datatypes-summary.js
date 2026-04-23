//how we store data and access data from memory iske 2 tarikek hai

//1. Primitive (refrence memory ka nhi diya jata copy karke diya jati hai and if we change it to copy me hi changes hote hai)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
 
let Name = "disha";
const num = 99;
let isLoggedIn =true;
let isGameStart = null;
let age;
const bigNum = 2345454n;
let personId = Symbol('123');

//JavaSCRIPT is dynamically typed

//2. NonPrimitive or refrence type(main memory me change kar sakte hai memory ka access diya jata hai)
//Arrays, Objects, Funcnions

const heros = ["shaktiman" , "naagraj"]; //arrays

let myObj = { //objects
    name: "disha",
    age : 21,
}

const myFunction = function(){
    console.log("hello world");
    
}