const urlGetMovies = 'http://192.168.1.95:3000/posts';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });

    console.log("TCL: function*getMoviesFromApi -> response", response)
    const movies = yield response.status === 200 ? response.json() : []
    console.log("TCL: function*getMoviesFromApi -> movies", movies)

    return movies;
}
export const Api = {
    getMoviesFromApi
}; 