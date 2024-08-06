import { useState, useRef, useEffect } from "react";
import Item from "./Item";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
  // const [showItems, setshowItems] = useState(false);
  const handleClick = () => {
    {
      setShowIndex();
    }
  };


  return (
    <div>
      <div className="mx-auto my-5 p-4 w-2/3 bg-gray-100 rounded-md shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-medium text-black text-md">
            {data.title.toUpperCase()} ({data.itemCards.length})
          </span>
          <span>
            🔻
          </span>
        </div>

        <div>
          {showItems && <Item items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
