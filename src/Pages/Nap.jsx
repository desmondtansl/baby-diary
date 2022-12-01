import { useState } from "react";
import { Link } from "react-router-dom";

function Nap ({name}) {
    const [naptime, setNapTime] = useState("");
    const [actualNapTime, setActualNapTime] = useState("");

    const napTimeHandler = (e) => {
        setNapTime(e.target.value);
    };

    const submitHandlerNap = (e) => {
        e.preventDefault();
        setActualNapTime(naptime);
    }

    return (
        <div className="bg-orange-300 h-screen">
            <h1>{name}'s Nap Timings</h1>
                <br></br>
                <form onSubmit={submitHandlerNap}>
                <input
                required
                placeholder="Enter Time"
                type="text"
                value={naptime}
                onChange={napTimeHandler}>
                </input>
                <button
                className="text-base inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                type="submit">
                Submit
                </button>
                </form>
            <br></br>
            {actualNapTime}
            <br></br>
            <br></br>
            <Link 
            className="text-base inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            to="/MainPage">
            Back to Diary
            </Link>
        </div>
    )
}
export default Nap;