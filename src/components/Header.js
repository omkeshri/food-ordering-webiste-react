import { useState } from "react";
import { LOGO_URL } from "../util/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("LogIn");
  
const online = useOnlineStatus();
  return (
    <div>
    <div className="flex justify-between ">
      <div className="logo-container">
        <img src={LOGO_URL} className="ml-5 w-20"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4 font-medium">Online Status: {online? "🟢": "🔴"}</li>
          <li className="px-4 font-medium">
            <Link to={"/"}>Home</Link></li>
          <li className="px-4 font-medium">
            <Link to={"/about"}>About Us</Link></li>
          <li className="px-4 font-medium">
            <Link to={"/grocery"}>Grocery</Link></li>
          <li className="px-4 font-medium">
            <Link to={"/contact"}>Contact Us</Link></li>
          <li className="px-4 font-medium">
            <Link to={"/"}>Cart</Link></li>
        </ul>
          <button
            className = "px-4 mr-5 py-2 bg-indigo-100 font-medium border-2 border-indigo-400 border-x-indigo-800 hover:bg-indigo-200"
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
