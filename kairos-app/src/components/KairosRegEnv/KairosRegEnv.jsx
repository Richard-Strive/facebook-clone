import React from "react";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Webcam from "react-webcam";

function Registration() {
  const webcamRef = useRef(null);

  const snapPicture = async () => {
    const picture = webcamRef.current.getScreenshot();
    console.log(picture);

    try {
      const response = await fetch("https://api.kairos.com/enroll", {
        method: "POST",
        headers: new Headers({
          app_id: process.env.REACT_APP_APP_ID,
          app_key: process.env.REACT_APP_APP_KEY,
        }),
        body: JSON.stringify({
          gallery_name: "User",
          image: picture,
          subject_id: "DevTest",
        }),
      });
      if (response.ok) {
        console.log(await response.json());
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };
  const resetGallery = async () => {
    try {
      const response = await fetch("https://api.kairos.com/gallery/remove", {
        method: "POST",
        headers: new Headers({
          app_id: process.env.REACT_APP_APP_ID,
          app_key: process.env.REACT_APP_APP_KEY,
        }),
        body: JSON.stringify({
          gallery_name: "User",
        }),
      });
      if (response.ok) {
        console.log(await response.json());
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

  return (
    <div className="registration_container">
      {/* Well i'm the registration */}
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/png"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "centr",
          width: 640,
          height: 480,
        }}
      />
      <div>
        <button onClick={() => snapPicture()}>
          Click here to snap a picture
        </button>
        <button onClick={() => resetGallery()}>
          Click here to reset gallery
        </button>
      </div>
    </div>
  );
}

export default Registration;
