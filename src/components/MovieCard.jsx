import '../css/css/MovieCard.css'
import { useMovieContext } from "../contexts/MovieContext";


function MovieCard({ movie }) {

    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();

    const favorite = isFavorite(movie.id);

    function handleClick(event) {
        event.preventDefault();
        if (isFavorite(movie.id)) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-status">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={handleClick}>♥</button>
                </div>
            </div>
            <div className="movie-title">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard