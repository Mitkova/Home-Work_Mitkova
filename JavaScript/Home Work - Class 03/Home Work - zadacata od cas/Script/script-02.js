let inputBirthdayDate = prompt("Enter your birthday date here: mm/dd/yyyy ");

let stringFormatedDate = inputBirthdayDate.match(/(\d\d)(\d\d)(\d\d\d\d)/);

let birthdayDate = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1, stringFormatedDate[2]);

//---------------Rasclenuvanje na Datumot na ragjanje------------
let birthdayDay = birthdayDate.getDate();
let birthdayMonth = birthdayDate.getMonth() + 1;
let birthdayYear = birthdayDate.getFullYear();


//-------------Rasclenuvanje na denesniot Datum------------
let todayDate = new Date();

let todayDayDate = todayDate.getDate();
let todayDateMonth = todayDate.getMonth() + 1;
let todayDateFullYear = todayDate.getFullYear();




if ((todayDateFullYear - birthdayYear < 18) || (todayDateFullYear - birthdayYear == 18 && birthdayMonth > todayDateMonth) || 
    (todayDateFullYear - birthdayYear == 18 && birthdayMonth == todayDateMonth && birthdayDay > todayDayDate) || 
    (birthdayMonth == todayDateMonth && birthdayDay == todayDayDate && todayDateFullYear - birthdayYear < 18)) {
    console.log("MALOLETEN");
} 

if (((todayDateFullYear - birthdayYear) == 18) && (todayDateMonth == birthdayMonth) && (todayDayDate == birthdayDay)) {
    console.log("SREKEN RODENDEN");
}

if ((todayDateFullYear - birthdayYear > 18) || (todayDateFullYear - birthdayYear == 18 && birthdayMonth < todayDateMonth) || 
    (todayDateFullYear - birthdayYear == 18 && birthdayMonth == todayDateMonth && birthdayDay < todayDayDate) || 
    (birthdayMonth == todayDateMonth && birthdayDay == todayDayDate && todayDateFullYear - birthdayYear >= 18)) {
    console.log("POLNOLETEN");
} 

