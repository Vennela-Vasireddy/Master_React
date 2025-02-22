import { LOGO_URL } from "../utils/constants";
import {useState} from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

    const [LogButton, setLogButton] = useState("Log_In");
    const Status = useOnlineStatus()
    return (

    <div className="header">

        <div className="logo" >
        <img src = {LOGO_URL}/>
        </div>

        <div className = "nav-items">
            <ul>
            <li>
            
            Online Status : { Status?  "✅": "🛑" }
               
                </li>
                <li>
                <Link to="/">Home </Link> 
                </li>
                <li> 
                   <Link to="/about"> About Us </Link> </li>
                <li>
                   <Link to="/contact"> Contact Us </Link> 
                    </li>
                <li>Cart</li>
                <button className="logButton" onClick={() => { LogButton == "Log_In"? setLogButton("Log_Out"): setLogButton("Log_In") }} > {LogButton}</button>
            </ul>
        </div>

    </div> );
};


export default Header;