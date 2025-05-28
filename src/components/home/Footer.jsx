import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="homefooter">
      <div className="firstFooterSect">
        <div className="topper">
          <img
            src="logo2.png"
            alt="logo"
            style={{
              width: "130px",
              height: "auto",
              top: 0,
              left: 0,
            }}
          />
          <span></span>
        </div>
        <div className="faller">
          <div className="leftFaller">
            <Link href={"/signup"} className="unitoptionFaller">
              <p>REGISTER</p>
            </Link>
            <Link href={"/signin"} className="unitoptionFaller">
              <p>SIGN IN</p>
            </Link>
            <Link href={"/about"} className="unitoptionFaller">
              <p>ABOUT</p>
            </Link>
            <Link href={"/contact"} className="unitoptionFaller">
              <p>CONTACT</p>
            </Link>
            <a href="#Offers" className="unitoptionFaller">
              <p>Offers</p>
            </a>
          </div>
          <div className="centerFaller">
            <h4>ADDRESS:</h4>
            <div>
              <div className="address_1">
                <h5> Miami FL, USA</h5>
              </div>
            </div>
          </div>
          <div className="rightfaller fancybg">
            <h4>Get Started With Evergreen Finance </h4>
            <a href="#Offers" className="fancyBtn">
              Join Us
            </a>
          </div>
        </div>
      </div>
      <div className="secndFootersect">
        <div className="left">
          <p>
            The financial instruments we offer, especially CFDs, can be highly
            risky. Fractional Shares (FS) is an acquired from Evergreen Finance
            fiduciary right to fractional parts of stocks and ETFs. FS are not a
            separate financial instrument. The limited corporate rights are
            associated with FS.
          </p>
          <p>
            This page was created for investors residing in Hungary. You should
            consider whether you understand how financial instruments work and
            whether you can afford to take the high risk of losing your money.
            They may not be suitable for everyone, so please ensure you fully
            understand all of the risks.
          </p>
        </div>
      </div>
      <div className="thirdfooterSect">
        <p>Copyright © 2018 - 2025 Evergreen Finance.. All rights reserved.</p>
        <p>Loyalty | Security | Profit</p>
      </div>
    </footer>
  );
};

export default Footer;
