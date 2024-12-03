
const RestaurantCard = (props) => {
return (<div  className="res-card">
        <img className="food-image" src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.resData.info.cloudinaryImageId }  />
    
    <h4>{props.resData.info.name}</h4>
    <h4>{props.resData.info.cuisines.join(", ")}</h4>
    <h4>{props.resData.info.avgRating} Ratings</h4>
    <h4>{props.resData.info.sla.deliveryTime} Minutes</h4>
    
    </div>);
    
};


export default RestaurantCard;