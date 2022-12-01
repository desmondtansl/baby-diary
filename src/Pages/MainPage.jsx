import React from "react";
import Icons from "../Components/Icons";

function MainPage ({name, age, choice}) {
    return (
        <div className="flex flex-col bg-orange-300 min-h-screen justify-center">
        <div className= " flex-col flex justify-center">
            <h1 className= 
            " text-4xl pb-5 flex justify-center text-center">
                {name}'s Diary 
                <br></br>
                <br></br>
                {age} months old
                <br></br>
                <br></br>
                Intolerances: {choice}
            </h1>
            <br></br>
        </div>
        <Icons className="flex r-0"/>
        </div>
    )
};
export default MainPage;
