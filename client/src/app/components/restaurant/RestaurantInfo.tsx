import React from "react";
import { PartialRestaurantData } from "@/types/types";
import Ratings from "@/components/common/ratings";

const RestaurantInfo = ({
  restaurant_name,
  restaurant_avg_ratings,
  restaurant_number_reviews,
}: PartialRestaurantData) => {
  return (
    <>
      {/* <div className="bg-primary">this is res info</div> */}
      <h2 className="card-title bg-slate-400">{restaurant_name}</h2>
      <div className="flex bg-green-200">
        <Ratings ratings={restaurant_avg_ratings!} />
        <p>{restaurant_avg_ratings}</p>
        <p>{restaurant_number_reviews} reviews</p>
      </div>
    </>
  );
};

export default React.memo(RestaurantInfo);
