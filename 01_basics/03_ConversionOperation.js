let score = "33abc"
console.log(typeof score);//string
console.log(typeof(score)); //another method to see typeof but same as above 
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //Number
console.log(valueInNumber);//NAN => not a number

//"33" => 33
//"33abc" => NAN
//true => 1; false => 0

let isLoggedIn = "Tejas"
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);//true

//1 => true ; 0 => false
//"Tejas" => true
let someNumber = 32
let stringNumber = String(someNumber)
console.log(stringNumber);//32
console.log(typeof stringNumber);//string

//****************Operations********************//
let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = "Tejas"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // priority first to " " here => 122
console.log(1 + 2 + "2");// prority here to + => 32
console.log(1 + "2" + "2"); //122

console.log((3+4) * 5 % 3);//practice to use ()

console.log(true); //true
console.log(+true);//1
console.log(+ ""); //0

let gameCounter = 100
gameCounter++
console.log(gameCounter); //101

let GameCounter = 100
++GameCounter;
console.log(GameCounter);//101 //but in post fix and prefix are different 


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"