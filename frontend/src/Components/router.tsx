import { createBrowserRouter } from "react-router-dom";
import  Home  from "../Pages/Home";
import  About  from "../Pages/About";
import  Contact  from "../Pages/Contact";
import  Destinations  from "../Pages/Destinations";
import  Login  from "../Pages/Login";
import Search from "../Pages/Search";
import Profile from "./Profile";
import ProtectedRoute from './ProtectedRoute';
import { Navigate } from 'react-router-dom';

export enum Pages {
    Home = "/Home",
    About = "/About",
    Contact = "/Contact",
    Destinations = "/Destinations",
    Login = "/Login",
    Search = "/Search",
    Profile = "/Profile"
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
    },
    {
        path: Pages.Profile,
        element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        )
    },
    {
        path: "*",
        element: <div>404 Not Found</div> // Route pentru 404
    }

]

export const router = createBrowserRouter(routes);