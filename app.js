//function can create objects
function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

};

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname);
};

var jon = new Person('Jon', 'Doe');
console.log(jon);

jon.greet();

console.log(jon.__proto__);