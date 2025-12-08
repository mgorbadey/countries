import 'dotenv/config';
import express from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';
import countriesData from './countries-data.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Configure Winston logger for structured JSON logging (Grafana/Loki compatible)
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'countries-api' },
  transports: [
    new winston.transports.Console({
      format: winston.format.json()
    })
  ]
});

// Request logging middleware - logs all incoming requests
app.use(expressWinston.logger({
  winstonInstance: logger,
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: false,
  colorize: false,
  requestWhitelist: ['url', 'method', 'headers', 'query', 'body', 'ip'],
  responseWhitelist: ['statusCode', 'body'],
  bodyBlacklist: ['password', 'token', 'secret'],
  ignoreRoute: (req, res) => {
    // Optionally ignore health checks or other routes
    return false;
  }
}));

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

// Export app for testing
export default app;

// Error logging middleware
app.use(expressWinston.errorLogger({
  winstonInstance: logger
}));

// Start server only if this file is run directly (not imported in tests)
// Skip starting server if running in test environment
if (process.env.NODE_ENV !== 'test' && !process.env.JEST_WORKER_ID) {
  app.listen(PORT, () => {
    logger.info({
      message: 'Server started',
      port: PORT,
      endpoints: [
        'GET /country - List all countries',
        'GET /:countryName - Get country information',
        'GET /:countryName/:cityName - Get city information'
      ]
    });
  });
}

// Export logger for use in other modules if needed
export { logger };

