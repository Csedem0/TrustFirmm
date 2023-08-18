import React from 'react';
import styles from '../../pages/MinePage/MinePage.css';

const MinePage = () => {
  return (
    <div className="minepage-container">
      <header className="minepage-header">
        <div>
          <div className="minepage-header-div">Hello, John Doe</div>
          <div className="minepage-header-div1">Welcome back!</div>
        </div>

        <img className="minepage-header-img" src="/profile.jpg" />
      </header>
      <section className="minepage-section">
        <div className="minepage-section-div">
          <img
            className="minepage-section-icon"
            alt=""
            src="/frame-244image.svg"
          />
          Transfer
        </div>
        <div className="minepage-section-div1">
          <img
            className="minepage-section-icon"
            alt=""
            src="/frame-243image.svg"
          />
          Request
        </div>
        <img className="" alt="" src="/more.svg" />
      </section>
      <article className="minepage-article">
        <div className="minepage-article-div">
          <div>Recent Transfers</div>
          <div>See All</div>
        </div>
        <div className="minepage-article-div1">
          <div className="minepage-article-div2">
            <img
              className="minepage-article-div2-img"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className="minepage-article-div3">
            Emmanuel
            <div className="minepage-article-div3-date"> 22 July 2023</div>
          </div>
          <p className="minepage-article-p">-$500.00</p>
        </div>
        <div className="minepage-article-div1">
          <div className="minepage-article-div2">
            <img
              className="minepage-article-div2-img"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className="minepage-article-div3">
            Emmanuel
            <div className="minepage-article-div3-date"> 22 July 2023</div>
          </div>
          <p className="minepage-article-p">-$500.00</p>
        </div>
        <div className="minepage-article-div1">
          <div className="minepage-article-div2">
            <img
              className="minepage-article-div2-img"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className="minepage-article-div3">
            Emmanuel
            <div className="minepage-article-div3-date"> 22 July 2023</div>
          </div>
          <p className="minepage-article-p">-$500.00</p>
        </div>
        <div className="minepage-article-div1">
          <div className="minepage-article-div2">
            <img
              className="minepage-article-div2-img"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className="minepage-article-div3">
            Emmanuel
            <div className="minepage-article-div3-date"> 22 July 2023</div>
          </div>
          <p className="minepage-article-p">-$500.00</p>
        </div>
        <div className="minepage-article-div1">
          <div className="minepage-article-div2">
            <img
              className="minepage-article-div2-img"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className="minepage-article-div3">
            Emmanuel
            <div className="minepage-article-div3-date"> 22 July 2023</div>
          </div>
          <p className="minepage-article-p">-$500.00</p>
        </div>
      </article>
    </div>
  );
};

export default MinePage;
