import React, { useState, useEffect } from "react";
import ContentImg from "../assets/images/content-img.png";
import Popup from "./PopUp";

const Portfolio = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupOpen = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const handlePopupClose = (e) => {
    e.preventDefault();
    setIsPopupVisible(false);
  };

  return (
    <>
      {/* <!-- ====================================== Section Portfolio ===================================== --> */}
      <section className="portfolio-section" id="portfolio">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Portfolio.
          </h2>
          <div className="line"></div>
        </div>
        <div className="portfolios-group-main">
          <div>
            <div
              className="image-container popup-btn zoom_in"
              onClick={handlePopupOpen}
            >
              <img src={ContentImg} alt="content-img" />
            </div>
            <p className="Corporate zoom_in">AI IMAGE GEN APP</p>
          </div>
          <div>
            <div
              className="image-container popup-btn zoom_in"
              onClick={handlePopupOpen}
            >
              <img src={ContentImg} alt="content-img" />
            </div>
            <p className="Corporate zoom_in">AI APP</p>
          </div>
          <div>
            <div
              className="image-container popup-btn zoom_in"
              onClick={handlePopupOpen}
            >
              <img src={ContentImg} alt="content-img" />
            </div>
            <p className="Corporate zoom_in">AI APP</p>
          </div>
        </div>
      </section>
      <Popup isVisible={isPopupVisible} onClose={handlePopupClose} />
      {/* <!-- ====================================== Section Portfolio End ===================================== --> */}
    </>
  );
};
export default Portfolio;
