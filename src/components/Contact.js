import { Link } from "react-router-dom";
import { GITHUB_LOGO, LINKEDIN_LOGO, GITHUB_URL, LINKEDIN_URL } from "../util/constant";

const Contact = () => {
  return (
    <div className="p-4 pb-20 bg-slate-50">
      <div>
        <h3 className="text-center text-xl tracking-wider">Have a Query?</h3>
        <h1 className="text-center text-7xl tracking-widest">Contact Us</h1>
      </div>
      <div className="flex justify-between mt-10">
        <div className="ml-32">
          <form className="m-2">
            <h2 className="text-center tracking-widest font-medium underline underline-offset-4">
              ONLINE ENQUIRY
            </h2>
            <input
              type="text"
              placeholder="Name"
              className="w-[500px] p-2 block m-4 mb-6 shadow-md"
            ></input>
            <input
              type="text"
              placeholder="Email"
              className="w-[500px] p-2 block m-4 mb-6 shadow-md"
            ></input>
            <input
              type="text"
              placeholder="Phone"
              className="w-[500px] p-2 block m-4 mb-6 shadow-md"
            ></input>
            <textarea
              placeholder="Message"
              className="w-[500px] p-2 block m-4 mb-6 h-52 shadow-md"
            ></textarea>
          </form>
        </div>

        <div className="mr-32 w-[500px]">
          <h2 className="text-center tracking-widest m-2 font-medium mb-8 underline underline-offset-4">
            CONTACT DETAILS
          </h2>
          <h4 className="text-center tracking-wide">omkeshri21@gmail.com</h4>
          <h4 className="text-center tracking-wide">(+91) **********</h4>
          <div className="flex">
            <Link
              to={GITHUB_URL}
              target="blank"
            >
              <button className="w-32 gap-1 flex items-center border-2 border-black px-2 bg-white rounded-md ml-24 mr-24 my-16
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src={GITHUB_LOGO} className="w-10"></img>
                <p>GitHub</p>
              </button>
            </Link>
            <Link
              to={LINKEDIN_URL}
              target="blank"
            >
              <button className="w-32 flex items-center gap-1 border-2 border-black px-2 bg-white rounded-md my-16
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src={LINKEDIN_LOGO} className="w-10"></img>
                <p>LinkedIn</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
