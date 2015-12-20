// Create a Counter class that will be used to create counter objects
// See the full description in README.md
function Counter() {
    this.data ={};
}

// .record(key) - increment the count value for `key`
Counter.prototype.record = function(key) {
    this.data[key] == this.data[key]++;
};

// .retrieve(key) - retrieve the total recorded counts for `key`
Counter.prototype.retrieve = function(key) {
    return this.data[key];
};

// .results() - return an object containing the cumulative counts for all keys
Counter.prototype.results = function() {
    
        return this.data;
};
module.exports = Counter;