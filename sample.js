 //1.Variables
 let name="soniya";
 var x= 10;
 const pan_number="ahbanabh";
 console.log(name); soniya
 console.log(x); 10
 console.log(pan_number); ahbanabh

 2. //Variable Names
 _userID
 $discount
 MyVariable

 //because of the variable start with $ sign, letter and underscore. variable cannot be the same reserverd keywordsahbanabh

 3. //Data Type Introduction
 String;
 let name1 = soniya;
 let mark = 200;
 console.log(`Student name is ${name1} and their marks is ${mark})`; //Student name is soniya and their marks is 200
  
 //Number;
 //var y=50;
     y = 60;
     console.log(Before,y) //50;
     console.log(after,y)  //60;

  Boolean;
  const x2=20;
  const y2=20;
  if(x2==y2) {
    console.log(true)
  }
  else{
    console.log(false)
  }  
 
   true;
undefined;
//let x3 = ;
//console.log(x3) undefined;

null;
let y3=null;
console.log(y3),

//4.DataTypes;
"42" -string 
 42 -number
 true- Boolean
undefined -undefined
["apple","banana"]-Array
null - object

//5. Data Type Checking
console.log(typeof("Hello World"));
console.log(typeof(42));
console.log(typeof (true));
console.log(typeof[1,2,3]);
console.log(typeof(undefined));

//6. String
let name2 = "Soniya";
let name3 = "Diwakar";
console.log(name2+ '',+name3); //Soniya Diwakar


//7.Simple Math
let marks1 = 35;
console.log(marks1+2); 37
console.log(marks1-5); 30
console.log(marks1*2); 70
console.log(marks1/2) ;17.5

//8.Basic console
console.log("Hello, JavaScript!");
console.alert("Hello, JavaScript!");
console.warm("Hello, JavaScript!");

//9.Comments
//single line comment-its a brain of web-page
//multiple-line -its a object oriented with capacity,interpreted, client-side and eventbased,scipted language.

//10. Assignment Operators
let num = 10;
console.log(num+=5) //15
console.log(num*=2) //30
console.log(num-=7) //23
console.log(num/=3) //7.66
console.log(num%=4) //3.04

//11. Assignment Operators
let x5 = 5;
console.log(x5); 5
let y5 = x++;
console.log(y5); 6
let p = 5;
console.log(p); 5
let q = ++p;
console.log(q); 6

//12. Comparison Operators
let number1 = 10
let number2 = 11
if(number1==number2){
    console.log("true")
}
else{
    console.log("false")
}
//result is false

let number3=Symbol(10)
let number4=Symbol(10)
if(number3===number4){
    console.log("equ")
}
else{
    console.log("not")
}
//result is not.
let number5 = 15;
let number6 = 16;
if(number5!=number6){
    console.log("true")
}
else{
    console.log("false")
}
//result is true.
let number7 = 6;
let number8 = 5;
if(number7>number8){
    console.log(number7); //result is 6.
}
else(number7<number8) {

    console.log(number8); //result is 5
}
let number9 = 11
let number10 = 11
if(number9>=number10){
    console.log(true);
}
else{
    console.log(false);
}
//result is true
if(number9<=number10){
    console.log(true);
}

else{
    console.log(false);
}
   // result is true
    
