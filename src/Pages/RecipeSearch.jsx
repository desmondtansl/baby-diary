import { useState } from "react";
import { Link } from "react-router-dom";

function RecipeSearch ({choice}) {
    const [recipe, setRecipe] = useState("");
    const [search, setSearch] = useState("");


    const newRecipe = async () => {
        const response = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONACULARKEY}&intolerances=${choice}&instructionsRequired=true&addRecipeInformation=true&number=25`)
        const res = await response.json();
        console.log(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONACULARKEY}&intolerances=${choice}&instructionsRequired=true&addRecipeInformation=true&number=25`)
        setRecipe(res);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        newRecipe();
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const recipeList = recipe?.results?.map((element, index) => {
        return (
            <div key = {index}>
                <p>{element?.title}</p>
                <a href={element?.sourceUrl} target=" blank">{element?.sourceUrl}</a>
                <img src = {element?.image} />
            </div>
        );
    });

    return (
        <div className=" bg-orange-300 h-screen">
            <form onSubmit={handleSubmit}>
            <label htmlFor="Enter your intolerance">Enter your intolerance</label>
            <br></br>
            <input type="text" onChange={handleChange}/>
            <button type="Search">Search</button>
            </form>
            <br></br>
            {recipeList}
            <br></br>
            <Link to="/MainPage">Back to Diary</Link>
        </div>
    );
};
export default RecipeSearch;