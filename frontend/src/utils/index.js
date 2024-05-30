import axios from "axios";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const fetchStationsByContinent = async (continent) => {
    // Updating the URL to point to your backend server
    const backendUrl = `${import.meta.env.VITE_REACT_APP_API_URL}/stations/${continent}`;

    try {
        // Making a single request to your backend
        const response = await axios.get(backendUrl);
        const stations = response.data.map(station => ({
            uuid: station.stationuuid,
            name: station.name,
            url: station.url,
            favicon: station.favicon,
            tags: station.tags,
            country: station.country,
            continent: continent
        }));
        return stations;
    } catch (error) {
        console.error("Error fetching stations from backend: ", error);
        return []; // Returning an empty array in case of error
    }
};
