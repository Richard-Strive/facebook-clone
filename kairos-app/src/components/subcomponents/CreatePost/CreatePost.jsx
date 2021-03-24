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
        <div className="create_post_profile_pic">
          <img src="https://source.unsplash.com/random" alt="profile_pic" />
        </div>
        <div className="create_post_input">
          <input type="text" placeholder="What's on your mind, User?" />
        </div>
      </div>

      <div className="create_post_bnts">
        <div className="live_video_btn">
          <RiLiveFill className="icon" />
        </div>
        <div className="photo_video_btn">
          <IoMdPhotos className="icon" />
        </div>
        <div className="feeling_activity_btn">
          <CgSmileMouthOpen className="icon" />
        </div>
        <div></div>
      </div>
      <hr />
    </div>
  );
}

export default CreatePost;
