import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {

    const [RestaurantList, setRestaurantList] = useState([]);
    //Using setRestaurantList, we will update the RestaurantList and maintain through out the component

    useEffect(() => {fetchData()}, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.30971167047457&lng=82.99302231520416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // This fetch returns a promise, so we need to handle it, so inorder to that we will use async - await

    const jsonData = await data.json();

    console.log(jsonData)
    
    // setRestaurantList(jsonData.data.cards[3].card.card.gridElements.infoWithStyle.restaurants) 
    // Above line is not a good practice, we should always use optional chaining to avoid errors, so

    setRestaurantList(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


    
    }

    return RestaurantList.length ===0? <Shimmer/> :  (<div className="Body">

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