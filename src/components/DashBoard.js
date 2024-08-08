import dashboard from "../images/Dashboard.jpg";
import { Link } from "react-router-dom";
import AboutStart from "./AboutStart";
import UserContext from "../util/UserContext";
import { useContext } from "react";

const Dashboard = () => {
  const { setuserName } = useContext(UserContext);
  return (
    <div>
      <div>
        <img src={dashboard} className="w-full h-[715px] opacity-90"></img>
      </div>
      <h2 className="absolute top-[250px] text-7xl font-serif left-[550px] tracking-wider text-[#2C2F24]">
        Best food for
      </h2>
      <h2 className="absolute top-[310px] text-7xl font-serif left-[600px] tracking-wider text-[#2C2F24]">
        your taste
      </h2>
      <p className="absolute top-[400px] left-[570px] text-[#2C2F24] font-medium">
        Discover delectable cuisines and unforgettable moments
      </p>
      <p className="absolute top-[420px] left-[710px] text-[#2C2F24] font-medium">
        at your doorstep.
      </p>
      <Link to="/restaurants">
        <button className="p-2 my-2 absolute top-[443px] left-[840px] text-[#2C2F24] border-2  border-black rounded-xl font-medium transition-custom">
          Explore Menu
        </button>
      </Link>
      <input
        type="text"
        autoFocus
        className="p-1 px-2 my-2 text-amber-900 absolute top-[447px] left-[610px] border-2 border-black rounded-xl font-medium"
        placeholder="Change UserName"
        onChange={(e) => setuserName(e.target.value)}
      ></input>
      <AboutStart showButton={true} showImage={1} />
    </div>
  );
};

export default Dashboard;
