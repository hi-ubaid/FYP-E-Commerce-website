import React from 'react';
import { useNavigate } from "react-router-dom";

const BuyButton = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <stripe-buy-button
          buy-button-id="buy_btn_1P7aztLGq0SGt9NSiwJWvthk"
          publishable-key="pk_test_51P6RYuLGq0SGt9NSNVy9LsE5B8JavKERw7Poq8cxEA2y7TjgBoz3eGpxFhshkiiIWmEPundNhnBj0cABdmzA7Pe500uN8PN78i"
        >
      </stripe-buy-button>
      </div>
      <div>
      </div>
    </div>
  );
};

export default BuyButton;
