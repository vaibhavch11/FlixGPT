export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWJkMmYyZGFkZTgzODk1N2JiMDg3M2ZlNGMzNDgxNyIsInN1YiI6IjY1MGQ2NmI4NDRlYTU0MDExZDAyNjZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lxVs5SPG6JBivZRZm0_Slv84eeMu-6V6q2BL5L6nghg'
  }
};

export const Movie_IMG_URL =  "https://image.tmdb.org/t/p/w780";


//--------------------------Supported languages----------------
export const SUPPORTED_LANG = [{identifier : "en", name : "English"},
{identifier : "hindi", name : "Hindi"},
{identifier : "spanish", name : "Spanish"}]



//-----------------------------OpenAPI secret API-Key----------------------------------------
export const OPENAPI_KEY = process.env.REACT_APP_OPENAI_KEY;

