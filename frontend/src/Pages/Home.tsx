import React from 'react';

import { useNavigate } from 'react-router-dom';

 import { Routes, Route } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from './About';
import Destinations from "./Destinations";
import Contact from "./Contact";
import '../style.css';

import { Button } from '@mui/material';
import Geolocation from '../Components/Geolocation'


import parisImage from '../images/paris-image.jpg';
import londonImage from '../images/london.jpg';
import sevillaImage from '../images/sevilla.jpg';
import travelImage from '../images/travel-022.jpg';

const Home = () => {

    return (
        <>
            <Header/>

            <div className="hero">
                <p className="explorer-slogan">IT'S A BIG WORLD <br/> OUT THERE,<br/> GO EXPLORE</p>
            </div>
            <section className="packages">
                <h2>Beautiful Places Around The World</h2>
                <div className="package" id="paris">
                    <img src={parisImage} alt="Paris"/>
                    <h3>Paris</h3>
                    <p>An unforgettable citybreak in the city of love.</p>
                </div>
                <div className="package" id="london">
                    <img src={londonImage} alt="London"/>
                    <h3>London</h3>
                    <p>Ronyal heritage, iconic landmarks, diverse culture, bustling markets, unforgettable
                        experiences.</p>
                </div>
                <div className="package" id="sevilla">
                    <img src={sevillaImage} alt="Sevilla"/>
                    <h3>Sevilla</h3>
                    <p>Flamenco passion, Gothic architecture, orange blossoms, vibrant festivals, sultry nights.</p>
                </div>
            </section>

            <div className="content-section">
                <div className="content-text">
                    <blockquote>
                        "Twenty years from now you will be more disappointed by the things that you didn’t do than by
                        the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade
                        winds in your sails. Explore. Dream. Discover."
                        <cite>- Mark Twain</cite>
                    </blockquote>
                </div>
                <div className="content-image" style={{backgroundImage: `url(${travelImage})`}}>
                </div>
            </div>

            <section className="services-section">
                <div className="service">
                    <h2>01. BEST HOTELS</h2>
                    <p>We guarantee the best hotels and very comfortable rooms, which will be appreciated by every
                        traveler. You will be absolutely happy with the hotel and will have a wonderful vacation
                        there.</p>
                </div>
                <div className="service">
                    <h2>02. TOURIST GUIDE</h2>
                    <p>We provide our clients with such a service as Tourist Guide. Its main goal is to ensure people
                        with all necessary information at any time he needs. This service is similar to Customer
                        Support.</p>
                </div>
                <div className="service">
                    <h2>03. FLIGHT TICKETS</h2>
                    <p>You can book tickets on any plane online via our booking system. Here you have an opportunity to
                        select your transport operator. Our representatives will help you with the details.</p>
                </div>
            </section>


            <Footer/>
        </>
    );
};

export default Home;



