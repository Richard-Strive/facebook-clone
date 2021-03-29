import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { AiTwotoneShop } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

import "./LeftSideBar.css";

function LeftSideBar() {
  return (
    <div className="left_container ml-1">
      <div className="left pl-2">
        <div className="profile_pic_icon ">
          <img src="https://source.unsplash.com/random" alt="profile_pic" />
        </div>
        <h6 className="ml-2 mt-3 mb-3">Username</h6>
      </div>
      <div className="left pl-2">
        <AiFillInfoCircle className="icon" />
        <h6 className="ml-2 mt-3 mb-3">COVID-19 Information Centre</h6>
      </div>
      <div className="left pl-2">
        <FaUserFriends className="icon" />
        <h6 className="ml-2 mt-3 mb-3">Find Friends</h6>
      </div>
      <div className="left pl-2">
        <HiOutlineUserGroup className="icon" />
        <h6 className="ml-2 mt-3 mb-3">Groups</h6>
      </div>
      <div className="left pl-2">
        <AiTwotoneShop className="icon" />
        <h6 className="ml-2 mt-3 mb-3">Marketplace</h6>
      </div>
      <div className="left pl-2">
        <RiArrowDropDownLine className="icon" />
        <h6 className="ml-2 mt-3 mb-3">See more</h6>
      </div>
      <hr />

      <div className="left pl-2">
        <h5 className="ml-2 mt-3 mb-3">Your shortcuts</h5>
      </div>
      <div className="left pl-2">
        <h6 className="ml-2 mt-3 mb-3">#PrayForRichard</h6>
      </div>
      <div className="left pl-2">
        <h6 className="ml-2 mt-3 mb-3">#hireRichard</h6>
      </div>
      <div className="left pl-2">
        <h6 className="ml-2 mt-3 mb-3">#iWillCleanYourDesktop4ever</h6>
      </div>
      <div className="left pl-2">
        <h6 className="ml-2 mt-3 mb-3">#MandeepChain</h6>
      </div>
      <div className="left pl-2">
        <h6 className="ml-2 mt-3 mb-3">#PleseHashTagWork</h6>
      </div>
    </div>
  );
}

export default LeftSideBar;
