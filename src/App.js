import Movie from './components/Movie';

const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=11dbf833cc3f6316214d045528716be0';
const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=11dbf833cc3f6316214d045528716be0&query="';

function App() {
  const movies = ['1', '2', '3'];
  return (
    <div>
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
