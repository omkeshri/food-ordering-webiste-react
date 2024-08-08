import Item from "./Item";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    {
      setShowIndex();
    }
  };

  return (
    <div>
      <div className="mx-auto my-5 p-4 w-2/3 bg-gray-50 rounded-md shadow-lg hover:bg-gray-100">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-medium text-black text-md">
            {data.title.toUpperCase()} ({data.itemCards.length})
          </span>
          <span>{showItems ? "🔺" : "🔻"}</span>
        </div>

        <div>{showItems && <Item items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
