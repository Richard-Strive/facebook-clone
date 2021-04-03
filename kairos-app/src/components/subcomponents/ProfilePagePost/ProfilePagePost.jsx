import React, { useState, useEffect, useRef } from "react";
import "./ProfilePagePost.css";
import { Row, Col } from "react-bootstrap";
import CreatePost from "../CreatePost/CreatePost";
import DisplayedPost from "../DisplayedPost/DisplayedPost";
import { connect } from "react-redux";
import Modal from "../Modal/Modal.jsx";

const mapStateToProps = (state) => state;

function ProfilePagePost({ user, isSelectedUser }) {
  const [open, setOpen] = useState(false);

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
          <div className="friends_container_row mt-4">
            <Row className="mt-3">
              <Col>
                <img src="https://source.unsplash.com/random" alt="" />
                <p>FriendName</p>
              </Col>
              <Col>
                <img src="https://source.unsplash.com/random" alt="" />
                <p>FriendName</p>
              </Col>
              <Col>
                <img src="https://source.unsplash.com/random" alt="" />
                <p>FriendName</p>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <img src="https://source.unsplash.com/random" alt="" />
                <p>FriendName</p>
              </Col>
              <Col>
                <img src="https://source.unsplash.com/random" alt="" />
                <p>FriendName</p>
              </Col>
              <Col>
                <img src="https://source.unsplash.com/random" alt="" />
                <p>FriendName</p>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <img src="https://source.unsplash.com/random" alt="" />
                <p>FriendName</p>
              </Col>
              <Col>
                <img src="https://source.unsplash.com/random" alt="" />
                <p>FriendName</p>
              </Col>
              <Col>
                <img src="https://source.unsplash.com/random" alt="" />
                <p>FriendName</p>
              </Col>
            </Row>
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

export default connect(mapStateToProps)(ProfilePagePost);
