//if()

let age1 = 18;
if (age1 >= 18){
    console.log("You are and adult. True")
} else {
    console.log("You are not adult. False")
}

//Ternary let var = (condition) ? True: False;
let message = (age1 >= 18) ? "You are and adult. True": "You are not adult. False";
console.log(message)

let score = 85;
if (score >= 90){
    console.log("A.")
} else if (score >= 80){
    console.log("B.")
} else if (score >= 70){
    console.log("C.")
}else if (score >= 60){
    console.log("D.")
}else {
    console.log("F.")
}

//switch()
let day = 3;
let dayName;

switch(day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName)

//for
console.log("for loop")
let fruits = ["apple","banana","orange","grape","mango"];

for (let i =0; i < fruits.length; i++){
    console.log(fruits[i])
}

for (let i = 1;i <= 5; i++){
    console.log(i)
}

//for in use with object
console.log("for in loop")

let person1 = {
    name11: "john",
    age:40,
    city:"new york"
}

for (let key in person1){
    console.log(key + ": " + person1[key])
}

// for of loop array string
let str = "testloop"

for (let strl of str){
    console.log(strl)
}

//while
let i = 0;
while (i<5){
    console.log(i)
    i++
}

//do while
let j =0;
do {
    console.log(j," j")
    j++
}while(j<5)