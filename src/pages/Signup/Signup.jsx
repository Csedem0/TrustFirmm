import React from 'react';
import styles from '../Signup/Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-container">
      <header className="signup-header">
        <div className="signup-signup">TrustFirm</div>
      </header>
      <section className="signup-section">
        <form className="signup-form">
          <div className="signup-form1">
            <div>
              <div className="signup-form1-divs">Name</div>
              <input className="placeholder" />
            </div>

            <div>
              <div className="signup-form1-divs">Email</div>
              <input className="placeholder" />
            </div>

            <div>
              <div className="signup-form1-divs">Phone</div>
              <input className="placeholder" />
            </div>

            <div>
              <div className="signup-form1-divs">Password</div>
              <input className="placeholder" />
            </div>

            <div className="signup-form1-divs">
              <div>Confirm Password</div>
              <input className="placeholder" />
            </div>
          </div>
          <div className="signup-form2">
            <div className="signup-form2-div1">
              <div className="signup-form2-divs">Date Of Birth</div>
              <input className="signup-input" />
            </div>

            <div className="signup-form2-div2">
              <div className="signup-form2-divs">Country/Region</div>
              <input className="signup-input" />
            </div>
          </div>
        </form>
      </section>
      <footer className="signup-footer">
        <Link to="/" className="signup-login-button">
          Sign Up
        </Link>
        <div className="signup-footer1">
          <div className="signup-haveaccount">Already have an account?</div>
          <Link to="/" className="signup-signin">
            Sign in
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
