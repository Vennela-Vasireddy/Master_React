// These are coming from our node_Modules now instead of using CDN's
import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs"; 
import Error from "./components/Error";
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
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <AboutUs /> 
    },
    {
        path: "/contact",
        element: <ContactUs /> 
    }
])


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router= {appRouter}/>);