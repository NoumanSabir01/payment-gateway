import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FormFile = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    navigate("/PersonalizedAccountForm");
  };
  return (
    <div style={{ padding: "20px" }}>
      <div className="userid_form">
        <label>CPR NUMMER</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="DDMMÅÅXXXX"
          style={{ fontWeight: "600" }}
        />
      </div>
      <div className="btn_cont">
        <button className="button" onClick={handleButtonClick}>
          <span className="button-text">FORTSÆT</span>
          <FaArrowRight className="button-icon" />
        </button>
      </div>
      <Form.Check
        style={{ marginTop: "10px", marginBottom: "10px" }}
        type="checkbox"
        id="Husk mig (i 1 år)"
        label="Husk mig (i 1 år)"
      />
    </div>
  );
};

export default FormFile;
