var a = 2;

//in an immedeately invoked function expression like below,
//the scope of the variables create are limited to the 
//function itself! So outside the function, a remains 3.
(function(){
    var a =3;
    console.log(a);
}());

console.log(a);