import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header";
import '../style.css';

type Reservation = {
    id: number;
    destination: {
        title: string;
    };
    startDate: string;
    endDate: string;
    bookingDate: string;
    totalCost: number;
};

const Profile: React.FC = () => {
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
        const fetchReservations = async () => {
            const user = JSON.parse(sessionStorage.getItem("user") || "{}");
            if (user && user.email) {
                try {
                    const response = await axios.get(`http://localhost:8080/reservations/user/${user.email}`);
                    setReservations(response.data);
                } catch (error) {
                    console.error("Error fetching reservations:", error);
                }
            }
        };

        fetchReservations();
    }, []);

    return (
        <>
            <Header />
        <div className="profile-container">
            <h2>My Reservations</h2>
            <ul className="reservations-list">
                {reservations.map(reservation => (
                    <li key={reservation.id} className="reservation-item">
                        <p>Destination: {reservation.destination.title}</p>
                        <p>Start Date: {reservation.startDate}</p>
                        <p>End Date: {reservation.endDate}</p>
                        <p>Booking Date: {reservation.bookingDate}</p>
                        <p>Total Cost: ${reservation.totalCost}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default Profile;
