import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import {
  useAddress,
  ConnectWallet,
  useSwitchChain,
  useChainId,
} from "@thirdweb-dev/react";
import { AvalancheFuji } from "@thirdweb-dev/chains";
import { ethers } from "ethers";

import useMoralis from "../../hooks/useMoralis";
import { tokenPrice, bonusPercent, stage } from "../../constants";
import { createTransaction } from "../../actions/transaction";
import { usePresaleContract, useUSDTContract } from "../../hooks/useContract";
import { financial } from "../../utils";
import SaleReportCard from "../../components/SaleReportCard";
import BalanceCard from "../../components/BalanceCard";

const BuyToken = ({ createTransaction, createSuccess }) => {
  const address = useAddress();
  const switchChain = useSwitchChain();
  const chainId = useChainId();
  const { avaxprice } = useMoralis();
  const [tokenCount, setTokenCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(tokenPrice);
  const [avaxchecked, setAvaxChecked] = useState(true);

  const presale_contract = usePresaleContract();
  const usdt_contract = useUSDTContract();

  const navigate = useNavigate();
  useEffect(() => {
    if (address && chainId !== AvalancheFuji.chainId) {
      try {
        switchChain(AvalancheFuji.chainId);
      } catch (e) {
        console.error(e);
      }
    }

    if (createSuccess) {
      setTimeout(() => navigate("/transactions"), 2000);
    }
  }, [address, chainId, createSuccess]);

  const onAmountChange = (e) => {
    setTokenCount(e.target.value);
    setTotalPrice(e.target.value * tokenPrice);
  };

  const onClickBuyBtn = async () => {
    if (address === undefined) return;

    if (!avaxchecked) {
      try {
        // const preTx = await usdt_contract.call(
        //   "approve",
        //   [
        //     presaleContract[testNetworkChainId],
        //     totalPrice * 10 ** 6
        //   ]
        // )

        const tx = await presale_contract.call("buyWithUSDT", [
          tokenCount * 10 ** 8,
        ]);

        const transactionHash = tx.receipt.transactionHash;
        const usdtAmount = tokenPrice * tokenCount;

        createTransaction({
          paymentCurrency: avaxchecked,
          wallet: address,
          paymentAmount: usdtAmount,
          paymentTransaction: transactionHash,
          detailsStage: stage,
          detailsTokenPrice: tokenPrice,
          detailsTokenBonus: (tokenCount * bonusPercent) / 100,
          detailsAmount: tokenCount,
        });
      } catch (error) {
        console.error("---error---", error);
        toastr.error("Insufficient USDT Balance");
      }
    } else {
      // buy with avax
      const transactionHash = await buyWithAvax();
    }
  };

  const buyWithAvax = async () => {
    try {
      const value = await presale_contract.call("getLatestAvaxUsdPrice");

      const avaxPriceFromContract = ethers.utils.formatEther(value) * 10 ** 10;
      const avaxAmount = totalPrice / avaxPriceFromContract;

      console.log("avaxAmount", avaxAmount);

      const tx = await presale_contract.call(
        "buyWithAvax",
        [tokenCount * 10 ** 8],
        {
          value: ethers.utils.parseEther(avaxAmount.toString()),
        }
      );
      const transactionHash = tx.receipt.transactionHash;
      createTransaction({
        paymentCurrency: avaxchecked,
        wallet: address,
        paymentAmount: avaxAmount,
        paymentTransaction: transactionHash,
        detailsStage: stage,
        detailsTokenPrice: tokenPrice,
        detailsTokenBonus: (tokenCount * bonusPercent) / 100,
        detailsAmount: tokenCount,
      });

      return transactionHash;
    } catch (error) {
      console.error("----error---", error);
      return null;
    }
  };

  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="main-content col-lg-8">
            <div className="d-lg-none">
              <ConnectWallet
                className="btn btn-danger btn-xl btn-between w-100 mgb-1-5x"
                theme="light"
                style={{
                  background: "white",
                  color: "#495463",
                  height: "60px",
                  marginBottom: '10px'
                }}
              />
              <div className="gaps-1x mgb-0-5x d-lg-none d-none d-sm-block"></div>
            </div>
            <div className="content-area card">
              <div className="card-innr">
                <div className="card-head">
                  <span className="card-sub-title text-primary font-mid">
                    Step 1
                  </span>
                  <h4 className="card-title">
                    Choose currency and calculate GDPcoin price
                  </h4>
                </div>
                <div className="card-text">
                  <p>
                    You can buy our GDPcoin using AVAX or Tether to become part
                    of Our project.
                  </p>
                </div>

                <div className="token-currency-choose">
                  <div className="row guttar-15px">
                    <div className="col-6">
                      <div className="pay-option">
                        <input
                          className="pay-option-check"
                          type="radio"
                          id="payeth"
                          name="payOption"
                          defaultChecked
                          onChange={(e) => setAvaxChecked(true)}
                        />
                        <label className="pay-option-label" htmlFor="payeth">
                          <span className="pay-title">
                            <img
                              src="/images/avax.png"
                              alt=""
                              style={{ width: "20px" }}
                            />
                            <span className="pay-cur">AVAX</span>
                          </span>
                          <span className="pay-amount">{avaxprice} USD</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pay-option">
                        <input
                          className="pay-option-check"
                          type="radio"
                          id="paylte"
                          name="payOption"
                          onChange={(e) => setAvaxChecked(false)}
                        />
                        <label className="pay-option-label" htmlFor="paylte">
                          <span className="pay-title">
                            <img
                              src="/images/tether.png"
                              alt=""
                              style={{ width: "20px" }}
                            />
                            <span className="pay-cur">Tether</span>
                          </span>
                          <span className="pay-amount">1.00 USD</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-head">
                  <span className="card-sub-title text-primary font-mid">
                    Step 2
                  </span>
                  <h4 className="card-title">Amount of contribute</h4>
                </div>
                <div className="card-text">
                  <p>
                    Enter your amount, you would like to contribute and
                    calculate the amount of GDPC you will be received. The
                    calculator helps to convert required currency to GDPC.
                  </p>
                </div>
                <div className="token-contribute">
                  <div className="token-calc">
                    <div className="token-pay-amount">
                      <input
                        id="token-base-amount"
                        className="input-bordered input-with-hint"
                        type="number"
                        defaultValue="1"
                        onChange={(e) => onAmountChange(e)}
                      />

                      <div className="token-pay-currency">
                        <span className="input-hint input-hint-sap">GDPC</span>
                      </div>
                    </div>
                    <div className="token-received">
                      <div className="token-eq-sign">=</div>
                      <div className="token-received-amount">
                        <h5 className="token-amount">
                          {financial(totalPrice, 2)} USD /{" "}
                          {financial(totalPrice / avaxprice, 4)} AVAX
                        </h5>
                        {/* <div className="token-symbol">USD</div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="token-bonus-ui">
                  <span>Bonus</span>
                  <div className="bonus-bar">
                    <div className="bonus-base" style={{width: "5%"}} >
                      <span className="bonus-base-amount">On Sale</span>
                      <span className="bonus-base-percent">{bonusPercent}.00%</span>
                    </div>
                  </div>
                </div> */}
                <div className="token-overview-wrap">
                  <div className="token-overview">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="token-bonus token-bonus-sale">
                          <span className="token-overview-title">
                            Sale Amount (GDPC)
                          </span>
                          <span className="token-overview-value bonus-on-sale">
                            {tokenCount}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="token-bonus token-bonus-amount">
                          <span className="token-overview-title">
                            + {bonusPercent}% Amount Bonus (GDPbonus)
                          </span>
                          <span className="token-overview-value bonus-on-amount">
                            {(tokenCount * bonusPercent) / 100}
                          </span>
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                        <div className="token-total">
                          <span className="token-overview-title font-bold">
                            Total GDPC
                          </span>
                          <span className="token-overview-value token-total-amount text-primary">
                            {tokenCount * (1 + bonusPercent / 100)}
                          </span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="note note-plane note-danger note-sm pdt-1x pl-0">
                    <p>
                      Your Contribution will be calculated based on exchange
                      rate at the moment your transaction is confirm.
                    </p>
                  </div>
                </div>
                <div className="card-head">
                  <span className="card-sub-title text-primary font-mid">
                    Step 3
                  </span>
                  <h4 className="card-title">Make a payment</h4>
                </div>
                <div className="card-text">
                  <p>
                    To get GDPcoin please make a payment. You can send payment
                    directly to presale smart contract and get GDPcoins
                    immediately.{" "}
                  </p>
                </div>
                <div className="pay-buttons" onClick={onClickBuyBtn}>
                  <div className="pay-button">
                    <a
                      className="btn btn-primary btn-between w-100"
                      style={{ color: "white" }}>
                      Buy GDPC Now<em className="ti ti-wallet"></em>
                    </a>
                  </div>
                </div>
                <div className="pay-notes">
                  <div className="note note-plane note-light note-md font-italic">
                    <em className="fas fa-info-circle"></em>
                    <p>
                      Tokens will appear in your wallet after payment
                      successfully made. Please note that, GDPC tokens will
                      distributed as soon as you purchased and it will be locked
                      for one year.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aside sidebar-right col-lg-4">
            <div className="d-none d-lg-block">
              <ConnectWallet
                className="btn btn-xl btn-between w-100"
                theme="light"
                style={{
                  background: "white",
                  color: "#495463",
                  height: "60px",
                }}
              />
              <div className="gaps-3x"></div>
            </div>
            <BalanceCard />
            <SaleReportCard />
          </div>
        </div>
      </div>
    </div>
  );
};

BuyToken.propTypes = {};

const mapStateToProps = (state) => ({
  createSuccess: state.transaction.createSuccess,
});

export default connect(mapStateToProps, { createTransaction })(BuyToken);
