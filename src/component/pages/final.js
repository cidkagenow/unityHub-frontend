import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import { FaTrophy } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import datas from "../Data1";
import "./create.css";

function Final() {
  return (
    <div className="font-ibm-plex-mono">
      <div className="flex">
        <Link to="/">
          <button>
            <img className="h-32" src={logo} alt="unityHublogo" />
          </button>
        </Link>
        <div className="flex absolute right-20 top-10" id="nav">
          <div className="m-5 text-xl text-white flex items-center justify-center">
            <FaTrophy></FaTrophy>
            <Link to="/join">
              <button className="ml-5 hover:scale-105">join challenge</button>
            </Link>
          </div>
          <div className="m-5 text-xl text-white flex items-center justify-center">
            <FiEdit></FiEdit>
            <Link to="/create">
              <button className="ml-4 hover:scale-105">create challenge</button>
            </Link>
          </div>
        </div>
      </div>
      <p id="final-p">0x5F13BCdd13DAa9Dec15A76689A7E43AC011cc323</p>
      <div className="item">
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "50px",
            color: "white",
            fontSize: "22px",
          }}
        >
          Complete Challenge :
        </h3>
      </div>

      <div class="item">
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "50px",
            color: "white",
            fontSize: "22px",
          }}
        >
          Sol staked :
        </h3>
      </div>

      <div class="item">
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "50px",
            color: "white",
            fontSize: "22px",
          }}
        >
          Leaderboard position :
        </h3>
      </div>
      <div id="final_item">
        <p style={{ marginTop: "65px" }}>23</p>
      </div>
      <div id="final_item">
        <p style={{ marginTop: "65px" }}>14 sol</p>
      </div>
      <div id="final_item">
        <p style={{ marginTop: "65px" }}>14</p>
      </div>

      <div class="item">
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "0px",
            color: "white",
            fontSize: "22px",
          }}
        >
          Top % percent :
        </h3>
      </div>

      <div class="item">
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "0px",
            color: "white",
            fontSize: "22px",
          }}
        >
          % of challenge won :
        </h3>
      </div>

      <div class="item">
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "0px",
            color: "white",
            fontSize: "22px",
          }}
        >
          Top category :
        </h3>
      </div>
      <div id="final_item">
        <p>23%</p>
      </div>
      <div id="final_item">
        <p>98%</p>
      </div>
      <div id="final_item">
        <p>Coding</p>
      </div>
      <div class="item">
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "-40px",
            color: "white",
            fontSize: "22px",
          }}
        >
          Challenge Authored :
        </h3>
      </div>

      <div class="item">
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "-40px",
            color: "white",
            fontSize: "22px",
          }}
        >
          Earn from authored challenge :
        </h3>
      </div>

      <div class="item">
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "-40px",
            color: "white",
            fontSize: "22px",
          }}
        >
          {" "}
          Challenge initiated :
        </h3>
      </div>
      <div id="final_item">
        <p>3</p>
      </div>
      <div id="final_item">
        <p>20sol</p>
      </div>
      <div id="final_item">
        <p>10</p>
      </div>
      <div>
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "-88px",
            color: "white",
            fontSize: "26px",
          }}
        >
          Challenge in progress:
        </h3>
      </div>

      <div>
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "25px",
            color: "white",
            fontSize: "26px",
          }}
        >
          Challenge in Completed:
        </h3>
      </div>

      <Link to="/join">
        <button id="return">Return to Challenge</button>
      </Link>
    </div>
  );
}

export default Final;
