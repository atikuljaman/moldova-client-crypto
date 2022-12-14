import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import cardImg from "../../assets/img/card-3.png";
import { IoIosArrowDown } from "react-icons/io";
import "./ShopPage.css";

const ShopPage = () => {
  const [clickDropDown, setClickDropDown] = useState(null);

  const handleDropDown = (idx) => {
    if (clickDropDown === idx) {
      return setClickDropDown(null);
    }
    setClickDropDown(idx);
  };

  return (
    <div>
      <Navigation />
      <div className="shop-container">
        <div className="shop-container-left">
          <h2 className="heading">Shops</h2>
          <div className="accordion-container">
            {accordionData.map((item, idx) => (
              <div key={idx} className="drop-down-container ">
                <div
                  className={
                    clickDropDown === idx
                      ? "drop-down-header active"
                      : "drop-down-header"
                  }
                  onClick={() => handleDropDown(idx)}
                >
                  <p>{item?.title}</p>
                  <IoIosArrowDown className="arrow-icon" />
                </div>
                {clickDropDown === idx && (
                  <div
                    className={
                      clickDropDown === idx
                        ? "drop-down-body active"
                        : "drop-down-body"
                    }
                  >
                    <div className="check-box-container">
                      {item.labels.map((label) => (
                        <div className="checkbox-content">
                          <label for={label.label}>{label.label}</label>
                          <input id={label.label} type="checkbox" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="shop-container-right">
          <div className="shop-container-right-content">
            {Array.from({ length: 7 }).map((_, idx) => (
              <div className="shop-card-container" key={idx}>
                <div className="card">
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
                <h4 className="domain-name">Domain:</h4>
                <h4 className="domain-name">Browse Products</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default ShopPage;

const accordionData = [
  {
    title: "Digital Goods",
    labels: [
      { label: "Movies" },
      { label: "Music" },
      { label: "Books" },
      { label: "Animals" },
      { label: "Courses" },
    ],
  },
  {
    title: "Physical Goods",
    labels: [
      { label: "Human Rights" },
      { label: "Education" },
      { label: "Religion" },
      { label: "Animals" },
    ],
  },
  {
    title: "Food",
    labels: [
      { label: "Fast Food" },
      { label: "Sushi" },
      { label: "Restaurants" },
      { label: "Vegan" },
    ],
  },
];
