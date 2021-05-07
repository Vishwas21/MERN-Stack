function Human(name, age, energy) {
    this.name = name;
    this.age = age;
    this.energy = energy;
}

Human.prototype.eat = function () {
    this.energy += 10;
};

Human.prototype.walk = function () {
    this.energy -= 5;
};

function Athlete(name, age, energy, speed) {
    Human.call(name, age, energy); // This is a kind of inheritence
    this.speed = speed;
}

Athlete.prototype = Object.create(Human.prototype);
// Athlete Function is becoming a class by inheriting the prototypes from Human

Athlete.prototype.run = function () {
    this.energy += 10;
};

console.log("Here");

/**
 * prototype is functions
 */

/**
 * ------ Automoblie Class ----------
 * Properties:
 *  - name
 *  - brand
 *  - color
 *  - milage
 *  - value
 * Behaviour:
 *  - sportsMode : milage will decrease 10
 *  - accident: value will decrease by 50%
 * ------ Automoblie Class ----------
 *
 * ------ Bike Class --------
 * Properties:
 *  - All properties of automobile class
 *  - type
 *  - topSpeed
 * Behaviour:
 *  - All behaviour from automobile
 *  - race: value should decrease by 20%
 * ------ Bike Class --------
 *
 * ------ Car Class --------
 * Properties:
 *  - All properties of automobile class
 *  - bodyType
 * Behaviour:
 * - All behaviour from automobile
 * - dragRace: value shoould decrease by 30%
 * ------ Car Class --------
 */
