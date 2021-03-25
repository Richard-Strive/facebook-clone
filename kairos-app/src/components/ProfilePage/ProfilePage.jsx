import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./ProfilePage.css";
import { MdPhotoCamera } from "react-icons/md";

function ProfilePage() {
  const [value, setValue] = useState(2);

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
            {" "}
            <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Posts" />
                <Tab label="About" />
              </Tabs>
            </Paper>
          </div>
        </div>
      </div>
      Hello i'm the profile
    </div>
  );
}

export default ProfilePage;
