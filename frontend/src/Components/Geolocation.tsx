// import React, { useState }  from 'react';
//
// export default function TestGeolocation() {
//     const [userLocation, setUserLocation] = useState<{
//         latitude: number;
//         longitude: number;
//     } | null>(null);
//
//     const getUserLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//
//                     setUserLocation({ latitude, longitude });
//                 },
//
//                 (error) => {
//                     console.error("Error get user location: ", error);
//                 }
//             );
//         } else {
//             console.log("Geolocation is not supported by this browser");
//         }
//     };
//
//     return (
//         <>
//
//             {/* create a button that is mapped to the function which retrieves the users location */}
//             <button onClick={getUserLocation}>Get User Location</button>
//             {/* if the user location variable has a value, print the users location */}
//             {userLocation && (
//                 <div>
//                     <h2>User Location</h2>
//                     <p>Latitude: {userLocation.latitude}</p>
//                     <p>Longitude: {userLocation.longitude}</p>
//                 </div>
//             )}
//         </>
//     );
// }
//
//
//
//
//

import React, { useState, useEffect } from 'react';

export default function TestGeolocation() {
    const [userLocation, setUserLocation] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);


    const setCookie = (name: string, value: string | number, days: number) => {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    };

    const getCookie = (name: string): string | null => {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    setUserLocation({ latitude, longitude });
                    // Salvează locația în cookie
                    setCookie('userLatitude', latitude.toString(), 7); // Valabil 7 zile
                    setCookie('userLongitude', longitude.toString(), 7); // Valabil 7 zile
                },
                (error) => {
                    console.error("Error getting user location: ", error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };


    useEffect(() => {
        const latitude = getCookie('userLatitude');
        const longitude = getCookie('userLongitude');
        if (latitude && longitude) {
            setUserLocation({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) });
        }
    }, []);

    return (
        <>
            <button onClick={getUserLocation}>Get User Location</button>
            {userLocation && (
                <div>
                    <h2>User Location</h2>
                    <p>Latitude: {userLocation.latitude}</p>
                    <p>Longitude: {userLocation.longitude}</p>
                </div>
            )}
        </>
    );
}
