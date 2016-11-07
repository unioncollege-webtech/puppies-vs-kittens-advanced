// Create a Counter class that will be used to create counter objects
// See the full description in README.md
// Counter constructor definition
function Counter() {
    // Create a property on the `this` reference to store counts for each key
    this.count = {};
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {
    if (isNaN(this.count[key])) {
        this.count[key] = 0;
    }
    this.count[key]++;
};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {
    return this.count[key];
};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {
    return this.count;
};

module.exports = Counter;