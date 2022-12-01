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
                placeholder="enter time"
                type="text"
                value={naptime}
                onChange={napTimeHandler}>
                </input>
            <button type="submit">Submit</button>
                </form>
            {actualNapTime}
            <br></br>
            <br></br>
            <Link to="/MainPage">Back to Diary</Link>
        </div>
    )
}
export default Nap;