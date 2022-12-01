import { useState } from "react";
import { Link } from "react-router-dom";

function Diaper ({name}) {
    const [changeTime, setChangeTime] = useState("");
    const [actualTime, setActualTime] = useState("");

    const diaperChangeHandler = (e) => {
        setChangeTime(e.target.value);
    };

    const submitHandlerDiaper = (e) => {
        e.preventDefault();
        setActualTime(changeTime);
    };

    return (
        <div className="bg-orange-300 h-screen">
            <h1>{name}'s Diaper Change Timings</h1>
                <br></br>
                <form onSubmit={submitHandlerDiaper}>
                <input
                required
                placeholder="enter time"
                type="text"
                value={changeTime}
                onChange={diaperChangeHandler}>
                </input>
            <button
            className="text-base inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
            type="submit">
            Submit
            </button>
                </form>
            {actualTime}
            <br></br>
            <br></br>
            <Link
            className="text-base inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
            to="/MainPage">
            Back to Diary
            </Link>
        </div>
    )
};
export default Diaper;