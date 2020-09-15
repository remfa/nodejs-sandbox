
const { traceMethodCalls } = require('./app06-helper1');



console.log("essai proxy logger Intercepting method calls with helper");


const testRectangle = require('./app06-helper2');
const tracedTestRectangle = traceMethodCalls(testRectangle);

let essaiRect = tracedTestRectangle.makeaRectangle(7,6);

console.log("aire Rect essaiRect=" + tracedTestRectangle.aireOfRectangle(essaiRect));
