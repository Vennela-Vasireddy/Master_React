import { useState, useEffect } from "react" 

const useOnlineStatus = () => {

    const [Status, setStatus] = useState(true)

useEffect( () => {
    window.addEventListener("offline", ()=> {
        setStatus(false);
    })

    window.addEventListener("online", ()=> {
        setStatus(true);
    })

}, [])
   

    return Status

}

export default useOnlineStatus