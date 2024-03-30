// create parent class
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
    getAverageRating() {
      let averageSum = this._ratings.reduce((accumulator, rating) => accumulator + rating)
      return averageSum / this._ratings.length;
      }
  
    addRating(value) {
      this._ratings.push(value);
    }
  }

  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  // create a Movie subclass
class Movie extends Media {
    constructor(title, director, runTime) {
      super(title), 
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }

  // create a Book instance
const historyOfEverything = new Book(
    "A Short History of Nearly Everything",
    "Bill Bryson",
    544
  );
  
  // call toggleCheckOutStatus on historyOfEverything instance
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  // call addRating() on historyOfEverything with inputs of 4, 5, 5
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  // call getAverageRating on historyOfEverything, log result
  console.log(historyOfEverything.getAverageRating());
