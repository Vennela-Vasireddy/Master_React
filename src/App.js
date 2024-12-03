// These are coming from our node_Modules now instead of using CDN's
import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


const AppLayout = () => (
    <div>
    <Header/>
    <Body/>
    <Footer/>
    </div>
);

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);