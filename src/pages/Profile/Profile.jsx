import React from 'react';
import styles from '../Profile/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <div>Profile</div>
      </header>
      <section className="profile-section">
        <div className="profile-section1">
          <img className="profile-img" src="/profile.jpg" />
          <div>John Doe</div>
          <img className="" alt="" src="/settingsiconbutton.svg" />
        </div>
        <div className="profile-section2">
          <div className="profile-section2-list">
            <img className="profile-section2-list-img" alt="" src="/icon.svg" />
            Setting
            <img
              className="profile-section2-list-icon"
              alt=""
              src="/arrow.svg"
            />
          </div>
          <div className="profile-section2-list">
            <img
              className="profile-section2-list-img"
              alt=""
              src="/icon2.svg"
            />
            Personal Info
            <img
              className="profile-section2-list-icon1"
              alt=""
              src="/arrow.svg"
            />
          </div>
          <div className="profile-section2-list">
            <img
              className="profile-section2-list-img"
              alt=""
              src="/icon3.svg"
            />
            Notification
            <img
              className="profile-section2-list-icon2"
              alt=""
              src="/arrow.svg"
            />
          </div>
          <div className="profile-section2-list">
            <img
              className="profile-section2-list-img"
              alt=""
              src="/icon1.svg"
            />
            Privacy Setting
            <img
              className="profile-section2-list-icon3"
              alt=""
              src="/arrow.svg"
            />
          </div>
        </div>
        <div className="profile-section3">Log Out</div>
      </section>
    </div>
  );
};

export default Profile;
