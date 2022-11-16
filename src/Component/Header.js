import React from "react";
import bootstrapLogo from "./assents/bootstrap-logo.svg";
import "./style.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar bg-success p-2 text-dark d-flex headerContainer">
        <div className="container-fluid navbar-dark d-flex">
          <a className="navbar-brand d-flex " href="/">
            <img
              src={bootstrapLogo}
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <h4
              className="headerLogoText"
              style={{
                fontSize: "18px",
                marginLeft: "10px",
                color: "white",
                tex: "none",
              }}
            >
              Recipe APP
            </h4>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
