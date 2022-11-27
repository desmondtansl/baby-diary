import { useState } from "react";

function Recipe () {
    const [recipe, setRecipe] = useState("");

    const newRecipe = async () => {
        const response = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONACULARKEY}&intolerances=peanut&instructionsRequired=true&addRecipeInformation=true&query=rice}`)
        const res = await response.json();
        console.log(res);
    };

    return(
        <div>
        <h1>TEST</h1>
        </div>
    );
};
export default Recipe;