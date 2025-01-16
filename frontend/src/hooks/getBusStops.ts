import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface MtaBusStop {
    stop_id: string;
    stop_name: string;
    latitude: number;
    longitude: number;
}

const getBusStops = () => {
    const [busStop, setBusStop] = useState<MtaBusStop[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBusStops = async () => {
            try {
                const response = await axios.get("");
                console.log(response.data);
                const res = response.data;
                setBusStop(res.data);
            }
            catch (error){
                console.log("error fetching bus stops api");
            }
        }
        fetchBusStops();
    }, []);

    return (
        // <div>
        //     <p> hello world </p>
        // <div/>
    );
};

export default getBusStops;
