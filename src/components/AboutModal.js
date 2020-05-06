import React from "react";

const AboutModal = (props) => {
  return (
    <div className="info-modal message">
      <div className="message-header">
        About this app
        <button
          className="delete"
          onClick={() => props.setToggleModal(false)}
        ></button>
      </div>
      <div className="message-body">
        <p>
          <span>Philly Farmer's Markets</span> was built by{" "}
          <a href="https://www.rasha.dev">Rasha Moumneh</a> using{" "}
          <i class="fab fa-react"></i> React, Google Maps API, and{" "}
          <a href="https://www.opendataphilly.org/">Open Data Philly's</a>{" "}
          farmer's markets ArcGIS API.
        </p>
        <p>
          <a
            className="hosted"
            href="https://github.com/RashaMou/philly-farmers-markets"
          >
            This is an open source project hosted on{" "}
            <i className="fab fa-github"></i> GitHub.
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
