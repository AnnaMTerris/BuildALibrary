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
