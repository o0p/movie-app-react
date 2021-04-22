const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img src={IMG_API + poster_path} alt={title} />
  </div>
);
export default Movie;
