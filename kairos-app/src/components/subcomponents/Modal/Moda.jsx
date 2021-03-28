import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import "./Modal.css";

function Modal({ open, setOpen }) {
  const WebCamRef = useRef(null);
  const [loader, setLoader] = useState(false);

  const snap = () => {
    const picure = WebCamRef.current.getScreenshot();
    console.log(picure);
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

export default Modal;
