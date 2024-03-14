import React from 'react';
import newHopeImage from "../../Assets/Images/new-hope-image.png";
import theEmpireStrikesBackImage from "../../Assets/Images/the-empire-strikes-back.png";
import returnOfTheJediImage from "../../Assets/Images/return-of-the-jedi.jpg";
import thePhantomMenaceImage from "../../Assets/Images/the-phantom-menace.jpeg";
import attackOfTheClonesImage from "../../Assets/Images/attack-of-the-clones.jpg";
import revengeOfTheSithImage from "../../Assets/Images/revenge-of-the-sith.jpg";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) {
        movie = {
            properties: {
                title: "A New Hope",
                episode_id: 4
            }
        };
    }

    const movieImageMapping = {
        "A New Hope": newHopeImage,
        "The Empire Strikes Back": theEmpireStrikesBackImage,
        "Return of the Jedi": returnOfTheJediImage,
        "The Phantom Menace": thePhantomMenaceImage,
        "Attack of the Clones": attackOfTheClonesImage,
        "Revenge of the Sith": revengeOfTheSithImage
    };

    const movieImage = movieImageMapping[movie.properties.title];

    return (
        <div className='MovieDetails'>
            <h2>{movie.properties.title}</h2>
            <p><strong>Episode:</strong> {movie.properties.episode_id}</p>
            <button onClick={() => onFavoriteToggle(movie)}>
                {favorites && favorites.some(fav => fav.properties.episode_id === movie.properties.episode_id) ? 
                    <StarIcon className='Like' fontSize='large' /> : <StarBorderIcon className='DisLike' fontSize='large' />}
            </button>
            <br />
            <img src={movieImage} alt={movie.properties.title} />
        </div>
    );
}

export default MovieDetails;
