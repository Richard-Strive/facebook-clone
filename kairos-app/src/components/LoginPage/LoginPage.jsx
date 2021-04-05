import React, { useState, useEffect } from "react";
import Modal from "../subcomponents/Modal/Modal";
import { Form, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./LoginPage.css";

function LoginPage({ socket }) {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  // https://intense-thicket-20816.herokuapp.com/user/registration

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        localStorage.setItem("accessToken", data.token);

        setTimeout(() => {
          setLoading(false);
          setPassword("");
          setEmail("");
          history.push("/home/me");

          socket.connect();
        }, 900);
      } else {
        setIsRegistered(!isRegistered);
        setLoading(false);
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

  return (
    <div className="login_page_container">
      <Modal
        open={open}
        setOpen={setOpen}
        isVerify={true}
        setLoading={setLoading}
        socket={socket}
      />
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
        <div>
          <Form
            className="login_page_content"
            onSubmit={(e) => handleSubmit(e)}
          >
            {isRegistered && <p className="pt-1">Wrong credentials</p>}
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login_page_email_input"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login_page_password_input"
              />
            </Form.Group>

            <button
              type="submit"
              className={email && password ? "" : "disbled_button"}
              disabled={email && password ? false : true}
            >
              {loading ? (
                <Spinner
                  className="mb-2"
                  animation="grow"
                  variant="primary"
                  size="sm"
                />
              ) : (
                "Log In"
              )}
            </button>

            <button onClick={() => setOpen(!open)}>
              Log In With Face ID
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <hr className="login_hr" />
            <button onClick={() => history.push("/register")}>
              Create New Account
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
