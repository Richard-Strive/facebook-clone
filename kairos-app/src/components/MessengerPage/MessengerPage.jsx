import React from "react";
import "./MessengerPage.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiLiveFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";

function MessengerPage() {
  return (
    <div className="messenger_page_container">
      <div className="messsanger_friend_list_container">
        <div className="messsanger_friend_list_container">
          <div className="messsanger_friend_list_header">
            <h3>Chats</h3>

            <div className="messanger_dots_icon_container">
              <HiDotsHorizontal className="messanger_dots_icon" />
            </div>
            <div className="messanger_live_icon_container">
              <RiLiveFill className="messanger_live_icon" />
            </div>
            <div className="messanger_write_icon_container">
              <BsPencilSquare className="messanger_write_icon" />
            </div>
          </div>
          <div className="messsanger_friend_list_input"></div>
          <div className="messsanger_friend_list"></div>
        </div>
      </div>
      <div className="messsanger_current_chat_container"></div>
      <div className="messsanger_current_friend_info"></div>
    </div>
  );
}

export default MessengerPage;
