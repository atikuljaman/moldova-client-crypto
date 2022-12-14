import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import cardImg from "../../assets/img/card-3.png";
import { IoIosArrowDown } from "react-icons/io";
import "./CategoriesPage.css";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  return (
    <div>
      <Navigation />
      <div className="categories-container">
        <div className="categories-container-left">
          <h2 className="heading">Categories</h2>
          <div className="check-box-container">
            <div className="checkbox-content">
              <label for="Shoes">Shoes</label>
              <input id="Shoes" type="checkbox" />
            </div>
            <div className="checkbox-content">
              <label for="Clothes">Clothes</label>
              <input id="Clothes" type="checkbox" />
            </div>
          </div>
          <div className="left-bottom">
            <div className="price-container">
              <p className="title">Price</p>
              <div className="price-content">
                <div className="price-select-cont">
                  <IoIosArrowDown className="arrow-icon" />
                </div>
                <div className="check-box-container">
                  <label for="min">MIN</label>
                  <input id="min" type="checkbox" />
                </div>
                <div className="check-box-container">
                  <label for="max">Max</label>
                  <input id="max" type="checkbox" />
                </div>
              </div>
            </div>
            <div className="currency-container">
              <p className="title">Currency</p>
              <div className="currency-content">
                <div className="currency-select-cont">
                  <IoIosArrowDown className="arrow-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categories-container-right">
          <h2 className="title">shoesboutique.shib</h2>
          <div className="categories-container-right-content">
            <div className="categories-card-container">
              <div className="card-cont">
                <div className="card">
                  <div className="card-overlay">
                    <Link to="/categories-details">
                      <button>Details</button>
                    </Link>
                    <button>BUY</button>
                  </div>
                  <div className="card-top">
                    <img src={cardImg} alt="card" />
                  </div>
                  <div className="card-center">
                    <h3 className="title">The Holy Grail</h3>
                    <h4 className="sub-title">Pixart Motion</h4>
                  </div>
                  <div className="card-bottom">
                    <p>Fixed price</p>
                    <button>0.001 ETH</button>
                  </div>
                </div>
                <p className="name">Name: Shoes1</p>
                <p className="price">Price: 10400 SHI</p>
              </div>
            </div>
            <div className="categories-card-container">
              <div className="card-cont">
                <div className="card">
                  <div className="card-overlay">
                    <Link to="/categories-details">
                      <button>Details</button>
                    </Link>
                    <button>BUY</button>
                  </div>
                  <div className="card-top">
                    <img src={cardImg} alt="card" />
                  </div>
                  <div className="card-center">
                    <h3 className="title">The Holy Grail</h3>
                    <h4 className="sub-title">Pixart Motion</h4>
                  </div>
                  <div className="card-bottom">
                    <p>Fixed price</p>
                    <button>0.001 ETH</button>
                  </div>
                </div>
                <p className="name">Name: Shoes1</p>
                <p className="price">Price: 10400 SHI</p>
              </div>
            </div>
            <div className="categories-card-container">
              <div className="card-cont">
                <div className="card">
                  <div className="card-overlay">
                    <button>Details</button>
                    <button>BUY</button>
                  </div>
                  <div className="card-top">
                    <img src={cardImg} alt="card" />
                  </div>
                  <div className="card-center">
                    <h3 className="title">The Holy Grail</h3>
                    <h4 className="sub-title">Pixart Motion</h4>
                  </div>
                  <div className="card-bottom">
                    <p>Fixed price</p>
                    <button>0.001 ETH</button>
                  </div>
                </div>
                <p className="name">Name: Shoes1</p>
                <p className="price">Price: 10400 SHI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default CategoriesPage;
