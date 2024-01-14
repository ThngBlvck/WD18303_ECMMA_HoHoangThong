// var myConcat = function (arr1, arr2) {
//     "use strict";
//     return [...arr1, ...arr2];
// };
//
// console.log(myConcat([1, 2], [3, 4, 5]));
//
//
// // let sum = (num1,num2) => {
// //     return num1 + num2;
// // }
// let sum = (num1,num2) => num1 + num2;

const API_URL ="https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students/3";
let callAPIGetStudent = (student_id) => {
    let student;
    fetch(API_URL+student_id)
        .then(function(response) {
            response.json().then(function(data){
                console.log(data);
                student = data;
            })
        })
        .catch(function(error) {
            console.log(error);
        })

    return student;
}
callAPIGetStudent(55)
// let callAPIGetStudent = (student_id) => {
//     fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
//         .then((response) => response.json().then(data => {
//             console.log(data)
//         }) )
//         .catch(function (error) {
//             console.log(error);
//         })
//
//     return product;
// }