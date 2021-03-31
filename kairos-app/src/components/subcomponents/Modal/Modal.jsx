import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Modal.css";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispacth) => ({
  setUserData: (data) => dispacth({ type: "USER", payload: data }),
});

function Modal({ open, setOpen, isVerify, user, setLoading, setUserData }) {
  const WebCamRef = useRef(null);
  const [loader, setLoader] = useState(false);
  const [userId, setUserId] = useState("");

  const history = useHistory();

  const token = localStorage.getItem("accessToken");

  const getUserTokens = async () => {
    setLoader(true);
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("accessToken", data.token);
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

  const setFaceId = async (picture) => {
    try {
      const response = await fetch(
        "http://localhost:5000/user/me/add-face-id-image",
        {
          method: "PUT",
          headers: new Headers({
            Authorization: token,
            Accept: "application/json",
            "Content-Type": "application/json",
          }),
          body: JSON.stringify({
            faceId: picture,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        console.log(data);
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

  const snap = async () => {
    const picture = WebCamRef.current.getScreenshot();
    const faceIdPic = picture.slice(0, 14);

    try {
      const url = `https://api.kairos.com/${isVerify ? "recognize" : "enroll"}`;
      console.log(url);

      if (!isVerify) {
        setFaceId(faceIdPic);
      }

      const response = await fetch(url, {
        method: "POST",
        headers: new Headers({
          app_id: process.env.REACT_APP_APP_ID,
          app_key: process.env.REACT_APP_APP_KEY,
        }),
        body: JSON.stringify({
          gallery_name: "User",
          image: picture,
          subject_id: `${isVerify ? null : user.user_obj._id}`,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        if (data.Errors) {
          alert(`Error ${data.Errors[0].Message}`);
        }

        if (isVerify) {
          getUserTokens();
          setLoading(false);
          setUserId(data.images[0].transaction.subject_id);

          setTimeout(() => {
            history.push("/home/me");
          }, 300);
        }
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

  return (
    <div>
      <div
        className="modal"
        style={{ display: `${open ? "flex" : "none"}` }}
        onClick={() => setOpen(!open)}
      >
        <span className="close" onClick={() => setOpen(!open)}>
          &times;
        </span>
        <Webcam
          ref={WebCamRef}
          className="modal_web"
          screenshotFormat="image/png"
          style={{
            border: `3px solid ${loader ? "orange" : "green"}`,
          }}
          onClick={() => snap()}
        />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
