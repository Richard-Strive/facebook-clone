import React from "react";
import "./DisplayedPost.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";

function DisplayedPost() {
  return (
    <div className="displayed_post_container p-2 mt-3">
      <div className="displayed_post_header mt-1">
        <div className="displayed_post_user_info">
          <img src="https://source.unsplash.com/random" alt="profile_pic" />
          <b className="ml-2">Username</b>
        </div>
        <HiDotsHorizontal className="mr-2 mt-3" />
      </div>
      <h3>This is a simple comment</h3>
      <div className="displayed_post_content">
        <img src="https://source.unsplash.com/random" alt="post_image" />
      </div>
      <hr className="m-0" />
      <div className="like_comment p-3">
        <div className="displayed_post_like_icon">
          <BiLike className="comment" />
          Like
        </div>
        <div className="displayed_post_comment_icon">
          <GoComment className="like" />
          Comment
        </div>
      </div>
      <hr className="m-0" />
      <div className="displayed_post_comment_list">
        <img src="https://source.unsplash.com/random" alt="post_image" />
        <div className="ml-2">
          <b>Username</b>
          <p>Comment</p>
        </div>
      </div>
      <div className="displayed_post_footer">
        <img src="https://source.unsplash.com/random" alt="post_image" />
        <div className="comment_input">
          <input type="text" placeholder="Write a comment..." />
        </div>
      </div>
    </div>
  );
}

export default DisplayedPost;
