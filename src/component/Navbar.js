import React from "react";
import logo from "../assets/LOGO.png";
import { FiEdit } from "react-icons/fi";
import { FaTrophy, FaWallet } from "react-icons/fa";
import main from "../assets/phone.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="font-ibm-plex-mono">
      <div className="flex">
        <img className="h-32" src={logo} alt="unityHublogo" />
        <div className="flex absolute right-20 top-10">
          <div className="m-5 text-xl text-white flex items-center justify-center">
            <FaTrophy></FaTrophy>
            <button className="ml-4 hover:scale-105">join challenge</button>
          </div>
          <div className="m-5 text-xl text-white flex items-center justify-center">
            <FiEdit></FiEdit>
            <button className="ml-4 hover:scale-105">create challenge</button>
          </div>
        </div>
      </div>

      <div className="w-6/12 h-6/12 mt-20 ml-20 text-xl text-white">
        <p>
          Squad Goals is the next big step in self-improvement by implementing
          fun mechanics and block chain. Make goals for your friends and
          yourself and put in your stakes and see the self improvement and good
          habits come in!
        </p>
        <p className="text-3xl mt-20">Get your goal on with Squad Goals!!</p>
      </div>
      <div className="absolute right-20 top-20 w-5/12 h-5/12 mt-10 mr-10">
        <img className="w-full h-full" src={main}></img>
      </div>
      <div className="flex mt-32 text-xl text-white">
        <div className="ml-10 bg-custom-green p-3 w-3/12 text-center rounded-lg items-center justify-center flex">
          <FaTrophy></FaTrophy>
          <Link to="/join">
            <button className="ml-5 hover:scale-105">join challenge</button>
          </Link>
        </div>
        <div className="ml-10 bg-custom-green p-3 rounded-lg w-3/12 items-center justify-center flex">
          <FiEdit></FiEdit>
          <button className="ml-5 hover:scale-105">create challenge</button>
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
