import { useState } from "react";
import { LOGO_URL } from "../util/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("LogIn");
  

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link></li>
          <li>
            <Link to={"/about"}>About Us</Link></li>
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
