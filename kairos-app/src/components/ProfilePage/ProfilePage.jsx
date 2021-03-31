import React, { useState, useEffect, useRef } from "react";
import "./ProfilePage.css";
import { MdPhotoCamera } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsFillEyeFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BsFillCaretDownFill } from "react-icons/bs";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import clsx from "clsx";
import ProfilePagePost from "../subcomponents/ProfilePagePost/ProfilePagePost";
import { connect } from "react-redux";
import Webcam from "react-webcam";

const styles = {
  root: {
    height: 40,
    boxShadow: "none",
  },
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispacth) => ({
  setUserData: (data) => dispacth({ type: "USER", payload: data }),
});

function ProfilePage({ classes, setUserData }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const token = localStorage.getItem("accessToken");

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/user/me", {
        method: "GET",
        headers: new Headers({
          Authorization: token,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setUser(data);
        console.log(data);
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile_page_container">
      <div className="profile_page_header">
        <div className="profile_page_background_img">
          <img
            src="https://source.unsplash.com/random"
            alt="background_image"
          />
          <img
            src="https://source.unsplash.com/1600x900/?face"
            alt="background_image"
          />
          <MdPhotoCamera className="profile_page_photo_icon" />
          <div className="background_image_edit_icon">
            <MdPhotoCamera className="profile_page_photo_icon ml-1" />
            Edit Cover Photo
          </div>
        </div>
        <h1 className="mt-3">Username</h1>
        <p>Add bio</p>
        <hr className="anti_flex_hr" />
        <div className="profile_page_header_bottom">
          <div className="profile_page_header_bottom_tabs">
            <Paper className={clsx(classes.root)} square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="tabs"
              >
                <Tab label="Posts" />
                <Tab label="About" />
                <Tab label="Friends" />
              </Tabs>
            </Paper>
            <div className="profile_page_header_bottom_more_dropdown pl-3 pr-3">
              more
              <BsFillCaretDownFill />
            </div>
          </div>
          <div className="profile_page_header_bottom_left">
            <div className="background_image_edit_icon">
              <FaPen className="profile_page_pen_icon ml-4 mr-2" />
              Edit Profile
            </div>
            <div className="profile_eye_icon">
              <BsFillEyeFill className="eye_icon" />
            </div>
            <div className="profile_search_icon">
              <GoSearch className="search_icon" />
            </div>
            <div className="profile_dots_icon">
              <HiDotsHorizontal className="dots_icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="profile_component_container">
        <ProfilePagePost />
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProfilePage));
