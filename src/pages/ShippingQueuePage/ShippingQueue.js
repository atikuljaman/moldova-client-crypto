import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import "./ShippingQueue.css";
import SideBar from "../../components/SideBar/SideBar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import ArrowIcon from "../../assets/img/left-arrow-icon-2.png";

const ShippingQueue = () => {
  return (
    <div>
      <Navigation />
      <HeaderNav />
      <div className="shipping-queue-container">
        <SideBar />
        <div className="shipping-queue-container-right">
          <div className="content-box">
            <div className="shipping-queue-header">
              <img src={ArrowIcon} alt="" />
              <h2 className="heading">Shipping Queue</h2>
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
                  <td>
                    <button>Start Shipment</button>
                  </td>
                  <td>
                    <button className="cancel-btn">Cancel Order</button>
                  </td>
                </tr>
                <tr class="spacer"></tr>
                <tr className="body-tr">
                  <td>
                    <p>Shoes2</p>
                  </td>
                  <td>
                    <p>4</p>
                  </td>
                  <td>
                    <button>Start Shipment</button>
                  </td>
                  <td>
                    <button className="cancel-btn">Cancel Order</button>
                  </td>
                </tr>
                <tr class="spacer"></tr>
                <tr className="body-tr">
                  <td>
                    <p>Shoes3</p>
                  </td>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <button>Start Shipment</button>
                  </td>
                  <td>
                    <button className="cancel-btn">Cancel Order</button>
                  </td>
                </tr>
                <tr class="spacer"></tr>
                <tr className="body-tr">
                  <td>
                    <p>Shoes4</p>
                  </td>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <button>Start Shipment</button>
                  </td>
                  <td>
                    <button className="cancel-btn">Cancel Order</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default ShippingQueue;
