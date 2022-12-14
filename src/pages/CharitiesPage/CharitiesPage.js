import React from "react";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import Navigation from "../../components/Navigation/Navigation";
import cardImg from "../../assets/img/card-3.png";
import "./CharitiesPage.css";

const CharitiesPage = () => {
  return (
    <div>
      <Navigation />
      <div className="charities-container">
        <div className="charities-container-left">
          <h2 className="heading">Charities</h2>

          <div className="check-box-container">
            <div className="checkbox-content">
              <label for="Human Rights">Human Rights</label>
              <input id="Human Rights" type="checkbox" />
            </div>
            <div className="checkbox-content">
              <label for="Education">Education</label>
              <input id="Education" type="checkbox" />
            </div>
            <div className="checkbox-content">
              <label for="Religion">Religion</label>
              <input id="Religion" type="checkbox" />
            </div>
            <div className="checkbox-content">
              <label for="Animals">Animals</label>
              <input id="Animals" type="checkbox" />
            </div>
            <div className="checkbox-content">
              <label for="Enviorment">Enviorment</label>
              <input id="Enviorment" type="checkbox" />
            </div>
            <div className="checkbox-content">
              <label for="Health">Health</label>
              <input id="Health" type="checkbox" />
            </div>
            <div className="checkbox-content">
              <label for="Sport">Sport</label>
              <input id="Sport" type="checkbox" />
            </div>
          </div>
        </div>
        <div className="charities-container-right">
          {Array.from({ length: 7 }).map((_, idx) => (
            <div className="full-on-blockchain-card-container" key={idx}>
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
      <FooterBottom />
    </div>
  );
};

export default CharitiesPage;
