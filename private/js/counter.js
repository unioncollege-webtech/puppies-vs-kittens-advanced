// Create a Counter class that will be used to create counter objects
// See the full description in README.md
// Counter constructor definition
var Counter = function() {
  this.store = {};
    // Create a property on the `this` reference to store counts for each key
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {
  if(this.store.hasOwnProperty(key)){
    this.store[key]++;
  }
};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {
  if(this.store.hasOwnProperty(key)){
    return this.store[key];
  } else {
    return 0;
  }
};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {
  return this.store;
};

// .make(key) - make the `key`
Counter.prototype.make = function(key) {
  if(!this.store.hasOwnProperty(key)){
    this.store[key] = 0;
    return true;
  } else {
    return false;
  }
};

module.exports = new Counter();
