// ----------------------BONUS HOMEWORK----------------------------------
// Create a recipe page from inputs

// *Ask the user for the name of the recipe
// *Ask the user how many ingredients do we need for the recipe
// *Ask the user for the name of every ingredient
// *Print the name of the recipe in the HTML as heading element, ex: h1-h6
// *Print all ingredients as an unordered list in the HTML
// *Extra: Use a table if you want to be fancy :)





document.getElementById("myButton").addEventListener("click", function() {
    let recepieName = prompt("Please enter the NAME of the RECIPIE");
    //let numberOfIngredients = Number(prompt("Enter the NUMBER of INGREDIENTS for this recipe:"));
    let numberOfIngredients = parseInt(prompt("Enter the NUMBER of INGREDIENTS for this recipe:"));
    
    let tempArray = [];
    
    for (let index = 0; index < numberOfIngredients; index++) {
        let ingredient = prompt("Ingredient name");
    
        tempArray.push(ingredient);
    }

    document.getElementById("myDiv").innerHTML = (
        `
            <h1>${recepieName}</h1>
            <ul>
                ${tempArray.map(element => {
                    return (
                        `<li>${element}</li>`
                    )
                }).join("")}
            </ul>
        `
    )

}, false)
