import multicuisine from "../images/MultiCuisine.png";
import easyorder from "../images/easyorder.png";
import fastdeliver from "../images/FastDeliver.png";

const WebsitePros = () => {
  return (
    <div className="flex bg-white py-16 px-36 gap-32">
      <div className="flex gap-4">
        <div className="w-24">
          <img src={multicuisine}></img>
        </div>
        <div>
          <h2 className="font-medium">Multi Cuisine</h2>
          <p className="text-sm tracking-wide">
            Experience a world of flavors with our diverse multi-cuisine menu,
            where each dish tells a unique story.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-[122px]">
          <img src={easyorder}></img>
        </div>
        <div>
          <h2 className="font-medium">Easy to Order</h2>
          <p className="text-sm tracking-wide">
            Enjoy a seamless dining experience with our easy-to-order system,
            bringing deliciousness to your doorstep with just a few clicks.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-36">
          <img src={fastdeliver}></img>
        </div>
        <div>
          <h2 className="font-medium">Fast Deliver</h2>
          <p className="text-sm tracking-wide">
            Get your favorite meals delivered fast, ensuring hot and fresh
            flavors at your doorstep in no time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsitePros;
