// let num = 5;
// console.log(num);

// let str = 'String';
// console.log(str);

// let status1 = true;
// console.log(status1);
// console.log(status1);


let num:number;
num = 5;

let str:string = 'new string';
str = 'false';


let loginStatus:boolean = true;
loginStatus = false;

let temp = 5;
let temp2 = 5;

//Array
let arr:number[] = [1,2,3,4,5,6];
arr.push(10);


let arr1:any[] = [1,'name', false, 44];
arr1.push(1111);
arr1.push('aiusgef');


//Tuples
let arr2:[number, string, boolean, number] = [1,'name', false, 44];
console.log(arr2);

//Union
let statusCheck:number|boolean;
statusCheck = true;
statusCheck = 5;


//Enum
enum Direction {
    North,
    South = 'South',
    East = 'East',
    West = 'West'
}


console.log(Direction.North);
// Direction.North = 5;
// console.log(Direction.North);


type user = {
    readonly name: string,
    age: number | boolean,
    status1?: boolean
}

//Object
let obj:user = {
    name: 'name',
    age: 55,
    status1: false
}
let obj2222:user = {
    name: 'name',
    age: false,
}

// obj.name = 'new name';

console.log(obj);
console.log(obj2222);


interface UserInterface {
    readonly name: string,
    age: number | boolean,
    status1?: boolean
}


let obj1:UserInterface = {
    name: 'name',
    age: 55,
    status1: false
}

let obj2:UserInterface = {
    name: 'name',
    age: true,
}

console.log(obj1);
console.log(obj2);

// obj2.name = 'new name';



// type distance = number | string;

// interface dist = number | string;


// js - type conversion, type coercion
let temp22 = '20';
console.log(parseInt(temp22))
console.log('altudo' + 1111);


//Type Assertion
let customerid:any
let customer_id = <number>customerid;


//Function
let a:number = 5;
let b:number = 6;


function sum(num1:number, num2:number) {
    return num1 + num2;
}

let tempsum:number = sum(a, b);
console.log(tempsum);



function log(data: number | string | boolean) {
    console.log(data);
}
log('data....');
log(true);
log(5555);



interface CalcFn {
    (num1: number, num2: number): number
}

const sum111:CalcFn = (num1, num2): number => 5 + 6;
const diff111:CalcFn = (num1, num2): number => 6 - 6;


// const sum1111:CalcFn = ('str', num2) => str + num2;
// const diff111:CalcFn = (num1, num2) => num1 - num2;