//Variable all cann't redeclare except var
x = 5; //auto variable
var y = 10; //variable old school not recommend
let z = x+y; //let variable new school
console.log(z)

const a = 10; // const cann't reassigne new variable
const b = 20;
const c = a*b;
console.log(c)

let name1 = "Kenn"; //can reassigne 
name1 = "ken";
console.log(name1)

// Global Scope
{
//Block scope cannot use outside scope
    let x = "kenn";
    var a1 = "test";
    const a2 = "kenn1";
}
console.log(x)