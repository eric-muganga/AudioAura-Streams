
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();


app.use(cors({
}))


const port = 4173; // Port number for the server

// Async function to fetch stations by country
async function fetchStationsByCountry(country) {
    try {
        const url = `https://de1.api.radio-browser.info/json/stations/bycountry/${country}?order=votes&reverse=true&limit=5`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data for ${country}:`, error);
        return [];
    }
}

// Endpoint to get stations by continent
app.get('/stations/:continent', async (req, res) => {
    const { continent } = req.params;
    const continentsAndCountries = {
        Europe: ["Germany", "Poland", "The United Kingdom Of Great Britain And Northern Ireland", "France"],
        Africa: ["Uganda", "Rwanda", "Kenya", "Nigeria", "Tanzania"],
        NorthAmerica: ["The United States Of America"],
        Asia: ["India"]      // Add actual data as needed
        // Define other continents and their countries here
    };

    const countries = continentsAndCountries[continent];

    if (!countries) {
        res.status(404).send('Continent not found');
        return;
    }

    try {
        const requests = countries.map(fetchStationsByCountry);
        const results = await Promise.all(requests);
        const stations = results.flatMap(stations => stations);
        res.json(stations);
    } catch (error) {
        console.error("Error processing requests: ", error);
        res.status(500).send('Error fetching stations');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
