import about3 from "../images/About3.jpg";

const InfoAbout = () => {
  return (
    <div className="flex justify-between px-36 py-24 gap-2">
      <div className="w-1/2 py-8">
        <h2 className="font-medium font-serif text-5xl mb-3">
          A little information for our valuable guest
        </h2>
        <p className="text-sm mr-5">
          At place, we believe that ordering is not just about food but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every Visit an unforgettable event.
        </p>
        <div className="flex flex-wrap mt-8 ml-10 gap-10">
          <div className="border-2 w-56 h-32 bg-white flex flex-col items-center justify-center gap-2">
            <p className="font-medium text-4xl font-serif">3</p>
            <p className="font-medium font-mono">Locations</p>
          </div>
          <div className="border-2 w-56 h-32 bg-white flex flex-col items-center justify-center gap-2">
            <p className="font-medium text-4xl font-serif">2024</p>
            <p className="font-medium font-mono">Founded</p>
          </div>
          <div className="border-2 w-56 h-32 bg-white flex flex-col items-center justify-center gap-2">
            <p className="font-medium text-4xl font-serif">100+</p>
            <p className="font-medium font-mono">Staff Members</p>
          </div>
          <div className="border-2 w-56 h-32 bg-white flex flex-col items-center justify-center gap-2">
            <p className="font-medium text-4xl font-serif">100%</p>
            <p className="font-medium font-mono">Satisfied Customers</p>
          </div>
        </div>
      </div>
      <div className="">
        <img src={about3} className="w-[450] h-[550px] rounded-lg"></img>
      </div>
    </div>
  );
};

export default InfoAbout;
