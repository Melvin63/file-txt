import { useContext, useEffect, useState } from "react";
import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

function filterData(searchText, restaurants) {
  if (searchText === " ") {
    return restaurants;
  }
  const datafilter = restaurants.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()),
  );
  return datafilter;
}
const Body = () => {
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setallRestaurants] = useState([]);

  const { setUserName, defaultUser } = useContext(UserContext);

  // const RestaurantPromoted = PromotedRestaurantCard(RestaurantCard);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await response.json();

    setallRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setfilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }

  const status = useOnlineStatus();
  if (status === false) {
    return (
      <h1>You are offline!!!. Please check your internet connection...</h1>
    );
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-3 ml-10 ">
        <input
          className="p-2 outline-none border-2 border-blue-700  w-96 rounded-md focus:border-pink-400"
          type="text"
          placeholder="Search your favourite restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        ></input>

        <button
          className=" w-14 ml-2 text-teal-600  p-1 rounded-md hover:text-red-300"
          onClick={() => {
            const checkFilter = filterData(searchText, allRestaurants);
            setfilteredRestaurants(checkFilter);
          }}
        >
          <i className="p-2 m-2 bg-sky-200 rounded-md "> search</i>
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 ? (
          <h1>NO restaurants found</h1>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {/* {RestaurantPromoted.promoted} */}
                <RestaurantCard resData={restaurant?.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
