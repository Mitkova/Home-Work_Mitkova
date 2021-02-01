// ----------HOMEWORK PART 2-----------------
// Print all numbers from an array and the sum
// *Create an array with numbers
// *Print all numbers from the array in a list element, in a new HTML page
// *Print out the sum of all of the numbers below the list
// *Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)




let arrayNumbers = [2, 4, 5, 6, 8, 10, 11];

//---Print all numbers from the array in a list element, in a new HTML page
let unorderList = "<ul>";

arrayNumbers.forEach(function(listNumbers) {
    unorderList += "<li>" + listNumbers + "</li>";

});

unorderList += "</ul>";

console.log(document.getElementsByClassName("listElement").innerHTML = unorderList);
document.write(document.getElementsByClassName("listElement").innerHTML = unorderList);


//---SUM NUMBERS
let sum = (arrayNumbers[0] + arrayNumbers[1] + arrayNumbers[2] + arrayNumbers[3] + arrayNumbers[4] + arrayNumbers[5] + arrayNumbers[6]);
console.log(document.getElementsByClassName("sumNumbers").innerHTML = sum);
document.write(document.getElementsByClassName("sumNumbers").innerHTML = sum);

let blankSpace = "   the equation was supposed to be in new line but ...   ";
document.write(document.getElementsByClassName("emptySpace").innerHTML = blankSpace);


//---BONUS
let equasion = "(" + arrayNumbers[0] + " + " + arrayNumbers[1] + " + " + arrayNumbers[2] + " = " + arrayNumbers[6] + ")";
console.log(document.getElementsByClassName("formulaEquasion").innerHTML = equasion);
document.write("\n", document.getElementsByClassName("formulaEquasion").innerHTML = equasion);







