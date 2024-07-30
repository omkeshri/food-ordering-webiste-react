import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../util/mockData.js";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = resList.filter((res) => res.info.avgRating > 4);
            setListofRestaurant(filterList);
            console.log(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
