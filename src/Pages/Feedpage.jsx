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

    const submitHandlerForm = (e) => {
        e.preventDefault();
        setSubmittedTime(enteredTime);
        setSubmittedQty(enteredQty);
        setEnteredQty("");
        setEnteredTime("");
    };

    return (
        <div className= " bg-orange-300 h-screen">
            <h1>{name}'s Bottle Timings</h1>
                <br></br>
                <form onSubmit={submitHandlerForm}>
                <input
                    required
                    placeholder="enter time"
                    type="text"
                    value={enteredTime}
                    onChange={timeChangeHandler}
                />
                <br></br>
                <input
                    required
                    placeholder="enter amount"
                    type="text"
                    value={enteredQty}
                    onChange={qtyChangeHandler}
                />
                <button className=" text-base inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                type="Submit">
                Submit
                </button>
                </form>
                <br></br>
            {submittedTime}
            <br></br>
            {submittedQty}
            <br></br>
            <br></br>
            <Link className=" text-base inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            to="/MainPage">
            Back to Diary
            </Link>
        </div>
    );
};
export default FeedPage;