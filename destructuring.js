//Destructuring
//Object
const user = {
  namej: "John Doe",
  agej: 30,
  addressj: {
    streetj: "123 Main Street",
    cityj: "New York"
  }
};

const { namej, agej, addressj: { streetj, cityj } } = user;
console.log(namej); // "John Doe"
console.log(agej); // 30
console.log(streetj); // "123 Main Street"
console.log(cityj); // "New York"

//Array
const numberrrr = [1, 2, 3, 4, 5];
const [firstNumber, secondNumber, thirdNumber] = numberrrr;
console.log(firstNumber,secondNumber,thirdNumber)

//rest
const numberas = [10,20,30,40,50,60];
const [num1,num2,...rest] = numberas;
console.log(num1)
console.log(num2)
console.log(rest)

//swap var
let x1 = 0;
let y1 = 10;

[x1,y1]=[y1,x1]
console.log(x1,y1)