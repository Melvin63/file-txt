import { useEffect, useState } from "react";

const useRestaurantMenu = (resId, Menu_api) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(Menu_api + resId);
    const json = await data.json();

    setresInfo(json.data);
  }

  return resInfo;
};

export default useRestaurantMenu;
