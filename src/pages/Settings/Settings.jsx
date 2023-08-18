import React from 'react';
import styles from '../Settings/Settings.css';

const settings = () => {
  return (
    <div className="settings-container">
      <header className="settings-header">
        <div>Settings</div>
      </header>
      <section className="settings-section">
        <div className="settings-section1">
          <img className="settings-img" src="/profile.jpg" />
          <div>John Doe</div>
          <img style={{ cursor: 'pointer' }} src="/moreiconbutton.svg" alt="" />
        </div>
        <div className="settings-section2">
          <div className="settings-section2-list">
            <img
              className="settings-section2-list-img"
              alt=""
              src="/icon4.svg"
            />
            Change Password
            <img
              className="settings-section2-list-icon"
              alt=""
              src="/arrow.svg"
            />
          </div>
          <div className="settings-section2-list">
            <img
              className="settings-section2-list-img"
              alt=""
              src="/icon3.svg"
            />
            Notification
            <img
              className="settings-section2-list-icon2"
              alt=""
              src="/arrow.svg"
            />
          </div>
          <div className="settings-section2-list">
            <img
              className="settings-section2-list-img"
              alt=""
              src="/icon2.svg"
            />
            Personal Info
            <img
              className="settings-section2-list-icon1"
              alt=""
              src="/arrow.svg"
            />
          </div>

          <div className="settings-section2-list">
            <img
              className="settings-section2-list-img"
              alt=""
              src="/icon1.svg"
            />
            Invite Family & Friends
            <img
              className="settings-section2-list-icon3"
              alt=""
              src="/arrow.svg"
            />
          </div>
          <div className="settings-section2-list">
            <img
              className="settings-section2-list-img"
              alt=""
              src="/icon.svg"
            />
            Terms & Condition
            <img
              className="settings-section2-list-icon4"
              alt=""
              src="/arrow.svg"
            />
          </div>
        </div>
        <div className="settings-section3">Log Out</div>
      </section>
    </div>
  );
};

export default settings;
