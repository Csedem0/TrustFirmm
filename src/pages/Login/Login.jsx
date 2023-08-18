import React from 'react';
import styles from '../Login/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <header className="login-header">
        <div className="signup-signupbutton">TrustFirm</div>
      </header>
      <section>
        <form className="login-form">
          <div>
            <div className="placeholder">Email</div>
            <input className="xyz123" />
          </div>
          <div>
            <div className="placeholder">Password</div>
            <input className="xyz123" />
          </div>
        </form>
      </section>
      <footer className="login-footer">
        <div className="login-footer1">
          <div className="login-rememberme">
            <button className="login-rememberme-button" />
            Remember me
          </div>
          <a href="#" className="login-forgetpassword">
            Forget password?
          </a>
        </div>

        <Link to="/dashboard" className="login-footer-login">
          Login
        </Link>
        <div className="login-footer2">
          <div className="login-footer-noaccount">Don't have an account?</div>
          <Link to="/signup" className="login-footer-signup">
            Sign Up
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Login;
