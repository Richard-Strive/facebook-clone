import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoMdPhotos } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import { CgSmileMouthOpen } from "react-icons/cg";
import "./CreatePost.css";

function CreatePost() {
  return (
    <div className="create_post_container">
      <div className="create_post_header">
        <img src="https://source.unsplash.com/random" alt="profile_pic" />
        <div className="create_post_input">
          <input type="text" placeholder="What's on your mind, User?" />
        </div>
      </div>
      <hr />
      <div className="create_post_icons">
        <div className="live_icon_container">
          <RiLiveFill className="live_icon" />
          <span>Live Video</span>
        </div>
        <div className="photo_icon_container">
          <IoMdPhotos className="photo_icon" />
          <span>Photo</span>
        </div>
        <div className="feeling_icon_container">
          <CgSmileMouthOpen className="feeling_icon" />
          <span>Feeling</span>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
