import React, {useState} from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import '../style.css';



import BookingForm from "../Components/DatePicker";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import {Destination} from "../Models/Users";

const Destinations = () => {
    const location = useLocation();
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const { destinationId } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8080/Destination/GetAll").then((response)=>{
            setDestinations(response.data)
        })

    }, []);



    useEffect(() => {
        const element = document.getElementById(`destination-${destinationId}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            element.classList.add('highlighted');
            setTimeout(() => element.classList.remove('highlighted'), 3000);
        }
    }, [destinationId]);



    const showDestination = (Destination:Destination) => {
    return      <div key={Destination.id} id={`destination-${Destination.id}`} className="destination">
        {/*<div id="paris" className="destination">*/}
            <img src={require(`../images/${Destination.image}`)} alt="Paris" className="destination-image"/>
            <h3>{Destination.title}</h3>
            <p>
                {Destination.description}
            </p>
            <span className="price">From {Destination.pricePerNight}$/night</span>
        </div>
    {/*</div>*/}

}
    return (
        <>
            <Header/>
            <BookingForm/>

            <section className="destinations-container">
                {destinations.map(destination => showDestination(destination))}
            </section>

            <Footer/>
        </>
    );
};

export default Destinations;