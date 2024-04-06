import React from "react";
import logo from "../../assets/LOGO.png";
import { FaTrophy, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

function JoinChallenge() {
  return (
    <div className="font-ibm-plex-mono text-white">
      <div className="flex">
        <Link to="/">
          <button>
            <img className="h-32" src={logo} alt="unityHublogo" />
          </button>
        </Link>
        <div className="flex absolute right-20 top-10">
          <div className="m-5 text-xl text-white flex items-center justify-center">
            <FaTrophy></FaTrophy>
            <button className="ml-4 hover:scale-105">join challenge</button>
          </div>
        </div>
      </div>

      <div className="m-10">
        <p>create new challenge</p>
      </div>
    </div>
  );
}

export default JoinChallenge;
