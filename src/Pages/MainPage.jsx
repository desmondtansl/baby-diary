import React from "react";
import Icons from "../Components/Icons";

function MainPage ({name}) {
    return (
        <div className= " flex-col bg-purple-500 h-screen flex justify-center">
            <h1 className= " text-5xl pb-5">{name}'s Diary</h1>
                <Icons className=" flex justify-center" />
        </div>
    )
};
export default MainPage;