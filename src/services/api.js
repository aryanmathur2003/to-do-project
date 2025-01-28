const API_KEY = "517896c83bff0f22eba75629e398dd33"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
}