import axios from 'axios';

export const fetchMovies = async () => {
    try {
        const response = await axios.get("https://swapi.tech/api/films");
        return response;
    } catch (error) {
        throw new Error("Error fetching movies: " + error.message);
    }
};