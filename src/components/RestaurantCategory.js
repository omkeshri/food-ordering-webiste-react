import { useState, useRef, useEffect } from "react";
import Item from "./Item";
const RestaurantCategory = ({ data }) => {
  const [showItems, setshowItems] = useState(false);
  const [height, setHeight] = useState(0);
  const itemRef = useRef(null);
  const handleClick = () => {
    {
      !showItems ? setshowItems(true) : setshowItems(false);
    }
  };

  useEffect(() => {
    if (itemRef.current) {
      setHeight(showItems ? itemRef.current.scrollHeight : 0);
    }
  }, [showItems]);

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
          <span
            className={`transition-transform duration-300 ${
              showItems ? "rotate-180" : ""
            }`}
          >
            🔻
          </span>
        </div>

        <div
            ref={itemRef}
            style={{ maxHeight: `${height}px` }}
            className="overflow-hidden transition-all duration-1000 ease-in-out"
         >
           {showItems && <Item items={data.itemCards} />}
         </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
