// # Exercises 
// ## Student constructor function
// * Create a constructor function for Student objects with:
//   * Properties:
//     * firstName
//     * lastName
//     * birthYear
//     * academy 
//     * grades - array of numbers
//   * Methods:
//     * getAge() - returns age of student
//     * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
//     * getGradesAverage() - returns the average of the student grades
// * Create an array with 3 students


function Student (firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;


    this.getInfo = function () {
        return `This is student "${this.firstName} ${lastName}" from the academy of "${academy}" !`
    }
    //console.log(this.getInfo()); - I should DELETE this


    this.avarageGrade = function(){
        let sum = 0
        for (let i in grades) {
            sum += grades[i];
        }
        return (sum / grades.length);
    };
    //console.log("Avarage grade is: " + this.avarageGrade());  - I should DELETE this


    this.getAge = function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }
    //console.log("Student age is: " + this.getAge());  - I should DELETE this
};

let student01 = new Student("Andjela", "Mitkova", "1992", "WEB Developement", [2,5,4,5]);
let student02 = new Student("Teodora", "Ilievska", "1994", "WEB Design", [2,1,4,3]);
let student03 = new Student("Silvija", "Stojanovska", "1995", "Marceting", [5,3,5,3]);