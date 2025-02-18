
import UserClass from "./UserClass.js"
import React from "react"


class AboutUs extends React.Component
{
    constructor()
    {
        super()
        console.log("Parent Cons")
    }


    render()
    {
        return (
            <div>
            <h1> About Us </h1>
            <UserClass name = {"Class"}/>
            </div>
        )
    }

}

export default AboutUs