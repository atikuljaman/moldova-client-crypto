import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import "./PrepareProductsPage.css";
import SideBar from "../../components/SideBar/SideBar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import ArrowIcon from "../../assets/img/left-arrow-icon-2.png";
import cardImg from "../../assets/img/card-3.png";

const PrepareProductsPage = () => {
  return (
    <div>
      <Navigation />
      <HeaderNav />
      <div className="prepare-products-container">
        <SideBar />
        <div className="prepare-products-container-right">
          <div className="content-box">
            <div className="prepare-products-header">
              <img src={ArrowIcon} alt="" />
              <h2 className="heading">Prepare Products</h2>
            </div>
            <table cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <td>Product Name </td>
                  <td>Quantity</td>
                </tr>
              </thead>
              <tbody>
                <tr className="body-tr">
                  <td>
                    <p>Shoes1</p>
                  </td>
                  <td>
                    <p>1</p>
                  </td>
                  <td></td>
                  <td>
                    <button className="prepare-btn">Prepared</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="cards-container">
              <div className="prepare-products-card-container">
                <div className="card-cont">
                  <div className="card">
                    <div className="card-overlay">
                      <button>Details</button>
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
                  <p className="name">Name: shoes winter</p>
                  <p className="quantity">Quantity: 100</p>
                  <p className="sell">Total Sell: 44</p>
                </div>
              </div>
              <div className="prepare-products-card-container">
                <div className="card-cont">
                  <div className="card">
                    <div className="card-overlay">
                      <button>Details</button>
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
                  <p className="name">Name: shoes summer</p>
                  <p className="quantity">Quantity: 100</p>
                  <p className="sell">Total Sell: 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default PrepareProductsPage;
