import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";

import { getTransactions, clearFlagStatus } from "../../actions/transaction";
import { shortenAddress, formateDate } from "../../helper";
import { financial } from "../../utils";

const Transactions = ({
  getTransactions,
  clearFlagStatus,
  transactions,
  loading,
}) => {
  useEffect(() => {
    getTransactions();
    clearFlagStatus();
  }, [loading]);
  return (
    <div className="page-content">
      <div className="container">
        <div className="card content-area">
          <div className="card-innr" style={{ minHeight: "66vh" }}>
            <div className="card-head">
              <h4 className="card-title">User Transactions</h4>
            </div>
            <table className="data-table dt-init user-tnx">
              <thead>
                <tr className="data-item data-head">
                  <th className="data-col dt-tnxno">Tranx NO</th>
                  <th className="data-col dt-token">GDPC AMOUNT</th>
                  <th className="data-col dt-usd-amount">Bonus Amount</th>
                  <th className="data-col dt-amount">Payment</th>
                  <th className="data-col dt-account">From</th>
                  {/* <th className="data-col dt-type">
                    <div className="dt-type-text">Type</div>
                  </th> */}
                  {/* <th className="data-col"></th> */}
                </tr>
              </thead>
              <tbody>
                {transactions &&
                  transactions.map((item, index) => (
                    <tr className="data-item" key={index}>
                      <td className="data-col dt-tnxno">
                        <div className="d-flex align-items-center">
                          <div className="data-state data-state-approved">
                            <span className="d-none">Approved</span>
                          </div>
                          <div className="fake-className">
                            <span className="lead tnx-id">
                              TNX{String(index + 1).padStart(3, "0")}
                            </span>
                            <span className="sub sub-date">
                              {formateDate(item.date)}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="data-col dt-token">
                        <span className="lead token-amount">
                          {item.details.amount}
                        </span>
                        {/* <span className="sub sub-symbol">
                          {item.payment.currency ? "AVAX" : "USDT"}
                        </span> */}
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
                        {/* <span className="sub sub-date">08 Jul, 18 10:20PM</span> */}
                      </td>
                      {/* <td className="data-col dt-type">
                        <span className="dt-type-md badge badge-outline badge-success badge-md">
                          Purchase
                        </span>
                        <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                          P
                        </span>
                      </td> */}
                      {/* <td className="data-col text-right">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#transaction-details"
                          className="btn btn-light-alt btn-xs btn-icon">
                          <em className="ti ti-eye"></em>
                        </a>
                      </td> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Transactions.propTypes = {};

const mapStateToProps = (state) => ({
  transactions: state.transaction.transactions,
  loading: state.transaction.loading,
});

export default connect(mapStateToProps, { getTransactions, clearFlagStatus })(
  Transactions
);
