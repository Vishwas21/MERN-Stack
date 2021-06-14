// // var x;
// x = 5;
// console.log(x);

// x = "Harshitha";
// console.log(x);

// var a = 5,
//     b = 10;

// function changeValues(newA, newB) {
//     console.log("Inside Function : ", newA, newB);
//     newA = 10;
//     newB = 15;
//     console.log("Inside Function : ", newA, newB);
// }

// console.log(a, b);
// changeValues(a, b);
// console.log(a, b);

// var empDetails = {
//     name: "Harshitha",
//     desg: "SE",
//     age: 50,
//     salary: 123544.5,
//     projects: ["p1", "p2", "p3"],
//     manager: {
//         name: "don",
//         id: "123",
//     },
//     monthSalary: function () {
//         return this.salary / 12;
//     },
// };

// // console.log(empDetails["manager"]["name"]);

// console.log(empDetails.salary); // 123544.5

// function changeValues(newA) {
//     newA.salary = 522727;
// }

// changeValues(empDetails);

// console.log(empDetails.salary); // 123544.5

// Functions

// function add(a, b) {
//     return a + b;
// }

// function calc(a, b, opFn) {
//     return opFn(a, b);
// }

// var result = calc(5, 26, add);

// console.log(result);

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function calc(a, b, opFn) {
//     return function (c, opFn2) {
//         return opFn2(c, opFn(a, b));
//     };
// }

// var sum = calc(3, 10, mul);

// console.log(sum(10, sub));

const newFunctionName = strName => `My Name is ${strName}`;

console.log(newFunctionName("Harshitha"));
