var Emitter = require('events');
var eventConfig = requres('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('somewhere, something happened');
});

emtr.on(eventConfig.GREET, function() {
    console.log('Something else also happened');
})

emtr.emit(eventConfig.GREET);