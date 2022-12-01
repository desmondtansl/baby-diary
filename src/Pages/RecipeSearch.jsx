import { useState } from "react";
import { Link } from "react-router-dom";

function RecipeSearch ({choice}) {
    const [recipe, setRecipe] = useState("");
    const [search, setSearch] = useState("");


    const newRecipe = async () => {
        const response = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONACULARKEY}&intolerances=${choice}&instructionsRequired=true&addRecipeInformation=true&number=25&query=${search}`)
        const res = await response.json();
        console.log(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONACULARKEY}&intolerances=${choice}&instructionsRequired=true&addRecipeInformation=true&number=25&query=${search}`)
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
        <div className=" bg-orange-300 h-auto min-h-screen">
            <form onSubmit={handleSubmit}>
            <h1>{choice} intolerance set</h1>
            <div className=" pb-2 text-2xl" htmlFor="Recipe Search">Recipe Search</div>
            <input type="text" placeholder="Results excl intolerances" onChange={handleChange}/>
            <button 
            className=" text-base p-3 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
            type="Search">
            Search
            </button>
            </form>
            <br></br>
            {recipeList}
            <br></br>
            <br></br>
            <Link className=" text-base inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to="/MainPage">Back to Diary</Link>
        </div>
    );
};
export default RecipeSearch;