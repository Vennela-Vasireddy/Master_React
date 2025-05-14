import { useState } from "react"     
import ItemList from "./ItemList"

const RestaurantCategory = ({data}) => {
    const [showItem, setShowItem] = useState(false)
    const handle = () => {
        console.log("Clicked")
        setShowItem(!showItem)
    }
    return(
        <div> 
        <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-2">
            <div className="flex justify-between cursor-pointer" onClick={handle}> 

            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
              </div>

            {showItem && <ItemList items={data.itemCards} />}
        </div>
</div>

    )
}

export default RestaurantCategory