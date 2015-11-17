
function Counter() {
    this.pet = {
    };
}

Counter.prototype.record = function(key) {
    if(this.pet.hasOwnProperty('kittens')){
        this.pet[key]++;
}  else if (this.pet.hasOwnProperty('puppies')) {
    this.pet[key]++;
} else {
    this.pet[key] = 1
};

Counter.prototype.retrieve = function(key) {
   return this.pet[key];
};

Counter.prototype.results = function(){
    return this.pet;
    };
};

