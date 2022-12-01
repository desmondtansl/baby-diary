import React from "react";
import Icons from "../Components/Icons";

function MainPage ({name, age, choice, pic}) {
    return (
        <div className="flex flex-col bg-orange-300 min-h-screen justify-center">
        <div className= "flex-col flex justify-center">
            <div>
            <img className="h-60 w-50 justify-center mx-auto" src={pic} />
            </div>
            <div className= 
            "text-4xl pb-5 flex justify-center text-center">
                <br></br>
                {name}'s Diary 
                <br></br>
                <br></br>
                {age} months old
                <br></br>
                <br></br>
                Intolerances: {choice}
            </div>
            <br></br>
        </div>
        <Icons className="flex r-0"/>
        </div>
    )
};
export default MainPage;
