
const { traceMethodCalls } = require('./app06-helper1');



console.log("essai proxy logger Intercepting method calls with helper");


const testMath = require('./app06-helper2');
const tracedTestMath = traceMethodCalls(testMath);

console.log("6+4=" + tracedTestMath.add(6,4));

console.log("3*9=" + tracedTestMath.multiply(3,9));

console.log("3*9=" + tracedTestMath.squared(8));


const testRectangle = require('./app06-helper3');
const tracedTestRectangle = traceMethodCalls(testRectangle);

let essaiRect = tracedTestRectangle.makeaRectangle(7,6);

console.log("aire Rect essaiRect=" + tracedTestRectangle.aireOfRectangle(essaiRect));
