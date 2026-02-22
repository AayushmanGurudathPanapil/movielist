import MovieCard from "../components/MovieCard"
import { useState , useEffect} from 'react'
import { searchMovies , getPopularMovies} from "../services/api";
import '../css/css/Home.css'    


function Home() {

    const [searchTerm, setSearchTerm] = useState("");          // controls input
    const [query, setQuery] = useState("");                    // actual search/query state
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // fetch whenever page or query changes
    useEffect(() => {
       const load = async () => {
        setLoading(true);
        try{
          let data;
          if (query.trim()) {
            data = await searchMovies(query, page);
          } else {
            data = await getPopularMovies(page);
          }
          setMovies(data.results);
          setTotalPages(data.total_pages || 1);
          setError(null);
        } catch (error) {
          console.error("Error fetching movies:", error);
          setError("Failed to load movies. Please try again later.");
        } finally {
          setLoading(false);
        }
       };
       load();
    }, [page, query]);


    const handleSearch = (event) => {
        event.preventDefault();
        if(!searchTerm.trim() || loading) return;
        setPage(1);
        setQuery(searchTerm);
    };

    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input
                  className="search-input"
                  type="text"
                  name="search"
                  placeholder="Search for a movie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button" type="submit">
                  Search
                </button>
            </form>
            {error && <div className="error">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                  <div className="movies-grid">
                      {movies.map(movie => (
                          <MovieCard key={movie.id} movie={movie} />
                      ))}
                  </div>
                  {/* pagination controls */}
                  {totalPages > 1 && (
                    <div className="pagination">
                      <button
                        disabled={page === 1}
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                      >
                        Previous
                      </button>
                      <span className="page-info">
                        Page {page} of {totalPages}
                      </span>
                      <button
                        disabled={page === totalPages}
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
            )}
        </div>
    );
}


export default Home