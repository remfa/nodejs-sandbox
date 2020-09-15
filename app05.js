
const { logger } = require('./app05-helper1');
const TestClass = require('./app05-helper2')

console.log("essai proxy logger on classes with helper");

const myTestClassEnhancedInstance = logger(TestClass);

myTestClassEnhancedInstance.funcA();
myTestClassEnhancedInstance.funcB();

