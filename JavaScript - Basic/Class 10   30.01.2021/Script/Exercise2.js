// EXERCISE 2
// 2. Create a Javascript ATM machine. 
// The ATM should have the following functions:
// - make desposit (this function should add money to the users balance)
// - make withdrawal (this function should should withdraw money to the users balance)
// - get the balance (this function should display the current balance of the user)
// - exit (this function should close the window)
// create interactive menu using alerts





//let userImput = prompt("Enter the amount of money you want to withdraw:");
let deposit = parseInt(prompt("put money into your bank account "));
let withdrawal = parseInt(prompt("Enter the amount of money you want to withdraw:"));

let balance = 10000;
let rest = balance - withdrawal;
//let deposit;

let result;

function machineATM(balance, withdrawal, deposit) {         
    if (withdrawal <= balance) {
        result = "First take your Cart, than your Money." + " Your account rest is: " + rest + ' MKD';
        alert("First take your Cart, than your Money." + " Your account rest is: " + rest + ' MKD');
    } else {
        result = "Not enough money";
        alert("Not enough money");
    }
    if (deposit) {
        result = "Your bank account have " + balance + deposit + " MKD";
    }
    return result
}

console.log(machineATM(balance, withdrawal, deposit));
