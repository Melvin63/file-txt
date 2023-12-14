import ItemList from "./ItemList";

const ItemCards = ({ data, showItems, setShowItems, dummy }) => {
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="p-2 w-6/12 m-auto bg-gray-50 shadow-lg my-5">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>
        {showItems && <ItemList list={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default ItemCards;
