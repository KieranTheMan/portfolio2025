import React, { useState} from "react";
import ContentImg from "../assets/images/content-img.png";
import Popup1 from "./PopUp1";
import Popup2 from "./PopUp2";
import Popup3 from "./PopUp3";

const Portfolio = () => {
 
  const [isPopup1Visible, setIsPopup1Visible] = useState(false);
  const [isPopup2Visible, setIsPopup2Visible] = useState(false);
  const [isPopup3Visible, setIsPopup3Visible] = useState(false);


 //<!-- ============= POPUP1=============== -->
  const handlePopup1Open = (e) => {
    e.preventDefault();
    setIsPopup1Visible(true);
  };
  const handlePopup1Close = (e) => {
    e.preventDefault();
    setIsPopup1Visible(false);
  };
  //<!-- ============= POPUP1-END=============== -->

  //<!-- ============= POPUP2=============== -->
  const handlePopup2Open = (e) => {
    e.preventDefault();
    setIsPopup2Visible(true);
  };
  const handlePopup2Close = (e) => {
    e.preventDefault();
    setIsPopup2Visible(false);
  };
  //<!-- ============= POPUP2-END=============== -->

    //<!-- ============= POPUP3=============== -->
    const handlePopup3Open = (e) => {
      e.preventDefault();
      setIsPopup3Visible(true);
    };
    const handlePopup3Close = (e) => {
      e.preventDefault();
      setIsPopup3Visible(false);
    };
    //<!-- ============= POPUP3-END=============== -->

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
              onClick={handlePopup1Open}
            >
              <img src={ContentImg} alt="content-img" />
            </div>
            <p className="Corporate zoom_in">AI Movie Selekt</p>
          </div>
          <div>
            <div
              className="image-container popup-btn zoom_in"
              onClick={handlePopup2Open}
            >
              <img src={ContentImg} alt="content-img" />
            </div>
            <p className="Corporate zoom_in">AI Cool Art Gen</p>
          </div>
          <div>
            <div
              className="image-container popup-btn zoom_in"
              onClick={handlePopup3Open}
            >
              <img src={ContentImg} alt="content-img" />
            </div>
            <p className="Corporate zoom_in">Rock Papper Scissors</p>
          </div>
          
          {/* <div>
            <div
              className="image-container popup-btn zoom_in"
              onClick={handlePopupOpen}
            >
              <img src={ContentImg} alt="content-img" />
            </div>
            <p className="Corporate zoom_in">AI APP</p>
          </div> */}
        </div>
      </section>
      <Popup1 isVisible={isPopup1Visible} onClose={handlePopup1Close} />
      <Popup2 isVisible={isPopup2Visible} onClose={handlePopup2Close} />
      <Popup3 isVisible={isPopup3Visible} onClose={handlePopup3Close} />
      {/* <!-- ====================================== Section Portfolio End ===================================== --> */}
    </>
  );
};
export default Portfolio;
