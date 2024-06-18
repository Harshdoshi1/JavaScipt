
// let firstName = "harsh";
// let age = 20;
// let student = true;

// let = a variable name can be asigned once
// var = means variable name can be asigned multiple times
// const = meants constant a variable name can be asigned once 
// and its value can be chanaged , can be used for pi etc 

//-------------------------------------------------------------

// //how to print in js 

// console.log("hello my name is",firstName);
// console.log("my age is",age);

//-------------------------------------------------------------

// // how to add text in html using js

// document.getElementById("p1").innerHTML =  firstName + " hello";

//-------------------------------------------------------------

// // how to add value in js variable from html 
// let username;

// document.getElementById("button").onclick = function(){
//     username = document.getElementById("mytext").value 
//     console.log(username); 
// }

//-------------------------------------------------------------

// // type conversion

// let x;
// let y;
// let z;

// x = Number("harsh"); //string to number
// y = String(3.24); // number to string
// z = Boolean(""); // string to boolean

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//-------------------------------------------------------------

// // q 1 find circumference of circle 2*pi*rad

// const pi = 3.14;
// let rad;

// rad = window.prompt("enter the radius :");
// rad = Number(rad);

// circumference = 2*pi*rad;

// console.log("circumference is :",circumference);

//-------------------------------------------------------------

// // math functions

// v = 3.14;

// console.log(Math.floor(v));
// console.log(Math.max(v));
// console.log(Math.ceil(v));
// console.log(Math.round(v));
// console.log(Math.pow(v,2));
// console.log(Math.sqrt(v));
// console.log(Math.abs(v));

//-------------------------------------------------------------

// counter using js

// let count;

// document.getElementById("increase").onclick = function(){
//     count += 1;
//     count = document.getElementById("num").innerHTML = count;
// }
// document.getElementById("decrease").onclick = function(){
//     count -= 1;
//     count = document.getElementById("num").innerHTML = count;
// }
// document.getElementById("reset").onclick = function(){
//     count = 0;
//     count = document.getElementById("num").innerHTML = count;
// }

//-------------------------------------------------------------

// simple if else 

// let age = 19;

// age = prompt("enter your age :");
// age = Number(age);

// if(age > 18){
//     console.log("you are an adult");
// }
// else if(age < 18){
//     console.log("you are a child");
// }
// else{
//     console.log("you are 18");
// }

//-------------------------------------------------------------

// //checkbox using js

// document.getElementById("btn").onclick = function(){

//     const sub = document.getElementById("check").checked;
//     const visa = document.getElementById("visa").checked;
//     const mastercard = document.getElementById("mastercard").checked;
//     const paypal = document.getElementById("paypal").checked;

//     if(!sub){
//         console.log("please subscribe for payment")
//     }
//     else if(sub && visa){
//         console.log("you subscribed via visa");
//     }
//     else if(sub && mastercard){
//         console.log("you subscribed via mastercard");
//     }
//     else if(sub && paypal){
//         console.log("you subscribed via paypal");
//     }
//     else{
//         console.log("please subscribe for payment")
//     }
// }

//-------------------------------------------------------------

// // star pattern using js 

// let symbol = window.prompt("enter your symbol : ");
// let row = window.prompt("enter your row : ");
// let column = window.prompt("enter your column : ");

// for(let i=1 ; i < row ; i++){
//     for(let j=1 ; j < column ; j++){
//         document.getElementById("num").innerHTML +=  symbol;
//     }
//     document.getElementById("num").innerHTML +=  '<br>';
// }

//-------------------------------------------------------------

// // function in js

// starting();

// function starting(){
//     let username = "harsh";
//     let age = 20;

//     happybirthday(username,age);
// }

// function happybirthday(username,age){
//     console.log("happy birthday to you!");
//     console.log("happy birthday to you!");
//     console.log("happy birthday to you!", username);
//     console.log("happy birthday to you!");
//     console.log("you are ", age , " old");
// } 

//-------------------------------------------------------------

// // ternary operator 

// check(false);

// function check(win){
//     win ? console.log("you won") : console.log("you lost");
// }

// // template literals 

// let name1 = "harsh";
// let age1 = 20;

// console.log(`hello ${name1} you are ${age1}`);

// let text = `hello ${name1} you are ${age1}`;

// document.getElementById("mylabel").innerHTML = text;

//-------------------------------------------------------------

// // number guessing game using js 

// const ans = Math.floor(Math.random()*10 + 1);

// let guesses = 0;

// document.getElementById("btn").onclick = function(){

//     let guess = document.getElementById("input").value 
//     guesses += 1;

//     if(ans == guess){
//         alert(`you guessed right number ${ans} with ${guesses} guesses taken`);
//     }
//     else if(ans < guess){
//         alert(`guess too small`);
//     }
//     else{
//         alert(`guess big`)
//     }
// }

//-------------------------------------------------------------

// // Temprature convertor in js

// document.getElementById("btn").onclick = function(){

//     let temp;

//     if(document.getElementById("cel").checked){
//         temp = document.getElementById("val").value;
//         temp = Number(temp);
//         temp = tocelcius(temp);
//         document.getElementById("anslabel").innerHTML = temp + "°C";
//     }
//     else if(document.getElementById("fer").checked){
//         temp = document.getElementById("val").value;
//         temp = Number(temp);
//         temp = tofer(temp);
//         document.getElementById("anslabel").innerHTML = temp + "°F";
//     }
// }

// function tocelcius(temp){
//     return (temp - 32)*(5/9); // °C
// }

// function tofer(temp){
//     return temp * 9/5 + 32; // °F
// }

//-------------------------------------------------------------

// // array in js 

// let fruits = ["apple", "mango", "orange"];

// fruits.push("banana");
// fruits.pop();
// fruits.unshift("guava");
// fruits.shift();

// console.log(fruits);

// //sort the array

// fruits.sort().reverse()

// for(let fruit of fruits){
//     console.log(fruit);
// }

//-------------------------------------------------------------

// // 2d array = array of array

// let games = ["pubg","cod","fifa"];
// let editing = ["prepro","davinci","capcut"];
// let lang = ["html","css","js"];

// let my2darray = [games,editing,lang];

// my2darray[0][0] = "gta";

// // console.log(my2darray);

// for(let list of my2darray){
//     for(let my of list){
//         console.log(my);
//     }
// }

//-------------------------------------------------------------

// // spread opertor 

// let numbers = [1,2,3,4,5,6,7,8,9];

// let maxi = Math.max(...numbers);

// console.log(maxi);

//-------------------------------------------------------------

// // call back in js

// sum(2, 3 , displayDOM)

// function sum(x, y , callback){
//     let result = x + y;
//     callback(result);
// }

// function displayconsole(output){
//     console.log(output);
// }

// function displayDOM(output){
//     document.getElementById("mylabel").innerHTML = output;
// }

//-------------------------------------------------------------

// // foreach in array 

// let game = ["bgmi","cod","fifa"];
// game.forEach(capitalize);
// game.forEach(print);

// function capitalize(element , index , array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// // console.log(game[0]);

// function print(element){
//     console.log(element);
// }

//-------------------------------------------------------------

// // map in array 

//     let game = [1,2,3,4,5];

//     let squares = game.map(square);
//     squares.forEach(print);

//     function square(element){
//         return Math.pow(element, 2);
//     }

//     function print(element){
//         console.log(element);
//     }

// // filter in array

//         let age = [10,20,30,40,50];

//         let adult = age.filter(filter);
//         adult.forEach(print);

//         function filter(element){
//             return element >= 18;
//         }

//         function print(element){
//             console.log(element);
//         }

// // reduce in array = it reduces array value in single value

//         let age = [10,20,30,40,50];

//         let newarr = age.reduce(check);

//         console.log(`your total is $${newarr}`);

//         print(newarr);

//         function check(total, element){
//             return total + element;
//         }

//         function print(element){
//             console.log(element);
//         }

// // ascending and descending order in js

// let arr = [1,2,3,4,5,6,7,8,9]

// let dese = arr.sort(descending);
// let aese = arr.sort(ascending);

// dese.forEach(print);
// aese.forEach(print);

// function descending(x,y){
//     return y-x;
// }

// function ascending(x,y){
//     return x-y;
// }

// function print(element){
// }


//arrow function ==> 

const greeting = function(username){
    console.log("hello " +username);  // normal
}

greeting("harsh");


