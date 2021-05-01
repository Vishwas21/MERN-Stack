// var obj = { name: "Akash", age: 37, company: "GetSetGo Fitness" };
// // function test(a) {// a = arr;
// // a[2] = 200;
// // }
// var obj01 = obj;
// obj01.name = "Shraddha";
// console.log("obj", obj);
// console.log("obj 01", obj01);
//Changing an array/object immutably
//Array
//Loop through all the elements and copy the value onoe by one
//Lodash
//Slice
// var arr = [10, 20, 30];
// var arr01 = arr.slice(0);
// arr01[1] = 500;
// console.log("Arr 01", arr01);
// console.log("Arr", arr);
//Object
var obj = { name: "Akash", age: 37, company: "GetSetGo Fitness" };
var obj01 = Object.assign(obj);
obj01.name = "Akshay";
console.log("Obj 01", obj01);
console.log("Obj", obj);
var a = 10;
var b = a;
b += 20;
console.log(a, b);
