import axios from "axios";
import { QueryClient } from "react-query";
import { continentsAndCountries } from "../config/continents";

export const queryClient = new QueryClient();

export const fetchStationsByContinent = async (continent) => {
    const countries = continentsAndCountries[continent];
    const requests = countries.map(country =>
        axios.get(`https://de1.api.radio-browser.info/json/stations/bycountry/${country}?order=votes&reverse=true&limit=5`)
    );

    try {
        const responses = await Promise.all(requests);  // Correctly waits for all requests to resolve
        const stations = responses.flatMap(response => response.data.map(station => ({
            uuid: station.stationuuid,
            name: station.name,
            url: station.url,
            favicon: station.favicon,
            tags: station.tags,
            country: station.country,
            continent: continent
        })));
        return stations;
    } catch (error) {
        console.error("Error fetching stations: ", error);
        return []; // Return an empty array in case of error
    }
};
