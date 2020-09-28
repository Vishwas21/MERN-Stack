// Object player
// health and stamina
// damage - 15pt health -- kick
// damage = 10pt health -- punch
// damage - 25pt 10pt -- special attack

function pr() {
    console.log(this.a);
}

var p1 = {
    a: 100,
    fn: pr,
};

var p2 = {
    a: 65,
    fn: pr,
};

p1.fn();
