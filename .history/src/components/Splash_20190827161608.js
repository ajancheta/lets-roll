import React from "react";
import Navbar from "./Navbar";
import "../css/Splash.css";
import ActionShot from "../assets/img/action-one.png";
import ZipCodeForm from "./ZipCodeForm";
import SplashPhoto from "../assets/img/enter.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <div className="splash-container">
      <Navbar />

      <div className="intro-container">
        <div className="photo-container">
          <img src={SplashPhoto} />
        </div>
      </div>

      <div className="form-container">
        <ZipCodeForm />
        <br />
        <Link to="/locations" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              boxShadow: "none",
              backgroundColor: "#4C8A8E",
              color: "#fff"
            }}
          >
            Go!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Splash;
