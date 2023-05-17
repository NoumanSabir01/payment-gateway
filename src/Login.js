import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import MitLogo from "./images/mit.png";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    if (inputValue) {
      navigate("/PersonalizedAccountForm");
    }
  };
  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <p>Consectetuer adipiscing elit aenean commodo</p>
      <div className="login_form">
        <div className="login_form_logo">
          <div>Log on at MitID.dk</div>
          <div>
            <img src={MitLogo} alt="Logo" width="100px" height="50px" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="userid_form">
          <label>User ID</label>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
          />
        </div>
        <div className="btn_cont">
          <button
            className="button"
            disabled={!inputValue}
            onClick={handleButtonClick}
          >
            <span className="button-text">Continue</span>
            <FaArrowRight className="button-icon" />
          </button>
        </div>
        <div className="lost_user_id">
          <Link to="/lost-user-id" className="link">
            <div>
              <AiOutlineInfoCircle style={{ fontSize: "18px" }} />
            </div>
            <div
              style={{
                marginLeft: "5px",
                fontWeight: "600",
                marginBottom: "-3px",
              }}
            >
              Lost user ID?
            </div>
          </Link>
        </div>
        <Form.Check
          style={{ marginTop: "100px", marginBottom: "10px" }}
          type="checkbox"
          id="Remember me at MitID.dk"
          label="Remember me at MitID.dk"
        />

        <div className="divider"></div>
        <button className="cancel_btn">Cancel</button>
        <button className="cancel_btn">Help</button>
      </div>
    </div>
  );
};

export default Login;
