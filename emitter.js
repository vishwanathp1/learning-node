function constructor (parameter1, parameter2, parameter3) {
    this.firstname = parameter1;
    this.middlename = parameter2;
    this.lastname = parameter3;
}

function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (onEventType, listenerFunction) {
    this.events[onEventType] = this.events[onEventType] || [];
    this.events[onEventType].push(listenerFunction);
}

Emitter.prototype.emit = funtion(onEventType) {
    if (this.events[onEventType]) {
        this.events[onEventType].forEach(function(listenerFunction) {
            listenerFunction();
        });
    }
}

module.exports = Emitter;


// {
//     events = {
//         onEventType1 = [listenerFunction(){}, listenerFunction(){}]
//         onEventType2 = [listenerFunction(){}, listenerFunction(){}]
//     }
//     on = function(onEventType1, listenerFunction(){}){} // for each event, make a list of listener functions
//     emit = function(onEventType2){} // for each listner function, execute the listener function.
// }