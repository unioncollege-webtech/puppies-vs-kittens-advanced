// Counter.js

function Counter() {
    this.data = {};
}

Counter.prototype.record = function(key) {
    if(this.data[key]) {
        this.data[key]++;
    }
    else {
        this.data[key] = 1;
    }
};

Counter.prototype.retrieve = function(key) {
    if (this.data[key]) {
        return this.data[key];
    }
    else {
        return 0;
    }
};

Counter.prototype.results = function(catKey, dogKey) {
    return this.data[catKey] + this.data[dogKey];
};

module.exports = Counter;