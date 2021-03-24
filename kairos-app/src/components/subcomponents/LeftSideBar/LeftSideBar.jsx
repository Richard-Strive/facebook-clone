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
        <p className="ml-2 mt-3">
          <b>Username</b>
        </p>
      </div>
      <div className="left pl-2">
        <AiFillInfoCircle className="icon" />
        <p className="ml-2 mt-3">
          <b>COVID-19 Information Centre</b>
        </p>
      </div>
      <div className="left pl-2">
        <FaUserFriends className="icon" />
        <p className="ml-2 mt-3">
          <b>Find Friends</b>
        </p>
      </div>
      <div className="left pl-2">
        <HiOutlineUserGroup className="icon" />
        <p className="ml-2 mt-3">
          <b>Groups</b>
        </p>
      </div>
      <div className="left pl-2">
        <AiTwotoneShop className="icon" />
        <p className="ml-2 mt-3">
          <b>Marketplace</b>
        </p>
      </div>
      <div className="left pl-2">
        <RiArrowDropDownLine className="icon" />
        <p className="ml-2 mt-3">
          <b>See more</b>
        </p>
      </div>
      <hr />

      <div className="left pl-2">
        <p className="ml-2 mt-3">
          <b>Your shortcuts</b>
        </p>
      </div>
      <div className="left pl-2">
        <p className="ml-2 mt-3">
          <b>#PrayForRichard</b>
        </p>
      </div>
      <div className="left pl-2">
        <p className="ml-2 mt-3">
          <b>#hireRichard</b>
        </p>
      </div>
      <div className="left pl-2">
        <p className="ml-2 mt-3">
          <b>#iWillCleanYourDesktop4ever</b>
        </p>
      </div>
      <div className="left pl-2">
        <p className="ml-2 mt-3">
          <b>#MandeepChain</b>
        </p>
      </div>
      <div className="left pl-2">
        <p className="ml-2 mt-3">
          <b>#PleseHashTagWork</b>
        </p>
      </div>
    </div>
  );
}

export default LeftSideBar;
