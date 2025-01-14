import { useEffect, useState } from 'react';

const getGeolocation = () => {
    const [location, setLocation] = useState <{ lat: number; lng: number} | null>(null);

    useEffect(() => {
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.log("error fetching location", error);
                }
            );
        } else {
            console.log("geolocation not suppported");
        }
    },[]);

    return location;
}

export default getGeolocation;