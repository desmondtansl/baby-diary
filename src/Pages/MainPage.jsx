import React from "react";
import Icons from "../Components/Icons";

function MainPage ({name, age, choice}) {
    return (
        <div className= " flex-col bg-orange-300 h-screen flex justify-center">
            <h1 className= 
            " text-5xl pb-5">
            {name}'s Diary 
            <br></br>
            <br></br>
            {age} months old
            <br></br>
            <br></br>
            Intolerances: {choice}
            </h1>
            <br></br>
            <Icons className=" flex justify-center" />
        </div>
    )
};
export default MainPage;