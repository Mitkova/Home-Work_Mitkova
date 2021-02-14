let numbersArray = [1,2,3,4,5];
function sum() {
    let sumNumber = numbersArray[0] + numbersArray[1] + numbersArray[2] + numbersArray[3] +numbersArray[4];
    return sumNumber;
}
console.log(sum());
document.write("The sum of the numbers array is " + sum());
window.alert("The sum of the numbers array is " + sum());







//------ BONUS----- To check if a variable (including a string) is a number, I will check if it is not a number.
// NE ZNAM KAKO DA GO NAMESTAMD DA GI PRINTA SITE INDEKSI OD ARRY POSEBNO !!!

let array = ["h",2,3,"a"];

function validateNumber() {
    let number = isNaN(array.length);
    if (number === false) {
        console.log("Number is VALID Number");
    } else {
        console.error("ERROR!!!  Number is INVALID Number");
    }
    return number;
}

validateNumber();
console.log(validateNumber());
