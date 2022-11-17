import React from "react";

const Footer = () => {
  return (
    <div className="container footerComponent">
      <div className="container">
        <div className="card-header">
          Repice APP
          <small>
            <h6 style={{ color: "gray" }}>
              Tüm Hakkı <span style={{ color: "#404258" }}>Murat AVCI</span>'ya
              Aittir
            </h6>
            <br />
            <h6>
              <span style={{ color: "gray" }}>contact:</span>{" "}
              js.muratavci@gmail.com
            </h6>
            <h6>
              <span style={{ color: "gray" }}>Linkedin:</span>{" "}
              https://www.linkedin.com/in/muratavci05/
            </h6>
          </small>
        </div>
        <div className="card-body">
          <p className="card-text" style={{ color: "gray" }}>
            Recipe API with React JS is a project that has been worked on.
          </p>
          <a href="/" className="btn btn-outline-primary">
            Go Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
