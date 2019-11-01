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
        <div> Movie's Here 2</div>
        <div> Movie's Here 3</div>
        <div> Movie's Here 4</div>
        <div> Movie's Here 5</div>
      </div>
    );
  }
}

export default Movie;
