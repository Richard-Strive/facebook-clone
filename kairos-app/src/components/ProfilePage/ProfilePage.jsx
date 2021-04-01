import React, { useState, useEffect } from "react";

import "./ProfilePage.css";
import { MdPhotoCamera } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsFillEyeFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BsFillCaretDownFill } from "react-icons/bs";
import Modal from "../subcomponents/Modal/Modal";

import ProfilePagePost from "../subcomponents/ProfilePagePost/ProfilePagePost";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispacth) => ({
  setUserData: (data) => dispacth({ type: "USER", payload: data }),
});

function ProfilePage({ setUserData }) {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [openBg, setOpenBg] = useState(false);
  const [user, setUser] = useState(null);

  console.log(user);

  const token = localStorage.getItem("accessToken");

  const getUser = async () => {
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
        setLoading(false);
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
          <img src={loading ? " " : user.bgImage} alt="background_image" />
          <img src={loading ? " " : user.pfImage} alt="profile_image" />
          <Modal open={open} setOpen={setOpen} isProfile={true} />
          <MdPhotoCamera
            className="profile_page_photo_icon"
            onClick={() => setOpen(!open)}
          />
          <div className="background_image_edit_icon">
            <Modal openBg={openBg} setOpenBg={setOpenBg} isBackground={true} />
            <MdPhotoCamera
              className="profile_page_photo_icon ml-1"
              onClick={() => setOpenBg(!openBg)}
            />
            Edit Cover Photo
          </div>
        </div>
        <h1 className="mt-3">{loading ? "...loading" : user.firstName}</h1>
        <p>Add bio</p>
        <hr className="anti_flex_hr" />
        <div className="profile_page_header_bottom">
          <div className="profile_page_header_bottom_tabs">
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
