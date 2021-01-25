//let userImput = prompt("Enter the amount of money you want to withdraw:");
let withdrawal = parseInt(prompt("Enter the amount of money you want to withdraw:"));

let balance = 10000;
let rest = balance - withdrawal;
let result;

function machineATM(balance, withdrawal) {         
    if (withdrawal <= balance) {
        result = "First take your Cart, than your Money." + " Your account rest is: " + rest + ' MKD';
        alert("First take your Cart, than your Money." + " Your account rest is: " + rest + ' MKD');
    } else {
        result = "Not enough money";
        alert("Not enough money");
    }
    return result
}

console.log(machineATM(balance, withdrawal));


