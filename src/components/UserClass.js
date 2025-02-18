import React from "react"

class Userclass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            userInfo:{
                name: "Dummy"
            }
        }

    }

   async componentDidMount(){

    const data = await fetch("https://api.github.com/users/Vennela-Vasireddy")
    const json = await data.json()

    this.setState({
        userInfo: json
    })
   } 

render(){
    
  
    return (
        <div className="user-card"> 
        <h1>
       
        </h1>

        <h1>
        Name: {this.state.userInfo.name}
        </h1>
           
        <h1>
        Loction: California
        </h1>

           <h1>
           Occupation: Software Developer
           </h1>

           </div>

    )
}


}

export default Userclass