import { CDN_URL } from "../util/constant";

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
  return (
    <div className="p-1 m-1 w-[245px] h-[380px] bg-neutral-200 rounded-lg hover:bg-neutral-300">
      <img
        className="p-1 h-40 w-full rounded-lg shadow-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="mt-2 text-center text-lg font-bold font-mono">{name}</h3>
      <h4 className="my-2 text-center font-medium ">{cuisines.join(", ")}</h4>

      <div className="m-2 flex justify-between">
        <h4 className="font-medium">{avgRating}</h4>
        <h4 className="font-medium">{costForTwo}</h4>
      </div>
      <h4 className="ml-2 font-medium">Rating: {totalRatingsString} </h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) =>{
    const {resData} = props;
    return resData.info.avgRating>=4.5 ? (
      <div>
        <label className="py-1 px-3 ml-1  absolute bg-amber-400 rounded-md font-medium text-xs">Top-Rated</label>
        <RestaurantCard {...props}/>
      </div>
      ):
    (
    <div>
      <RestaurantCard {...props}/>
    </div>
    );
  };
};

export default RestaurantCard;
