// var arr = [10, 20, 30];
// var arr01 = arr.slice(0);
// arr01[1] = 500;
// console.log("Arr 01", arr01);
// console.log("Arr", arr);

// let obj = { name: "Akash", age: 37, company: "GetSetGo Fitness" };
// // function test(a) {// a = arr;
// // a[2] = 200;
// // }
// let obj01 = obj;
// obj01.name = "Shraddha";
// console.log("obj", obj);
// console.log("obj 01", obj01);

var obj = { name: "Akash", age: 37, company: "GetSetGo Fitness" };
var obj01 = Object.assign({}, obj);
obj01.name = "Shraddha";
console.log("Obj 01", obj01);
console.log("Obj", obj);
