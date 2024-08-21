import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const ProgressCard = ({ amount }) => {
  const [gdpcPercentage, setgdpcPercent] = useState("0%");

  useEffect(() => {
    if (amount / 33000000 > 1) setgdpcPercent("100%");
    else setgdpcPercent((amount / 33000000) * 100 + "%");
  }, []);

  return (
    <div className="token-sales card">
      <div className="card-innr">
        <div className="card-head">
          <h4 className="card-title">GDPC Sales Progress</h4>
        </div>
        <ul className="progress-info">
          <li>
            <span>Raised</span> {amount ? amount.toLocaleString() : 0} GDPC
          </li>
          <li className="text-right">
            <span>TOTAL</span> 33,000,000 GDPC
          </li>
        </ul>
        <div className="progress-bar">
          <div
            className="progress-percent"
            data-percent={gdpcPercentage}
            style={{ width: gdpcPercentage }}></div>
        </div>
      </div>
    </div>
  );
};

ProgressCard.propTypes = {};

const mapStateToProps = (state) => ({
  amount: state.transaction.amount,
});

export default connect(mapStateToProps)(ProgressCard);
