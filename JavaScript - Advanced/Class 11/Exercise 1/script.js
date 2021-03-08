function Person(firstName, lastName, age, ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

function Student (firstName, lastName, age, academyName, studentId,) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academyName
    this.studentId = studentId
    this.study = function() {
        console.log(`The student ${this.firstName} is studing in ${this.academyName}.`);
    }
}

let student1 = new Student("Petre", "Ivanovski", 28, "SEDC WEB DEVELOPMENT", 956);
let student2 = new Student("Nadica", "Paunova", 30, "SEDC WEB DESIGN", 240);

console.log(student1);
console.log(student2);
student1.study();
student2.study();