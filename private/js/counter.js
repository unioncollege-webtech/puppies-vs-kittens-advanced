// Create a Counter class that will be used to create counter objects
// See the full description in README.md
// Counter constructor definition
var Counter = function() {
  this.store = {
    kittens: 0,
    puppies: 0
  }
    // Create a property on the `this` reference to store counts for each key
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {
  this.store[key]++;
};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {
  return this.store[key];
};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {
  return this.store;
};

module.exports = new Counter();
