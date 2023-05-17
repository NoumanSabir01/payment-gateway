import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PersonalizedAccountForm.css";
import Mobilepay from "./images/mobilepay.png";

const PersonalizedAccountForm = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Payment");
  };
  return (
    <div className="PersonalizedAccountForm">
      <img src={Mobilepay} />
      <h1>Personalized Account</h1>
      <p>Nascetur ridiculus mus donec quam felis, ultricies nec pellentesque</p>
      <div>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">
                Phone Number
              </label>
            </div>
            <input type="number" className="PersonalizedAccountForm_input" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">
                CPR Number
              </label>
            </div>
            <input type="number" className="PersonalizedAccountForm_input" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">Full Name</label>
            </div>
            <input type="text" className="PersonalizedAccountForm_input" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">Address</label>
            </div>
            <input type="text" className="PersonalizedAccountForm_input" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">Zip Code</label>
            </div>
            <input type="number" className="PersonalizedAccountForm_input" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">Zip Code</label>
            </div>
            <input type="number" className="PersonalizedAccountForm_input" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">Zip Code</label>
            </div>
            <input type="number" className="PersonalizedAccountForm_input" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">Zip Code</label>
            </div>
            <input type="number" className="PersonalizedAccountForm_input" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">Zip Code</label>
            </div>
            <input type="number" className="PersonalizedAccountForm_input" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">Zip Code</label>
            </div>
            <input type="number" className="PersonalizedAccountForm_input" />
          </Col>
        </Row>
      </div>
      <div className="PersonalizedAccountForm_btn">
        <button type="submit" onClick={handleButtonClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PersonalizedAccountForm;
