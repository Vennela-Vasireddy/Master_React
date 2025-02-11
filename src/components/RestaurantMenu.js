import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"

const Menu = () =>
{

const resID = useParams()
console.log(resID)

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

  return (
        <div> 
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")} - {costForTwo}</h3>

      <h2>Menu</h2>
<ul>
  {itemCards.map((item) => (
    <li>{item.card.info.name}</li>))
  }

</ul>
        </div>
  

    )

}

export default Menu

