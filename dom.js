// DOM - Document Object Model - Document is stored in JS Object format.
// var temp = {
//     html: {
//         head: {
//             title: ''
//         },
//         body: {
//             elem0: {
//                 class: 'header',
//                 tagtype: 'div',
//                 content: 'Header'
//             },
//             elem1: {
//                 div: 'Main Left',
//                 div: 'Main Center',
//                 div: 'Main Right',
//             },
//             elem2: 'Footer',
//         }
//     }
// }

// console.log(window.document);

// Selectio of elements in DOM - tag, class, id - unique
var elem = document.getElementById('main_left');
console.log(elem);
// var elem2 = document.getElementsByClassName - array of elements
// document.getElementsByTagName
console.log(document.querySelector('.main_center p'));
//  - single elem
console.log(document.querySelectorAll('.main_center p'));
//  - array of elements

function fn_click() {
    console.log('button clicked....');
    var temp_name = document.getElementById('input_name').value;
    console.log(temp_name);
}

// DOM Events - click, hover, mouseout, focus, blur
var temp_button = document.getElementById('button_name');
temp_button.addEventListener('click', fn_click);

// window.console.log
// window.alert
// window.confirm
// window.prompt

// var temp = window.prompt('your name');
// console.log(temp);
// temp - false (if cancel presses)
// temp - '<name typed>' (if name typed and ok)


fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((resp) => {
  return resp.json();
})
.then((data) => {
  console.log(data.bpi);
})
