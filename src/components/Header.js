import { LOGO_URL } from "../utils/constants";
import {useState} from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

    const [LogButton, setLogButton] = useState("Log_In");
    const Status = useOnlineStatus()
    return (

    <div className="header flex justify-between shadow-lg m-2">
        <div className="logo" >
        <img className="w-28" src = {LOGO_URL}/>
        </div>

        <div className = "flex items-center nav-items">
            <ul className="flex p-4 m-4">
            <li className="px-4">
            
            Online Status : { Status?  "✅": "🛑" }
               
                </li>
                <li className="px-4">
                <Link to="/">Home </Link> 
                </li>
                <li className="px-4"> 
                   <Link to="/about"> About Us </Link> </li>
                <li className="px-4">
                   <Link to="/contact"> Contact Us </Link> 
                    </li>
                <li className="px-4">Cart</li>
                <button className="logButton" onClick={() => { LogButton == "Log_In"? setLogButton("Log_Out"): setLogButton("Log_In") }} > {LogButton}</button>
            </ul>
        </div>

    </div> );
};


export default Header;