import 'dotenv/config';
import express from 'express';
import countriesData from './countries-data.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Endpoint to get all countries
app.get('/country', (req, res) => {
  const countryNames = countriesData.map(country => country.name);
  res.json(countryNames);
});

// Endpoint to get information about a specific country
app.get('/:countryName', (req, res) => {
  const countryName = req.params.countryName.toLowerCase();
  const country = countriesData.find(c => c.name.toLowerCase() === countryName);
  
  if (!country) {
    return res.status(404).json({ error: 'Country not found' });
  }
  
  res.json({
    capital: country.capital,
    main_cities: country.main_cities,
    population: country.population,
    area: country.area
  });
});

// Endpoint to get information about a specific city in a country
app.get('/:countryName/:cityName', (req, res) => {
  const countryName = req.params.countryName.toLowerCase();
  const cityName = req.params.cityName.toLowerCase();
  
  const country = countriesData.find(c => c.name.toLowerCase() === countryName);
  
  if (!country) {
    return res.status(404).json({ error: 'Country not found' });
  }
  
  const city = country.cities.find(city => 
    city.name.toLowerCase() === cityName
  );
  
  if (!city) {
    return res.status(404).json({ error: 'City not found' });
  }
  
  res.json({
    population: city.population,
    area: city.area
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET /country - List all countries`);
  console.log(`  GET /:countryName - Get country information`);
  console.log(`  GET /:countryName/:cityName - Get city information`);
});

