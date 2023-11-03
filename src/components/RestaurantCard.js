import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UsersContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  // const {name, cuisines, avgRating, cloudinaryImageId} = restaurant.info;
  const {user} = useContext(UsersContext);
  return (
    <div className="w-48 rounded-xl ">
      <img
        className="h-44 w-full object-cover rounded-xl"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </h2>
      <h3 className="whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(", ")}
      </h3>
      <div className="flex items-center gap-1">
        <img
          className="h-5"
          src="https://purepng.com/public/uploads/large/purepng.com-green-starstargeometricallydecagonconcavestardomclipartgreen-1421526503700o6cix.png"
          alt=""
        />
        {avgRating}
        {user.name}
      </div>
    </div>
  );
};
export default RestaurantCard;
