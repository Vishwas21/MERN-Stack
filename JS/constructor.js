//Learn this
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.marks = [85, 79, 95];
//     this.calcPer = function () {
//         sum = 0;
//         for (let i = 0; this.marks[i]; i++) {
//             sum += this.marks[i];
//         }
//         return (sum / this.marks.length) * 100
//     }
// }

// var vishwas = new Student("Vishwas", 23);
// var nidhi = new Student("Nidhi", 22);

//Better Code Below -------------------------------------------------

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.marks = [85, 79, 95];
// }

// Student.prototype.calcPer = function () {
//     sum = 0
//     for (let i = 0; this.marks[i]; i++) {
//         sum += this.marks[i];
//     }
//     return (sum / this.marks.length) * 100
// }

//Example
var moviesList = [
    { name: "Die Hard", year: 1983, duration: 1.5 },
    { name: "Die Hard 2", year: 1985, duration: 1.6 },
    { name: "Die Hard 3", year: 1987, duration: 1.4 },
    { name: "Armeggadon", year: 1983, duration: 1.7 },
    { name: "Dr. Glass", year: 2020, duration: 1.65 }
];
function BWMovies(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.watched = false;
    this.overallRating = {
        netRating: 0.0,
        ratings: []
    }
}

BWMovies.prototype.unedited = function () {
    this.duration += 0.5;
    return;
}

BWMovies.prototype.pirated = function () {
    this.duration - + 0.75;
    return;
}

BWMovies.prototype.modifyWatchStatus = function () {
    if (this.watched === false) {
        this.watched = true
    }
    else {
        console.log("Already Watched");
    }
    return
}

BWMovies.prototype.getNetRating = function () {
    return (this.overallRating.netRating);
}

BWMovies.prototype.calculateNetRating = function () {
    sum = 0;
    for (let i = 0; this.overallRating.ratings[i]; i++) {
        sum += this.overallRating.ratings[i];
    }

    this.overallRating.netRating = (sum / this.overallRating.ratings.length)
    return
}

BWMovies.prototype.vote = function (rating) {
    this.overallRating.ratings.push(rating);
    this.calculateNetRating();
    return;
}

var movies = []

// for (let i = 0; moviesList[i]; i++) {
//     movies.push(new BWMovies(moviesList[i].name, moviesList[i].year, moviesList[i].duration));
// }

moviesList.forEach(element => {
    movies.push(new BWMovies(element.name, element.year, element.duration));
});

console.log("Everything")