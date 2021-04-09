import React, { useState, useEffect } from "react";
import "./ProfilePage.css";

import { MdPhotoCamera } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsFillEyeFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BsFillCaretDownFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { getUser } from "../tools";

import Modal from "../subcomponents/Modal/Modal";
import ProfilePagePost from "../subcomponents/ProfilePagePost/ProfilePagePost";

import { useSelector, useDispatch } from "react-redux";

function ProfilePage({ socket }) {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [openBg, setOpenBg] = useState(false);

  const user = useSelector((state) => state.user);
  const selUser = useSelector((state) => state.selUser);
  const isSelectedUser = useSelector((state) => state.isSelectedUser);

  const dispatch = useDispatch();

  const selUserId = selUser.user_obj._id;

  const token = localStorage.getItem("accessToken");

  const sendFriendReq = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_SEND_FRIEND_REQUEST_URL + selUserId,
        {
          method: "POST",
          headers: new Headers({
            Authorization: token,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setLoading(false);
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

  useEffect(() => {
    setLoading(false);

    socket.on("list", (data) => {
      console.log(data);
      dispatch({ type: "SET_CONNECTED_USERS", payload: data });
    });

    console.log(user.user_obj._id);
  }, []);

  return (
    <div className="profile_page_container">
      <div className="profile_page_header">
        <div className="profile_page_background_img">
          <img
            src={
              !loading && isSelectedUser
                ? selUser.user_obj.bgImage
                : user.user_obj.bgImage
            }
            alt="background_image"
          />

          <div className="profile_page_pic_container">
            <img
              src={
                !loading && isSelectedUser
                  ? selUser.user_obj.pfImage
                  : user.user_obj.pfImage
              }
              alt="profile_image"
            />
            <div
              className="profile_page_photo_icon"
              style={{ display: `${isSelectedUser ? "none" : "block"}` }}
            >
              <MdPhotoCamera
                className="ml-2 mt-1"
                onClick={() => setOpen(!open)}
              />

              <Modal open={open} setOpen={setOpen} isProfile={true} />
            </div>
          </div>

          <div style={{ display: `${isSelectedUser ? "none" : "block"}` }}>
            <div className="background_image_edit_icon">
              <Modal
                openBg={openBg}
                setOpenBg={setOpenBg}
                isBackground={true}
              />
              <MdPhotoCamera
                className="ml-2  mr-1"
                onClick={() => setOpenBg(!openBg)}
              />
              {/* <MdPhotoCamera
                className="profile_page_photo_icon ml-1"
                onClick={() => setOpenBg(!openBg)}
              /> */}
              Edit Cover Photo
            </div>
          </div>
        </div>

        <h1 className="mt-3">
          {loading
            ? "Wait a second..."
            : `${
                isSelectedUser
                  ? selUser.user_obj.firstName
                  : user.user_obj.firstName
              }`}
        </h1>
        <p
          className="add_bio"
          style={{ display: `${isSelectedUser ? "none" : "block"}` }}
        >
          Add bio
        </p>
        <hr className="anti_flex_hr" />
        <div className="profile_page_header_bottom">
          <div className="profile_page_header_bottom_tabs">
            <div className="profile_page_header_bottom_more_dropdown pl-3 pr-3">
              Posts
            </div>
            <div className="profile_page_header_bottom_more_dropdown pl-3 pr-3">
              About
            </div>
            <div className="profile_page_header_bottom_more_dropdown pl-3 pr-3">
              Friends
            </div>
            <div className="profile_page_header_bottom_more_dropdown pl-3 pr-3">
              Photo
            </div>
            <div className="profile_page_header_bottom_more_dropdown pl-3 pr-3">
              Video
            </div>
            <div className="profile_page_header_bottom_more_dropdown pl-3 pr-3">
              More
              <BsFillCaretDownFill />
            </div>
          </div>

          {isSelectedUser ? (
            <button className="friend_req_btn" onClick={() => sendFriendReq()}>
              <HiUserAdd className="friend_req_btn_icon" />
              Add Friend
            </button>
          ) : (
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
          )}
        </div>
      </div>
      <div className="profile_component_container">
        <ProfilePagePost isSelectedUser={isSelectedUser} />
      </div>
    </div>
  );
}

export default ProfilePage;
