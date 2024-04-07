import React from "react";
import logo from "../assets/LOGO.png";
import { FiEdit } from "react-icons/fi";
import { FaTrophy, FaWallet } from "react-icons/fa";
import main from "../assets/phone.svg";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="font-ibm-plex-mono">
      <div className="flex">
        <img className="h-32" src={logo} alt="unityHublogo" />
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

      <div className="w-6/12 h-6/12 ml-20 text-xl text-white" id="il">
        <p>
          Unity hub is the next big step in self-improvement by implementing fun
          mechanics and blockchain. Make goals for your friends and yourself and
          put in your stakes and see the self improvement and good habits come
          in!
        </p>
        <p className="text-3xl" id="padding1">
          Get your goal on with Unity hub!!
        </p>
      </div>
      <div className="absolute right-20 top-20 w-5/12 h-5/12 mt-10 mr-10">
        <img className="w-full h-full" id="change" src={main}></img>
      </div>
      <div className="flex text-xl text-white" id="padding">
        <div
          className="ml-10 bg-custom-green p-3 w-5/16 text-center rounded-lg items-center justify-center flex"
          id="join"
        >
          <FaTrophy></FaTrophy>
          <Link to="/join">
            <button className="ml-5 hover:scale-105">join challenge</button>
          </Link>
        </div>
        <div className="ml-10 bg-custom-green p-3 rounded-lg w-3/15 items-center justify-center flex">
          <FiEdit></FiEdit>
          <Link to="/create">
            <button className="ml-4 hover:scale-105">create challenge</button>
          </Link>
        </div>
      </div>
      <div className="text-xl flex bg-custom-purple text-white absolute bottom-10 right-10 p-3 rounded-lg  w-2/12 items-center justify-center">
        <FaWallet></FaWallet>
        <button className="ml-5 hover:scale-105">Connect wallet</button>
      </div>
    </div>
  );
}

export default Navbar;
