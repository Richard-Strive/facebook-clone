import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftSideBar from "../subcomponents/LeftSideBar/LeftSideBar";
import RightSideBar from "../subcomponents/RightSideBar/RightSideBar";
import CreatePost from "../subcomponents/CreatePost/CreatePost";
import DisplayedPost from "../subcomponents/DisplayedPost/DisplayedPost";
import "./MainPage.css";
// const url = "http://localhost:5000";

// const io = require("socket.io-client");
// const url = "https://intense-thicket-20816.herokuapp.com/";
// const connOpt = {
//   transports: ["websocket", "polling"],
// };
// const socket = io(url, { autoConnect: false }, connOpt);

/* 
function for emiting my id and updated to socket id of my self on any connection 
socket.connect();
    socket.emit("my-id", req.user.id);
*/

function MainPage() {
  return (
    <Row className="main_conteiner">
      <Col className="side_bar_left d-none d-sm-none d-md-block">
        <LeftSideBar />
      </Col>
      <Col className="main_content_container" md={6}>
        <div className="content">
          <div className="content_header">
            <CreatePost />
          </div>
          <div className="content_body">
            <DisplayedPost />
            <DisplayedPost />
            <DisplayedPost />
          </div>
        </div>
      </Col>
      <Col className="side_bar_right d-none d-sm-none d-md-block">
        <RightSideBar />
      </Col>
    </Row>
  );
}

export default MainPage;
