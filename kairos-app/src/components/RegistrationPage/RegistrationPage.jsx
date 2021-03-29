import React from "react";
import "./RegistrationPage.css";
import { Form, Col, Row } from "react-bootstrap";
function Registration() {
  return (
    <div className="registration_page_container">
      <div className="registration_page_header">
        <div className="registration_page_facebook_logo">
          <h2>
            <b>facebook</b>
          </h2>
        </div>
        <div className="registration_page_login_btn">
          <button>Login In</button>
        </div>
      </div>
      <div className="registration_page_content_container">
        <div className="registration_page_content">
          <h2>
            <b>Create a new account</b>
          </h2>
          <h4>It's quick and easy</h4>
          <Form className="mt-3">
            <Form.Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Surname" />
              </Col>
            </Form.Row>

            <Form.Group className="mt-2 mb-2">
              <Form.Control placeholder="Email address" />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Control placeholder="New password" />
            </Form.Group>
          </Form>
          <small>
            By clicking Sign Up, you agree to our Terms. Learn how we collect,
            use and share your data in our Data Policy and how we use cookies
            and similar technology in our Cookie Policy. You may receive SMS
            notifications from us and can opt out at any time.
          </small>

          <button className="sign_up_btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
