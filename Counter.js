module.exports = {
    data: {},
    record: function(key) {
        this.data[key] == null ? this.data[key] = 1 : this.data[key]++;
    },
    retrieve: function(key) {
        return this.data[key];
    },

    results: function() {
        return this.data;
    }
}
