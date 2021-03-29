console.log(' ----- Chinese Zodiac ----------')

let inputYear = prompt ("Enter your birthday year: ");
console.log(inputYear);
let birthdayYear = parseInt (inputYear);
console.log(typeof(birthdayYear));  //so ova proveruvam dali godinata od STRING ja konvertiralo vo NUMBER

if(((birthdayYear - 4) % 12 == 0)) {
    console.log(`Your Chinese Zodiac is "Rat"`);
} else if(((birthdayYear - 4) % 12 == 1)) {
    console.log(`Your Chinese Zodiac is "Ox"`);
} else if(((birthdayYear - 4) % 12 == 2)) {
    console.log(`Your Chinese Zodiac is "Tiger"`);
} else if(((birthdayYear - 4) % 12 == 3)) {
    console.log(`Your Chinese Zodiac is "Rabbit"`);
} else if(((birthdayYear - 4) % 12 == 4)) {
    console.log(`Your Chinese Zodiac is "Dragon"`);
} else if(((birthdayYear - 4) % 12 == 5)) {
    console.log(`Your Chinese Zodiac is "Snake"`);
} else if(((birthdayYear - 4) % 12 == 6)) {
    console.log(`Your Chinese Zodiac is "Horse"`);
} else if(((birthdayYear - 4) % 12 == 7)) {
    console.log(`Your Chinese Zodiac is "Goat"`);
} else if(((birthdayYear - 4) % 12 == 8)) {
    console.log(`Your Chinese Zodiac is "Monkey"`);
} else if(((birthdayYear - 4) % 12 == 9)) {
    console.log(`Your Chinese Zodiac is "Rooster"`);
} else if(((birthdayYear - 4) % 12 == 10)) {
    console.log(`Your Chinese Zodiac is "Dog"`);
} else  {
    console.log(`Your Chinese Zodiac is "Pig"`);
}