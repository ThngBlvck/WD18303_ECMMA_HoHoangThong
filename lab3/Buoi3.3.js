// let  obj = {
//     name: "Ku em",
//     age: 18,
//     city: "Can Tho",
//     playGame : function () {
//         console.log(this.name + " is phaying game")
//     },
//     cooking: () =>{
//         console.log(this.name);
//         console.log(this);
//
//     }
// }
// obj.name = "Thng"
// obj.cooking()
// function helloWorld(button) {
//     console.log(button.getAttribute('attribute-name'));
// }

const increment = (number, value=1) => number + value;
console.log(increment(5,2));
console.log(increment(5));
