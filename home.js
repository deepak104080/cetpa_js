var test =5;
console.log('value of a - ', test);


// var, let and const
// var a = 5
// let a = 5;
// const a = 5;


//0, null, undefined, not defined
// 0 - number

var a_null = null;
console.log(a_null); //null


var b;
console.log(b); //undefined - garbage values


// console.log(c); //not defined - reference error



// function abc () {
//     return 3+4;
// }

// function def() {
//     console.log(3+4);
// }

// function abc (a, b) {
//     return a+b;
// }

// function def(a,b) {
//     console.log(a+b);
// }

// abc(3,4);



var length = 5;
var width = 4;

function area(length, width, type) {
    var temp_area;
    if(type == 'rectangle')
    {
        temp_area = length*width;
    }
    else {
        temp_area = Math.PI * length * length;
    }
    return temp_area;
}

// console.log('temp_area', temp_area); //Not accessible due to function local scope


var area_value = area(length, width, 'rectangle');

console.log('Area is - ', area_value);




// -----------------------------------

// Data Types
// number - 4,7
// string - 'deepak'
// boolean - true, false
// object - array, null

var num = 5;

var name = 'Deepak';

var status = true;

var person = {
    name: 'Deepak',
    city: 'Delhi'
}

var array = [1,2,3,4,5,6];

let obj = {
    name: 'Deepak',
    addr: 'Delhi',
    state: 'Delhi',
    country: 'India'
}
