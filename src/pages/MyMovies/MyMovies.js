import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import SideBar from "../../components/SideBar/SideBar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import cardImgOne from "../../assets/img/card-18.png";
import cardImgTwo from "../../assets/img/card-19.png";
import playIcon from "../../assets/img/play-icon.png";
import "./MyMovies.css";

const MyMovies = () => {
  return (
    <div>
      <Navigation />
      <HeaderNav />
      <div className="my-movies-container">
        <SideBar />
        <div className="my-movies-container-right">
          <h2 className="title">My Movies</h2>
          <div className="movies-cards">
            <div className="movies-card">
              <div className="card-top">
                <img src={cardImgOne} alt="card" />
                <img src={playIcon} alt="play" className="play-icon" />
              </div>
              <div className="card-bottom">
                <p>Name:</p>
              </div>
            </div>
            <div className="movies-card">
              <div className="card-top">
                <img src={cardImgTwo} alt="card" />
                <img src={playIcon} alt="play" className="play-icon" />
              </div>
              <div className="card-bottom">
                <p>Name:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default MyMovies;
