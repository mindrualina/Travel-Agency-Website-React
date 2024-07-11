import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import contactusbuttonblue from "../images/contactus-button-blue.png";

import '../style.css';
import Geolocation from "../Components/Geolocation";



const Contact = () => {
    return (
        <>

            <Header/>
            <section id="contact-section">
                <div className="contact-header">
                    <h2>Got a question?</h2>
                </div>

                <div className="contact-info">
                    <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

                    <p><strong>Address:</strong> Strada Galati, Nr 50, Cluj-Napoca</p>
                    <p><strong>Email:</strong> <a href="mailto:info@exploretravel.com">info@exploretravel.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+40754456789">+40 754 456 789</a></p>
                    <Geolocation/>
                </div>


                <div className="contact-image-container">
                    <img src={contactusbuttonblue} alt="Contact Us"/>
                </div>
            </section>
            <Footer/>

        </>
    );
};

export default Contact;