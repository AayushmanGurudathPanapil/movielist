import '../css/css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites(){
    const { favorites } = useMovieContext();

    // only show the grid when there are movies in the list
    if (favorites && favorites.length > 0) {
    return(
        <div className="favorites">
            <h2>My Favorite Movies</h2>
            <div className="movies-grid">
                {favorites.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
    return (
        <div className="favorites">
            <h2>My Favorite Movies</h2>
            <p>You have no favorite movies yet. Start adding some!</p>
        </div>
    );

}


export default Favorites;