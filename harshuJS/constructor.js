var moviesList = [
    { name: "Die Hard", year: 1983, duration: 1.5 },
    { name: "Die Hard 2", year: 1985, duration: 1.6 },
    { name: "Die Hard 3", year: 1987, duration: 1.4 },
    { name: "Armeggadon", year: 1983, duration: 1.7 },
    { name: "Dr. Glass", year: 2020, duration: 1.65 },
];

function Movies(title, releaseYear, duration) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.duration = duration;
    this.watched = false;
    this.overallRating = {
        netRating: 0.0,
        ratings: [],
    };
}

// Create Behaviours
// unedited mode - add 0.5 hours to duration
// pirated - sub 0.75 to durations
// modify watch - change to true if not watched, if already then send an error message telling already watched
// net rating - return the net rating of the movie
// calculate net rating - add all ratings and find avg and assign it to netRating
// rate - you need to add that rating to ratings array

// Destructuring Operater (...)
// let harshitha = { name: "Die Hard", year: 1983, duration: 1.5 };
// // harshitha.newKey = "Object";
// // harshitha.anotherNewKey = "Object 2";
// // harshitha.thirdNewKey = "Obejct 3";
// harshitha = { ...harshitha, fourth: "Object", fith: "objet" };
// console.log(harshitha);
