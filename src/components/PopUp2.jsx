import React from "react";
import PopUpImg from "../assets/images/pop-up-img1.jpg";
//import PopUpImg2 from "../assets/images/pop-up-img2.jpg";

const Popup2 = ({ isVisible, onClose }) => {
  return (
    <div className={`popup-wrap ${isVisible ? "visible" : ""}`}>
      <div className="popup-box transform-in">
        <img className="pop-up-img1" src={PopUpImg} alt="pop-up-img1" />
        <a className="close-btn popup-close" href="#" onClick={onClose}>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.16998 14.83L14.83 9.17004"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.83 14.83L9.16998 9.17004"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>{" "}
        </a>
        <p className="corpo">
          AI Cool Art Gen<h6>Note: Server Loading Speed is Slow</h6>
        </p>
        <div className="corporate_main">
          {/* <div className="cuberto_main">
            <p className="created_by">Created By:</p>
            <p className="cuberto">Kieran</p>
          </div> */}
          {/* <div className="cuberto_main">
            <p className="created_by">Date:</p>
            <p className="cuberto">20/12/2024</p>
          </div> */}
          <div className="cuberto_main">
            <p className="created_by">Project Link:</p>
            <a
              className="cuberto"
              href="https://coolartgen.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cool Art Gen
            </a>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Git Hub Code:</p>
            <a
              className="cuberto"
              href="https://github.com/KieranTheMan/AiimageGen"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Repo
            </a>
          </div>

          {/* <div className="cuberto_main">
            <p className="created_by">Client:</p>
            <p className="cuberto">Rayan Patrick</p>
          </div> */}
          {/* <div className="cuberto_main">
            <p className="created_by">Categories:</p>
            <p className="cuberto">Content</p>
          </div> */}
        </div>
        <p className="Ornare">
          AI image generation has recently fascinated me, especially the process
          of creating visually stunning images from user prompts. To explore
          this, I built an AI-powered image generation application using the
          <b> OpenAI DALL·E API</b>. This project integrates advanced AI
          technologies with my existing MERN stack skillset to deliver a fully
          functional and interactive web application.
        </p>
        <p className="Ornare">
          The application enables users to input text prompts, which are
          processed by the DALL·E API to generate unique AI-created images.
          These images are then saved securely to <b>Cloudinary for storage</b>,
          while the prompt and image URLs are stored in a{" "}
          <b>MongoDB database</b>. This allows users to revisit and view their
          generated creations later.
        </p>

        <p className="Ornare features">
          <span>&#9733;</span> <b>KEY FEATURES</b>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span>
          <b> Prompt-based AI Image Generation: </b>
          Users can input any creative prompt, and the{" "}
          <span className="indent">
            app generates corresponding AI-driven images.
          </span>
        </p>

        <p className="Ornare features">
          <span>&#9737;</span> <b>Community Page:</b> A section where all
          generated images are displayed for users to{" "}
          <span className="indent">explore and get inspired.</span>
        </p>

        <p className="Ornare features">
          <span>&#9737;</span> <b>Cloud Storage Integration: </b>
          Images are uploaded to Cloudinary, ensuring fast and{" "}
          <span className="indent">reliable delivery across the web.</span>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>Responsive Design:</b> The front-end interface
          is designed with responsiveness in mind,{" "}
          <span className="indent">
            making it accessible on both desktop and mobile devices.
          </span>
        </p>
        <p className="Ornare">
          <span>&#9733;</span> <b>TECH STACK</b>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>React.js, HTML, Tailwind CSS:</b> Used to
          design and style the front end of the{" "}
          <span className="indent">
            application. Tailwind CSS ensures a clean and modern UI while mobile
            optimized.
          </span>
          <br />
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>Express.js/Node.js:</b> Set up the server to
          handle API routes, including interactions with{" "}
          <span className="indent">DALL·E and database connections.</span>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>OpenAI DALL·E API:</b> Core technology for
          generating images based on user prompts. <br />
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>Cloudinary:</b> Used to store and manage user
          generated images for seamless delivery.
          <br />
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>MongoDB:</b> Serves as the database for
          storing user inputs prompts, names and the{" "}
          <span className="indent">generated image URLs.</span>
        </p>
        <p className="Ornare">
          <span>&#9733;</span>
          <b> CHALLENGES</b>
        </p>
        <p className="Ornare features">
          <b>Image Display with Flexbox:</b> Initially faced difficulties with
          correctly aligning and displaying images on the community page. Solved
          this by tweaking CSS flexbox properties and using Tailwind’s utility
          classes.
        </p>
        <p className="Ornare features">
          <b>Secure Database Connections:</b> Ensuring the MongoDB connection
          used secure API keys.
        </p>
        <p className="Ornare features">
          <b>Fetching AI Responses:</b> Parsing and saving images from the
          DALL·E API response.
        </p>

        <p className="Ornare features">
          <b>Performance:</b> As this application is currently hosted on a
          free-tier server, there might be slight delays when loading data from
          the database, especially on the community page.
        </p>
      </div>
    </div>
  );
};

export default Popup2;
