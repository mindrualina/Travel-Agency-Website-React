// import React, {useState, FormEvent, useEffect} from 'react';
// import axios from 'axios';
//
// type BookingFormProps = {
//     setAvailableDestinations: (destinations: Destination[]) => void;
// };
//
// // Definește tipurile pentru state
// type BookingFormState = {
//     startDate: string;
//     endDate: string;
// };
//
// type Destination = {
//     id: number;
//     title: string;
//     description: string;
//     pricePerNight: number;
//     availableSlots: number;
//     image: string;
// };
//
// const BookingForm: React.FC<BookingFormProps> = ({ setAvailableDestinations }) => {
//     const [formData, setFormData] = useState<BookingFormState>({
//         startDate: '',
//         endDate: ''
//     });
//
//     const [destinations, setDestinations] = useState<Destination[]>([]);
//     const [availability, setAvailability] = useState<Destination[] | null>(null);
//
//
//     // Calculează data curentă și data maximă (de exemplu, 1 an de la data curentă)
//     const today = new Date().toISOString().split('T')[0];
//     const maxDate = new Date();
//     maxDate.setFullYear(maxDate.getFullYear() + 1);
//     const maxDateString = maxDate.toISOString().split('T')[0];
//
//     useEffect(() => {
//         axios.get("http://localhost:8080/Destination/GetAll").then((response)=>{
//             setDestinations(response.data);
//         })
//     }, []);
//
//     // Handler pentru schimbările din input-uri
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = event.target;
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [name]: value
//         }));
//     };
//
//     const checkAvailability = async () => {
//         const { startDate, endDate } = formData;
//         try {
//             const response = await axios.get<Destination[]>('http://localhost:8080/reservations/available-destinations', {
//                 params: {
//                     startDate: startDate,
//                     endDate: endDate
//                 }
//             });
//             setAvailableDestinations(response.data);
//
//         } catch (error) {
//             console.error('Error checking availability:', error);
//             setAvailableDestinations([]);
//         }
//     };
//
//     // Handler pentru submit
//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         checkAvailability();
//     };
//
//     return (
//         <section id="booking-date-picker">
//             <h2>Book Your Stay</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="date-picker-container">
//                     {/*<label htmlFor="location">Location:</label>*/}
//                     {/*<select id="location" name="location" required value={formData.location} onChange={handleChange}>*/}
//                     {/*    <option value="">Select a location</option>*/}
//                     {/*    <option value="paris">Paris</option>*/}
//                     {/*    <option value="sevilla">Sevilla</option>*/}
//                     {/*    <option value="london">London</option>*/}
//                     {/*    <option value="tokyo">Tokyo</option>*/}
//                     {/*    <option value="santorini">Santorini</option>*/}
//                     {/*    <option value="maldives">Maldives</option>*/}
//                     {/*    <option value="barcelona">Barcelona</option>*/}
//                     {/*    <option value="rome">Rome</option>*/}
//                     {/*    <option value="istanbul">Istanbul</option>*/}
//                     {/*</select>*/}
//                 </div>
//                 <div className="date-picker-container">
//                     <label htmlFor="start-date">Start Date:</label>
//                     <input
//                         type="date"
//                         id="start-date"
//                         name="startDate"
//                         required
//                         value={formData.startDate}
//                         min={today}
//                         max={maxDateString}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="date-picker-container">
//                     <label htmlFor="end-date">End Date:</label>
//                     <input
//                         type="date"
//                         id="end-date"
//                         name="endDate"
//                         required
//                         value={formData.endDate}
//                         min={formData.startDate || today}
//                         max={maxDateString}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button type="submit">Check Availability</button>
//                 {/*{availability !== null && (*/}
//                 {/*    <div>*/}
//                 {/*        {availability.length > 0 ? (*/}
//                 {/*            <ul>*/}
//                 {/*                {availability.map(destination => (*/}
//                 {/*                    <li key={destination.id}>{destination.title} - {destination.description}</li>*/}
//                 {/*                ))}*/}
//                 {/*            </ul>*/}
//                 {/*        ) : (*/}
//                 {/*            <p>No available destinations for the selected dates.</p>*/}
//                 {/*        )}*/}
//                 {/*    </div>*/}
//                 {/*)}*/}
//             </form>
//         </section>
//     );
// };
//
// export default BookingForm;



import React, { useState } from 'react';
import axios from 'axios';

type BookingFormProps = {
    setAvailableDestinations: (destinations: Destination[]) => void;
};

type BookingFormState = {
    startDate: string;
    endDate: string;
};

type Destination = {
    id: number;
    title: string;
    description: string;
    pricePerNight: number;
    availableSlots: number;
    image: string;
};

const BookingForm: React.FC<BookingFormProps> = ({ setAvailableDestinations }) => {
    const [formData, setFormData] = useState<BookingFormState>({
        startDate: '',
        endDate: ''
    });

    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    const maxDateString = maxDate.toISOString().split('T')[0];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const checkAvailability = async () => {
        const { startDate, endDate } = formData;
        try {
            const response = await axios.get<Destination[]>('http://localhost:8080/reservations/available-destinations', {
                params: {
                    startDate: startDate,
                    endDate: endDate
                }
            });
            console.log('Available destinations response:', response.data);
            setAvailableDestinations(response.data);
            sessionStorage.setItem("selectedDates", JSON.stringify({ startDate, endDate }));
        } catch (error) {
            console.error('Error checking availability:', error);
            setAvailableDestinations([]);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        checkAvailability();
    };

    return (
        <section id="booking-date-picker">
            <h2>Book Your Stay</h2>
            <form onSubmit={handleSubmit}>
                <div className="date-picker-container">
                    <label htmlFor="start-date">Start Date:</label>
                    <input
                        type="date"
                        id="start-date"
                        name="startDate"
                        required
                        value={formData.startDate}
                        min={today}
                        max={maxDateString}
                        onChange={handleChange}
                    />
                </div>
                <div className="date-picker-container">
                    <label htmlFor="end-date">End Date:</label>
                    <input
                        type="date"
                        id="end-date"
                        name="endDate"
                        required
                        value={formData.endDate}
                        min={formData.startDate || today}
                        max={maxDateString}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Check Availability</button>
            </form>
        </section>
    );
};

export default BookingForm;
