// ## Student signup
// * Create a form with first name, last name, birth year and academy
// * Create a button for signing up
// * The button should create a new Student object and add it in the array of students

function Student(fName,lName,brtYear,academy) {
    this.firstName = fName;
    this.lastName = lName;
    this.birthdayYear = brtYear;
    this.academy = academy;

    this.info = function() {
        return `Name: ${this.firstName} ${this.lastName} Birthday Year: ${this.birthdayYear} Academy: ${this.academy}`;
    }
}

let students = [];

let signUpBtn = document.getElementById("signUpBtn");
let result = document.getElementById("result");

let firstNameInput = document.getElementById("fName");
let lastNameInput = document.getElementById("lName");
let birtdayYearInput = document.getElementById("birthdayYear");
let academyInput = document.getElementById("academy");

let msg = document.getElementById("msg");

signUpBtn.addEventListener("click", function(event){

   let firstName = firstNameInput.value;
   let lastName = lastNameInput.value;
   let birthdayYear = birtdayYearInput.value;
   let academy = academyInput.value;

   if(!firstName || !lastName || !birthdayYear || !academy) {
       showMessage("Please enter valid values. ", msg);
   } else {
       let student = new Student(firstName, lastName, birthdayYear, academy);
       students.push(student);
       printStudents(students, result);
       clearForm();
       showMessage("Succesufly added Student", msg);
   }
});

function printStudents(students, element) {
    element.innerHTML = '';

    let html = "";
    for (let i = 0; i<students.length; i++) {
        html += `<li>ID: ${i+1} ${students[i].info()}</li>`;
    }
    element.innerHTML = html;
}

function clearForm() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    birtdayYearInput.value = "";
    academyInput.value = "";
}

function showMessage(message, element) {
    element.innerHTML = "";
    element.innerHTML = `<p>${message}</p>`;
}