//Zadacata ja isprobav na tri nacini, za da vidam koj kako funkcionira !!!

//--------Attempt 1:
let array1 = ["Attempt 1:", "Hello", "there", "students", "of", "SEDC", "!"].join(' ');						
for(let item of array1){ 
document.write(item);
}



//--------Attempt 2:
let array2 = ["Attempt 2:","Hello", "there", "students", "of", "SEDC", "!"].join(' ');
let bigString = array2.toString();
console.log(array2.toString());




//--------Attempt 3:
let array3=["Attempt 3:","Hello", "there", "students", "of", "SEDC", "!"].join(' ');
let result=" ";
for(i= array3.length-1; i>=0;i--){
    result=array3[i]+result;
}
console.log(result);
document.write("<br>", result);



