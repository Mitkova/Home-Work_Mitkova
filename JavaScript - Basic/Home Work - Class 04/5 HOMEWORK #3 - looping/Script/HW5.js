
//----------Attempt 1
let smallest1 = Math.min(3,5,6,8,11);
let largest1 = Math.max(3,5,6,8,11);
console.log('*Max: '+ largest1 +" "+ '*Min: ' + smallest1 +  ' *Sum: ' + (sum = smallest1 + largest1));


  



//---------Attempt 2
let numbers = ["b",3,5,6,8,11,"a"];  //trying function to work with "strings" too
let largest = -Infinity;
let smallest = Infinity;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("Max: " + largest);
console.log("Min: " + smallest);
console.log("Sum: " + (largest+smallest));


