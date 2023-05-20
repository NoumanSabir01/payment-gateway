import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PersonalizedAccountForm.css";
import Mobilepay from "./images/mobilepay.png";
import "./Payment.css";
import Logo from "./images/logo.png";
import Footer from "./Footer/Footer";

const PersonalizedAccountForm = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Payment");
  };
  return (
    <div className="PersonalizedAccountForm">
      <img src={Mobilepay} />
      <h1>Bekræft din identitet</h1>
      <p>
        For at fortsætte dit brug af MobilePay, har vi brug for dine oplysninger
        nu, for at bekræfte herredømmet over din konto.
      </p>
      <div>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">
                Telefonnummer
              </label>
            </div>
            <input
              type="number"
              className="PersonalizedAccountForm_input"
              placeholder="+45"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">
                Fulde navn
              </label>
            </div>
            <input type="text" className="PersonalizedAccountForm_input" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">Adresse</label>
            </div>
            <input type="text" className="PersonalizedAccountForm_input" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div>
              <label className="PersonalizedAccountForm_label">
                Postnummer
              </label>
            </div>
            <input
              type="number"
              className="PersonalizedAccountForm_input"
              max={4}
              placeholder="XXXX"
            />
          </Col>
        </Row>
      </div>
      <div className="PersonalizedAccountForm_btn">
        <button type="submit" onClick={handleButtonClick}>
          Indsend
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default PersonalizedAccountForm;
