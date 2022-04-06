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


// window.console.log
// window.alert
// window.confirm
// window.prompt

// var temp = window.prompt('your name');
// console.log(temp);
// temp - false (if cancel presses)
// temp - '<name typed>' (if name typed and ok)