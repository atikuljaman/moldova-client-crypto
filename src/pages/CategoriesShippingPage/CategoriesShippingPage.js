import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import SideBar from "../../components/SideBar/SideBar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import "./CategoriesShippingPage.css";

const CategoriesShippingPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <Navigation />
      <HeaderNav />
      <div className="categories-shipping-container">
        <SideBar />
        <div className="categories-shipping-container-right">
          <h2 className="title">shoesboutique.shib</h2>
          <div className="content-box">
            <div className="content-box-left">
              <div className="shipping-form-container">
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
              <div className="description-cont">
                <h3>Product Description:</h3>
                <p>Product Details:</p>
              </div>
            </div>
            <div className="content-box-right">
              <div className="product-details">
                <p>Item Name: Shoes1</p>
                <p>Available Sizes: 34, 39, 40</p>
                <p>Available Colours: Red, Black</p>
                <p>Fabric Type: 100% Cotton</p>
                <p>Item Condition: New</p>
                <p>Manufacturer: Canada</p>
                <p>Brand: SuperBrand</p>
                <br />
                <p>Refund Possible: Yes</p>
                <p>Department: Women</p>
                <p>Shipment Area: Worldwide</p>
                <p>Shipment Fee: 2000 SHI</p>
                <p>Delivered In: 15-20 Working Days</p>
              </div>
              <br />
              <div className="quantity-container">
                <p>Quantity:</p>
                <div className="quantity-box">
                  <button onClick={handleMinus}>
                    <BiMinus />
                  </button>
                  <p>{quantity}</p>
                  <button onClick={handlePlus}>
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <div className="buy-container">
                <div className="top">
                  <p>Price: 10000 SHI</p>
                  <p>Total: 12000 SHI</p>
                </div>
                <button>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default CategoriesShippingPage;
