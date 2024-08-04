import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>This is About Page.</h1>
            <User name = {"Om Keshri (Function)"} location={"Phagwara"} />
            <UserClass name = {"Om Keshri (Class)"} location={"Phagwara"} />
        </div>
    )
};

export default About;