// var a=1;
// console.log(a);
// a="nsrit";
// console.log(a);
// a=true;
// console.log(a);
// a=1.4;
// console.log(a);

// if(a===1.4){
//     let b=1.4;
//     console.log(b);
// }
// console.log(b);

function chv(){
    var c=1.4;
    console.log(c);
    if(c===1.4){
        let d=1.5;
        console.log(d);
    }
   console.log(c+1);
   console.log(c+2);
}
chv();

function chv2(name,rollnum){}

let arr=[1,2,3,4,5];
console.log(arr);
arr.reverse();
console.log(arr);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.length);
var sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
//arrow function definition
// arrow function  syntax: functionname=(parameters) => {expression}
const sum2=(arr) => {
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sum2(arr));

//ananymous functions
//anonymous function syntax: (parameters) => {expression}
//example: () => console.log("Hello World!")
//calling anonymous function
//IIFE (Immediately Invoked Function Expression)
(() => console.log("Hello World!"))();
console.log(sum2([1,2,3,4,5]));