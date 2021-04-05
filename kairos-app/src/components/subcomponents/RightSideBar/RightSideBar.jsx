import React from "react";
import { useSelector } from "react-redux";
import "./RightSideBar.css";

function RightSideBar() {
  const user = useSelector((state) => state.user);
  return (
    <div className="right_container ml-1">
      <h5>Sponsored</h5>
      <div className="sponsor">
        <div className="sponsor_image">
          <img src="https://strive.school/favicon.ico" alt="sponsor_logo" />
        </div>
        <h6 className="ml-2 mt-3">
          Strive School
          <div>
            <small>strive.school</small>
          </div>
        </h6>
      </div>
      <div className="sponsor mt-3">
        <div className="sponsor_image">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41ecZ%2BApTRL._SY445_.jpg"
            alt="Mr.Bean"
          />
        </div>
        <h6 className="ml-2 mt-3">
          Mr. Bean
          <div>
            <small>mrlovalova.bean</small>
          </div>
        </h6>
      </div>
      <hr />
      <h5>Contacts</h5>
      {user.user_obj !== " "
        ? user.user_obj.friends.map((friend, index) => (
            <div className="right pl-2" key={index}>
              <div className="profile_pic_icon ">
                <img src={friend.pfImage} alt="profile_pic" />
              </div>
              <h6 className="ml-2 mt-3">{friend.firstName}</h6>
            </div>
          ))
        : ""}
    </div>
  );
}

export default RightSideBar;
