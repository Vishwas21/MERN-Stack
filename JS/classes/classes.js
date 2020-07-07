//New Example --------------------------------------------------------------------------------------

//Automobiles Class ---------------------------------------------------------
class Automobiles {
    constructor(name, brand, color, milage, value, gear) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.milage = milage;
        this.value = value;
        this.gear = gear || "Manual";
    }

    sportsMode() {
        this.milage -= 10;
    }

    accident() {
        this.value = 0.5 * this.value;
    }
}
//Automobiles Class ---------------------------------------------------------

//Bikes Class -------------------------------------
class Bikes extends Automobiles {
    constructor(name, brand, color, milage, value, gear, type, topSpeed) {
        super(name, brand, color, milage, value, gear);
        this.type = type || "Cruiser";
        this.topSpeed = topSpeed;
    }

    race() {
        this.value = 0.8 * this.value;
    }
}
//Bikes Class -------------------------------------

//Cars Class -------------------------------------
class Cars extends Automobiles {
    constructor(name, brand, color, milage, value, gear, bodyType) {
        super(name, brand, color, milage, value, gear);
        this.bodyType = bodyType;
    }

    drag() {
        this.value = 0.7 * this.value;
    }
}
//Cars Class -------------------------------------

var mustang = new Cars(
    "Mustang",
    "Ford",
    "Red",
    25.0,
    215135.25,
    "Automatic",
    "Sedan"
);
var tiger = new Bikes(
    "Tiger",
    "Triumph",
    "White",
    36.0,
    214555.58,
    "Manual",
    "Racer"
);
tiger.race();

console.log("Everything");

//New Example --------------------------------------------------------------------------------------
