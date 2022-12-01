import { useState } from "react";
import "flowbite";

function CheckboxMenu () {
    const checkboxes = {
        Dairy:false,
        Egg:false,
        Gluten:false,
        Grain:false,
        Peanut:false,
        Seafood:false,
        Sesame:false,
        Shellfish:false,
        Soy:false,
        Sulfite:false,
        TreeNut:false,
        Wheat:false
    };
    
    const [isChecked, setIsChecked] = useState([checkboxes]);

    const Checkbox = ({label, value}) => {
        return (
            <label>
                <input
                type="checkbox"
                checked={value}
                onChange={() => {
                    setIsChecked({
                    ...isChecked,
                    [label]: isChecked[label] ? false : true,
                    });
                }}/>
            {label}
            </label>
        );
    };

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }

    return (
        <div className="intolerance list">
        <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">              
                {Object.entries(checkboxes).map ((element, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox">
                            </input>
                            {element[0]}
                        </li>
                    )
                })}
            </ul>
            </div>
        </div>
    );
};
export default CheckboxMenu;