import { CDN_URL } from "../util/constant";

const Item = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 pb-5 border-b-2 text-left flex justify-between"
        >
          <div className="py-2">
            <div className="mt-4">
              <span className="font-medium text-lg">{item.card.info.name}</span>
              <span className="font-medium">
                {" "}
                - ₹{item.card.info.price / 100}
              </span>
            </div>
            <p className="">{item.card.info.description}</p>
          </div>
          <div className="w-2/12 p-4">
          <div className="absolute ">
            <button className="p-2 bg-slate-100 m-auto rounded-md text-xs font-medium ">
              Add+
            </button>
          </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="h-36 w-[156px] mr-10 rounded-md shadow-lg aspect-156/144"
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
