function drive(name) {
    console.log(`${name}, Let's go on a drive today!!`);
}

function lazy(name) {
    console.log(`${name}, Let's just Netflix and Chill`);
}

let companion = "Shraddha";

module.exports = {
    drive: drive,
    lazy,
    companion: companion
}