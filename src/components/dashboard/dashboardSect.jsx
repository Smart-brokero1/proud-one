import { useState } from "react";
import TradingViewWidget from "./LengthyAnalytics";
import Analytics2 from "./Analytics2";
import AnalyticsViewWidget from "./Analytics3";

const DashboardSect = ({ setWidgetState, currentUser, setInvestData }) => {
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const dateString =
    currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;

  const investProcess = (vlad, clad, blad) => {
    setInvestData({
      idnum: currentUser?.idnum,
      plan: vlad,
      status: "Pending",
      capital: clad,
      date: new Date().toISOString(),
      duration: blad,
      paymentOption: "Bitcoin",
      authStatus: "unseen",
      admin: false,
      roi: 0,
      bonus: 0,
    });
    setWidgetState({
      state: true,
      type: "invest",
    });
  };
  return (
    <>
      <div className="gridAnalytics">
        <div className="leftGridAnalaytics">
          <AnalyticsViewWidget />
        </div>
        <div className="rightGridAnalaytics">
          <Analytics2 />
        </div>
      </div>
      <div className="lengthyAnalytics">
        <TradingViewWidget />
      </div>
      <section className="Offers" id="Offers">
        <h2>Our Available Offers</h2>
        <div className="OffersCntn">
          <div className="unitOffer">
            <h3>SILVER</h3>
            <h4>
              <span>$500</span> <br /> - <br /> <span>$900</span>
            </h4>
            <ul>
              <li>
                <i className="icofont-tick-mark"></i> <span>5X ROI</span>
              </li>
              <li>
                <i className="icofont-tick-mark"></i>{" "}
                <span>5X bonus on investment</span>
              </li>
              <li>
                <i className="icofont-tick-mark"></i>{" "}
                <span>Get ROI and bonus in 24 hrs</span>
              </li>
            </ul>
            <button
              className="borderBtn"
              onClick={() => {
                investProcess("Silver", 500, 2);
              }}
            >
              Invest
            </button>
          </div>
          <div className="unitOffer fancybg">
            <h3>
              DIAMOND <i className="icofont-diamond"></i>
            </h3>
            <h4>
              <span>$10,000</span> <br /> - <br /> <span>$100,000</span>
            </h4>
            <ul>
              <li>
                <i className="icofont-tick-mark"></i> <span>5X ROI</span>
              </li>
              <li>
                <i className="icofont-tick-mark"></i>{" "}
                <span>10X Bonus on investment</span>
              </li>
              <li>
                <i className="icofont-tick-mark"></i>{" "}
                <span>Get ROI and bonus in 7 Days</span>
              </li>
              <li>
                <i className="icofont-tick-mark"></i>{" "}
                <span>Access to 15 of our digital financial resources</span>
              </li>
            </ul>
            <button
              className="fancyBtn"
              onClick={() => {
                investProcess("Diamond", 10000, 7);
              }}
            >
              Get Rich
            </button>
          </div>
          <div className="unitOffer">
            <h3>GOLD</h3>
            <h4>
              <span>$1,000</span> <br /> - <br /> <span>$9,000</span>
            </h4>
            <ul>
              <li>
                <i className="icofont-tick-mark"></i> <span>5X ROI</span>
              </li>
              <li>
                <i className="icofont-tick-mark"></i>{" "}
                <span>8X Bonus on investment</span>
              </li>
              <li>
                <i className="icofont-tick-mark"></i>{" "}
                <span>Get ROI and bonus in 4 Days</span>
              </li>
              <li>
                <i className="icofont-tick-mark"></i>{" "}
                <span>Access to 5 of our digital financial resources</span>
              </li>
            </ul>
            <button
              className="borderBtn"
              onClick={() => {
                investProcess("Gold", 1000, 5);
              }}
            >
              Invest
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardSect;
