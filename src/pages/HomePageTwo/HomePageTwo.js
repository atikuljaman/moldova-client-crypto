import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import "./HomePageTwo.css";
import SideBar from "../../components/SideBar/SideBar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import cardImgOne from "../../assets/img/card-14.png";
import cardImgTwo from "../../assets/img/card-15.png";
import cardImgThree from "../../assets/img/card-16.png";
import cardImgFour from "../../assets/img/card-17.png";

const HomePageTwo = () => {
  return (
    <div>
      <Navigation />
      <HeaderNav />
      <div className="home-two-container">
        <SideBar />
        <div className="home-two-container-right">
          <div className="card">
            <div className="card-left">
              <img src={cardImgOne} alt="card" />
            </div>
            <div className="card-right">
              <p className="title">NFT MINT</p>
              <p className="desc">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <button>Open</button>
            </div>
          </div>
          <div className="card card-2">
            <div className="card-left">
              <img src={cardImgTwo} alt="card" />
            </div>
            <div className="card-right">
              <p className="title">Chat</p>
              <p className="desc">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <button>Open</button>
            </div>
          </div>
          <div className="card">
            <div className="card-left">
              <img src={cardImgThree} alt="card" />
            </div>
            <div className="card-right">
              <p className="title">Dashboard</p>
              <p className="desc">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <button>Open</button>
            </div>
          </div>
          <div className="card">
            <div className="card-left">
              <img src={cardImgFour} alt="card" />
            </div>
            <div className="card-right">
              <p className="title">HELP & FAQ</p>
              <p className="desc">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <button>Open</button>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default HomePageTwo;
