import React from "react";
import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

function Login() {
  const WebCamRef = useRef(null);

  const verify = async () => {
    try {
      const picture = WebCamRef.current.getScreenshot();
      console.log(picture);

      const response = await fetch("https://api.kairos.com/verify", {
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

  return (
    <div className="login_container">
      <Webcam
        ref={WebCamRef}
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
        <button onClick={() => verify()}>Login with face recognition</button>
      </div>
    </div>
  );
}

export default Login;
