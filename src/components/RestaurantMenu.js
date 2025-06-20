import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import RestaurantCategory from "./RestaurantCategory"

const Menu = () =>
{

const {resID} = useParams()
const [showIndex, setShowIndex] = useState(0)

  const [Menu, setMenu] = useState([])

  useEffect(()=>{fetchData()}, [])

  const fetchData = async() => {
    console.log("Hello")
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${resID}`);
    const jsonData = await data.json();

  console.log(jsonData)
  setMenu(jsonData)
  }

  if (Menu.length == 0)
  {
    return <Shimmer/>
  }

  const {name, costForTwo, cuisines} = Menu?.data?.cards[2]?.card?.card?.info
  const {itemCards}= Menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card

  

  const categories = Menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )

    console.log(categories)

  return (
        <div className="text-center"> 
      <h3 className="font-bold my-6 text-2xl">{name}</h3>
      <h3 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwo}</h3>

      {
        categories.map((category, index) => (<RestaurantCategory
           key={category?.card?.card.title}
            data={category?.card?.card} 
            showItem = {index == showIndex? true:false}
            setShowIndex={() => setShowIndex(index)}
            
            />))
      }



        </div>
  

    )

}

export default Menu

