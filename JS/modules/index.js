// Import Statements -----------------------
let greet01 = require('./greet01');
let greet02 = require('./greet02');
let greet03 = require('./greet03');
let greet04 = require('./greet04');
let greet05 = require('./greet05');
let greet06 = require('./greet06');
// Import Statements -----------------------

// Greet01 -----------
greet01("Vishwas");
// Greet01 -----------

// Greet02 -----------
greet02("Vishwas");
// Greet02 -----------

// Greet03 -----------
greet03.greetEn("Vishwas");
greet03.greetEs("Vishwas");
console.log(greet03.message);
console.log(greet03);
// Greet03 -----------

// Greet04 -----------
console.log(`${greet04.companion} says : `);
greet04.drive("Vishwas");
console.log(greet04);
// Greet04 -----------

// Greet05 -----------
console.log(greet05);
// Greet05 -----------

// Greet06 -----------
let newGreeting = new greet06("Vishwas");
newGreeting.greetMe();
console.log(greet06);
// Greet06 -----------