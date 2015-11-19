function Counter() {
    this.pet = {};
}

Counter.prototype.record = function(key) {
    if (this.pet.hasOwnProperty(key)) {
        this.pet[key]++;
    } else {
        this.pet[key] = 1;
    }
};

Counter.prototype.retrieve = function(key) {
    if(this.pet.hasOwnProperty(key)) {
        return this.pet[key];
    } else {
        return 0;
    }
};

Counter.prototype.results = function() {
    return this.pet;
};

module.exports = Counter;
