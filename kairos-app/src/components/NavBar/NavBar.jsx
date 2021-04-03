import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { TiGroup } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiNotification2Fill } from "react-icons/ri";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { connect } from "react-redux";
import Artyom from "artyom.js";

import "./NavBar.css";

const Jarvis = new Artyom();

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispacth) => ({
  setUserData: (data) => dispacth({ type: "USER", payload: data }),
  setSelUser: (data) => dispacth({ type: "SEL_USER", payload: data }),
  setIsSelected: (data) => dispacth({ type: "SET_IS_SEL", payload: data }),
});

function NavBar({ setUserData, user, selUser, setSelUser, setIsSelected }) {
  const [search, setSearch] = useState("");
  const [usersFound, setUsersFound] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const [showFriendReq, setShowFriendReq] = useState(false);

  const history = useHistory();
  const token = localStorage.getItem("accessToken");

  const searchUser = async (search) => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/finduser/${search}`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: token,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUsersFound(data);
        setIsSelected(true);
        setShowBox(true);
        console.log(user);
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchUser(search);
    }
  };

  const selecyUserHandler = () => {
    setSelUser(usersFound);
    setShowBox(!showBox);
    setTimeout(() => {
      setSearch("");
      history.push("/home/me");
    }, 500);
  };

  const redirectHandler = () => {
    setIsSelected(false);
    history.push("/home/me");
  };

  return (
    <div className="navbar_container">
      <div className="navbar_search_input">
        <FaFacebook
          className="navbar_search_facebook_icon mr-2"
          onClick={() => history.push("/home/main")}
        />
        <div className="search_input ml-2">
          <input
            type="text"
            placeholder="Search Facebook"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </div>
        <hr />
      </div>
      <button className="arios_btn" onClick={() => startAssistant()}>
        <BiMicrophone className="navbar_arios_microphone_icon" />
      </button>

      {showBox ? (
        <div className="navbar_found_users_container">
          <div className="profile_pic_icon" onClick={() => selecyUserHandler()}>
            <img src={`${user.user_obj.pfImage}`} alt="profile_pic" />
            <h6 className="ml-2 mt-3 mb-3">{usersFound.firstName}</h6>
          </div>
        </div>
      ) : (
        " "
      )}

      <div className="navbar_center_icons">
        <div className="navbar_home_icon_container">
          <AiFillHome className="navbar_home_icon" />
        </div>
        <div className="navbar_friends_icon_container">
          <FaUserFriends
            className="navbar_friends_icon"
            onClick={() => setShowFriendReq(!showFriendReq)}
          />
          {user.user_obj !== "" ? (
            <div
              className="friend_notification_circle"
              style={{
                display: `${
                  user.user_obj.friendRequest.length > 0 ? "flex" : "none"
                }`,
              }}
            >
              {user.user_obj.friendRequest.length}
            </div>
          ) : (
            ""
          )}

          <div
            className="navbar_friend_req_container"
            style={{ display: `${showFriendReq ? "flex" : "none"}` }}
          >
            {user.user_obj !== ""
              ? user.user_obj.friendRequest.map((req) => (
                  <>
                    <div className="profile_pic_icon ml-1 mt-2 mb-2">
                      <img
                        src="https://source.unsplash.com/random"
                        alt="profile_pic"
                      />
                      Test
                      <div>
                        <button className="ignore_btn">Ignore</button>
                        <button className="accept_btn">Accept</button>
                      </div>
                    </div>
                  </>
                ))
              : ""}
          </div>
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
        <div className="profile_redirect" onClick={() => redirectHandler()}>
          <img src="https://source.unsplash.com/random" alt="" />
          <h6 className="mt-1">{user ? user.user_obj.firstName : " "}</h6>
        </div>
        <div className="navbar_plus_icon_container">
          <FiPlus className="navbar_plus_icon" />
        </div>
        <div
          className="navbar_message_icon_container"
          onClick={() => history.push("/home/messages")}
        >
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
