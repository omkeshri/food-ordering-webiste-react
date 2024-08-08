import { useState } from "react";
import { LOGO_URL } from "../util/constant";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("LogIn");
  const {loggedInUser} = useContext(UserContext);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  
  const online = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
    <div className="flex justify-between ">
      <div className="logo-container">
        <Link to={"/"}><img src={LOGO_URL} className="ml-5 w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></img></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4 py-2 font-medium">{loggedInUser}: {online? "🟢": "🔴"}</li>
          <li className={`px-4 py-2 font-medium transition-custom ${isActive('/')? 'underline underline-offset-4':""}`}>
            <Link to={"/"}>Home</Link></li>
          <li className={`px-4 py-2 font-medium transition-custom ${isActive('/about')? 'underline underline-offset-4':""}`}>
            <Link to={"/about"}>About Us</Link></li>
          <li className={`px-4 py-2 font-medium transition-custom ${isActive('/restaurants')? 'underline underline-offset-4':""}`}>
            <Link to={"/restaurants"}>Restaurants</Link></li>
          <li className={`px-4 py-2 font-medium transition-custom ${isActive('/contact')? 'underline underline-offset-4':""}`}>
            <Link to={"/contact"}>Contact Us</Link></li>
          <li className={`px-4 py-2 font-medium transition-custom ${isActive('/cart')? 'underline underline-offset-4':""}`}>
            <Link to={"/cart"}>Cart🛒({cartItems.length})</Link></li>
          
        </ul>
          <button
            className = "px-4 mr-5 py-2 bg-indigo-100 font-medium border-2 border-indigo-400 border-x-indigo-800 hover:bg-indigo-200 rounded-md"
            onClick={() => {
              btnName === "LogIn" ? setbtnName("LogOut") : setbtnName("LogIn");
            }}
          >
            {btnName}
          </button>
      </div>
    </div>
    <hr></hr>
    </div>
  );
};

export default Header;
