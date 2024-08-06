import { CDN_URL } from "../util/constant";
// import { useContext } from "react";
// import UserContext from "../util/USerContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    totalRatingsString,
  } = resData?.info;
  // const {loggedInUser} = useContext(UserContext);

  return (
    <div className="p-1 m-1 w-[242px] h-[340px] bg-neutral-200 rounded-lg hover:bg-neutral-300 flex flex-col justify-between">
      <img
        className="p-1 h-40 w-full rounded-lg shadow-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="mt-2 text-center text-xl font-semibold px-2">{name.slice(0, 19)}{name.length>19?"...":""}</h3>
      <h4 className="my-1 text-center font-medium px-4 text-sm">{cuisines.slice(0, 3).join(", ")}{cuisines.length>3?"...":""}</h4>

      <div className="m-2 flex justify-between">
        <h4 className="font-medium">⭐{avgRating}</h4>
        <h4 className="font-medium">{costForTwo}</h4>
      </div>
      <h4 className="pb-2 ml-2 font-medium">Rating: {totalRatingsString} </h4>
      {/* <h4 className="pb-2 ml-2 font-medium">Rating: {loggedInUser} </h4> */}
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    return resData.info.avgRating >= 4.5 ? (
      <div>
        <label className="py-1 px-3 ml-1 my-2 absolute bg-amber-400 rounded-t-md font-medium text-xs bg-opacity-60">
          Top-Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    ) : (
      <div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
