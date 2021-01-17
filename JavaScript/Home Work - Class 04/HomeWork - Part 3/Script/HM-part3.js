function machineATM(withdrawal) {         //deposit  //rest 
    let deposit = 10000;
    let rest = deposit - withdrawal;
    let result;
    let withdrawal = deposit - result;
    return result; 

    if (withdrawal <= deposit) {
        result = "First take your Cart, than your Money." + "Your account rest is: " + rest;
        alert("First take your Cart, than your Money." + "Your account rest is: " + rest);
    } else {
        result = "Not enough money";
        alert("Not enough money");
    }
}
let userImput = prompt("Enter the amount of money you want to withdraw:");
let withdrawal = parseInt(prompt("Enter the amount of money you want to withdraw:"));
alert(withdrawal(withdrawal, userNumberInput));
