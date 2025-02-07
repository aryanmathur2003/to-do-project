import  "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard";
function Favorite() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
            <h2>No Favorites Yet</h2>
            <p>Start Adding More Movies As Soon as you can </p>

            <div className="movies-grid">
            {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
            ))}
            </div>
            </div>
        )
    }

}
export default Favorite