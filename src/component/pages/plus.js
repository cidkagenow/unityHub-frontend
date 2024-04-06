import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import { RiSearchLine } from "react-icons/ri";
import { FiPlus, FiEdit } from "react-icons/fi";
import datas from "../Data1";
import "./create.css";

function Plus() {
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
        <p>Challenge:</p>
      </div>
      <div>
        {datas.map((item, index) => (
          <div className="" id="data">
            <h1>{item.challengeName}</h1>
            <p>0x5F13BCdd13DAa9Dec15A76689A7E43AC011cc323</p>
            <img src={item.img} id="img2"></img>
            <p id="p2">{item.description}</p>
            {/* <p id="a">Duration:{item.duration}</p> */}
            <p id="a">Stake: {item.solStake}</p>
            <p id="b">0/{item.maxNumberS} joined</p>
          </div>
        ))}
      </div>
      <div>
        <button id="join_button">Join Challenge</button>
      </div>
      <table class="custom-table" id="table">
        <thead>
          <tr>
            <th id="c1">Squad participarticipants</th>
            <th classname="ml-30 l-5" id="c2">
              Completed challenge?
            </th>
            <th classname="ml-30 l-5" id="c3">
              yes / no
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0xe0Cb84c5f565860Cf03c9d2Caa9d601Da4120C8e</td>
            <td classname="ml-30">0/2</td>
            <td className="">
              <input type="checkbox" id="check" />
              <label for="check"></label>

              <div id="check2">
                <input type="checkbox" id="check" />
                <label for="check"></label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to="/final">
          <button id="verify">Verify</button>
        </Link>
      </div>
    </div>
  );
}

export default Plus;
