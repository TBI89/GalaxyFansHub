import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/Services/api';
import MovieItem from '@/Components/MovieItem/MovieItem';
import Loading from '@/Components/Loading/Loading';

function MovieList({ onMovieSelect }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await fetchMovies();
                if (!response || !response.data) {
                    throw new Error("Invalid response format");
                }
                const data = response.data;
                setMovies(data.result);
            } catch (error) {
                console.error("Failed fetching movies:", error);
            } finally {
                setIsLoading(false);
            }
        }

        getMovies();
    }, []);

    return (
        <div className='MovieList'>
            {isLoading ? (
                <Loading />
            ) : (
                movies.map(movie => (
                    <MovieItem key={movie.properties.episode_id} movie={movie} onMovieSelect={onMovieSelect} />
                ))
            )}
        </div>
    );
}

export default MovieList;
