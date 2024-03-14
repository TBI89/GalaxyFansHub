import React, { useState, useEffect } from 'react';
import MovieList from '@/Components/MovieList/MovieList';
import MovieDetails from '@/Components/MovieDetails/MovieDetails';

function App() {
    const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const [favorites, setFavorites] = useState(initialFavorites);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    // On the original project - that function wasn't in use. 
    // (If the user will try to "Like" a movie item - he'll get a run time error).
    const handleFavorite = (movie) => {
        const isFavorite = favorites.some(fav => fav.properties.episode_id === movie.properties.episode_id);
        if (isFavorite) {
            setFavorites(favorites.filter(fav => fav.properties.episode_id !== movie.properties.episode_id));
        } else {
            setFavorites([...favorites, movie]);
        }
    };

    function handleMovieSelect(movie) {
        setSelectedMovie(movie);
    }

    return (
        <div className="App">

            {/* The handleFavorite function wasn't passed as a prop to the MovieDetails component. */}
            {/* (So the MovieDetails component wasn't available to the user). */}

            <header>
                <MovieDetails movie={selectedMovie} onFavoriteToggle={handleFavorite} favorites={favorites} />
            </header>

            <main>
                <MovieList onMovieSelect={handleMovieSelect} />
            </main>

        </div>
    );

}

export default App;