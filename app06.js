
console.log("essai proxy logger Intercepting method calls with helper");

const tracedTestRectangle=  require('./app06-helper2');

let essaiRect = tracedTestRectangle.make(7,6);

console.log("aire essaiRect=" + tracedTestRectangle.aire(essaiRect));

console.log("perimetre essaiRect=" + tracedTestRectangle.perimetre(essaiRect));
