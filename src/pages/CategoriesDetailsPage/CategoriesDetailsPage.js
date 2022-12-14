import React, { useRef, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import SideBar from "../../components/SideBar/SideBar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Slider from "react-slick";
import slideImg from "../../assets/img/slider-2.png";
import rightArrowIcon from "../../assets/img/right-arrow-icon.png";
import leftArrowIcon from "../../assets/img/left-arrow-icon.png";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import "./CategoriesDetailsPage.css";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CategoriesDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const slider = useRef(null);

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
      <div className="categories-details-container">
        <SideBar />
        <div className="categories-details-container-right">
          <h2 className="title">shoesboutique.shib</h2>
          <div className="content-box">
            <div className="content-box-left">
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
                <Link to="/categories-shipping">
                  <button>Buy</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default CategoriesDetailsPage;
