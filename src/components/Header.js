import { useState } from "react";
import { LOGO_URL } from "../util/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("LogIn");
  
const online = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {online? "🟢": "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link></li>
          <li>
            <Link to={"/about"}>About Us</Link></li>
          <li>
            <Link to={"/grocery"}>Grocery</Link></li>
          <li>
            <Link to={"/contact"}>Contact Us</Link></li>
          <li>
            <Link to={"/"}>Cart</Link></li>
          <button
            className="login"
            onClick={() => {
              btnName === "LogIn" ? setbtnName("LogOut") : setbtnName("LogIn");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
