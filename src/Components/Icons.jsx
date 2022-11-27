import { GiBabyBottle, GiNightSleep } from "react-icons/gi";
import { MdBabyChangingStation, MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Icons = () => {
    return (
        <div className=" justify-center flex flex-col gap-6">
            <Link to="/Feedpage">
            <MenuIcons text="Feeding Time" icon={<GiBabyBottle size="60"/>} />
            </Link>
            <Link to="/Nap">
            <MenuIcons text="Nap Times" icon={<GiNightSleep size="60"/>} />
            </Link>          
            <Link to="/Diaper">
            <MenuIcons text="Diaper Change" icon={<MdBabyChangingStation size="60"/>} />
            </Link>
            <Link to="/Recipe">
            <MenuIcons text="Recipes" icon={<MdRestaurantMenu size="60" />} />
            </Link>
        </div>
    );
};

const MenuIcons = ({ icon, text = "tooltip"}) => (
    <div className="menu icon group">
        {icon}
        <span className="menu-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);
export default Icons;