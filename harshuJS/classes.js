class Movie {
    #title;
    #releaseYear;
    #duration;
    #watched;
    #overallRatings;

    constructor(title, releaseYear, duration) {
        this.#title = title;
        this.#releaseYear = releaseYear;
        this.#duration = duration;
        this.#watched = false;
        this.#overallRatings = {
            netRating: 0.0,
            ratings: [],
        };
    }

    // Getter Functions
    getTitle() {
        return this.#title;
    }

    getReleaseYear() {
        return this.#releaseYear;
    }

    getDuration() {
        return this.#duration;
    }

    getWatched() {
        if (this.#watched == true) {
            return "Movie Watched";
        } else {
            return "Movie not watched";
        }
    }

    getNetRating() {
        return this.#overallRatings.netRating;
    }

    // Setters
    setDuration(newDuration) {
        if (newDuration < 3) {
            this.#duration = newDuration;
        }
    }

    uneditedMode() {
        this.#duration += 0.5;
    }

    piratedMode() {
        this.#duration -= 0.75;
    }

    modifyWatched() {
        if (this.#watched == false) {
            this.#watched = true;
        } else {
            console.log("Already Watched");
        }
    }

    addRating(rating) {
        this.#overallRatings.ratings.push(rating);
        this.calcNetRating();
    }

    calcNetRating() {
        // let sumRating = 0;
        // this.overallRatings.ratings.forEach(rating => (sumRating += rating));
        // this.overallRatings.netRating =
        //     sumRating / this.overallRatings.ratings.length;

        // OR

        this.#overallRatings.netRating =
            (this.#overallRatings.netRating *
                (this.#overallRatings.ratings.length - 1) +
                this.#overallRatings.ratings[
                    this.#overallRatings.ratings.length - 1
                ]) /
            this.#overallRatings.ratings.length;
    }
}

let obj = new Movie("Die Hard", 1987, 1.4);

// console.log(obj);

// console.log(obj.title);
// obj.addRating(5);
// console.log(obj.getNetRating());
// obj.addRating(4);
// console.log(obj.getNetRating());
// obj.addRating(4);
// console.log(obj.getNetRating());
// obj.addRating(5);
// console.log(obj.getNetRating());
obj.setDuration(2.7);
console.log(obj.getDuration());
