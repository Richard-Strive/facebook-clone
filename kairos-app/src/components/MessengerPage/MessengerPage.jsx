import React from "react";
import "./MessengerPage.css";
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

function MessengerPage() {
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
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
            <div className="messanger_single_friend mt-2 ml-1">
              <img
                src="https://source.unsplash.com/random"
                alt="single_friend"
              />
              <p className="mt-3 ml-2">Username</p>
            </div>
          </div>
        </div>
      </div>
      <div className="messsanger_current_chat_container">
        <div className="messsanger_current_chat_top">
          <img src="https://source.unsplash.com/random" alt="single_friend" />
          <p className="mt-3 ml-2">Username</p>
        </div>

        <div className="messsanger_current_chat_content">
          <div className="single_message">
            <img src="https://source.unsplash.com/random" alt="" />
            <div className="single_message_text">
              <p>Hi i'm your friend</p>
            </div>
          </div>
          <div className="single_message_me mt-2">
            <div className="single_message_text">
              <p>I'm the owner of the account</p>
            </div>
            <img src="https://source.unsplash.com/random" alt="" />
          </div>
        </div>
        <div className="messsanger_current_chat_input">
          <BsFillPlusCircleFill className="current_chat_input_plus_icon" />
          <IoMdPhotos className="current_chat_input_photo_icon" />
          <FaStickyNote className="current_chat_input_sticker_icon" />
          <RiFileGifFill className="current_chat_input_git_icon" />
          <div className="messsanger_friend_list_input">
            <input type="text" placeholder=" Aa" />
            <FaSmile className="current_chat_input_smile_icon mr-2" />
          </div>
          <AiTwotoneLike className="current_chat_input_like_icon" />
        </div>
      </div>
      <div className="messsanger_current_friend_info_container">
        <div className="messsanger_current_friend_info ml-1">
          <img src="https://source.unsplash.com/random" alt="current_user" />
          <b>Username</b>
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
