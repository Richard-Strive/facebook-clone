import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import Webcam from "react-webcam";

function Login() {
  const [loader, setLoader] = useState(false);
  const WebCamRef = useRef(null);

  // Need to shift this in a tool.js
  const verify = async () => {
    try {
      const picture = WebCamRef.current.getScreenshot();
      console.log(picture);
      setLoader(true);

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
        setLoader(false);
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
          border: `3px solid ${loader ? "orange" : "green"}`,
          borderRadius: "20px",
        }}
      />
      <div>
        <button onClick={() => verify()}>Login with face recognition</button>
      </div>
    </div>
  );
}

export default Login;
