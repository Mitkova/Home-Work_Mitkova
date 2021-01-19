let argument = ['"name"', '"mood"', '"activity"'];
function tellStory() {
    let argumentName1 = "My "
    let argumentName2 = " is Andjela."
    let argumentMood1 = " Today I am in a good ";
    let argumentMood2 = " and will go outside to do some sport "
    let argumentActivity1 = "cause I study a lot of codes in now days, there is a little time left for sport " ;
    let tellStory = argumentName1 + argument[0] + argumentName2 + argumentMood1 + argument[1] 
         + argumentMood2 + argument[2] + ", " + argumentActivity1 + argument[2] + ".";
    return tellStory;
}
console.log(tellStory());
document.write(tellStory());
window.alert(tellStory());