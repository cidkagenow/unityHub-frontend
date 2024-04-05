import React from "react";
import logo from "../assets/LOGO.png"

function Navbar() {
  return (
    <div>
      <div>
        <img src={logo} alt="unityHublogo" />
      </div>
      <div>
        <div>
          <button>
            join challenge
          </button>
        </div>
        <div>
          <button>
            create challenge
          </button>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
