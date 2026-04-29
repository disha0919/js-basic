//Date 

// let myDate = new Date();
// console.log(myDate);//o/p2026-04-29T03:28:07.413Z not readable at all
// console.log(myDate.toString());//2026-04-29T03:28:07.413Zthis is the o/p
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

let myCreateDate = new Date(2026, 0, 4)//months are start from 0 in JS
// console.log(myCreateDate.toDateString());

//++++++++Time Stamps+++++++++++


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);//1777437083898 ms = o/p
// console.log(myCreateDate.getTime());

//convert in second
// console.log(Math.round(Date.now()/1000));


 let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());



 