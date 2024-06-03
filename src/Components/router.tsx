import { createBrowserRouter } from "react-router-dom";
import  Home  from "../Pages/Home";
import  About  from "../Pages/About";
import  Contact  from "../Pages/Contact";
import  Destinations  from "../Pages/Destinations";
import  Login  from "../Pages/Login";
import Search from "../Pages/Search";
import { Navigate } from 'react-router-dom';

export enum Pages {
    Home = "/Home",
    About = "/About",
    Contact = "/Contact",
    Destinations = "/Destinations",
    Login = "/Login",
    Search = "/Search"
}

const routes = [
    {
        path: Pages.Home,
        element: <Home />
    },
    {
        path: Pages.About,
        element: <About />
    },
    {
        path: Pages.Contact,
        element: <Contact />
    },
    {
        path: Pages.Destinations,
        element: <Destinations />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: Pages.Login,
        element: <Login />
    },
    {
        path: Pages.Search,
        element: <Search />
    }

]

export const router = createBrowserRouter(routes);