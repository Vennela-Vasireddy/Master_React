import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {

    const [RestaurantList, setRestaurantList] = useState(resList);
    //Using setRestaurantList, we will update the RestaurantList and maintain through out the component

    return (<div className="Body">

    <div className="filter"> 
    
     <button 
     className="filter-btn" 
        onClick = {() => {
            const filterList = RestaurantList.filter((res) => res.info.avgRating >= 4);
            setRestaurantList(filterList); //setRestaurantList is a function
            console.log(filterList)
          }}
        
        > Top Rated Restaurants </button>
           
    </div>

    <div className= "restaurant-container">
{
    RestaurantList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData = {restaurant}/>) ) 
}

    </div>
    </div>);

}

export default Body;