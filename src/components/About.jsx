import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos " id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          I’m a full-stack web developer exprencied in web development with the
          ability to quickly learn and applying new technologies to complete
          projects successfully. Passionate about problem-solving and emerging
          technologies, I approach every task with curiosity and dedication,
          whether optimizing existing systems or starting fresh. Currently, I’m
          exploring AI development, focusing on integrating large language
          models into full-stack environments. I'm organized and team-oriented, I
          value communication, respect, and collaboration as keys to success. I
          thrive in Agile teams, aiming to grow as a developer becoming a Lead
          developer while leveraging innovative technologies to create impactful
          solutions.
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Kieran Fowler</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">British, UK</p>
        </div>
        {/* <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick="location.href='tel:(+1)2345678899'"
          >
            (+1) 234 567 8899
          </p>
        </div> */}
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick="location.href='mailto:hello@biogi.com'"
          >
            kieran9fowler@outlook.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">1+ years</p>
        </div>
        {/* <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div> */}
        {/* <div className="about-detail-main">
          <p className="about-detail">Skype</p>
          <p className="about-detail-info">hello.biogi</p>
        </div> */}
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">English</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
