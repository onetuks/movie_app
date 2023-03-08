import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      // "https://yts.mx/api/v2/list_movies.json?rating=9"
    );
    this.setState({ movies: movies, isLoading: false });
  };

  /*
    componentDidMount()

    - life cycle : Mounting < Component
    - operation : fetching data
  */
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <selection className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              // console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.title}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </selection>
    );
  }
}

export default Home;