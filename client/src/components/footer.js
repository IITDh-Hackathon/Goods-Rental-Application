import React from "react";
import "./../css/footerCss.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-distributed">
          <div className="footer-left">
            <h3>
              Borrow<span>Box</span>
            </h3>
            <p className="footer-links">
              <a href="#" className="link-1">
                Home
              </a>
              <a href="/products">Products</a>
              <a href="#">Contact</a>
            </p>
            <p className="footer-company-name">Borrow Box © 2023</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>IIT Dharwad</span> Karnataka, India
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+91 9676218429</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>

              <p>
                <a href="mailto: 200010024@iitdh.ac.in">support@borrowbox.com</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              At BorrowBox, we're all about making your life more convenient and
              sustainable. We believe in the power of sharing and the joy of
              experiencing without ownership. That's why we've created a
              revolutionary online goods rental platform where you can rent a
              wide range of items for as long as you need.
            </p>

            <div className="footer-icons">
            <a href="https://github.com/karthik-k-18">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://twitter.com/mv_karthik14">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>

              

              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
