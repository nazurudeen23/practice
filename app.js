let counter = 120; // counter is a number
console.log(typeof(counter)); // "number"

counter = false;   // counter is now a boolean
console.log(typeof(counter)); // "boolean"

counter = "Hi";   // counter is now a string
console.log(typeof(counter)); // "string"

let obj = null;
console.log(typeof obj); // object

let v = 0o45;
console.log(v); // 37

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

var aNumber = new Number(10);
console.log(aNumber.toString(2)); // "10"

let numberObject = new Number(10);
let number = 10;

// typeof
console.log(typeof numberObject);
console.log(typeof number);
// instanceofobj
console.log(numberObject instanceof Number); // true
console.log(number instanceof Number); // false
