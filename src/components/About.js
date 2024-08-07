// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//     return (
//         <div className="about">
//             <h1>This is About Page.</h1>
//             <User name = {"Om Keshri (Function)"} location={"Phagwara"} />
//             <UserClass name = {"Om Keshri (Class)"} location={"Phagwara"} />
//         </div>
//     )
// };

// export default About;
import AboutStart from "./AboutStart";
import WebsitePros from "./WebsitePros";
import InfoAbout from "./InfoAbout";
import CustomerSay from "./CustomerSay";

const About = () => {
  return (
    <div className="bg-[#F9F9F7] py-1">
      <AboutStart showButton={false} showImage={2} />
      <WebsitePros />
      <InfoAbout />
      <CustomerSay />
    </div>
  );
};

export default About;
