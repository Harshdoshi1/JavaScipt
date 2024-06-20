
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


//arrow function => 

// const greeting = function(username){
//     console.log("hello " +username);  // normal
// }

// greeting("harsh");

// const greeting = (username) => console.log("hello " ,username)  // arrow

// greeting("harsh");

// const num = (x,y) => x/y * 100;  

// console.log(`${num(50,100)}%`)

// // random cards 

// let cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

// shuffle(cards);

// console.log(cards);
// console.log(cards[0]);
 
// function shuffle(array){
//     let currentindex = array.length;

//     while(currentindex != 0){
//         let randomindex = Math.floor(Math.random()* array.length);
//         currentindex -=1;

//         let temp = array[currentindex];
//         array[currentindex] = array[randomindex];
//         array[randomindex] = temp;
//     }

//     return array;
// }

// // nested function

// let username = "harsh";
// let messages = 0;

// login();

// function login(){

//     displayusername();
//     displaymessage();

//     function displayusername(){
//         console.log(`hello ${username}`);
//     }
//     function displaymessage(){
//         console.log(`you have ${messages}`);
//     }
// }

// map = is an object that holds key-pair value of any data type

// const store = new Map([
//     ["T-Shirt" , 20],
//     ["jeans" , 30],
//     ["socks" , 10],
//     ["underware" , 50]
// ]);

// store.get("T-Shirt");

// store.forEach((value, key) => console.log(`${key}` ,$,{value})); // error

// //object

// const car = {
//     model : "mustang",
//     color : "red",
//     year : 2024,

//     drive : function(){
//         console.log("you drive the car");
//     },
//     break : function(){
//         console.log("you break the car");
//     }
// }

// console.log(car.model);
// console.log(car.color);
// console.log(car.year);

// car.drive();
// car.break();

// class player{
    
//     score = 0;

//     start(){
//         console.log("you start the game ");
//     }
//     pause(){
//         console.log("you paused the game ");
//     }
// }

// const player1 = new player();

// console.log(player1.score);

// player1.start();

// constructor = is a method of a class used to assign properties and accept arguments

// class student{

//     constructor(name,age,gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }

// student1 = new student("harsh",20,8);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();

// static = belongs to class not objects
//          properties : useful for cathes, fixed confugration
//          methods : useful for utilities

// class car{

//     numberofCar = 0;
//     constructor(model){
//         this.model = model;
//         this.numberofCar += 1;
//     }

//     static start(){
//         console.log("1...2...3...go");
//     }
// }

// const car1 = new car("Mustang");
// const car2 = new car("Corvette");
// const car3 = new car("BMW");

// console.log(car1.numberofCar);     
// console.log(car1.model);
// car.start();

// inheritence 

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`${this.name} is sleeping`);
//     }
// }

// class dog extends Animal{

//     name = "german shefard"
//     run(){
//         console.log(`the ${this.name} is running`);
//     }
// }

// class bird extends Animal{

//     name = "falcon"
//     fly(){
//         console.log(`the ${this.name} is flying`);
//     }
// }

// class fish extends Animal{

//     name = "goldfish"
//     swim(){
//         console.log(`the ${this.name} is flying`);
//     }
// }

// const dog1 = new dog();
// const fish1 = new fish();
// const bird1 = new bird();

// console.log(dog1.name);
// console.log(fish1.name);
// console.log(bird1.name);
// dog1.eat();
// console.log(dog1.alive);

// super class = refers to parent class 
//               commonly used to invoke constuctors of parent 

// class Animal{

//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class dog extends Animal{

//     constructor(name,age,runspeed){
//         super(name,age);
//         this.runspeed = runspeed;
//     }
// }

// class bird extends Animal{

//     constructor(name,age,flyspeed){
//         super(name,age);
//         this.flyspeed = flyspeed;
//     }

// }

// class fish extends Animal{

//     constructor(name,age,swimspeed){
//         super(name,age);
//         this.swimspeed = swimspeed;
//     }

// }

// const dog1 = new dog("german",10,30);

// console.log(dog1.name);
// console.log(dog1.age);

// //get = binds an objects properties into a function when that property is acceesed

// class car{
//     constructor(power){
//         this._gas = 25;
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;   
//     }
//     get gas(){
//         return `${this._gas}L`;
//     }
// }

// let car1 = new car(400);

// console.log(car1.power);
// console.log(car1.gas);

// anonymous object = object without a name 
//                    not directly referenced 

// class   Card{
//         constructor(value, suit){
//             this.value = value;
//             this.suit = suit;
//         }
// }

// const cards = [
//     new Card("A","Heart"),
//     new Card("A","diamond"),
//     new Card("A","spade"),
//     new Card("A","club"),
//     new Card("2","Heart"),
//     new Card("2","diamond"),
//     new Card("2","club"),
//     new Card("2","Heart")
// ]

// cards.forEach(card => console.log(`${card.value} ${card.suit}`))

// // error and throw  
// // error = object with a description something went wrong
// // throw excutes a user define error   

// try{
//     // console.lag();

//     let x = window.prompt("enter a number!");
//     x = Number(x);

//     if(isNaN(x)) throw "thats wasnt a number"
//     if(x == " ") throw "its empty";
// }
// catch(error){
//     console.log(error); 
// }

// setinterval() = 