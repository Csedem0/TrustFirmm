import React from 'react';
import styles from '../../pages/Dashboard/Dashboard.css';
import cr7 from '../../img/moris.jpg';
import { Link } from 'react-router-dom';

const Dashbord = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-navbar">
        <div className="dashboard-logo">TrustFirm</div>
        <div className="dashboard-profile1">
          Welcome; MORIS
          <img className="dashboard-profile" src={cr7} />
        </div>
      </div>
      <div className="bottom-border"></div>
      <div className="dashboard">
        <div className="dashboard-left">
          <div className="dashboard-left-component">
            <img
              className="dashboard-left-icon"
              alt=""
              src="/frame-244image.svg"
            />
            <div className="icon-0">Profile</div>
          </div>
          <div className="dashboard-left-component">
            <img
              className="dashboard-left-icon"
              alt=""
              src="/frame-244image.svg"
            />
            <div className="icon-0">Settings</div>
          </div>
          <div className="dashboard-left-component">
            <img
              className="dashboard-left-icon"
              alt=""
              src="/frame-244image.svg"
            />
            <div className="icon-0">Notify</div>
          </div>
          <div className="dashboard-left-component">
            <img
              className="dashboard-left-icon"
              alt=""
              src="/frame-244image.svg"
            />
            <Link to="/currenttransfer" className="icon-0">
              Current
            </Link>
          </div>
          <div className="dashboard-left-component">
            <img
              className="dashboard-left-icon"
              alt=""
              src="/frame-244image.svg"
            />
            <div className="icon-0">Terms</div>
          </div>
          <div className="dashboard-left-component">
            <img
              className="dashboard-left-icon"
              alt=""
              src="/frame-244image.svg"
            />
            <div className="icon-0">Privacy</div>
          </div>
        </div>
        <div className="dashboard-right">
          <div className="dashboard-right-dashboard">Dashboard</div>
          <div className="dashboard-right-component">
            <div className="dashboard-right-maincomponent1">
              <div className="dashboard-right-component1">
                <Link to="/transaction" className="dashboard-right-component1a">
                  <img
                    className="dashboard-section-icon"
                    alt=""
                    src="/frame-244image.svg"
                  />
                  Transfer
                </Link>
                <Link
                  to="/account-details"
                  className="dashboard-right-component1b"
                >
                  <img
                    className="dashboard-section-icon"
                    alt=""
                    src="/frame-243image.svg"
                  />
                  Request
                </Link>
              </div>
              <div className="dashboard-right-component1c">
                <div className="dashboard-right-component1ca">
                  SAFEST AND SECURE PLATFORM
                </div>
                <div className="dashboard-right-component1cb">
                  Encrypted Transactions
                </div>
              </div>
            </div>
            <div className="dashboard-recent">
              <div className="dashboard-recent-recent">Recent Transfers</div>
              <div className="dashboard-recent-div">
                <div className="dashboard-recent-div1">
                  <i>32min</i> Emmanuel Sobulachi
                </div>
                <div className="dashboard-recent-div1">
                  <i>32min</i> Emmanuel Sobulachi
                </div>
                <div className="dashboard-recent-div1">
                  <i>32min</i> Emmanuel Sobulachi
                </div>
                <div className="dashboard-recent-div1">
                  <i>32min</i> Emmanuel Sobulachi
                </div>
                <div className="dashboard-recent-div1">
                  <i>32min</i> Emmanuel Sobulachi
                </div>
                <div className="dashboard-recent-div1">
                  <i>32min</i> Emmanuel Sobulachi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
