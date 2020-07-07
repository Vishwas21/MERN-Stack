// function Human(name, age, energy) {
//     this.name = name;
//     this.age = age;
//     this.energy = energy;
// }

// Human.prototype.eat = function () {
//     this.energy += 5;
// }

// Human.prototype.walk = function () {
//     this.energy -= 5;
// }

// function Athlete(name, age, energy) {
//     // Kind of Inheritance
//     Human.call(name, age, energy); // Super in Server side
// }

// Athlete.prototype = Object.create(Human.prototype)

//New Example------------------------------------------------------------------------------------------------

//Automobiles Class ------------------------------------------------------------
function Automobiles(name, brand, color, milage, value, gear) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.milage = milage;
    this.value = value;
    this.gear = gear || "Manual";
}

Automobiles.prototype.sportsMode = function () {
    this.milage -= 10;
}

Automobiles.prototype.accident = function () {
    this.value = 0.5 * this.value;
}
//Automobiles Class ------------------------------------------------------------


//Bikes Class --------------------------------------------
function Bikes(name, brand, color, milage, value, gear, type, topSpeed) {
    Automobiles.call(this, name, brand, color, milage, value, gear);
    this.type = type || "Cruiser";
    this.topSpeed = topSpeed;
}
Bikes.prototype = Object.create(Automobiles.prototype);

Bikes.prototype.race = function () {
    this.value = 0.8 * this.value;
}
//Bikes Class --------------------------------------------

//Cars Class --------------------------------------------
function Cars(name, brand, color, milage, value, gear, bodyType) {
    Automobiles.call(this, name, brand, color, milage, value, gear);
    this.bodyType = bodyType
}
Cars.prototype = Object.create(Automobiles.prototype);

Cars.prototype.drag = function () {
    this.value = 0.7 * this.value;
}
//Cars Class --------------------------------------------

var mustang = new Cars("Mustang", "Ford", "Red", 25.0, 215135.25, "Automatic", "Sedan");
var tiger = new Bikes("Tiger", "Triumph", "White", 36.0, 214555.58, "Manual", "Racer");

console.log("Everything");

//New Example------------------------------------------------------------------------------------------------
