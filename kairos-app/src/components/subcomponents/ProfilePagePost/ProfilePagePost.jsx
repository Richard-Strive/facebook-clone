import React, { useState, useEffect, useRef } from "react";
import "./ProfilePagePost.css";
import { Row, Col } from "react-bootstrap";
import CreatePost from "../CreatePost/CreatePost";
import DisplayedPost from "../DisplayedPost/DisplayedPost";
import { connect, useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal.jsx";

function ProfilePagePost() {
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.user);
  const selUser = useSelector((state) => state.selUser);

  console.log("the selected userrrrrr--->", selUser);

  const isSelectedUser = useSelector((state) => state.isSelectedUser);

  return (
    <div className="profile_page_post_container">
      <div className="profile_page_post_left mt-2">
        <div
          className="face_id_camera"
          style={{ display: `${isSelectedUser ? "none" : "flex"}` }}
        >
          {user.user_obj.faceRec ? (
            <h5>You can log in with face id</h5>
          ) : (
            <>
              <Modal open={open} setOpen={setOpen} isRegister={true} />
              <img
                src="https://specials-images.forbesimg.com/imageserve/5f76aa7a27e990f9cc618fe8/960x0.jpg?fit=scale"
                alt="arificial_intelligence"
                onClick={() => setOpen(!open)}
              />
              <h5>Enable Face ID login</h5>
            </>
          )}
        </div>

        <div className="friends_container mt-3 pt-3">
          <h6 className="ml-3">Friends</h6>
          <div className="friends_container_wrap mt-4">
            {isSelectedUser && selUser.user_obj !== ""
              ? selUser.user_obj.friends.map((friend, index) => (
                  <div className="text-center" key={index}>
                    <img
                      src="https://source.unsplash.com/random"
                      alt="profile_pic"
                    />
                    <p>{friend.firstName}</p>
                  </div>
                ))
              : user.user_obj !== "" &&
                user.user_obj.friends.map((friend, index) => (
                  <div className="text-center" key={index}>
                    <img src={friend.pfImage} alt="profile_pic" />
                    <p>{friend.firstName}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <div className="profile_page_post_right mt-2">
        <div
          className="profile_page_create_post"
          style={{ display: `${isSelectedUser ? "none" : "flex"}` }}
        >
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
