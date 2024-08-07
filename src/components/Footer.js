import food1 from "../images/Food1.jpg";
import food2 from "../images/Food2.jpg";
import food3 from "../images/Food3.jpg";
import food4 from "../images/Food4.jpg";
import twitter from "../images/TwitterLogo.png"
import facebook from "../images/facebookLogo.png";
import instagram from "../images/InstagramLogo.png";
import github from "../images/GithubLogo.png";
import { Link } from "react-router-dom";
import { GITHUB_URL } from "../util/constant";
const Footer = () => {
  return (
    <div className=" py-24 px-36 bg-[#474747] ">
      <div className="flex  justify-between text-white">
        <div className="w-56">
          <h1 className="font-medium text-4xl font-serif mb-5 mt-2">Little Cheers</h1>
          <p className="text-xs mb-3 tracking-wider">
            In the new era of technology we look a future with certainty and
            pride to for our company end.
          </p>
          <div className="flex gap-2">
            <Link to={""} target="blank">
              <img src={twitter} className="w-8 mt-1 transition-custom"></img>
            </Link>
            <Link to={""} target="blank">
              <img src={facebook} className="w-[30px] mt-1 transition-custom"></img>
            </Link>
            <Link to={""} target="blank">
              <img src={instagram} className="w-8 mt-1 transition-custom"></img>
            </Link>
            <Link to={GITHUB_URL} target="blank">
              <img src={github} className="w-8 mt-1 transition-custom"></img>
            </Link>
          </div>
        </div>
        <div className=" ">
          <h3 className="mb-8 font-medium text-sm">Pages</h3>
          <Link to={"/"}>
          <p className="text-sm mb-3 transition-custom">Home</p></Link>
          <Link to={"/about"}>
          <p className="text-sm mb-4 transition-custom">About</p></Link>
          <Link to={"/restaurants"}>
          <p className="text-sm mb-4 transition-custom">Restaurants</p></Link>
          <Link to={"/contact"}>
          <p className="text-sm mb-4 transition-custom">Contact</p></Link>
          <Link to={"/"}>
          <p className="text-sm mb-4 transition-custom">Cart</p></Link>
        </div>
        <div className="">
          <h3 className="mb-8 font-medium text-sm">Utility Pages</h3>
          <p className="text-sm mb-4">Start Here</p>
          <p className="text-sm mb-4">Style Guide</p>
          <p className="text-sm mb-4">404 Not Found</p>
          <p className="text-sm mb-4">Licenses</p>
          <p className="text-sm mb-4">View More</p>
        </div>
        <div className=" w-80">
            <h2 className="font-medium text-sm mb-8">Follow us on instagram</h2>
            <div className="flex flex-wrap gap-3">
                <img src={food1} className="w-36 rounded-xl h-28"></img>
                <img src={food2} className="w-36 rounded-xl h-28"></img>
                <img src={food3} className="w-36 rounded-xl h-28"></img>
                <img src={food4} className="w-36 rounded-xl h-28"></img>
            </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
