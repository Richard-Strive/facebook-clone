import React, { useState } from "react";
import "./RegistrationPage.css";
import { Form, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  // https://intense-thicket-20816.herokuapp.com/user/registration

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    try {
      const response = await fetch("http://localhost:5000/user/registration", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName: surName,
          email,
          password,
        }),
      });
      if (response.ok) {
        console.log(await response.json());

        setTimeout(() => {
          setFirstName("");
          setSurName("");
          setPassword("");
          setEmail("");
          history.push("/login");
        }, 200);
      }
    } catch (err) {
      console.log("there is an error", err);
    }
  };

  return (
    <div className="registration_page_container">
      <div className="registration_page_header">
        <div className="registration_page_facebook_logo">
          <h2>
            <b>facebook</b>
          </h2>
        </div>
        <div className="registration_page_login_btn">
          <button onClick={() => history.push("/login")}>Login In</button>
        </div>
      </div>
      <div className="registration_page_content_container">
        <div className="registration_page_content">
          <h2>
            <b>Create a new account</b>
          </h2>
          <h4>It's quick and easy</h4>
          <Form className="mt-3" onSubmit={(e) => handleSubmit(e)}>
            <Form.Row>
              <Col>
                <Form.Control
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Surname"
                  value={surName}
                  onChange={(e) => setSurName(e.target.value)}
                />
              </Col>
            </Form.Row>

            <Form.Group className="mt-2 mb-2">
              <Form.Control
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Control
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <small>
              By clicking Sign Up, you agree to our Terms. Learn how we collect,
              use and share your data in our Data Policy and how we use cookies
              and similar technology in our Cookie Policy. You may receive SMS
              notifications from us and can opt out at any time.
            </small>

            <button
              type="submit"
              className={
                firstName && surName && email && password
                  ? "sign_up_btn"
                  : "sign_up_btn_disabled"
              }
              disabled={
                firstName && surName && email && password ? false : true
              }
            >
              Sign Up
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
