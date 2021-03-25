import React, { useState } from "react";
import "./ProfilePage.css";

import ProfilePagePost from "../subcomponents/ProfilePagePost/ProfilePagePost";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { MdPhotoCamera } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsFillEyeFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BsFillCaretDownFill } from "react-icons/bs";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const styles = {
  root: {
    height: 40,
    boxShadow: "none",
  },
};

function ProfilePage(props) {
  const [value, setValue] = useState(2);
  const { classes } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="profile_page_container">
      <div className="profile_page_header">
        <div className="profile_page_background_img">
          <img
            src="https://source.unsplash.com/random"
            alt="background_image"
          />
          <img
            src="https://source.unsplash.com/random"
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

export default withStyles(styles)(ProfilePage);
