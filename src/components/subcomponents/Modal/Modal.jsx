import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import Webcam from "react-webcam";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../../tools";
import "./Modal.css";

function Modal({
  open,
  openBg,
  setOpenBg,
  setOpen,
  isVerify,
  isRegister,
  setLoading,
  setUserData,
  isPost,
  isProfile,
  isBackground,
  socket,
}) {
  const WebCamRef = useRef(null);

  const [loader, setLoader] = useState(false);
  const [userId, setUserId] = useState("");
  const [file, setFile] = useState(null);

  const history = useHistory();

  const token = localStorage.getItem("accessToken");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", file);

    let url = "";

    if (isProfile) {
      url = process.env.REACT_APP_ADD_PROFILE_IMAGE;
    }
    if (isBackground) {
      url = process.env.REACT_APP_ADD_BACKGROUND_IMAGE;
    }

    console.log("the url-->", url);

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: token,
        },
        body: data,
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        console.log(data);
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

  const getUserTokens = async () => {
    setLoader(true);
    try {
      const response = await fetch(process.env.REACT_APP_LOGIN_URL, {
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
      const response = await fetch(process.env.REACT_APP_SET_USER_FACE_ID, {
        method: "PUT",
        headers: new Headers({
          Authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          faceId: picture,
        }),
      });
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
    setOpen(!open);

    try {
      const url =
        process.env.REACT_APP_KAIROS_BASE_URL +
        `${isVerify ? "recognize" : "enroll"}`;
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
        console.log("this is dat---->", data);

        if (data.Errors) {
          alert(`Error ${data.Errors[0].Message}`);
        }

        if (isVerify) {
          if (data.images[0].transaction.status !== "success") {
            alert("No match");
            setLoading(false);
            setTimeout(() => {
              history.push("/home/register");
            }, 300);
          }

          if (data.images[0].transaction.status == "success") {
            setLoading(false);
            setUserId(data.images[0].transaction.subject_id);
            console.log(data.images[0].transaction.subject_id);

            getUserTokens();
            setTimeout(() => {
              const token = localStorage.getItem("accessToken");
              getUser(token, setLoader, dispatch);
              history.push("/home/main");
              socket.connect();
            }, 400);
          }
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
        style={{ display: `${open || openBg ? "flex" : "none"}` }}
      >
        <span
          className="close"
          onClick={() =>
            `${isBackground ? setOpenBg(!openBg) : setOpen(!open)}`
          }
        >
          &times;
        </span>
        {isVerify || isRegister ? (
          <Webcam
            ref={WebCamRef}
            className="modal_web"
            screenshotFormat="image/png"
            style={{
              border: `3px solid ${loader ? "orange" : "green"}`,
            }}
            onClick={() => snap()}
          />
        ) : (
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="file_upload_input">
              <Form.File
                id="exampleFormControlFile1"
                label="Image input"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button
                type="submit"
                onClick={() =>
                  `${isBackground ? setOpenBg(!openBg) : setOpen(!open)}`
                }
              >
                Sumbit
              </button>
            </Form.Group>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Modal;
