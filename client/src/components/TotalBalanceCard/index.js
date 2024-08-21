import { connect } from "react-redux";
import { financial } from "../../utils";

const TotalBalanceCard = ({
  totalAmount,
  avaxTotalAmount,
  usdtTotalAmount,
}) => {
  return (
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
  );
};

const mapStateToProps = (state) => ({
  totalAmount: state.transaction.totalAmount,
  avaxTotalAmount: state.transaction.avaxTotalAmount,
  usdtTotalAmount: state.transaction.usdtTotalAmount,
});
export default connect(mapStateToProps, {})(TotalBalanceCard);
