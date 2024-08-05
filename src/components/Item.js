import { CDN_URL } from "../util/constant";

const Item = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 pb-5 border-b-2 text-left flex justify-between"
        >
          <div className="py-2 w-full mr-5">
            <div className="mt-4 mb-4">
              <span className="font-medium text-md">{item.card.info.name}</span>
              <span className="font-medium">
                {" "}
                - ₹
                {item?.card?.info?.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm tracking-wide">{item.card.info.description || item?.card?.info?.name}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute ">
              <button className="p-2 bg-slate-100 m-auto rounded-sm text-xs font-medium ">
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="h-[144px] w-[156px] mr-10 rounded-md shadow-lg aspect-156/144"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;

// height: 144px;
//     aspect-ratio: auto 156 / 144;
//     width: 156px;
