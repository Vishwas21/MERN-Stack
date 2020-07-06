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

var movie1 = new BWMovies("Movie1", 1958, 2.1);

movie1.modifyWatchStatus();
movie1.vote(3.5);
movie1.vote(4.2);

console.log("Everything")