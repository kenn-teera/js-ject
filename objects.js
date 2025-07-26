//object map?

//object literal
const car = {
    make: "Mercedes-Benz",
    model: "A-Class",
    year: 2024,
    displayInfo() { //Method
        console.log(`wow this is method`);
        console.log(`${this.make} ${this.model}, Year: ${this.year}`); // This keyword อ้างอิงถึงชื่ออยู่ใน object
        // console.log(this.make + ' ' + this.model + ' ' + Year + ' ' + this.year); same as above
    },
    displayInfo2: function() { //Method
        console.log(`same as above right ;)`);
        console.log(`${this.make} ${this.model}, Year: ${this.year}`);
    }  
};

console.log(car.make)
car.displayInfo()
car.displayInfo2()

//object new keyword
const date = new Date();
console.log(date);

//object constructor
function Car (make,model,year) { // mom model แม่แบบ 
    this.make = make;
    this.model = model;
    this.year = year;
    this.displayInfo = function() { //Method
        console.log(`${this.make} ${this.model}, Year: ${this.year}`);
    }
}

const car1 = new Car("cat1", "notcat" ,20)
const car2 = new Car("cat2", "cat" ,2)

console.log(car1.make)