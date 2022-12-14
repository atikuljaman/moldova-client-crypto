import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import "./ShippingDetailsPage.css";
import SideBar from "../../components/SideBar/SideBar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import ArrowIcon from "../../assets/img/left-arrow-icon-2.png";

const ShippingDetailsPage = () => {
  return (
    <div>
      <Navigation />
      <HeaderNav />
      <div className="shipping-details-container">
        <SideBar />
        <div className="shipping-details-container-right">
          <div className="content-box">
            <div className="shipping-details-header">
              <img src={ArrowIcon} alt="" />
              <h2 className="heading">Shipment Address and Details</h2>
            </div>
            <div className="shipping-form-container">
              <div className="shipping-form">
                <h2 className="title">Shipping form</h2>
                <div className="form-container">
                  <div className="left">
                    <p>Name:</p>
                    <p>Phone:</p>
                    <p>Address:</p>
                    <p>City:</p>
                    <p>State:</p>
                    <p>Postal zip code:</p>
                    <p>Country:</p>
                  </div>
                  <div className="right">
                    <input />
                    <input />
                    <input />
                    <input />
                    <input />
                    <input />
                    <input />
                  </div>
                </div>
              </div>
              <button className="sent-btn">Successfully Sent</button>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default ShippingDetailsPage;
