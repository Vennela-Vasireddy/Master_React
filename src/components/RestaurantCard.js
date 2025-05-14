import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, avgRating, deliveryTime, cuisines} = resData?.info
return (

<div  className="p-4 m-4 w-[280px] bg-gray-50 hover:bg-gray-300" >
        <img className="rounded-lg w-72 h-48" src={ CDN_URL + cloudinaryImageId }  />
    
    <h4 className="font-bold py-4 text-lg">{name}</h4>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating} Ratings</h4>
    <h4>{resData.info.sla.deliveryTime} Minutes</h4>
    
    </div>);
    
};

export const withPromotedLabel = (RestaurantCard) => {
return(props) =>{
    return(
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg" >Promoted</label>
            <RestaurantCard{...props}/>
        </div>
    )
}
}
export default RestaurantCard;
