import React, { Component } from "react";

const MovieThumb = props => {
  return (
    <div className="rmdb-moviethumb">
      <img src={props.image} alt="moviethumb" />{" "}
    </div>
  );
};

export default MovieThumb;
