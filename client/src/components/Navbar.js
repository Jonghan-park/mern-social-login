import React from "react";
import avatar from "../assets/avatar.png";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Login auth</span>
      <ul className="list">
        <li className="listItem">
          <img src={avatar} alt="" className="avatar" />
        </li>
        <li className="listItem">Joseph Park</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
}

export default Navbar;
