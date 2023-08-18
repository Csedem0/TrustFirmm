import React from 'react';
import styles from '../ForgetPassword/ForgetPassword.css';

const ForgetPassword = () => {
  return (
    <div className="forgetpassword-container">
      <section className="forgetpassword-section">
        <img className="forgetpassword-img" alt="" src="/illustration2.svg" />
        <article className="forgetpassword-article">
          <div className="forgetpassword-forgetpage">Forget Password</div>
          <p className="forgetpassword-paragraph">
            Please enter your email address to
          </p>
          <p className="forgetpassword-paragraph">
            recieve a{' '}
            <a className="forgetpassword-link" href="#">
              verification code.
            </a>
          </p>
        </article>
        <div className="forgetpassword-lastelement">
          <input className="forgetpassword-input" placeholder="xyz@gmail.com" />
          <div className="forgetpassword-button">Send Email</div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPassword;
