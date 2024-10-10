async function getRandomCocktail() {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        displayCocktail(data.drinks[0]);
    } catch (error) {
        console.error("Error fetching the cocktail data:", error);
    }
}

function displayCocktail(cocktail) {
    document.getElementById("cocktail-name").textContent = cocktail.strDrink;
    document.getElementById("cocktail-image").src = cocktail.strDrinkThumb;
    document.getElementById("cocktail-image").alt = cocktail.strDrink;
    document.getElementById("cocktail-instructions").textContent = cocktail.strInstructions;

    let ingredients = '';
    for (let i = 1; i <= 15; i++) {
        let ingredient = cocktail[`strIngredient${i}`];
        let measure = cocktail[`strMeasure${i}`];
        if (ingredient) {
            ingredients += `<li>${measure ? measure : ''} ${ingredient}</li>`;
        }
    }
    document.getElementById("cocktail-ingredients").innerHTML = ingredients;
}

document.addEventListener("DOMContentLoaded", getRandomCocktail);