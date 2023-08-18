import React from 'react';
import styles from '../../pages/VerifyEmail/VerifyEmail.css';

const VerifyEmail = () => {
  return (
    <div className="verifyemail-container">
      <section className="verifyemail-section">
        <img className="verifyemail-img" alt="" src="/illustration3.svg" />
        <div className="verifyemail-verifyemail">Verify Your Email</div>
        <div className="verifyemail-div">Please enter 4 digit code sent to</div>
        <a className="verifyemail-a" href="#">
          xyz@gmail.com
        </a>
        <article className="verifyemail-article">
          <input className="verifyemail-input" />
        </article>
        <footer className="verifyemail-footer">
          <a className="verifyemail-footer-a" href="#">
            Resend Code
          </a>
          <div className="verifyemail-verifycode">Verify Code</div>
        </footer>
      </section>
    </div>
  );
};

export default VerifyEmail;
