var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('somewhere, something happened');
});

emtr.on('greet', function() {
    console.log('Something else also happened');
})

emtr.emit('greet');