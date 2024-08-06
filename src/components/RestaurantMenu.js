import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../util/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setshowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="m-2 text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h3 className="font-medium  text-xl">{cuisines.join(", ")}</h3>
      <h3 className="font-medium">{costForTwoMessage}</h3>
      <div className="m-auto">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => setshowIndex(showIndex != index ? index : null)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
