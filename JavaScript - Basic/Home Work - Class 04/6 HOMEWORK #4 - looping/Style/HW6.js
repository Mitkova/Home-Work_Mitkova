let firstName = ['Andjela', 'Ivan', 'Julija', 'Frosina'];
let lastName = ['Mitkova', 'Penovski', 'Ilievska', 'Doneva'];
let noFullName = [];

let i = 0;
listNumber = 1;
function noFirstLastName() {

    while (i < firstName.length) {
        //fullName.push(`${listNumber}. ${firstName[i]} ${lastName[i]}`); ---- code on "line 10", does the same as code on "line 11".
        noFullName.push(listNumber + "." + " " + firstName[i] + " " + lastName[i]); 
        i++;
        listNumber++;
    }
}

noFirstLastName();
console.log(noFullName);







