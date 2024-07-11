
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import '../style.css';
import BookingForm from "../Components/DatePicker";
import axios from "axios";
import { Destination } from "../Models/Users";

const Destinations: React.FC = () => {
    const [allDestinations, setAllDestinations] = useState<Destination[]>([]);
    const [availableDestinations, setAvailableDestinations] = useState<Destination[] | null>(null);
    const { destinationId } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8080/Destination/GetAll").then((response) => {
            setAllDestinations(response.data);
        });
    }, []);

    useEffect(() => {
        const element = document.getElementById(`destination-${destinationId}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            element.classList.add('highlighted');
            setTimeout(() => element.classList.remove('highlighted'), 3000);
        }
    }, [destinationId]);


    const handleReservation = async (destinationId: number) => {
        const user = JSON.parse(sessionStorage.getItem("user") || "{}");
        if (!user || !user.email) {
            alert("You must be logged in to make a reservation.");
            return;
        }

        const selectedDates = JSON.parse(sessionStorage.getItem("selectedDates") || "{}");
        const { startDate, endDate } = selectedDates;

        if (!startDate || !endDate) {
            alert("Please select a valid date range.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/reservations/add', {
                destinationId,
                email: user.email,
                startDate,
                endDate
            });
            alert("Reservation successful!");
        } catch (error) {
            console.error('Error making reservation:', error);
            alert("Error making reservation.");
        }
    };

    const destinationsToShow = availableDestinations === null ? allDestinations : availableDestinations;

    useEffect(() => {
        console.log('Destinations to show:', destinationsToShow);
    }, [destinationsToShow]);

    const showDestination = (destination: Destination) => (
        <div key={destination.id} id={`destination-${destination.id}`} className="destination" onClick={() => handleReservation(destination.id)}>
            <img src={require(`../images/${destination.image}`)} alt={destination.title} className="destination-image" />
            <h3>{destination.title}</h3>
            <p>{destination.description}</p>
            <span className="price">From {destination.pricePerNight}$/night</span>
        </div>
    );

    return (
        <>
            <Header />
            <BookingForm setAvailableDestinations={setAvailableDestinations} />
            <section className="destinations-container">
                {destinationsToShow.map(destination => showDestination(destination))}
            </section>
            <Footer />
        </>
    );
};

export default Destinations;

