import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Menu_api } from "../Constants";
import ItemCards from "./ItemCards";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showItemsIndex, setShowItemsIndex] = useState(false);

  const dummy = "dummy";

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId, Menu_api);

  if (resInfo === null) {
    return <Shimmer />;
  }

  if (!resInfo.cards || resInfo.cards.length === 0) {
    return <div>No menu items available</div>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="text-center p-2">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="font-semibold">
        {cuisines.join(", ") + " - " + costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <ItemCards
          key={index}
          data={category?.card?.card}
          showItems={index === showItemsIndex}
          setShowItems={() =>
            setShowItemsIndex((prevIndex) =>
              prevIndex === index ? null : index,
            )
          }
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
