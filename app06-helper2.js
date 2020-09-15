
module.exports = testMath = {
    multiply(x, y) {
        return x * y;
    },
    add(x, y) {
        return x + y;
    },
    squared(x) {
        return this.multiply(x, x);
    },
};
