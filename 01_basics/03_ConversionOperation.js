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