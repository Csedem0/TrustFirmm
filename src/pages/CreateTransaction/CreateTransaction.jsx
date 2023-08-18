import React from 'react';
import styles from '../CreateTransaction/CreateTransaction.css';
import { Link } from 'react-router-dom';

const CreateTransaction = () => {
  return (
    <div className="create-transaction-container">
      <header className="create-transaction">Create Transaction!</header>
      <section className="create-transaction-section">
        <div className="create-transaction-section-div">
          <div className="create-transaction-section-button1">
            Continue with Jiji
          </div>
          <div className="create-transaction-section-button2">
            Continue with Konga
          </div>
          <div className="create-transaction-section-button3">
            Continue with Jumia
          </div>
        </div>
        <img className="create-transaction-img" alt="" src="/group-16.svg" />
        <div>
          <Link
            to="/payment-description"
            className="create-transaction-section-button4"
          >
            Trust Firm Transfer
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CreateTransaction;
