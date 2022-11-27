import React from "react";
import { Link } from "react-router-dom";

function MainPage ({name}) {
    return (
        <main className= " flex-col bg-purple-500 h-screen flex justify-center">
        <h1>{name}'s Diary</h1>
            <Link to = "/FeedPage">FeedPage</Link>
            <br></br>
            <Link to = "/Diaper">Diaper</Link>
            <br></br>
            <Link to = "/Nap">Nap</Link>
            <br></br>
            <Link to = "/Recipes">Recipes</Link>
        </main>
    )
};
export default MainPage;