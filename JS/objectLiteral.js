// var student = {
//     name: "Vishwas",
//     id: "GS5032",
//     marks: {
//         physics: 86,
//         chemistry: 87,
//         maths: 95
//     },
//     calcAvg: function () {
//         return ((this.marks.physics + this.marks.chemistry + this.marks.maths) / 3.0)
//     }
// }

// var avg = student.calcAvg()
// console.log(avg)

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
        this.stamina -= 5
        return
    },
    performSpecialAttack: performSpecialAttack,
    drinkPortion: function () {
        this.stamina += 5;
        this.energy += 5;
        return
    }
}

var liukang = Object.create(player)
var scorpio = Object.create(player)

console.log("Liukang - Stamina : " + liukang.stamina + " and Energy : " + liukang.energy);
console.log("Scorpio - Stamina : " + scorpio.stamina + " and Energy : " + scorpio.energy);
liukang.performSpecialAttack(scorpio)
console.log("Liukang - Stamina : " + liukang.stamina + " and Energy : " + liukang.energy);
console.log("Scorpio - Stamina : " + scorpio.stamina + " and Energy : " + scorpio.energy);

// console.log("Everything");

// player.gotKicked();
// console.log("Stamina : " + player.stamina + " and Energy : " + player.energy);

// player.drinkPortion();
// console.log("Stamina : " + player.stamina + " and Energy : " + player.energy);

// console.log("Everything");

