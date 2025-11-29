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

## Setup

### Option 1: Docker (Recommended)

The easiest way to run the server is using Docker Compose:

1. **Build and start the container:**
   ```bash
   docker-compose up --build
   ```

2. **Or run in detached mode:**
   ```bash
   docker-compose up -d --build
   ```

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

**Using Docker directly:**
```bash
# Build the image
docker build -t countries-api .

# Run the container
docker run -p 3000:3000 countries-api
```

The server will be available at `http://localhost:3000`

### Option 2: Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables (optional):**
   - Create a `.env` file if you want to change the port
   - Default port is 3000

3. **Start the server:**
   ```bash
   npm start
   ```

   Or directly:
   ```bash
   node index.js
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
├── package.json          # Dependencies and scripts
├── Dockerfile            # Docker image configuration
├── docker-compose.yml    # Docker Compose configuration
├── .dockerignore         # Docker ignore rules
├── .env                  # Environment variables (not in git)
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## Technologies

- Node.js
- Express.js
- dotenv
- Docker (for containerization)

