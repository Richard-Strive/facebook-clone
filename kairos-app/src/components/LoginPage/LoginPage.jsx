import React, { useState, useEffect } from "react";
import Modal from "../subcomponents/Modal/Modal";
import { Form } from "react-bootstrap";
import "./LoginPage.css";

function LoginPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="login_page_container">
      <Modal open={open} setOpen={setOpen} />
      <div className="login_page_logo_container">
        <div className="login_page_logo">
          <h2>
            <b>facebook</b>
          </h2>
          <h4>
            Facebook helps you connect and share with the people in your life.
          </h4>
        </div>
      </div>
      <div className="login_page_content_container">
        <div className="login_page_content">
          <Form>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email address or phone number"
                className="login_page_email_input"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                className="login_page_password_input"
              />
            </Form.Group>
          </Form>
          <button>Log In</button>
          <button onClick={() => setOpen(!open)}>
            Log In With Face ID
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <hr className="login_hr" />
          <button>Create New Account</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
