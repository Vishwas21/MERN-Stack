function GreetConstructor(name) {
    this.name = name;
}

GreetConstructor.prototype.greetMe = function () {
    console.log(`Here is a special greeting for you, ${this.name}`);
}

module.exports = GreetConstructor;