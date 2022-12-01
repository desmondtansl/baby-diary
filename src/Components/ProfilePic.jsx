import React, { useState } from "react";

function ProfilePic ({pic, setPic}) {
    const handleChange = (e) => {
        console.log(e.target.files);
        setPic(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div>
            <h2 className=" text-center">Add Image (Optional):</h2>
            <input type="file" onChange={handleChange} />
            <img className="mx-auto h-60 w-50 justify-center flex" src={pic} />
        </div>
    );
};
export default ProfilePic;