//we can run javascript inside terminal through node!
var a = 1;
var b = 2;
var c = a + b;

console.log(c);

//functions in javascript are fisrt class
function greet() {
    console.log("hi");
}
greet();

//I can pass function in a function
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

//I can set a variable to be a function and call the variable 
var greetMe = function () {
    console.log('Hi Tony');
}
greetMe();

//it's first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
    console.log('Hello Tony!');
});

