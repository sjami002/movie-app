import React, { Component } from "react";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../elements/Spinner/Spinner";
import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="rmdb-home">
        <HeroImage />
        <SearchBar />
        <FourColGrid />
        <Spinner />
        <LoadMoreBtn />
        <div> Movie's Here </div>
        <div> Movie's Here 2</div>
        <div> Movie's Here 3</div>
        <div> Movie's Here 4</div>
        <div> Movie's Here 5</div>
      </div>
    );
  }
}

export default Homepage;
