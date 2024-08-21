import { connect } from "react-redux";
import { financial } from "../../utils";
import { tokenPrice, bonusPercent } from "../../constants";
import useMoralis from "../../hooks/useMoralis";
import ProgressCard from "../ProgressCard";

const SaleReportCard = ({ totalAmount }) => {
  const { avaxprice } = useMoralis();

    return (
        <div className="token-sales card">
          <div className="card-innr">
            <div className="card-head">
              <h5 className="card-title card-title-sm">
                Pre-Sale GDPC Sales
              </h5>
            </div>
            <div className="token-rate-wrap row">
              <div className="token-rate col-md-6 col-lg-12">
                <span className="card-sub-title">GDPC Price</span>
                <h4 className="font-mid text-dark">
                  1 GDPC = <span>{tokenPrice} USD</span>
                </h4>
              </div>
              <div className="token-rate col-md-6 col-lg-12">
                <span className="card-sub-title">Rate with AVAX</span>
                <span>1 AVAX = {financial(avaxprice / tokenPrice, 4)} GDPC</span>
              </div>
            </div>
            <div className="token-bonus-current">
              <div className="fake-className">
                <span className="card-sub-title">Current Bonus</span>
                <div className="h3 mb-0">{bonusPercent} %</div>
              </div>
              <div className="token-bonus-date">
                End at <br /> 10 Sep, 2023
              </div>
            </div>
          </div>
          <div className="sap"></div>
          <ProgressCard />
        </div>
  );
};

SaleReportCard.propTypes = {};

const mapStateToProps = (state) => ({
  totalAmount: state.transaction.totalAmount,
});

export default connect(mapStateToProps)(SaleReportCard);
