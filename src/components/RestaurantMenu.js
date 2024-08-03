import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../util/constant";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  // console.log(cards);

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul> */}
      <ul>
        {cards.map((item, index) => {
          if (index !== 0 && index !== 1 && index !== 30 && index !== 31) {
            console.log({ item });
            return (
              <li key={index}>
                <h2>{item?.card?.card?.title}</h2>
                <ul>
                  {item?.card?.card?.itemCards?.map((subItem) => (
                    <li key={subItem?.card?.info?.id}>
                      {subItem?.card?.info?.name} - {subItem?.card?.info?.price / 100}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          return null; // Return null for the indices that are not to be rendered
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
