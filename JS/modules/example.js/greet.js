// Import Statements------------
const greetings = {}
greetings.english = require("./en")
greetings.spanish = require("./es")
// Import Statements------------

module.exports = function (name, timeOfDay, lang) {
    greetings[lang][timeOfDay](name);
}
