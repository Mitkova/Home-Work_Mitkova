let numbersArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for(let number of numbersArr){
        if(number % 2 === 0) {
            console.log(number  + '  is "even number"' + "\n"); //for even number print Number and new Line
        } else if (number % 2 !== 0) {
            console.log(" ");   //for odd Number print only empty space
        }
    }

