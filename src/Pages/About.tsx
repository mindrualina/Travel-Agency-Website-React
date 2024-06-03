import React from 'react';

import { useNavigate } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import dailyToursImage from '../images/dailytours.png';
import premiumTourImage from '../images/premiumtour.png';
import starAccommodationImage from '../images/staraccomodation.jpg';
import beachViewImage from '../images/pexels-oleksandr-p-1007901.jpg';

import { Button } from '@mui/material';

import '../style.css';

const About = () => {

    return (
        <>
            <Header/>
            <section id="about-us">
                <div className="container">
                    <h2>WE ARE EXPLORE</h2>
                    <p>Welcome to Explore, your friendly guide to the world's wonders! For five years, we've been making
                        travel easy and exciting for everyone. With us, you'll find joy in every journey, whether you're
                        looking to relax by the sea, hike up a mountain, or explore vibrant cities. Our local experts
                        and comfy tours are perfect for creating memories that last a lifetime. Come adventure with us
                        and make your travel dreams come true!</p>
                    <div className="about-details">
                        <div className="detail-box">
                            <img src={dailyToursImage} alt="Daily Tours"/>
                            <h3>Daily Tours</h3>
                            <p>Our carefully curated day trips let you uncover the secrets of the city one day at a
                                time.</p>
                        </div>
                        <div className="detail-box">
                            <img src={premiumTourImage} alt="Premium City Tour"/>
                            <h3>Premium City Tours</h3>
                            <p>Experience the ultimate in city exploration with our premium tour packages.</p>
                        </div>
                        <div className="detail-box">
                            <img src={starAccommodationImage} alt="5 Stars Accommodation"/>
                            <h3>5 Stars Accommodation</h3>
                            <p>Stay in luxury and comfort with our selection of 5-star accommodations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mission-section">
                <div className="mission-image">
                    <img src={beachViewImage} alt="Beach View" />
                </div>
                <div className="mission-text">
                    <h2>OUR MISSION</h2>
                    <p>We're all connected by a love for travel! The moment you leave the place of your routine, your journey begins. Whether with kids, alone, friends the start of a journey is a moment. Even when you worry about the planet’s health, you may be growing...</p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;