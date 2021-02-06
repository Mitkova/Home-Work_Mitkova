let animalName;
let animalKind;

function Animal(name, kind,){//adding properties to constructor
    this.animalName = name;//assigning values to properties from object(this is as pointer for property from object)
    this.animalKind = kind;//assigning values to properties from object

    this.speak = function(text){
        return this.animalKind + ' says:' + text;
    };
    
}

var dog = new Animal('Leo', 'dog');
console.log(dog.speak(' Hey bro !!!'));