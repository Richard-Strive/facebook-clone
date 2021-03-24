import React from "react";
import "./RightSideBar.css";

function RightSideBar() {
  return (
    <div className="right_container ml-1">
      Sponsored
      <div className="sponsor">
        <div className="sponsor_image">
          <img src="https://strive.school/favicon.ico" alt="sponsor_logo" />
        </div>
        <p className="ml-2 mt-3">
          <b>Strive School</b>
          <div>
            <small>strive.school</small>
          </div>
        </p>
      </div>
      <div className="sponsor mt-3">
        <div className="sponsor_image">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41ecZ%2BApTRL._SY445_.jpg"
            alt="Mr.Bean"
          />
        </div>
        <p className="ml-2 mt-3">
          <b>Mr. Bean</b>
          <div>
            <small>mrlovalova.bean</small>
          </div>
        </p>
      </div>
      <hr />
      Contacts
      <div className="right pl-2">
        <div className="profile_pic_icon ">
          <img src="https://source.unsplash.com/random" alt="profile_pic" />
        </div>
        <p className="ml-2 mt-3">
          <b>FriendName</b>
        </p>
      </div>
      <div className="right pl-2">
        <div className="profile_pic_icon ">
          <img src="https://source.unsplash.com/random" alt="profile_pic" />
        </div>
        <p className="ml-2 mt-3">
          <b>FriendName</b>
        </p>
      </div>
      <div className="right pl-2">
        <div className="profile_pic_icon">
          <img src="https://source.unsplash.com/random" alt="profile_pic" />
        </div>
        <p className="ml-2 mt-3">
          <b>FriendName</b>
        </p>
      </div>
    </div>
  );
}

export default RightSideBar;
