import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Pages } from './router';
import SearchComponent from "./SearchComponent";
import logo from "../images/Logo.png";
import axios from "axios";
import {Destination} from "../Models/Users";


const Header = () => {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        setIsLoggedIn(!!user);
    }, []);


    const handleNavigate = (path: string) => {
        navigate(path);
    };

    const [destinations, setDestinations] = useState<Destination[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/Destination/GetAll").then((response)=>{
            setDestinations(response.data)
        })

    }, []);
    const scrollToDestination = (id:number) => {
        const element = document.getElementById(`destination-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            element.classList.add('highlighted');
            setTimeout(() => element.classList.remove('highlighted'), 3000);
        }
    };

    const [showLogout, setShowLogout] = useState(false);
    const handleLogout = () => {

        sessionStorage.removeItem('user');
        setIsLoggedIn(false);

        navigate(Pages.Login);
    };



    return (
        <header>
            <nav>
                <Link to="/" className="logo-link">
                    <div className="content-image" style={{ backgroundImage: `url(${logo})` }} />
                </Link>
                <ul className="menu">
                    <li><Button onClick={() => handleNavigate(Pages.Home)} className="active">Home</Button></li>
                    <li><Button onClick={() => handleNavigate(Pages.About)}>About</Button></li>
                    <li>
                        <Button onClick={() => handleNavigate(Pages.Destinations)}>Destinations</Button>
                        <ul className="submenu">
                            {destinations.map((destination) => (
                                <li key={destination.id}>
                                    <button onClick={() => scrollToDestination(destination.id)}>
                                        {destination.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li><Button onClick={() => handleNavigate(Pages.Contact)}>Contact</Button></li>
                    {isLoggedIn ? (
                        <li onMouseEnter={() => setShowLogout(true)} onMouseLeave={() => setShowLogout(false)}>
                            <Button onClick={() => handleNavigate(Pages.Profile)}>Profile</Button>
                            <ul className="submenu" style={{ display: showLogout ? 'block' : 'none' }}>
                                <li>
                                    <Button onClick={handleLogout}>Logout</Button>
                                </li>
                            </ul>
                        </li>
                    ) : (
                        <li><Button onClick={() => handleNavigate(Pages.Login)}>Login</Button></li>
                    )}
                    <div className="search-wrapper">
                        <SearchComponent />
                    </div>
                </ul>
            </nav>
        </header>
    );
};
export default Header;