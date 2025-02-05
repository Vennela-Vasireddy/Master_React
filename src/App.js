// These are coming from our node_Modules now instead of using CDN's
import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const AppLayout = () => (
    <div>
    <Header/>
    <Body/>
    <Footer/>
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>
    },
    {
        path: "/about",
        element: <AboutUs /> 
    }
])


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router= {appRouter}/>);