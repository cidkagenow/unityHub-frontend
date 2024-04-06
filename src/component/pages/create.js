import { React, useState } from "react";
import logo from "../../assets/LOGO.png";
import { FaTrophy, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import robot from "../../assets/robot.png";
import "./create.css";

function Create() {
  const [formData, setFormData] = useState({
    challengeName: "",
    description: "",
    duration: "",
    solStake: "",
    maxNumberS: "",
  });

  const [datas, setDatas] = useState([]);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSave = (e) => {
    // Save form data into datas array
    setDatas((prevDatas) => [...prevDatas, formData]);
    // Reset form data
    setFormData({
      challengeName: "",
      description: "",
      duration: "",
      solStake: "",
      maxNumberS: "",
    });
    console.log(datas);
  };

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
            <Link to="/join">
              <button className="ml-4 hover:scale-105">join challenge</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="ml-20 mt-2">
        <p>Create new challenge</p>
      </div>

      <div className="mt-20 ml-10 absolute flex h-3/5 w-3/5" id="left">
        <div className="h-full w-full">
          <div>
            <label className="block">Challenge name:</label>
            <input
              className="w-full mt-3 ml-5 h-7 bg-custom-gray rounded-lg border-none outline-none p-5"
              type="text"
              id="challenge name"
              name="challengeName"
              placeholder="Enter the name of challenge"
              value={formData.challengeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3">
            <label>Description:</label>
            <input
              className="w-full h-60 mt-3 ml-5 bg-custom-gray rounded-lg border-none outline-none p-3"
              type="text"
              id="description"
              name="description"
              placeholder="Describe the challenge"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="float-right w-11/12" id="right">
          <div>
            <label className="block">Duration:</label>
            <input
              className="w-full mt-3 ml-5 h-7 bg-custom-gray rounded-lg border-none outline-none p-5"
              type="text"
              id="challenge name"
              name="duration"
              placeholder="How long is challenge"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mt-5">Sol Stake:</label>
            <input
              className="w-full mt-3 ml-5 h-7 bg-custom-gray rounded-lg border-none outline-none p-5"
              type="text"
              id="challenge name"
              name="solStake"
              placeholder="Deposit for the challenge"
              value={formData.solStake}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mt-5">Maximum number of Stake:</label>
            <input
              className="w-full mt-3 ml-5 h-7 bg-custom-gray rounded-lg border-none outline-none p-5"
              type="text"
              id="max"
              name="maxNumberS"
              placeholder="How stakers can join for the challenge"
              value={formData.maxNumberS}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mt-5">Image of the challange:</label>
            <input
              className="w-2/5 mt-5 ml-60 h-40 bg-custom-gray rounded-lg border-none outline-none p-5"
              type="file"
              accept="image/png, image/jpg"
              id="image"
              name="image"
              //   placeholder="url(...\assets\image_icon.jpg)"
              value={formData.image}
              onChange={handleChange}
            />
            <div className="ml-10 bg-custom-green p-3 rounded-lg w-3/12 text-center">
              <button onClick={handleSave} className="hover:scale-105">
                launch
              </button>
            </div>
            <div className="fixed right-5 bottom-5 w-2/12 h-1/3">
              <img className="w-full h-full" src={robot}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
