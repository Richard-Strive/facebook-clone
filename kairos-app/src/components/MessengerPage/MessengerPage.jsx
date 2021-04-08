import React, { useEffect, useState } from "react";
import "./MessengerPage.css";

import { useSelector, useDispatch } from "react-redux";

import { HiDotsHorizontal } from "react-icons/hi";
import { RiLiveFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { FaSmile } from "react-icons/fa";
import { RiFileGifFill } from "react-icons/ri";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { AiTwotoneLike } from "react-icons/ai";
import { FaStickyNote } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

import { getMessages, getUser } from "../tools";

function MessengerPage({ socket }) {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const user = useSelector((state) => state.user);
  const connectedUser = useSelector((state) => state.connectedUser);
  const dispatch = useDispatch();

  const token = localStorage.getItem("accessToken");

  const selectFriend = (frd) => {
    setSelectedFriend(frd);
  };

  const messageHandler = () => {
    socket.emit("private message", {
      text: message,
      to: selectedFriend.socketId,
      sender: user.user_obj.firstName,
      receiver: selectedFriend.firstName,
    });

    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      messageHandler();
    }
  };

  useEffect(() => {
    getMessages(token, setMessages);

    getUser(token, null, dispatch);
  }, []);

  useEffect(() => {
    getUser(token, null, dispatch);
    console.log("A user connected");
  }, [connectedUser]);

  useEffect(() => {
    getMessages(token, setMessages);
    socket.on("private message", (data) =>
      setMessages((data) => messages.concat(data))
    );

    console.log("BLING");
  }, [messages.length]);

  return (
    <div className="messenger_page_container">
      <div className="messsanger_friend_list_container">
        <div className="messsanger_friend_list_container">
          <div className="messsanger_friend_list_top">
            <h3>Chats</h3>
            <div className="d-flex">
              <div className="messanger_dots_icon_container ml-2">
                <HiDotsHorizontal className="messanger_dots_icon" />
              </div>
              <div className="messanger_live_icon_container ml-2">
                <RiLiveFill className="messanger_live_icon" />
              </div>
              <div className="messanger_write_icon_container ml-2 mr-3">
                <BsPencilSquare className="messanger_write_icon" />
              </div>
            </div>
          </div>
          <div className="messsanger_friend_list_input_container">
            <div className="messsanger_friend_list_input">
              <HiOutlineSearch className="messsanger_search_icon ml-2 mr-2" />
              <input type="text" placeholder="Search Messenger?" />
            </div>
          </div>
          <div className="messsanger_friend_list">
            {user.user_obj !== ""
              ? user.user_obj.friends.map((friend, index) => (
                  <div
                    className="messanger_single_friend mt-2 ml-1"
                    onClick={() => selectFriend(friend)}
                    key={index}
                  >
                    <img src={friend.pfImage} alt="single_friend" />
                    <p className="mt-3 ml-2">{friend.firstName}</p>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
      <div className="messsanger_current_chat_container">
        {selectedFriend && (
          <div className="messsanger_current_chat_top">
            <img src={selectedFriend.pfImage} alt="single_friend" />
            <p className="mt-3 ml-2">
              {selectedFriend && selectedFriend.firstName}
            </p>
          </div>
        )}

        <div className="messsanger_current_chat_content">
          {selectedFriend &&
            messages.map((msg, index) => {
              return msg.sender == selectedFriend.firstName ? (
                <div className="single_message ml-1 mt-2" key={index}>
                  <img src={selectedFriend.pfImage} alt="user_photo" />
                  <div className="single_message_text">
                    <p>{msg.text}</p>
                  </div>
                </div>
              ) : (
                msg.sender == user.user_obj.firstName && (
                  <div className="single_message_me mt-2 mr-2" key={index}>
                    <div className="single_message_text">
                      <p>{msg.text}</p>
                    </div>
                    <img src={user.user_obj.pfImage} alt="profile_pic" />
                  </div>
                )
              );
            })}
        </div>
        <div className="messsanger_current_chat_input">
          <BsFillPlusCircleFill className="current_chat_input_plus_icon" />
          <IoMdPhotos className="current_chat_input_photo_icon" />
          <FaStickyNote className="current_chat_input_sticker_icon" />
          <RiFileGifFill className="current_chat_input_git_icon" />
          <div className="messsanger_friend_list_input">
            <input
              type="text"
              placeholder=" Aa"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
            />
            <FaSmile className="current_chat_input_smile_icon mr-2" />
          </div>
          <AiTwotoneLike className="current_chat_input_like_icon" />
        </div>
      </div>
      <div className="messsanger_current_friend_info_container">
        <div className="messsanger_current_friend_info ml-1">
          {selectedFriend ? (
            <>
              <img src={selectedFriend.pfImage} alt="current_user" />
              <b>{selectedFriend.firstName}</b>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="customise_chat ml-1">
          <p>Customise chat</p>
          <RiArrowDropDownLine className="customise_chat_dropdown_icon" />
        </div>
        <div className="privacy_support ml-1">
          <p>Privacy and support</p>
          <RiArrowDropDownLine className="customise_chat_dropdown_icon" />
        </div>
      </div>
    </div>
  );
}

export default MessengerPage;
