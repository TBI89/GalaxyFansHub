import React from 'react';
import newHopeImage from "../../Assets/Images/new-hope-image.png";
import theEmpireStrikesBackImage from "../../Assets/Images/the-empire-strikes-back.png";
import returnOfTheJediImage from "../../Assets/Images/return-of-the-jedi.jpg";
import thePhantomMenaceImage from "../../Assets/Images/the-phantom-menace.jpeg";
import attackOfTheClonesImage from "../../Assets/Images/attack-of-the-clones.jpg";
import revengeOfTheStih from "../../Assets/Images/revenge-of-the-sith.jpg";

function MovieItem({ movie, onMovieSelect }) {

    const movieImageMapping = {
        "A New Hope": newHopeImage,
        "The Empire Strikes Back": theEmpireStrikesBackImage,
        "Return of the Jedi": returnOfTheJediImage,
        "The Phantom Menace": thePhantomMenaceImage,
        "Attack of the Clones": attackOfTheClonesImage,
        "Revenge of the Sith": revengeOfTheStih
    };

    const movieImage = movieImageMapping[movie.properties.title];

    return (
        <div className='MovieItem' key={movie.properties.episode_id}>
            <button onClick={() => {
                onMovieSelect(movie);
            }}>
                <img src={movieImage} alt={movie.properties.title} />
                {movie.properties.title}
            </button>
        </div>
    );
}

export default MovieItem;
