import React, { useRef, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import SideBar from "../../components/SideBar/SideBar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Slider from "react-slick";
import slideImg from "../../assets/img/slider-1.png";
import rightArrowIcon from "../../assets/img/right-arrow-icon.png";
import leftArrowIcon from "../../assets/img/left-arrow-icon.png";
import cardImgOne from "../../assets/img/card-20.png";
import cardImgTwo from "../../assets/img/card-21.png";
import upVoteIcon from "../../assets/img/up-vote-md.png";
import downVoteIcon from "../../assets/img/down-vote-md.png";
import homeIcon from "../../assets/img/home-icon.png";
import questionIcon from "../../assets/img/question-icon.png";
import videoIcon from "../../assets/img/video-icon.png";
import closeIcon from "../../assets/img/close-icon.png";
import "./ShoesboutiqueShib.css";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ShoesboutiqueShib = () => {
  const [upVoteClick, setUpVoteClick] = useState(null);
  const [downVoteClick, setDownVoteClick] = useState(null);
  const slider = useRef(null);

  return (
    <div>
      <Navigation />
      <HeaderNav />
      <div className="shoesboutique-container">
        <SideBar />
        <div className="shoesboutique-container-right">
          <h2 className="title">
            shoesboutique.shib{" "}
            {upVoteClick && (
              <div className="vote-detail">
                <img src={upVoteIcon} alt="up vote" />
                1044
              </div>
            )}
            {downVoteClick && (
              <div className="vote-detail">
                <img src={downVoteIcon} alt="down vote" />
                88
              </div>
            )}
          </h2>
          <div className="content-box">
            <div className="content-box-left">
              {!upVoteClick && !downVoteClick && (
                <div className="slider">
                  <Slider {...settings} ref={slider}>
                    <div className="slider-item">
                      <img src={slideImg} alt="slider" />
                    </div>
                    <div className="slider-item">
                      <img src={slideImg} alt="slider" />
                    </div>
                  </Slider>
                  <button
                    className="prev-btn slider-btn"
                    onClick={() => slider.current.slickPrev()}
                  >
                    <img src={leftArrowIcon} alt="arrow" />
                  </button>
                  <button
                    className="next-btn slider-btn"
                    onClick={() => slider.current.slickNext()}
                  >
                    <img src={rightArrowIcon} alt="arrow" />
                  </button>
                </div>
              )}
              {upVoteClick && (
                <div className="up-vote-box">
                  <img
                    src={closeIcon}
                    alt="close"
                    className="close-icon"
                    onClick={() => setUpVoteClick(false)}
                  />
                  <div>
                    <p>0x002...02: All Great received, and very satisfied!</p>
                    <p>0x003...03: Thank you, wish you grow and many sells</p>
                    <p>0x003...04: Will buy always from you mate</p>
                    <p>0x004...04: Great seller</p>
                    <p>0x005...05: Just received shoes!</p>
                  </div>
                </div>
              )}
              {downVoteClick && (
                <div className="up-vote-box">
                  <img
                    src={closeIcon}
                    alt="close"
                    className="close-icon"
                    onClick={() => setDownVoteClick(false)}
                  />
                  <div>
                    <p>
                      0x002...02: No receive, nothing!!! You say 5 day delivery
                      but passed 5 months!{" "}
                    </p>
                    <p>0x003...03: oh another scammer</p>
                    <p>
                      0x003...04: scammed by this seller, don???t buy from him
                    </p>
                    <p>
                      0x004...04: I buyed a pair of boots but received 2 socks,
                      great job foker!
                    </p>
                    <p>
                      0x005...05: He ask me for more money for delivery, I will
                      not send nothing more, he is a scammer! I see now, thank
                      you people
                    </p>
                  </div>
                </div>
              )}
              <div className="description-cont">
                <h3>Brief Description:</h3>
                <p>
                  Contacts: any info shop want to share Ex phone number,
                  address, etc.
                </p>
              </div>
            </div>
            <div className="content-box-right">
              <div className="sales-cards">
                <div className="sale-card">
                  <h4 className="title">Last Sale</h4>
                  <img src={cardImgOne} alt="product" />
                  <div className="card-footer">
                    <p>Name:shoes</p>
                    <p className="price">Price:10400 SHI</p>
                  </div>
                </div>
                <div className="sale-card">
                  <h4 className="title">Recently Listed</h4>
                  <img src={cardImgTwo} alt="product" />
                  <div className="card-footer">
                    <p>Name:shoes</p>
                    <p className="price">Price:10400 SHI</p>
                  </div>
                </div>
              </div>
              <div className="button-cont">
                <button
                  onClick={() => {
                    setUpVoteClick(true);
                    setDownVoteClick(false);
                  }}
                >
                  <img src={upVoteIcon} alt="up vote" />
                  1044
                </button>
                <button>
                  <img
                    src={downVoteIcon}
                    alt="down vote"
                    onClick={() => {
                      setDownVoteClick(true);
                      setUpVoteClick(false);
                    }}
                  />
                  88
                </button>
              </div>
            </div>
            <div className="shoesboutique-container-bottom">
              <img src={homeIcon} alt="home" />
              <img src={questionIcon} alt="question" />
              <img src={videoIcon} alt="video" />
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default ShoesboutiqueShib;
