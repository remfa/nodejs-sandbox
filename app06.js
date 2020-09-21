
console.log("essai proxy logger Intercepting method calls with helper");

const tracedTestRectangle=  require('./app06-helper2');

let essaiRect = tracedTestRectangle.makeaRectangle(7,6);

console.log("aire Rect essaiRect=" + tracedTestRectangle.aireOfRectangle(essaiRect));
