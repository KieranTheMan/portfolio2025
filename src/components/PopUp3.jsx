import React from "react";
import RPCscreenImg from "../assets/images/rpcscreen.png";

const Popup3 = ({ isVisible, onClose }) => {
  return (
    <div className={`popup-wrap ${isVisible ? "visible" : ""}`}>
      <div className="popup-box transform-in">
        <img className="pop-up-img1" src={RPCscreenImg} alt="pop-up-img1" width={'1000px'} height={'400px'}/>
        <button className="close-btn popup-close" onClick={onClose}>
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
        </button>
        <p className="corpo">Rock Papper Scissors Game</p>
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
              href="https://kierantheman.github.io/RockPaperScissorsGame/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rock Papper Scissors
            </a>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Git Hub Code:</p>
            <a
              className="cuberto"
              href="https://github.com/KieranTheMan/RockPaperScissorsGame"
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
          One of the first projects I built using vanilla JavaScript was a
          classic Rock, Paper, Scissors game. The goal of this project was to
          deepen my understanding of JavaScript fundamentals, including
          higher-order functions and DOM manipulation. This project was a fun
          way to practice programming logic while enhancing my problem solving
          skills and improving my ability to interact with the DOM.
        </p>
        <p className="Ornare features">
          The game allows players to compete against the computer by selecting
          their choice of rock, paper, or scissors, with the computer's choice
          being generated randomly. The result win, lose, or draw is displayed
          dynamically, along with the current score.
        </p>
        <br />

        <p className="Ornare features">
          <span>&#9733;</span> <b>KEY FEATURES</b>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>Interactive Gameplay:</b> Users can choose
          rock, paper, or scissors, and the game  <span className="indent">calculates and displays the
          outcome in real time.</span>
        </p>

        <p className="Ornare features">
          <span>&#9737;</span> <b>Dynamic Score Tracking:</b> Keeps track of the
          player's score, providing instant feedback  <span className="indent">after each round.</span>
        </p>

        <p className="Ornare features">
          <span>&#9737;</span> <b>Clean and Simple UI:</b> Designed with
          usability in mind, ensuring a seamless user  <span className="indent">experience.</span>
        </p>

        <p className="Ornare">
          <span>&#9733;</span> <b>TECH STACK</b>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>Vanilla JavaScript:</b>
          Used to implement the game logic, including generating random  <span className="indent">computer
          choices, comparing results, and updating the score.</span>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>HTML:</b>
          Provides the structure for the website, allowing access to DOM
          elements for  <span className="indent">interactivity.</span>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>CSS:</b> Styled the game interface, including
          layout and the placement of images.
        </p>
        <p className="Ornare">
          <span>&#9733;</span> <b>CHALLENGES</b>
        </p>
        <p className="Ornare features">
          <b>Function Data Flow:</b> I initially struggled with getting
          functions to correctly pass data between the player's choice, the
          computer's choice, and the result logic. By breaking down the logic
          into smaller, reusable functions and testing them independently, I was
          able to solve this issue.
        </p>
        <p className="Ornare features">
          <b>Image Placement with CSS:</b> Placing images correctly on
          the page was challenging at first, especially ensuring they were
          responsive and aligned. This was resolved by experimenting with CSS
          properties like flexbox.
        </p>
      </div>
    </div>
  );
};

export default Popup3;
