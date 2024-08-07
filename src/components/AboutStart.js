import about1 from "../images/About1.jpg";
import about2 from "../images/About2.webp";
import { Link } from "react-router-dom";

const AboutStart = ({showButton, showImage}) => {
    return(
          <div className="my-24 mx-32 flex gap-36 items-center">
          <img src={showImage===1?about1:about2} className="w-[600px] h-[500px] rounded-2xl"></img>
          <div>
            <h2 className="text-5xl font-serif tracking-wide mb-1">
              We provide quality
            </h2>
            <h2 className="text-5xl font-serif tracking-wider mb-4">
              food for your family
            </h2>
            <p className="font-medium mb-4">
              Our story began with a vision to create a unique food delivery
              experience that brings the best local dining straight to your
              door.From savory dishes to sweet treats, our platform is designed
              to make your dining experience exceptional, one delivery at a
              time.
            </p>
            <p>
              We are dedicated to connecting you with a diverse selection of
              restaurants and cuisines, ensuring a delightful culinary journey
              with every order. Our mission is to provide fast, reliable, and
              convenient service, allowing you to savor your favorite meals
              without leaving the comfort of your home.
            </p>
            {showButton?
            <Link to="/about">
              <button className="p-2 mt-6 text-[#2C2F24] border-2  border-black rounded-xl font-medium transition-custom">More About Us</button>
            </Link>:""}
          </div>
          </div>
    )
}

export default AboutStart;