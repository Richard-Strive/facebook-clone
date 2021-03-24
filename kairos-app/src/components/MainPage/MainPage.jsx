import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftSideBar from "../subcomponents/LeftSideBar/LeftSideBar";
import RightSideBar from "../subcomponents/RightSideBar/RightSideBar";
import CreatePost from "../subcomponents/CreatePost/CreatePost";
import "./MainPage.css";

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
          <div className="content_body"></div>
        </div>
      </Col>
      <Col className="side_bar_right d-none d-sm-none d-md-block">
        <RightSideBar />
      </Col>
    </Row>
  );
}

export default MainPage;
