import React from "react";
import PopUpImg from "../assets/images/pop-up-img1.jpg";
//import PopUpImg2 from "../assets/images/pop-up-img2.jpg";

const Popup1 = ({ isVisible, onClose }) => {
  return (
    <div className={`popup-wrap ${isVisible ? "visible" : ""}`}>
      <div className="popup-box transform-in">
        <img className="pop-up-img1" src={PopUpImg} alt="pop-up-img1" />
        <a className="close-btn popup-close" onClick={onClose}>
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
        <p className="corpo">AI Movie Seleket</p>
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
              href="https://movieselekta.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Movie Selekt
            </a>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Git Hub Code:</p>
            <a
              className="cuberto"
              href="https://github.com/KieranTheMan/SelectMovieApp"
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
          The AI Movie Selector project was inspired by my growing interest in
          AI technologies and a desire to explore how{" "}
          <b>GPT's completion API</b> works in tandem with{" "}
          <b>Retrieval-Augmented Generation (RAG)</b> and{" "}
          <b>Vertex Databases</b>. This personal project allowed me to dive deep
          into the world of large language models (LLMs), API integrations, and
          advanced data retrieval techniques. Combining these new concepts with
          my existing software development skill set, I built a web application
          that appears simple on the surface but is powered by a technically
          complex backend.
        </p>
        <p className="Ornare features">
          The application lets users search for movies using natural language
          prompts. It employs a combination of{" "}
          <b>GPT embeddings, semantic search, and movie database APIs</b> to
          retrieve relevant results, complete with images, titles, and
          descriptions. This project served as an excellent opportunity to
          expand my understanding of AI-based tools and APIs while solving
          challenging implementation problems.
        </p>
        <br />

        <p className="Ornare features">
          <span>&#9733;</span> <b>KEY FEATURES</b>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>AI-Powered Movie Search:</b> Users can input natural language queries, and the app{" "}
          <span className="indent">
            retrieves movie suggestions based on semantic matching and GPT
            completion.
          </span>
        </p>

        <p className="Ornare features">
          <span>&#9737;</span> <b>Rich Movie Data:</b> The app displays movie
          titles, descriptions, and images in a clean <span className="indent">and dynamic interface.</span>
        </p>

        <p className="Ornare features">
          <span>&#9737;</span> <b>Advanced Data Retrieval:</b> Uses RAG to improve the accuracy of search results by <span className="indent">combining
          embeddings with a powerful Vertex database.</span>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>Responsive and Clean UI:</b> Designed with Tailwind CSS for a visually appealing and <span className="indent">user friendly
          experience.</span>
        </p>
        <p className="Ornare">
          <span>&#9733;</span> <b>TECH STACK</b>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>React.js, HTML, Tailwind CSS:</b> Used to design and style the front-end application, <span className="indent">creating a
          responsive and modern user interface.</span>
          <br />
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>Express.js/Node.js:</b> Implemented the backend server to handle various APIs, including <span className="indent">GPT,
          LangChain, Supabase, and movie database integrations.</span>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>LangChain:</b> Utilized LangChain's recursive text splitter to preprocess a movie
          text file, <span className="indent">breaking it into manageable chunks for embedding.</span><br />
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>GPT Embeddings:</b> Generated embeddings from the chunked movie descriptions, <span className="indent">enabling
          effective semantic search and storing the data in a Vertex database.</span>
          <br />
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>GPT-4 Completion API:</b> Used GPT-4 for generating natural language responses, <span className="indent">providing
          contextually relevant movie suggestions based on user input.</span>
        </p>
        <p className="Ornare features">
          <span>&#9737;</span> <b>Supabase:</b> Acted as the database solution for storing embeddings and text,
          ensuring <span className="indent">fast and reliable access to data.</span>
        </p>
        <p className="Ornare">
          <span>&#9733;</span> <b>CHALLENGES</b>
        </p>
        <p className="Ornare features">
          <b>Semantic Search and Data Retrieval:</b> Initially struggled to get
          the semantic search to retrieve relevant movie data from the
          embeddings. This was resolved by fine-tuning the chunking process with
          LangChain and optimizing query logic.
        </p>
        <p className="Ornare features">
          <b>Matching Images with Movie Data:</b> Faced difficulties linking
          images to the correct movie data from the movie database API. Solved
          this by implementing keyword matching techniques, but not all matches
          have an image.
        </p>
        <p className="Ornare features">
          <b>Pulling Multiple Data Points:</b> Needed to fetch multiple pieces
          of data image, title, description in a single API request.
        </p>
        <p className="Ornare features">
          <b>DOM Manipulation for Images:</b> Ensured new images appended to the
          DOM didn’t distort the layout by carefully managing CSS styles and DOM
          structure.
        </p>
      </div>
    </div>
  );
};

export default Popup1;
