import { useState } from "react";
import { Link } from "react-router-dom";

function FeedPage ({name}) {
    const [enteredTime, setEnteredTime] = useState("");
    const [enteredQty, setEnteredQty] = useState("");
    const [submittedTime, setSubmittedTime] = useState();
    const [submittedQty, setSubmittedQty] = useState();

    const timeChangeHandler = (e) => {
        setEnteredTime(e.target.value);
    };

    const qtyChangeHandler = (e) => {
        setEnteredQty(e.target.value);
    };

    const submitHandlerTime = (e) => {
        e.preventDefault();
        setSubmittedTime(enteredTime);
        setEnteredTime("");
    };

    const submitHandlerQty = (e) => {
        e.preventDefault();
        setSubmittedQty(enteredQty);
        setEnteredQty("");
    };

    return (
        <div className="App">
            <h1>{name}'s Bottle Timings</h1>
                <form onSubmit={submitHandlerTime}>
                <input
                    required
                    placeholder="enter time"
                    type="text"
                    value={enteredTime}
                    onChange={timeChangeHandler}
                />
                <button type="Submit">Submit</button>
                </form>
                <form onSubmit={submitHandlerQty}>
                <input
                    required
                    placeholder="enter amount"
                    type="text"
                    value={enteredQty}
                    onChange={qtyChangeHandler}
                />
                <button type="Submit">Submit</button>
                </form>
            {submittedTime}
            <br></br>
            <br></br>
            {submittedQty}
            <Link to="/MainPage">Back to Diary</Link>
        </div>
    );
};
export default FeedPage;