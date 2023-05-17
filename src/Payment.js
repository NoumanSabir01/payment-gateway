import React, { useState } from "react";
import Cards from "react-credit-cards";
import "./Payment.css";
import Mobilepay from "./images/mobilepay.png";

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

    switch (name) {
      case "cvc":
        if (value.length <= 3) {
          setCvc(value);
        }
        break;
      case "expiry":
        setExpiry(value);
        break;
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="payment_main">
      <img src={Mobilepay} />
      <h1>Betaling</h1>
      <p>Pulamcorper ultricies nisi am eget dui hasellus</p>

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
              type="tel"
              name="number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="payment_card">
            <div>
              <label>Udløbsdato</label>
            </div>
            <input
              type="number"
              name="expiry"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="payment_card">
            <div>
              <label>Pin</label>
            </div>
            <input
              type="number"
              name="cvc"
              min={0}
              max={990}
              value={cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
      </div>
      <div className="PersonalizedAccountForm_btn">
        <button type="submit">Indsend</button>
      </div>
    </div>
  );
};

export default Payment;
