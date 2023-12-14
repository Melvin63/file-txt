import { imageid } from "../Constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData);
  const { name, cloudinaryImageId, cuisines, avgRating } = resData;

  return (
    <div className="w-64 h-96 m-4 mx-10 text-center bg-white rounded-lg shadow-md  ">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={imageid + cloudinaryImageId}
        alt={name}
      />
      <div className="p-5 h-80 overflow-y-auto">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center justify-center">
          <span className="text-yellow-500 text-lg">&#9733;</span>
          <span className="text-gray-600 text-lg ml-1">
            {avgRating.toFixed(1) + " stars"}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-2">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

// export const PromotedRestaurantCard = (RestaurantCard) => {
//   return () => {
//     return (
//       <div>
//         {" "}
//         <label> Promoted</label>
//         <RestaurantCard {...props} />{" "}
//       </div>
//     );
//   };
// };

export default RestaurantCard;
