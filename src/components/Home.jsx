import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/images/aiKieran.png";
import EmailSvg from "../assets/images/svg/email-svg.svg";
import HomeSvg from "../assets/images/svg/home-svg.svg";
import AboutSvg from "../assets/images/svg/about-svg.svg";
import ResumeSvg from "../assets/images/svg/resume-svg.svg";
import PortfolioSvg from "../assets/images/svg/portfolio-svg.svg";
import LinkedinSvg from "../assets/images/svg/linkedin.svg";
import gitHubSvg from "../assets/images/svg/github.svg";
import ContactSvg from "../assets/images/svg/contact-svg.svg";
import KieranMainImg from "../assets/images/aiKieran3.png";
import CircularImg from "../assets/images/spinnaeng.png";

import AboutSection from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
//import Blog from "./Blog";
import Contact from "./Contact";
import $ from "jquery";
//import CV from "../assets/pdf/
import { Link } from "react-router-dom";
const Home = () => {
  //Text
  const firstTexts = ["Software Engineer"];
  const secondTexts = ["Full Stack Engineer", "Generative AI Engineer"];
  const intervalTime = 800;

  const [firstTextIndex, setFirstTextIndex] = useState(0);
  const [secondTextIndex, setSecondTextIndex] = useState(0);

  useEffect(() => {
    const firstTextTimeout = setTimeout(() => {
      setFirstTextIndex((prevIndex) => (prevIndex + 1) % firstTexts.length);
    }, intervalTime * 3);

    return () => clearTimeout(firstTextTimeout);
  }, [firstTextIndex, firstTexts.length]);

  useEffect(() => {
    const secondTextTimeout = setTimeout(() => {
      setSecondTextIndex((prevIndex) => (prevIndex + 1) % secondTexts.length);
    }, intervalTime * 3);

    return () => clearTimeout(secondTextTimeout);
  }, [secondTextIndex, secondTexts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstTextIndex((prevIndex) => (prevIndex + 1) % firstTexts.length);
      setSecondTextIndex((prevIndex) => (prevIndex + 1) % secondTexts.length);
    }, intervalTime * 7);

    return () => clearInterval(interval);
  }, [firstTexts.length, secondTexts.length]);

  // Logo marquee
  useEffect(() => {
    document.querySelectorAll(".logos").forEach(function (logosContainer) {
      const copy = logosContainer.querySelector(".logos-slide").cloneNode(true);
      logosContainer.appendChild(copy);
    });
  }, []);

  // Toggle Btn
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const menuItems = document.querySelectorAll(".menu-list-main li");

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
      menuToggle.classList.toggle("open");
      sideMenu.classList.toggle("show");
    };

    const handleMenuItemClick = (event) => {
      event.preventDefault();
      const linkElement = event.currentTarget.querySelector("a");
      if (linkElement) {
        const targetId = linkElement.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
        menuToggle.classList.remove("open");
        sideMenu.classList.remove("show");
      }
    };

    if (menuToggle && sideMenu && menuItems.length > 0) {
      menuToggle.addEventListener("click", handleMenuToggle);
      menuItems.forEach((item) => {
        item.addEventListener("click", handleMenuItemClick);
      });

      $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
      });

      return () => {
        menuToggle.removeEventListener("click", handleMenuToggle);
        menuItems.forEach((item) => {
          item.removeEventListener("click", handleMenuItemClick);
        });
      };
    }
  }, [menuOpen]);

  const [activeLink, setActiveLink] = useState("");

  const handleClick = (event, id) => {
    event.preventDefault();
    setActiveLink(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <button id="menu-toggle" className="menu-toggle-button">
        <span className="hamburger" id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
      </button>
      {/* <!-- ====================================== Side Menu ===================================== --> */}
      <div className="side-menu">
        <div className="profile-img-main">
          <img
            className="zoom_in"
            src={ProfileImg}
            alt="profile-img"
            style={{ borderRadius: "20px" }}
          />
          <h1 className="fade_up">
            Kieran <span>Fowler</span>
          </h1>
          <h2 className="designer fade_up">{firstTexts[firstTextIndex]}</h2>
          <div className="profile-media-icons-main fade_up">
            <Link
              to="mailto:kieran9fowler@outlook.com"
              className="profile-media-icons"
            >
              <img src={EmailSvg} alt="email-svg" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/kieran-fowler/"
              className="profile-media-icons"
            >
              <img src={LinkedinSvg} alt="linkedin-svg" />
            </Link>
            <Link
              to="https://github.com/KieranTheMan"
              className="profile-media-icons"
            >
              <img src={gitHubSvg} alt="gethub-svg" />
            </Link>
          </div>
        </div>
        <div className="menu-list-main">
          <ul>
            <li
              className={`active-menu-action ${
                activeLink === "home" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#home"
                onClick={(e) => handleClick(e, "home")}
              >
                <img src={HomeSvg} alt="home-svg" />
                Home
              </a>
            </li>
            <li
              className={`active-menu-action ${
                activeLink === "about" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#about"
                onClick={(e) => handleClick(e, "about")}
              >
                <img src={AboutSvg} alt="home-svg" />
                About
              </a>
            </li>
            <li
              className={`active-menu-action ${
                activeLink === "resume" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#resume"
                onClick={(e) => handleClick(e, "resume")}
              >
                <img src={ResumeSvg} alt="home-svg" />
                Resume
              </a>
            </li>
            {/* <li
              className={`active-menu-action ${
                activeLink === "services" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#services"
                onClick={(e) => handleClick(e, "services")}
              >
                <img src={ServicesSvg} alt="home-svg" />
                Services
              </a>
            </li> */}
            <li
              className={`active-menu-action ${
                activeLink === "portfolio" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#portfolio"
                onClick={(e) => handleClick(e, "portfolio")}
              >
                <img src={PortfolioSvg} alt="home-svg" />
                Portfolio
              </a>
            </li>
            {/* <li
              className={`active-menu-action ${
                activeLink === "pricing" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#pricing"
                onClick={(e) => handleClick(e, "pricing")}
              >
                <img src={PricingSvg} alt="home-svg" />
                Pricing
              </a>
            </li> */}
            {/* <li
              className={`active-menu-action ${
                activeLink === "blog" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#blog"
                onClick={(e) => handleClick(e, "blog")}
              >
                <img src={BlogSvg} alt="home-svg" />
                Blog
              </a>
            </li> */}
            <li
              className={`active-menu-action ${
                activeLink === "contact" ? "active" : ""
              }`}
              id="contact-line"
            >
              <a
                className="fade_right"
                href="#contact"
                onClick={(e) => handleClick(e, "contact")}
              >
                <img src={ContactSvg} alt="home-svg" />
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div id="wrap">
            <Link
              to={"#"}
              rel="noreferrer"
              target="_blank"
              className="btn-slide"
            >
              <span className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="download-svg"
                    d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="title">Download CV</span>
              <span className="title-hover">Click Here</span>
            </Link>{" "}
          </div>
        </div>
      </div>

      {/* <!-- ====================================== Side Menu End ===================================== --> */}
      <div className="main-containe" data-bs-spy="scroll">
        {/* <!-- ====================================== Section One ===================================== --> */}
        <section className="section-one overflow-hidden" id="home">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <h2 className="jessica-main-text zoom_in">
                Kieran <span>Fowler</span>
              </h2>
              <h3 className="back-End-dev designer2">
                {secondTexts[secondTextIndex]}
              </h3>
              <p className="best fade_down">
                "Technology progresses so fast you have to learn, unlearn and
                relearn as your developing your masterpiece"
              </p>
              <div className="section-one-btns-main fade_down">
                <div className="wrapper">
                  <Link
                    className="btn-hover "
                    to="#portfolio"
                    onClick={(e) => handleClick(e, "portfolio")}
                  >
                    See Work
                  </Link>
                </div>

                <div className="wrapper">
                  <Link
                    className="btn-hover btn-hover2"
                    to="#contact"
                    onClick={(e) => handleClick(e, "contact")}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 position-relative">
              <img
                className="circular-img"
                src={CircularImg}
                alt="circular-img"
              />
              <img
                className="jessica-main-img zoom_in"
                src={KieranMainImg}
                alt="Kieran-main-img"
              />
            </div>
          </div>
        </section>
        {/* <!-- ====================================== Section Marquee ===================================== --> */}
        {/* <section className="Marquee-main overflow-hidden">
          <h3 className="fade_up">Trusted by World Leading Brands</h3>
          <div className="logos logos2">
            <div className="logos-slide">
              <div className="marquee__content">
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={BrandLogo1}
                    alt="brand-logo1"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={BrandLogo2}
                    alt="brand-logo2"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={BrandLogo3}
                    alt="brand-logo3"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={BrandLogo4}
                    alt="brand-logo4"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={BrandLogo5}
                    alt="brand-logo5"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={BrandLogo6}
                    alt="brand-logo6"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={BrandLogo7}
                    alt="brand-logo7"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={BrandLogo8}
                    alt="brand-logo8"
                  />
                </div>
                <div className="marquee-img-main">
                  <img
                    className="brand-logos"
                    src={BrandLogo7}
                    alt="brand-logo9"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- ====================================== Section Marquee End ===================================== --> */}
        {/* <!-- ====================================== Section About ===================================== --> */}
        <AboutSection />
        {/* <!-- ====================================== Section About End ===================================== --> */}
        {/* <!-- ====================================== Section Education Experience ===================================== --> */}
        <Resume />
        {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
        {/* <!-- ====================================== Section Services ===================================== --> */}

        {/* <!-- ====================================== Section Services ===================================== --> */}
        {/* <!-- ====================================== Section Portfolio ===================================== --> */}
        <Portfolio />
        {/* <!-- ====================================== Section Portfolio ===================================== --> */}
        {/* <!-- ====================================== Section Pricing ===================================== --> */}

        {/* <!-- ====================================== Section Pricing ===================================== --> */}
        {/* <!-- ====================================== Section Blogs ===================================== --> */}

        {/* <!-- ====================================== Section Blogs ===================================== --> */}
        {/* <!-- ====================================== Section Contact ===================================== --> */}
        <Contact />
        {/* <!-- ====================================== Section Contact ===================================== --> */}
      </div>
    </>
  );
};
export default Home;
