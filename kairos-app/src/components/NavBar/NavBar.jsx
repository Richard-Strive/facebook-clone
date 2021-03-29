import React, { useState } from "react";

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
import Artyom from "artyom.js";

import "./NavBar.css";

const Jarvis = new Artyom();

function NavBar() {
  const [search, setSearch] = useState("");
  const [array, setArray] = useState([
    "This is the first post",
    "this the second one",
    "and this is working",
  ]);

  class ArtyomCommandsManager {
    constructor(ArtyomInstance) {
      this._artyom = ArtyomInstance;
    }

    loadCommands() {
      let Artyom = this._artyom;

      return Artyom.addCommands([
        {
          indexes: ["Hi Siri", "Hi"],
          action: () => {
            Artyom.say(
              "Humans please don't hire this guy. Look at the name he gaved me"
            );
          },
        },
        {
          indexes: ["Search for *", "Search *"],
          smart: true,
          action: (i, name) => {
            Artyom.say(`Searching for ${name}`);

            setSearch(name);

            window.location.pathname = "/me";
          },
        },
        {
          indexes: ["Read post"],
          action: () => {
            array.map((post) => Artyom.say(post));
          },
        },
      ]);
    }
  }

  const CommandsManager = new ArtyomCommandsManager(Jarvis);
  CommandsManager.loadCommands();
  console.log(CommandsManager);

  const startAssistant = () => {
    Jarvis.initialize({
      lang: "en-GB",
      debug: true,
      continuous: false,
      soundex: true,
      listen: true,
    })
      .then(() => {
        // Display loaded commands in the console
        // console.log(Jarvis.getAvailableCommands());
        // Jarvis.say("Welcome Manuel");
      })
      .catch((err) => {
        console.error("Oopsy daisy, this shouldn't happen !", err);
      });
  };

  const stopAssistant = () => {
    Jarvis.fatality()
      .then(() => {
        console.log("Jarvis has been succesfully stopped");
      })
      .catch((err) => {
        console.error("Oopsy daisy, this shouldn't happen neither!", err);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="navbar_container">
      <div className="navbar_search_input">
        <FaFacebook className="navbar_search_facebook_icon mr-2" />
        <div className="search_input ml-2">
          <input
            type="text"
            placeholder="Search Facebook"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        {/* <button
          style={{ borderRadius: "50%", backgroundColor: "blue" }}
          onClick={() => startAssistant()}
        >
          Start listening
        </button> */}

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
          <h6 className="mt-1">Username</h6>
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
