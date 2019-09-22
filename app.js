var person = {
    //properties
    firstname: 'Jon',
    lastname: 'Doe',
    //objects
    greet: function() {
        console.log('Hello, ' + 
        this.firstname + ' ' + 
        this.lastname);
    }
};

person.greet();

console.log(person['firstname']);