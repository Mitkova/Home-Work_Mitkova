function convert(type, number){
    if(type === 'DOG'){
        return number * 7 + " HUMAN living years";
    } else if(type === 'HUMAN'){
        return number / 7 + " DOG living years";
    } else {
        return 'Invalid input, Please Input DOG or HUMAN';
    }
}

let userTypeInput = prompt("Insert DOG or HUMAN:");
let userNumberInput = parseInt(prompt("Enter number of living years:"));
alert(convert(userTypeInput, userNumberInput));