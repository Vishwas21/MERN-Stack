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

function Athlete(name, age, energy) {
    Human.call(name, age, energy);
}
