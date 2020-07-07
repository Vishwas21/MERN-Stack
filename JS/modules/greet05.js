let lockdownFns = {
    morning: function (name) {
        console.log(`Let's do some workout exercises ${name} or Let's just have a coffee and do nothing!`);
    },
    afternoon: function (name) {
        console.log(`Let's play with the dogs ${name} or Let's just have a coffee and do nothing!`);
    },
    evening: function (name) {
        console.log(`Let's go for a walk ${name} or Let's just have a coffee and do nothing!`);
    }
}

module.exports = lockdownFns