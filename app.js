require('./greet.js');

// greet(); this won't work because app.js doesn't have 
// access to everyting in greet.js. so variable 
// won't conflict
// So I do this now: 

var greet = require('./greet.js');
greet();