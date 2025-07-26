// Array Iterations

//For Each
const number01 = [1,2,3,4,5];
number01.forEach(function(number){
    console.log(number)
});

//map()
const number02 = [1,2,3,4,5];
const double = number02.map(function(number){
    return number * 2;
});
console.log(double,"map")

//filter()
const number03 = [1,2,3,4,5];
const even = number03.filter(function(number){
    return number % 2 === 0;
})
console.log(even,"filter")

//reduce()
const number04 = [1,2,3,4,5];
const sum04 = number04.reduce(function(total,number){
    console.log(total,number)
    return  total + number;
},0);
console.log(sum04,"reduce");

//some ตัวเลขอย่างน้อย 1 ตัวที่ตรงตามเงื่อนไข
const number05 = [1,2,3,4,5];
const hasEven = number05.some(function(number){
    return number % 2 === 0;
})
console.log(hasEven,"some");

//every ทุกตัว
const number06 = [1,2,3,4,-5];
const allPositive = number06.every(function(number){
    return number > 0;
})
console.log(allPositive,"every");

//find element แรกใน array ที่เจอ 
const number07 = [1,3,4,5];
const firstEven = number07.find(function(number){
    return number % 2 === 0;
})
console.log(firstEven,"find");

//find index
const number08 = [1,2,3,4,5];
const firstEvenIndex = number08.findIndex(function(number){
    return number % 2 === 0;
})
console.log(firstEvenIndex,"findIndex");
