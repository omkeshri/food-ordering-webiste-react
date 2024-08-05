import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus.js";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    // console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants)
    // Optional Chaining
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListofRestaurant(
      restaurants
    );
    setfilteredRestaurant(
      restaurants
    );
  };

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return <h1>You are offline!</h1>;
  }

  // Conditional Rendering
  // if (listofRestaurant.length === 0){
  //   return <Shimmer/>
  // }

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-end mr-4">
        <div className="mr-5 my-2">
          <input
            type="text"
            className="px-2 h-7 border-2 border-black rounded-md mr-3"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="font-medium py-1 px-5 border border-blue-500 bg-blue-300 rounded-md hover:bg-blue-400"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="my-2 py-1 px-3 font-medium border border-blue-500 bg-blue-300 rounded-md hover:bg-blue-400"
          onClick={() => {
            const filterList = listofRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListofRestaurant(filterList);
            console.log(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;