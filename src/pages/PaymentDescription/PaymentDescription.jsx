import React from 'react';
import styles from '../PaymentDescription/PaymentDescription.css';
import { Link } from 'react-router-dom';

const PaymentDescription = () => {
  return (
    <div className="paymentdescription-container">
      <header className="paymentdescription-header">
        <div className="paymentdescription-header-div">Safe Transfer</div>
      </header>
      <section className="paymentdescription-section">
        <div className="paymentdescription-section-div">
          Payment Description
        </div>
        <p className="paymentdescription-section-p"></p>
        <input
          className="paymentdescription-section-input"
          placeholder="Enter your payment description"
        />
        <Link to="/confirmation" className="paymentdescription-section-button">
          Continue
        </Link>
      </section>
    </div>
  );
};

export default PaymentDescription;
