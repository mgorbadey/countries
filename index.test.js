import request from 'supertest';
import app from './index.js';

describe('Countries API', () => {
  describe('GET /country', () => {
    it('should return an array of country names', async () => {
      const response = await request(app)
        .get('/country')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(typeof response.body[0]).toBe('string');
    });
  });

  describe('GET /:countryName', () => {
    it('should return country information for a valid country', async () => {
      const response = await request(app)
        .get('/brazil')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(response.body).toHaveProperty('capital');
      expect(response.body).toHaveProperty('main_cities');
      expect(response.body).toHaveProperty('population');
      expect(response.body).toHaveProperty('area');
      expect(Array.isArray(response.body.main_cities)).toBe(true);
    });

    it('should return 404 for a non-existent country', async () => {
      const response = await request(app)
        .get('/nonexistentcountry')
        .expect(404)
        .expect('Content-Type', /json/);

      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Country not found');
    });

    it('should be case-insensitive', async () => {
      const response = await request(app)
        .get('/BRAZIL')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(response.body).toHaveProperty('capital');
    });
  });

  describe('GET /:countryName/:cityName', () => {
    it('should return city information for a valid city', async () => {
      const response = await request(app)
        .get('/brazil/brasilia')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(response.body).toHaveProperty('population');
      expect(response.body).toHaveProperty('area');
    });

    it('should return 404 for a non-existent country', async () => {
      const response = await request(app)
        .get('/nonexistentcountry/anycity')
        .expect(404)
        .expect('Content-Type', /json/);

      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Country not found');
    });

    it('should return 404 for a non-existent city', async () => {
      const response = await request(app)
        .get('/brazil/nonexistentcity')
        .expect(404)
        .expect('Content-Type', /json/);

      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('City not found');
    });

    it('should be case-insensitive for both country and city', async () => {
      const response = await request(app)
        .get('/BRAZIL/BRASILIA')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(response.body).toHaveProperty('population');
    });
  });
});

