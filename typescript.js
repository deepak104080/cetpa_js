// let num = 5;
// console.log(num);
// let str = 'String';
// console.log(str);
// let status1 = true;
// console.log(status1);
// console.log(status1);
var num;
num = 5;
var str = 'new string';
str = 'false';
var loginStatus = true;
loginStatus = false;
var temp = 5;
var temp2 = 5;
//Array
var arr = [1, 2, 3, 4, 5, 6];
arr.push(10);
var arr1 = [1, 'name', false, 44];
arr1.push(1111);
arr1.push('aiusgef');
//Tuples
var arr2 = [1, 'name', false, 44];
console.log(arr2);
//Union
var statusCheck;
statusCheck = true;
statusCheck = 5;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
console.log(Direction.North);
//Object
var obj = {
    name: 'name',
    age: 55,
    status1: false
};
var obj2222 = {
    name: 'name',
    age: false
};
// obj.name = 'new name';
console.log(obj);
console.log(obj2222);
var obj1 = {
    name: 'name',
    age: 55,
    status1: false
};
var obj2 = {
    name: 'name',
    age: true
};
console.log(obj1);
console.log(obj2);
// obj2.name = 'new name';
// type distance = number | string;
// interface dist = number | string;
// js - type conversion, type coercion
var temp22 = '20';
console.log(parseInt(temp22));
console.log('altudo' + 1111);
//Type Assertion
var customerid;
var customer_id = customerid;
//Function
var a = 5;
var b = 6;
function sum(num1, num2) {
    return num1 + num2;
}
var tempsum = sum(a, b);
console.log(tempsum);
function log(data) {
    console.log(data);
}
log('data....');
log(true);
log(5555);
var sum111 = function (num1, num2) { return 5 + 6; };
var diff111 = function (num1, num2) { return 6 - 6; };
// const sum1111:CalcFn = ('str', num2) => str + num2;
// const diff111:CalcFn = (num1, num2) => num1 - num2;
