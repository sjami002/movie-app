import React, { Component } from "react";
import { API_URL, API_KEY } from "../config";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid.js";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  };

  render() {
    return (
      <div>
        <div> Movie's Here </div>
      </div>
    );
  }
}

export default Movie;
