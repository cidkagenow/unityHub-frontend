import React from "react";
import { FaTrophy, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import { RiSearchLine } from "react-icons/ri";
import { FiPlus, FiEdit } from "react-icons/fi";
import datas from "../Data";
import "./create.css";

function Join() {
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
            <FiEdit></FiEdit>
            <Link to="/create">
              <button className="ml-4 hover:scale-105">create challenge</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="ml-20 mt-5">
        <p>Join challenge</p>
        <div className="flex mt-5">
          <RiSearchLine className="fixed pl-5 text-gray-500 w-10 h-10" />
          <input
            className="pl-10 pr-4 py-2 ml-2 rounded-lg w-5/12 focus:outline-none bg-custom-gray"
            type="text"
            placeholder="Search"
          ></input>
        </div>
      </div>
      <div className="ml-20 mt-10">
        <p>Challenges Available:</p>
      </div>
      <div>
        {datas.map((item, index) => (
          <Link to="/plus">
            <div
              className="relative inline-flex w-3/12 h-3/12 p-3 ml-20 mt-10 bg-custom-gray rounded-lg justify-center items-center"
              key={index}
              id="box"
            >
              <img src={item.img} id="img"></img>
              <div className="ml-10">
                <h1>{item.challengeName}</h1>
                <div className="">
                  <p id="p">{item.description}</p>
                  {/* <p>Duration:{item.duration}</p> */}
                  <p>Stake: {item.solStake}</p>
                  <p>0/{item.maxNumberS} joined</p>
                  <FiPlus className="absolute right-5 bottom-5"></FiPlus>
                  <button className="ml-4 hover:scale-105"></button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Join;
