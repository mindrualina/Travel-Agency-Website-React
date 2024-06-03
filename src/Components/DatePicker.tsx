// Importează React și tipurile necesare
import React, { useState, FormEvent } from 'react';

// Definește tipurile pentru state
type BookingFormState = {
    location: string;
    startDate: string;
    endDate: string;
};

const BookingForm: React.FC = () => {
    const [formData, setFormData] = useState<BookingFormState>({
        location: '',
        startDate: '',
        endDate: ''
    });

    // Handler pentru schimbările din input-uri
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    // Handler pentru submit
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);

        // Derulează la elementul corespunzător destinației selectate
        const destinationElement = document.getElementById(formData.location);
        if (destinationElement) {
            destinationElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Opțional: Adaugă o clasă pentru a evidenția elementul
            // Mai întâi, elimină orice clasă existentă de evidențiere de pe alte elemente
            document.querySelectorAll('.destination.highlighted').forEach(el => {
                el.classList.remove('highlighted');
            });

            // Apoi, adaugă clasa 'highlighted' la elementul destinat
            destinationElement.classList.add('highlighted');
        }
    };

    return (
        <section id="booking-date-picker">
            <h2>Book Your Stay</h2>
            <form onSubmit={handleSubmit}>
                <div className="date-picker-container">
                    <label htmlFor="location">Location:</label>
                    <select id="location" name="location" required value={formData.location} onChange={handleChange}>
                        <option value="">Select a location</option>
                        <option value="paris">Paris</option>
                        <option value="sevilla">Sevilla</option>
                        <option value="london">London</option>
                        <option value="tokyo">Tokyo</option>
                        <option value="santorini">Santorini</option>
                        <option value="maldives">Maldives</option>
                        <option value="barcelona">Barcelona</option>
                        <option value="rome">Rome</option>
                        <option value="istanbul">Istanbul</option>
                    </select>
                </div>
                <div className="date-picker-container">
                    <label htmlFor="start-date">Start Date:</label>
                    <input type="date" id="start-date" name="start-date" required value={formData.startDate} onChange={handleChange} />
                </div>
                <div className="date-picker-container">
                    <label htmlFor="end-date">End Date:</label>
                    <input type="date" id="end-date" name="end-date" required value={formData.endDate} onChange={handleChange} />
                </div>
                <button type="submit">Check Availability</button>
            </form>
        </section>
    );
};

export default BookingForm;
