// These are coming from our node_Modules now instead of using CDN's
import React from "react";
import ReactDom from "react-dom/client";


//Element
const Element = <h1>Hey, I am a react functional element</h1>;

// Functional Component
const Title = () => (
    <> 
    {Element}
    console.log("Hey, I'm Javascript")
    <h1>Hey, I am an functional component</h1>
    </>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Title/>);
