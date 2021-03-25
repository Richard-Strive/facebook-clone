import React from "react";
import "./ProfilePagePost.css";
import CreatePost from "../CreatePost/CreatePost";
import DisplayedPost from "../DisplayedPost/DisplayedPost";

function ProfilePagePost() {
  return (
    <div className="profile_page_post_container">
      <div className="profile_page_post_left mt-2">
        <div className="face_id_camera"></div>
        <div className="friends_container mt-3"></div>
      </div>
      <div className="profile_page_post_right mt-2">
        <div className="profile_page_create_post">
          <CreatePost />
        </div>
        <div className="profile_page_displayed_post">
          <DisplayedPost />
          <DisplayedPost />
          <DisplayedPost />
        </div>
      </div>
    </div>
  );
}

export default ProfilePagePost;
