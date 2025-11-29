# Countries API Server

A RESTful Node.js Express server that provides information about countries and their cities.

## Features

- Get a list of all available countries
- Get detailed information about any country (capital, main cities, population, area)
- Get information about specific cities within countries
- Contains data for 100 countries with 3 main cities each

## Endpoints

### Get All Countries
```
GET /country
```
Returns an array of all country names.

**Example Response:**
```json
["Brazil", "United States", "China", ...]
```

### Get Country Information
```
GET /:countryName
```
Returns information about a specific country.

**Example Request:**
```
GET /brazil
```

**Example Response:**
```json
{
  "capital": "Brasília",
  "main_cities": ["Brasília", "Rio de Janeiro", "São Paulo"],
  "population": "215 million",
  "area": "8.5 million sq km"
}
```

### Get City Information
```
GET /:countryName/:cityName
```
Returns information about a specific city within a country.

**Example Request:**
```
GET /brazil/brasilia
```

**Example Response:**
```json
{
  "population": "3 million",
  "area": "5,802 sq km"
}
```

## Local Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env` (already done)
   - Edit `.env` if you want to change the port (default: 3000)

3. **Start the server:**
   ```bash
   node index.js
   ```

   Or use npm script:
   ```bash
   npm start
   ```

4. **Server will run on:**
   ```
   http://localhost:3000
   ```

## Testing

You can test the endpoints using curl or any HTTP client:

```bash
# Get all countries
curl http://localhost:3000/country

# Get country information
curl http://localhost:3000/brazil

# Get city information
curl http://localhost:3000/brazil/brasilia
```

## Project Structure

```
countries/
├── index.js              # Main server file
├── countries-data.js     # Countries and cities data
├── package.json         # Dependencies and scripts
├── .env                 # Environment variables (not in git)
├── .env.example         # Example environment file
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## Technologies

- Node.js
- Express.js
- dotenv

