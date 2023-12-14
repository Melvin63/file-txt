import { useDispatch } from "react-redux";
import { imageid } from "../Constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ list }) => {
  const dispatch = useDispatch();
  const headerItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {list.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 my-2 border-b-2 border-gray-200 text-left flex justify-between "
        >
          <div className="w-9/12 ">
            <div className="py-4">
              <span className=" font- ">{item.card.info.name} </span>
              <span className="font-bold">
                {"₹"}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 ">
            <button
              className="p-2  absolute  bg-black text-white rounded-md shadow-sm"
              onClick={() => headerItem(item)}
            >
              Add+
            </button>
            <img
              src={imageid + item.card.info.imageId}
              alt={""}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
