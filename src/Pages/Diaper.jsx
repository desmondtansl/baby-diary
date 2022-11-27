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
        setChangeTime("");
    };

    return (
        <div>
            <h1>{name}'s Diaper Change Timings</h1>
                <form onSubmit={submitHandlerDiaper}>
                <input
                required
                placeholder="enter time"
                type="text"
                value={changeTime}
                onChange={diaperChangeHandler}>
                </input>
            <button type="submit">Submit</button>
                </form>
            {actualTime}
            <br></br>
            <br></br>
            <Link to="/MainPage">Back to Diary</Link>
        </div>
    )
};
export default Diaper;