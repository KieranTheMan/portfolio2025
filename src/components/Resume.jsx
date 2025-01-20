import React from "react";
import CssImg from "../assets/images/htmlcss.png";
import JavaScriptImg from "../assets/images/javascript.png";
import ReactImg from "../assets/images/react.png";
import ExpressImg from "../assets/images/express.png";
import PythonImg from "../assets/images/python.png";
import Slider from "react-slick";
import ColanIcon from "../assets/images/svg/colan-icon.svg";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
// import WinnerAward from "../assets/images/winner-award.png";
// import WinnerAward2 from "../assets/images/winner-award2.png";
// import WinnerAward3 from "../assets/images/winner-award3.png";
// import WinnerAward4 from "../assets/images/winner-award4.png";

const Resume = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: false,
    speed: 1000,
    draggable: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };
  // const colors = [
  //   "#BCE70C",
  //   "#FF759C",
  //   "#00CC97",
  //   "#FFDB59",
  //   "#6F39FD",
  //   "#FF7D61",
  // ];
  // const progressRef = useRef(null);
  // const hasAnimated = useRef(false); // Track if the animation has already run

  // useEffect(() => {
  //   const progressSection = progressRef.current;
  //   const items = progressSection.querySelectorAll(".progress-item");
  //   const observerOptions = { threshold: 0.1 };

  //   function handleIntersection(entries, observer) {
  //     if (entries[0].isIntersecting && !hasAnimated.current) {
  //       items.forEach((item, index) => {
  //         let num = parseInt(item.dataset.num);
  //         let count = 0;
  //         let color = colors[index % colors.length];
  //         let interval = setInterval(() => {
  //           if (count === num) {
  //             clearInterval(interval);
  //           } else {
  //             count++;
  //             item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
  //             item.setAttribute("data-value", `${count}%`);
  //             item.innerHTML = `${count}%`;
  //           }
  //         }, 15);
  //       });
  //       observer.unobserve(progressSection);
  //       hasAnimated.current = true; // Mark that the animation has run
  //     }
  //   }

  //   const observer = new IntersectionObserver(
  //     handleIntersection,
  //     observerOptions
  //   );
  //   observer.observe(progressSection);

  //   return () => observer.disconnect();
  // }, [colors]);

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">SOFTWARE DEVELOPMENT</p>
                <p className="cursus university">
                  UK, Just IT Training / 2024 - 2025
                </p>
                <p className="cursus">
                  Successfully completed a professional training program
                  delivered by Just IT, covering the following areas:
                </p>
                <p className="cursus">
                  <span>&#9733;</span>
                  <b> System Development Lifecycle & Methodologies:</b> Learned
                  SDLC phases, Agile, and Waterfall methodologies to manage and
                  document software projects.
                </p>
                <p className="cursus">
                  {" "}
                  <span>&#9733;</span> <b>HTML, JavaScript, and CSS:</b>{" "}
                  Developed responsive web pages using HTML for structure, CSS
                  for styling, and JavaScript for interactivity. Built projects
                  applying modern design principles and interactive features.
                </p>
                <p className="cursus">
                  {" "}
                  <span>&#9733;</span> <b>Database Design:</b> Designed and
                  implemented relational databases using SQL for data
                  manipulation and management.
                </p>
                <p className="cursus">
                  <span>&#9733;</span> <b>Python:</b> Gained proficiency in
                  Python, focusing on programming fundamentals and
                  object-oriented design.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">BSc in Video Games Development</p>
                <p className="cursus university">
                  UK, Stafforshire University / 2006 - 2008
                </p>
                <p className="cursus">
                  Successfully completed a degree in Video Games Development,
                  gaining expertise in the following areas:
                </p>{" "}
                <p className="cursus">
                  <span>&#9733;</span> <b>3D Modeling, Animation:</b> Learned 3D
                  modeling, texturing, techniques, character animation,
                  lighting, rendering and environmental design using industry
                  standard tools such as Autodesk Maya and 3ds Max.
                </p>{" "}
                <p className="cursus">
                  <span>&#9733;</span> <b>Game Development:</b> Used Unreal
                  Engine 3 and Steam for creating first person shooters,
                  utilizing C++ for game mechanics, physics, optimization, and
                  debugging.
                </p>{" "}
                <p className="cursus">
                  <span>&#9733;</span>{" "}
                  <b>Level Design and Games Documentation:</b>
                  <br />
                  Designed game levels emphasizing player engagement, flow, and
                  narrative integration. Created detailed game documentation,
                  including design briefs, mechanics descriptions, and
                  development roadmaps.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">BTEC National Diploma in IT</p>
                <p className="cursus university">
                  UK-London, Lewisham Collage / 2003 - 2006
                </p>
                <p className="cursus">
                  Completed a program focused on foundational IT concepts and
                  practical applications:
                </p>
                <p className="cursus">
                  <span>&#9733;</span> <b>Computer Systems:</b> Learned
                  hardware, software, and troubleshooting fundamentals.
                </p>
                <p className="cursus">
                  <span>&#9733;</span> <b>IT Project Management:</b> Gained
                  knowledge of planning, executing, and evaluating IT projects.
                </p>
                <p className="cursus">
                  <span>&#9733;</span> <b>Website Development:</b> Built
                  websites using HTML, CSS, and JavaScript with a focus on
                  usability.
                </p>
                <p className="cursus">
                  <span>&#9733;</span> <b>Database Design: </b>Studied
                  relational databases, MySQL and SQL for creation and management.
                </p>
                <p className="cursus">
                  <span>&#9733;</span> <b>Software Development:</b> Acquired
                  fundamental programming skills in Visual Basic and Java.
                </p>{" "}
                <p className="cursus">
                  <span>&#9733;</span>
                  <b> Networking Principles:</b> Explored network setup,
                  configuration, and security basics.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">SENIOR FULL-STACK DEVELOPER (REMOTE)</p>
                <p className="cursus university">
                  US-New York, RevenueHive, <br />
                  Contract: Collaboration, 2024 - Current
                </p>
                <p className="cursus">
                  Revenue hive is a tech start up ............Ipsum erat duis
                  leo lectus tellus neque dictumst. Dignissim tortor quis nisl
                  mi lectus. Massa facilisis ac eget fermentum vitae. Dictum
                  rutrum sed.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">ASSISTANT WEB DEVELOPER</p>
                <p className="cursus university">
                  UK-London, Kodiri, Voluntary
                  <br />
                  2019 - 2019
                </p>
                <p className="cursus">
                  Kodiri Coding Workshop: Assisted with meeting and greeting
                  attendees Troubleshoot any technical issues in the working
                  environment Supported attendees with JavaScript ES6+ and
                  ReactJS
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">JUNIOR FULL-STACK WEB DEVELOPER</p>
                <p className="cursus university">
                  UK-London, Kodiri, Full-Time
                  <br />
                  2019 - 2019
                </p>
                <p className="cursus">
                  Attended the intensive{" "}
                  <b>MERN Full-Stack Web Development Kodiri Bootcamp</b>,
                  delivering an in-person workplace experience, as a Junior web
                  developer.
                  <br />
                  Key contributions and skills developed include:
                </p>

                <p className="cursus">
                  <span>&#9733;</span> Enhanced user interaction and usability
                  in our team chat application “progrAmateur” using HTML5, CSS3,
                  JavaScript, and React.js.
                </p>
                <p className="cursus">
                  <span>&#9733;</span> Contributed ideas during team briefings,
                  ensuring successful project outcomes.
                </p>
                <p className="cursus">
                  <span>&#9733;</span> Collaborated in teams using Agile
                  methodologies, optimizing workflows to meet deadlines ahead of
                  schedule.
                </p>
                <p className="cursus">
                  <span>&#9733;</span> Leveraged GitHub for issue tracking,
                  branching, pull requests, and peer reviews, ensuring seamless
                  integration with the master branch.
                </p>
                <p className="cursus">
                  <span>&#9733;</span> Engaged in pair programming and supported
                  team members with innovative solutions.
                </p>
                <p className="cursus">
                  <span>&#9733;</span> Conducted research to integrate necessary
                  technologies and tested implementations to overcome
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      {/* <section className="coding-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        
      </section> */}
      {/* <!-- ====================================== Section Testimonials ===================================== --> */}
      <section className="testimonials-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Testimonials.
          </h2>
          <div className="line"></div>
        </div>
        <br />
        <Slider className="Testimonials" {...settings}>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
              Thanks to Avix's game-changing website design and development, our
              online presence has reached new heights. Our website has never
              looked better.Thanks to Avix's game-changing website design and
              development, our online presence has reached new heights. Our
              website has never looked better.
            </p>
            <p className="client-name">Alba </p>
            <p className="kello">RevenueHive</p>
          </div>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
              Auxa has been a game-changer for our online presence. Their
              website design and development team took our vision and turned it
              into a stunning reality. The results speak for themselves - our
              website has never looked better.
            </p>

            <p className="client-name">Marilina Harless</p>
            <p className="kello">RevenueHive</p>
          </div>
        </Slider>
      </section>
      {/* <!-- ====================================== Section Testimonials ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
      <section className="design-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text design-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main css flip_up">
            <img src={CssImg} alt="css-img" width={"80px"} height={"80px"} />
            <div className="skill-counter-main css-text">
              <p></p>
              <p>HTML, CSS</p>
            </div>
          </div>
          <div className="design-skills-img-main javascript flip_up">
            <img
              src={JavaScriptImg}
              alt="javascript-img"
              width={"60px"}
              height={"60px"}
            />
            <div className="skill-counter-main javascript-text">
              <p></p>
              <p>JAVASCRIPT</p>
            </div>
          </div>
          <div className="design-skills-img-main react-xd flip_up">
            <img
              src={ReactImg}
              alt="react-img"
              width={"60px"}
              height={"60px"}
              style={{ marginLeft: "-30px" }}
            />
            <div className="skill-counter-main react-xd-text">
              <p></p>
              <p>REACT</p>
            </div>
          </div>

          <div className="design-skills-img-main express flip_up">
            <img
              src={ExpressImg}
              alt="express-img"
              width={"60px"}
              height={"60px"}
              style={{ marginLeft: "10px" }}
            />
            <div className="skill-counter-main express-text">
              <p></p>
              <p>EXPRESS, NODE</p>
            </div>
          </div>
          <div className="design-skills-img-main python flip_up">
            <img
              src={PythonImg}
              alt="python-img"
              width={"60px"}
              height={"60px"}
            />
            <div className="skill-counter-main python-text">
              <p></p>
              <p>PYTHON, DJANGO</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
      {/* <section className="awards-section overflow-hidden">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Awards.
          </h2>
          <div className="line"></div>
        </div>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward}
                        alt="winner-award4"
                      />
                      <p className="award-yer">2025</p>
                    </div>
                    <p className="award-interior">Awwwards Interior</p>
                    <p className="award-winner-text">Winner</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward2}
                        alt="winner-award2"
                      />
                      <p className="award-yer">2024</p>
                    </div>
                    <p className="award-interior">The Webby Awards</p>
                    <p className="award-winner-text">Nominee</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward3}
                        alt="winner-award3"
                      />
                      <p className="award-yer">2023</p>
                    </div>
                    <p className="award-interior">EWA Design</p>
                    <p className="award-winner-text">Winner</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward4}
                        alt="winner-award4"
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">BEST Star</p>
                    <p className="award-winner-text">Winner</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
