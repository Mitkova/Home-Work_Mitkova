function Title(colInp,fontSize,textInp) {
    this.colorInput = colInp ;
    this.fontSizeInput = fontSize;
    this.textInput = textInp;

    this.info = function() {
        return `${this.colorInput} ${this.fontSizeInput} ${this.textInput}`;
    }
}

let title = [];

let titleBtn = document.getElementById("titleBtn");
let result = document.getElementById("result");

let colorInputtt = document.getElementById("colInp");
let fontSizeInputtt = document.getElementById("fontSize");
let textInputtt = document.getElementById("textInp");

let msg = document.getElementById("msg");

titleBtn.addEventListener("click", function(event) {
    let colorInput = colorInputtt.value;
    let fontSizeInput = fontSizeInputtt.value;
    let textInput = textInputtt.value;

    
    if (!colorInput || !fontSizeInput || !textInput) {
        showMessage("Please enter valid values.", msg);
    } else {
        let titleee = new Title(colorInput, fontSizeInput, textInput);
        title.push(titleee);
        printTitle(title, result);
        clearForm();
        showMessage("Successfuly added Header", msg);
    }
});

function printTitle(title, element) {
    element.innerHTML = '';

    let html = "";
    for (let i = 0; i < title.length; i++){
        html += `Title: ${i + 1} ${title[i].info()}`;
    }
    element.innerHTML = html;
}

function clearForm() {
    colorInputtt.value.value = "";
    fontSizeInputtt.value = "";
    textInputtt.value = "";
}

function showMessage(message, element) {
    element.innerHTML = "";
    element.innerHTML = `<p>${message}</p>`;
}