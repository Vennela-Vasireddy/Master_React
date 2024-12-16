import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, avgRating, deliveryTime, cuisines} = resData?.info
return (<div  className="res-card">
        <img className="food-image" src={ CDN_URL + cloudinaryImageId }  />
    
    <h4>{name}</h4>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating} Ratings</h4>
    <h4>{resData.info.sla.deliveryTime} Minutes</h4>
    
    </div>);
    
};


export default RestaurantCard;