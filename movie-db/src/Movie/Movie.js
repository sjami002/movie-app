import React, { Component } from "react";

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  };

  render() {
    return <div> Movie's Here </div>;
  }
}

export default Movie;
