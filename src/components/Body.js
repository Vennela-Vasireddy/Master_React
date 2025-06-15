import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {

    const [RestaurantList, setRestaurantList] = useState([]);
    //Using setRestaurantList, we will update the RestaurantList and maintain through out the component
    const [filterResList, setfilterResList] = useState([]);
    const [SearchValue, setSearchValue] = useState("");
    const OnlineStatus = useOnlineStatus()
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
    useEffect(() => {fetchData()}, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.30971167047457&lng=82.99302231520416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // This fetch returns a promise, so we need to handle it, so inorder to that we will use async - await

    const jsonData = await data.json();

    console.log(jsonData)
    
    // setRestaurantList(jsonData.data.cards[3].card.card.gridElements.infoWithStyle.restaurants) 
    // Above line is not a good practice, we should always use optional chaining to avoid errors, so

    setRestaurantList(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilterResList(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


    
    }


    if(OnlineStatus === false){
    
        return <h2> No Internet, Please check the connection </h2>
    }

    return RestaurantList.length === 0? <Shimmer/> :  (
    
    <div className="Body">
    <div className="filter flex"> 
        <div className="search-bar m-4 p-4"> 
        <input type="text" className="border border-solid border-black" placeholder=" Search for Restaurants"
        value = {SearchValue}
        onChange = {(e) => {setSearchValue(e.target.value);}}
        >
        
        </input>
    <button  
    className="px-3 py-1 bg-green-500 m-4 rounded-lg"
    onClick = {() => {

        const filterList = RestaurantList.filter((res) => res.info.name.toLowerCase().includes(SearchValue.toLowerCase()));
        setfilterResList(filterList);
}}
    >
        Search
    </button>
    </div>

<div className="search-bar m-4 p-4 flex items-center">
<button 
     className="filter-btn px-3 py-1 bg-gray-100 m-4 rounded-lg" 
        onClick = {() => {
            const filterList = RestaurantList.filter((res) => res.info.avgRating >= 4);
            setfilterResList(filterList);//setRestaurantList is a function
            console.log(filterList)
          }}
        
        > Top Rated Restaurants </button>

</div>
    
    
    </div>

    <div className= "flex flex-wrap">
{
    filterResList.map((restaurant) => (
    <Link
    key={restaurant.info.id}
    to={"/menu/" + restaurant.info.id }>
        {
            restaurant.info.promoted?(<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard  resData = {restaurant}/>)
        } 


 </Link>
    ))}

    </div>
    </div>);

}

export default Body;