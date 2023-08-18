import React from 'react';
import styles from '../../pages/Confirmation/Confirmation.css';
import confirmation from '../../img/goodmark.jpg';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <header className="confirmation-header"></header>
      <section className="confirmation-section">
        <img />
        <img className="confirmation-img" alt="" src={confirmation} />
        <div className="transaction-submitted">Transaction Submitted</div>
        <Link to="/dashboard" className="confirmation-button">
          Back Home
        </Link>
      </section>
    </div>
  );
};

export default Confirmation;
