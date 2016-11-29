function Count(){
    this.haveVotes = {
        puppies: 0,
        kittens: 0
    };
}

Count.prototype.record = function(key){
    this.haveVotes[key]++;
};

Count.prototype.retrieve = function(key){
    return this.haveVotes[key];
};

Count.prototype.results = function(key){
    return this.haveVotes;
};

module.exports = Count; 