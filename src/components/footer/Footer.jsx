import React from "react";
import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <>
      <div className={style.footer} id="au">
        <div className={style.footer_icon}>
          <img className={style.logo} src="/img/instagram.svg" alt="app" />
          <img className={style.logo} src="/img/telegram.svg" alt="app" />
          <img className={style.logo} src="/img/facebook.svg" alt="app" />
          <img className={style.logo} src="/img/youtube.svg" alt="app" />
        </div>
        <div className={style.footer_section}>
          <div className={style.section}>
            <h2>ABOUT US</h2>
            <div className={style.footer_list}>
              <p>Mark Breyer|Alexis</p>
              <p>BreyerIn Our Commurity</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className={style.section1}>
            <h2>OUR FIRM</h2>
            <div className={style.footer_list}>
              <p>Practice Areas</p>
              <p>Our Fees</p>
              <p>Office Locations</p>
            </div>
          </div>
          <div className={style.section2}>
            <h2>OUR RESULTS</h2>
            <div className={style.footer_list}>
              <p>Awards & Memberships</p>
              <p>Case Results</p>
              <p>Client Reviews</p>
            </div>
          </div>
          <div className={style.section2}>
            <h2>RESOURCES</h2>
            <div className={style.footer_list}>
              <p>Read Our Blog</p>
              <p>Our Newsletter</p>
              <p>Free Injury Guides</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={style.footer_info}>

         <p className={style.info}>
         MovieTime is a cinema located in the heart of Yerevan, ER. We pride ourselves in providing an exceptional cinematic experience to all our customers.
With state-of-the-art technology and comfortable seating, we ensure that every movie-goer leaves satisfied. Come visit us for the ultimate movie-watching experience.
         </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
