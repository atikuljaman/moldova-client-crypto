import React from "react";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import Navigation from "../../components/Navigation/Navigation";
import cardImg from "../../assets/img/card-3.png";
import "./FullOnBlockchainNftPage.css";

const FullOnBlockchainNftPage = () => {
  return (
    <div>
      <Navigation />
      <div className="full-on-blockchain-container">
        <div className="full-on-blockchain-container-left">
          <h2 className="heading">Full on Blockchain NFT</h2>

          <div className="check-box-container">
            <div className="checkbox-content">
              <label for="art">ART</label>
              <input id="art" type="checkbox" />
            </div>
            <div className="checkbox-content">
              <label for="File">File</label>
              <input id="File" type="checkbox" />
            </div>
            <div className="checkbox-content">
              <label for="Other">Other</label>
              <input id="Other" type="checkbox" />
            </div>
          </div>
        </div>
        <div className="full-on-blockchain-container-right">
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
            </div>
          ))}
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default FullOnBlockchainNftPage;
