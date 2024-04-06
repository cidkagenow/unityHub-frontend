import { React, useState } from "react";
import logo from "../../assets/LOGO.png";
import { FaTrophy, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

function JoinChallenge() {
  const [formData, setFormData] = useState({
    challengeName: "",
    description: "",
  });

  // Define state variable to store array of objects
  const [formDataArray, setFormDataArray] = useState([]);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object using form data
    const newDataObject = { ...formData };
    // Push the object into the array
    setFormDataArray((prevArray) => [...prevArray, newDataObject]);
    // Clear the form fields
    setFormData({ username: "", email: "", password: "" });
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
            <button className="ml-4 hover:scale-105">join challenge</button>
          </div>
        </div>
      </div>

      <div className="ml-20 mt-10">
        <p>create new challenge</p>
      </div>

      <div className="m-20 absolute w-5/12 h-3/5">
        <div className="h-full">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block">Challenge name:</label>
              <input
                className="w-full mt-5 bg-custom-gray rounded-lg border-none outline-none p-3"
                type="text"
                id="challenge name"
                name="challengeName"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-10">
              <label>Description:</label>
              <input
                className="w-full h-60 mt-5 bg-custom-gray rounded-lg border-none outline-none p-3"
                type="text"
                id="description"
                name="description"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default JoinChallenge;
