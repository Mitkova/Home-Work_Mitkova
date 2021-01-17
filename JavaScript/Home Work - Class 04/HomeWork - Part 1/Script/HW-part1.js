function myFunction1(x,y) {
    let myVar = x + y;
    console.log(myVar);
    console.log(typeof myVar + " " + myVar);
}


function myFunction2(x,y) {
    if (x > y) {
        console.log(typeof true + " " + true);
    } else {
        console.log(typeof false + " " + false);
    }  
}



function myFunction3(name) {
    console.log("Hello" + name);
}


function myFunction4(object) {
    var car = {type:"Fiat", model:"500", color:"white"};
    console.log(car);
}

myFunction1(4,2);  //Number
myFunction2(4,2);  //Boolean
myFunction3(" Andjela");  //String
myFunction4(object);




