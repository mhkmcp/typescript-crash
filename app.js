"use strict";
var aString = "hi";
var year;
year = 2021;
year = "2021";
// year = false;
var arr = ['a', 'b', 'c'];
var nums = [2, 3, 5, 2, 8, 2];
var flags = [true, false, false];
flags.push(true);
var mix = [1, "2", false, "true"];
mix[3] = 90;
// object 
var person = {
    name: "HK",
    age: 25
};
person.name = "hola";
person.age = 33;
var this_year;
this_year = "jakdjfk";
this_year = 3423;
// this_year = false
function sum(a, b) {
    return a + b;
}
sum(2, 5);
var calSum;
calSum = function (first, second) {
    return first + second;
};
calSum(2, 3, 4);
var mike = {
    name: "mike",
    age: 34
};
var Person = /** @class */ (function () {
    // name: string;
    // private age: number;
    // constructor(n: string, a: number) {
    //     this.name = n;
    //     this.age = a;
    // }
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi, my name is " + this.name + " and I am " + this.age;
    };
    return Person;
}());
// let john = new Person("John", 34);
// console.log(john.greet());
var inputName = document.querySelector('#name');
var inputAge = document.querySelector('#age');
var inputForm = document.querySelector('form');
var greeting = document.querySelector('.greeting');
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerHTML = person.greet();
    inputForm.reset();
});
// generics 
function doSomething(arg) {
    return arg;
}
doSomething(5);
doSomething("string");
doSomething(4);
doSomething("hello");
var abook = {
    id: 1,
    name: "Title 1",
    data: "Review"
};
var bbook = {
    id: 1,
    name: "Title 1",
    data: ["Review 1", "Review 2"]
};
// enums 
var ManufacturerMake;
(function (ManufacturerMake) {
    ManufacturerMake[ManufacturerMake["TESLA"] = 0] = "TESLA";
    ManufacturerMake[ManufacturerMake["AUDI"] = 1] = "AUDI";
    ManufacturerMake[ManufacturerMake["MERCEDES"] = 2] = "MERCEDES";
    ManufacturerMake[ManufacturerMake["VOLVO"] = 3] = "VOLVO";
    ManufacturerMake[ManufacturerMake["BMW"] = 4] = "BMW";
})(ManufacturerMake || (ManufacturerMake = {}));
;
var myCar = {
    year: 2021,
    // make: 3
    make: ManufacturerMake.VOLVO,
};
console.log(myCar.make);
