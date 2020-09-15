
const { traceMethodCalls } = require('./app06-helper1');
const testMath = require('./app06-helper2');

const tracedTestMath = traceMethodCalls(testMath);

console.log("essai proxy logger Intercepting method calls with helper");

console.log("6+4=" + tracedTestMath.add(6,4));

console.log("3*9=" + tracedTestMath.multiply(3,9));

console.log("3*9=" + tracedTestMath.squared(8));


