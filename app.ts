let aString = "hi";

let year: string | number;
year = 2021;
year = "2021";
// year = false;

let arr: string[] = ['a', 'b', 'c'];

let nums: number[] = [2, 3, 5, 2, 8, 2];

let flags: boolean[] = [true, false, false];
flags.push(true);

let mix: any[] = [1, "2", false, "true"];
mix[3] = 90


// object 
let person = {
    name: "HK",
    age: 25
}
person.name = "hola"
person.age = 33


type stringOrNum = string | number;

let this_year: stringOrNum;
this_year = "jakdjfk"
this_year = 3423
// this_year = false


function sum(a: number, b: number): number {
    return a + b;
}
sum(2, 5);

let calSum: (a: number, b: number, third?: number) => number;

calSum = (first: number, second: number) => {
    return first + second;
}
calSum(2, 3, 4);

interface PersonInterface {
    name: string;
    age: number;
}
let mike: PersonInterface = {
    name: "mike",
    age: 34
}

class Person implements PersonInterface {
    // name: string;
    // private age: number;

    // constructor(n: string, a: number) {
    //     this.name = n;
    //     this.age = a;
    // }
    constructor(public name: string, public age: number) { }

    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age}`;
    }

}

// let john = new Person("John", 34);
// console.log(john.greet());

const inputName = document.querySelector('#name') as HTMLInputElement;
const inputAge = document.querySelector('#age') as HTMLInputElement;
const inputForm = document.querySelector('form')!;
const greeting = document.querySelector('.greeting') as HTMLDivElement;

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerHTML = person.greet();

    inputForm.reset();
})


// generics 

function doSomething<T>(arg: T): T {
    return arg;
}

doSomething(5);
doSomething("string");
doSomething<number>(4);
doSomething<string>("hello");


interface book<T> {
    id: number;
    name: string;
    data: T
}

const abook: book<string> = {
    id: 1,
    name: "Title 1",
    data: "Review"
}

const bbook: book<string[]> = {
    id: 1,
    name: "Title 1",
    data: ["Review 1", "Review 2"]
}


// enums 

enum ManufacturerMake {
    TESLA,
    AUDI,
    MERCEDES,
    VOLVO,
    BMW
};

const myCar = {
    year: 2021,
    // make: 3
    make: ManufacturerMake.VOLVO,
};

console.log(myCar.make);
