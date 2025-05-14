// These are coming from our node_Modules now instead of using CDN's
import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs"; 
import Menu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider, Outlet } from "react-router-dom"

// const Grocery = lazy(()=>{ import("./components/Grocery") }) This is how you to lazyloading

const AppLayout = () => (
    <div>
    <Header/>
    <Outlet />
    <Footer/>
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body /> 
            },
            
            {
                path: "/about",
                element: <AboutUs /> 
            },
            {
                path: "/contact",
                element: <ContactUs /> 
            },
            {
                path: "/menu/:resID",
                element: <Menu /> 
            }
        ]
    }
])


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router= {appRouter}/>);