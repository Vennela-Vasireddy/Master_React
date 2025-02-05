import { useRouteError } from "react-router-dom";

const Error = () =>
{
    err = useRouteError()
    console.log(err)
    return(
<div>
<h1>uh-oh! Error</h1>
<h1> {err.status}: {err.statusText} </h1> 
    </div>
      
    )
};

export default Error