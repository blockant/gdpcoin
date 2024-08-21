import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import useMoralis from "../../hooks/useMoralis";
import { tokenPrice } from "../../constants";
import { getTransactions, clearFlagStatus } from "../../actions/transaction";
import { financial } from "../../utils";
import { shortenAddress, formateDate } from "../../helper";

import ProgressCard from "../../components/ProgressCard";

const Dashboard = ({
  getTransactions,
  transactions,
  clearFlagStatus,
  loading,
  totalAmount,
  avaxTotalAmount,
  usdtTotalAmount,
}) => {
  useEffect(() => {
    getTransactions();
    clearFlagStatus();
  }, [loading]);

  const { avaxprice } = useMoralis();
  const [tokenAmount, setTokenAmount] = useState(0);

  const onChangeAvax = (e) => {
    const avaxAmount = e.target.value;
    const amount = (avaxAmount * avaxprice) / tokenPrice;

    setTokenAmount(financial(amount, 4));
  };

  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="token-statistics card card-token height-auto">
              <div className="card-innr">
                <div className="token-balance token-balance-with-icon">
                  <div className="token-balance-icon">
                    <img src="/images/logo-light-sm.png" alt="logo" />
                  </div>
                  <div className="token-balance-text">
                    <h6 className="card-sub-title">GDPC Balance</h6>
                    <span className="lead">
                      {totalAmount ? totalAmount.toLocaleString() : 0}
                    </span>
                  </div>
                </div>
                <div className="token-balance token-balance-s2">
                  <h6 className="card-sub-title">Your Contribution</h6>
                  <ul className="token-balance-list">
                    <li className="token-balance-sub">
                      <span className="lead">
                        {avaxTotalAmount ? financial(avaxTotalAmount, 2) : 0}
                      </span>
                      <span className="sub">AVAX</span>
                    </li>
                    <li className="token-balance-sub">
                      <span className="lead">
                        {usdtTotalAmount ? financial(usdtTotalAmount, 2) : 0}
                      </span>
                      <span className="sub">USDT</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="token-information card card-full-height">
              <div className="row no-gutters height-100">
                <div className="col-md-6 text-center">
                  <div className="token-info">
                    <img
                      className="token-info-icon"
                      src="/images/logo-sm.png"
                      alt="logo-sm"
                    />
                    <div className="gaps-2x"></div>
                    <h1 className="token-info-head text-light">
                      1 GDPC = 0.532602 USD
                    </h1>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="token-info bdr-tl">
                    <div>
                      <ul className="token-info-list">
                        <li>
                          <span>Name:</span>GDPcoin
                        </li>
                        <li>
                          <span>Symbol:</span>GDPC
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary">
                        <em className="fas fa-download mr-3"></em>Download
                        Whitepaper
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="token-transaction card card-full-height">
              <div className="card-innr">
                <div className="card-head has-aside">
                  <h4 className="card-title">Transaction</h4>
                  <div className="card-opt">
                    <Link to="/transactions" className="link ucap">
                      View ALL <em className="fas fa-angle-right ml-2"></em>
                    </Link>
                  </div>
                </div>
                <table className="table tnx-table">
                  <thead>
                    <tr>
                      <th className="data-col dt-token">GDPC</th>
                      <th className="data-col dt-usd-amount">Bonus</th>
                      <th className="data-col dt-amount">Payment</th>
                      <th className="data-col dt-account">From</th>
                      <th className="data-col d-none d-sm-table-cell tnx-date">DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions &&
                      transactions
                        .filter((item, index) => index < 6)
                        .map((item, index) => (
                          <tr className="data-item" key={index}>
                            <td className="data-col dt-token">
                              <span className="lead token-amount">
                                {item.details.amount}
                              </span>

                              <span className="sub sub-symbol">GDPcoin</span>
                            </td>
                            <td className="data-col dt-usd-amount">
                              <span className="lead amount-pay">
                                {item.details.token_bonus}
                              </span>
                              <span className="sub sub-symbol">GDPbonus</span>
                            </td>
                            <td className="data-col dt-amount">
                              <span className="lead amount-pay">
                                {financial(item.payment.amount, 4)}
                              </span>
                              <span className="sub sub-symbol">
                                {item.payment.currency ? "AVAX" : "USDT"}
                              </span>
                            </td>
                            <td className="data-col dt-account">
                              <span className="lead user-info">
                                {shortenAddress(item.wallet, 7)}
                              </span>
                            </td>
                            <td className="data-col dt-account d-none d-sm-table-cell tnx-date">
                              <span className="lead user-info">
                                {formateDate(item.date)}
                              </span>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="token-calculator card">
              <div className="card-innr">
                <div className="card-head">
                  <h4 className="card-title">GDPC Calculation</h4>
                  <p className="card-title-text">
                    Enter amount to calculate GDPcoin.
                  </p>
                </div>
                <div className="token-calc">
                  <div className="token-pay-amount">
                    <input
                      id="token-base-amount"
                      className="input-bordered input-with-hint"
                      type="text"
                      defaultValue="0"
                      onChange={(e) => onChangeAvax(e)}
                    />
                    <div className="token-pay-currency">
                      <a className="link ucap link-light">AVAX</a>
                    </div>
                  </div>
                  <div className="token-received">
                    <div className="token-eq-sign">=</div>
                    <div className="token-received-amount">
                      <h5 className="token-amount">{tokenAmount}</h5>
                      <div className="token-symbol">GDPC</div>
                    </div>
                  </div>
                </div>
                <div className="token-calc-note note note-plane">
                  <em className="fas fa-info-circle text-light"></em>
                  <span className="note-text text-light">
                    Amount calculated based current price
                  </span>
                </div>
                <div className="token-buy">
                  <Link to="/buy-token" className="btn btn-primary">
                    Buy GDPcoin
                  </Link>
                </div>
              </div>
            </div>
            <ProgressCard />
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  transactions: state.transaction.transactions,
  loading: state.transaction.loading,
  totalAmount: state.transaction.totalAmount,
  avaxTotalAmount: state.transaction.avaxTotalAmount,
  usdtTotalAmount: state.transaction.usdtTotalAmount,
});

export default connect(mapStateToProps, { getTransactions, clearFlagStatus })(
  Dashboard
);
