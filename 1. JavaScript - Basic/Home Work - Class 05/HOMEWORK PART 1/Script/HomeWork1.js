// HOMEWORK PART 1
// Change the page with JavaScript
// *Change the text of all paragraphs and headers with javascript
// *Note:The html must not be changed



//---------First DIV changes------------
let firstDiv = document.getElementsByClassName("aDiv")[0];
//console.log(firstDiv);

let firstDivChildH1 = firstDiv.firstElementChild;
console.log(firstDivChildH1.innerText);
firstDivChildH1.innerText = "It used to be Cool Page";
console.log(firstDivChildH1.innerText);

let firstDivLastChild_P = firstDiv.lastElementChild;
firstDivLastChild_P.innerText += " Finally something easy!!!";
console.log(firstDivLastChild_P.innerText);



//---------Second DIV changes------------
let paragraph = document.getElementsByClassName("paragraph second");
paragraph.innerText = "";
console.log(paragraph.innerText);

let textTag = document.getElementsByTagName("text")[0];
console.log(textTag.innerText);
textTag.innerText += " PRACTISE A LITTE BIT MORE";
console.log(textTag.innerText);



//---------Third DIV changes------------
let h1 = document.getElementsByTagName("h1")[1];
console.log(h1.innerText);
h1.innerText = "It was hard but I changed you";
console.log(h1.innerText);

let h3 = document.getElementsByTagName("h3");
h3.innerText = "I finnished them all, there is no more!!!";  
console.log(h3.innerText);



