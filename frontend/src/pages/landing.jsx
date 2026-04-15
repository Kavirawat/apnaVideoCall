import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function landingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navlogo">
          <h2
            onclick={() => {
              router("/");
            }}
          >
            Apna Video Call
          </h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router("/ad32");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#d97500" }}>Connect</span> with your loved
            Ones
          </h1>
          <p>Cover distance by Apna Video Call</p>
          <div role="button">
            <Link style={{ color: "black" }} to={"/auth"}>
              Get Started
            </Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="mobile image"></img>
        </div>
      </div>
    </div>
  );
}

export default landingPage;
