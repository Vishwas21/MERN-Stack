// Object player
// health and stamina
// damage - 15pt health -- kick
// damage = 10pt health -- punch
// damage - 25pt 10pt -- special attack

// function pr() {
//     console.log(this.a);
// }

// var p1 = {
//     a: 100,
//     fn: pr,
// };

// var p2 = {
//     a: 65,
//     fn: pr,
// };

// p1.fn();

// funcTest = (name, nameNew) => {
//     console.log("Here: ", name, nameNew);
// };

// funcTest("Harshitha", " and Vishwas");

// (name => {
//     console.log("Name : ", name);
// })("harshu");

// var sum = (function (a) {
//     return function (b) {
//         return a + b;
//     };
// })(10);

// console.log(sum(20));

function performSpecialAttack(oppObj) {
    this.energy -= 10;
    this.stamina -= 10;
    // Decrease other player's energy by 20
    oppObj.energy -= 20;
}

var player = {
    name: "Sub Zero",
    energy: 100,
    stamina: 100,
    gotKicked: function () {
        this.energy -= 10;
        return;
    },
    performKick: function () {
        this.stamina -= 10;
        return;
    },
    performPunch: function () {
        this.stamina -= 5;
        return;
    },
    performSpecialAttack: performSpecialAttack,
    drinkPortion: function () {
        this.stamina += 5;
        this.energy += 5;
        return;
    },
};

var liukang = Object.create(player);
var scorpio = Object.create(player);

console.log(
    "Liukang - Stamina : " + liukang.stamina + " and Energy : " + liukang.energy
);
console.log(
    "Scorpio - Stamina : " + scorpio.stamina + " and Energy : " + scorpio.energy
);
liukang.performSpecialAttack(scorpio);
console.log(
    "Liukang - Stamina : " + liukang.stamina + " and Energy : " + liukang.energy
); // 90 90
console.log(
    "Scorpio - Stamina : " + scorpio.stamina + " and Energy : " + scorpio.energy
); // 100 80
