import React from "react";
import "./DisplayedPost.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";

function DisplayedPost() {
  return (
    <div className="displayed_post_container p-2 mt-3">
      <div className="displayed_post_header mt-1">
        <div className="displayed_post_user_info ml-2">
          <img src="https://source.unsplash.com/random" alt="profile_pic" />
          <h6 className="ml-2 mt-2">Username</h6>
        </div>
        <HiDotsHorizontal className="mr-2 mt-3" />
      </div>
      <p className="ml-2">This is a simple comment</p>
      <div className="displayed_post_content">
        <img src="https://source.unsplash.com/random" alt="post_image" />
      </div>
      <hr className="m-0" />
      <div className="like_comment p-3">
        <div className="displayed_post_like_icon">
          <BiLike className="comment" />
          <h6>Like</h6>
        </div>
        <div className="displayed_post_comment_icon">
          <GoComment className="like" />
          <h6>Comment</h6>
        </div>
      </div>
      <hr className="m-0" />
      <div className="displayed_post_comment_list">
        <div className="signle_comment">
          <img src="https://source.unsplash.com/random" alt="post_image" />
          <div className="ml-2">
            <b>Username</b>
            <p>Comment</p>
          </div>
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
