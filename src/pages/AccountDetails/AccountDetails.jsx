import React from 'react';
import styles from '../AccountDetails/AccountDetails.css';
import { Link } from 'react-router-dom';

const AcountDetails = () => {
  return (
    <div className="accountdetails-container">
      <header className="accountdetails-header">
        <div className="accountdetails-accountdetails">Account Details</div>
      </header>
      <section className="accountdetails-section">
        <form className="accountdetails-input-form">
          <input
            className="accountdetails-input"
            placeholder="Transaction ID"
          />
          <input className="accountdetails-input" placeholder="Fullname" />
          <input className="accountdetails-input" placeholder="Bank Account" />
          <input
            className="accountdetails-input"
            placeholder="Account Number"
          />
          <input
            className="accountdetails-input"
            placeholder="+234 000 0000 000"
          />
        </form>
        <Link to="/confirmation" className="accountdetails-continue">
          Continue
        </Link>
      </section>
    </div>
  );
};

export default AcountDetails;
