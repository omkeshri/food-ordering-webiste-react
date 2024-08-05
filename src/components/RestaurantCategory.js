import { useState } from "react";
import Item from "./Item";
const RestaurantCategory = ({ data }) => {
  const [showItems, setshowItems] = useState(false);
  const handleClick = () => {
    {
      !showItems ? setshowItems(true) : setshowItems(false);
    }
  };

  return (
    <div>
      <div className="mx-auto my-5 p-4 w-2/3 bg-gray-100 rounded-md shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-medium text-black text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ? (
            <span className=" scale-x-100 scale-y-[-1]">🔻</span>
          ) : (
            <span>🔻</span>
          )}
        </div>
        {showItems && <Item items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
