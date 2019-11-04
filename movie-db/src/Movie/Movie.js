import React, { Component } from "react";

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
