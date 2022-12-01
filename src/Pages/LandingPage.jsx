import React from "react";
import { useNavigate } from "react-router-dom";
import Options from "../Components/Options";

function BabyName ({name, setBabyName, age, setBabyAge, choice, setChoice}) {
    
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name);
        navigate("/MainPage");
    };

    return (
        <div className= " bg-orange-300 h-screen flex justify-center">
        <form className="flex flex-col justify-center" onSubmit={submitHandler}>
            <div className=" text-center py-4 text-4xl">Create A Profile</div>
            <div className="Enter Name text-center">
                <label className=" text-2xl" htmlFor="Name">Baby's Name: </label>
                <input
                className="text-2xl"
                required
                type="name" 
                name="name"
                id="name" 
                onChange={(e) => setBabyName(e.target.value)} value={name}>
                </input>
                <br></br>
                <br></br>
                <label className=" text-2xl" htmlFor="Age">Baby's Age: </label>
                <input
                className="text-2xl"
                required
                placeholder="enter in months"
                type="age"
                name="age"
                id="age"
                onChange={(e) => {setBabyAge(e.target.value)}} value={age}>
                </input>
            </div>
            <br></br>
            <Options value={choice} setChoice={setChoice} />
            <br></br>
            <div className="flex space-x-2 justify-center pt-3">
            <button
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            value="next"
            >Next</button>
            </div>        
            </form>
        </div>
    );
};
export default BabyName;