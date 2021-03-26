import React from "react";

import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { TiGroup } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiNotification2Fill } from "react-icons/ri";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar_container">
      <div className="navbar_search_input">
        <FaFacebook className="navbar_search_facebook_icon mr-2" />
        <div className="search_input ml-2">
          <input type="text" placeholder="Search Facebook" />
        </div>

        <hr />
      </div>

      <div className="navbar_center_icons">
        <div className="navbar_home_icon_container">
          <AiFillHome className="navbar_home_icon" />
        </div>
        <div className="navbar_friends_icon_container">
          <FaUserFriends className="navbar_friends_icon" />
        </div>
        <div className="navbar_video_icon_container">
          <MdOndemandVideo className="navbar_video_icon" />
        </div>
        <div className="navbar_shop_icon_container">
          <AiTwotoneShop className="navbar_shop_icon" />
        </div>
        <div className="navbar_group_icon_container">
          <TiGroup className="navbar_group_icon" />
        </div>
      </div>
      <div className="navbar_right_icons">
        <div className="profile_redirect">
          <img src="https://source.unsplash.com/random" alt="" />
          <p>Username</p>
        </div>
        <div className="navbar_plus_icon_container">
          <FiPlus className="navbar_plus_icon" />
        </div>
        <div className="navbar_message_icon_container">
          <FaFacebookMessenger className="navbar_message_icon" />
        </div>
        <div className="navbar_notification_icon_container">
          <RiNotification2Fill className="navbar_notification_icon" />
        </div>
        <div className="navbar_dropdown_icon_container">
          <BsFillCaretDownFill className="navbar_dropdown_icon" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
