import { useEffect, useState } from "react";
import { useGDPCContract, useGDPBContract, usePresaleContract } from "../../hooks/useContract";
import { useAddress, useChainId } from "@thirdweb-dev/react";
import { AvalancheFuji } from "@thirdweb-dev/chains";
import { ethers } from "ethers";
import { financial } from "../../utils";

const BalanceCard = () => {
  const address = useAddress();
  const chainId = useChainId();

  const [mainBalance, setMainBalance] = useState(0);
  const [bonusBalance, setBonusBalance] = useState(0);

    const GDPCContract = useGDPCContract()
    const GDPBContract = useGDPBContract()
    const presaleContract = usePresaleContract()

    const formatBalance = (bignumberValue) => {
        const value = ethers.utils.formatEther(bignumberValue) * 10 ** 10;
        return financial(value, 2);
    }

    useEffect(() => {
        if (address && chainId == AvalancheFuji.chainId) {
            const fetchBalances = async () => {
                try {
                    const main = await GDPCContract.call(
                        "balanceOf",
                        [
                          address
                        ]
                    );
                    console.error("---initial balance0---", main)
                    setMainBalance(formatBalance(main));
    
                    const bonus = await GDPBContract.call(
                        "balanceOf",
                        [
                            address
                        ]
                    );
                    setBonusBalance(formatBalance(bonus));
                } catch (error) {
                    console.error("---error---", error)
                }
            }
            fetchBalances()
        }
    })

  return (
    <div className="token-statistics card card-token height-auto">
      <div className="card-innr">
        <div className="token-balance">
          <div className="token-balance-text">
            <h6 className="card-sub-title">GDPC Balance OF Current Wallet</h6>
            <span className="lead">
              {mainBalance == 0 ? 0 : mainBalance} <span>GDPC</span>
            </span>
          </div>
        </div>
        <div className="token-balance">
          <div className="token-balance-text">
            <h6 className="card-sub-title">Bonus Token Balance</h6>
            <span className="lead">
              {bonusBalance == 0 ? 0 : bonusBalance} <span>GDPB</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
