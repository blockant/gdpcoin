import { useEffect, useState } from "react";
import { useAddress, useSigner, useChainId } from "@thirdweb-dev/react";
import { AvalancheFuji } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/react";

import GDPCABI from '../constants/GDPC.json';
import GDPBABI from '../constants/GDPB.json';
import PresaleABI from '../constants/Presale.json';
import USDTABI from '../constants/USDT.json';

import { GDPCContract, GDPBContract, presaleContract, usdtContract, testNetworkChainId } from "../constants";


// returns null on errors
export function useContract(contractAddress, ABI) {
    const [contract, setContract] = useState(null);
    const address = useAddress();
    const signer = useSigner();
    const chainId = useChainId();

    useEffect(() => {
        if (chainId == AvalancheFuji.chainId) {
            const fetchContract = async () => {
                const sdk = ThirdwebSDK.fromSigner(signer);
                const contract = await sdk.getContract(contractAddress, ABI);
                setContract(contract);
            };
            fetchContract();
        }
    }, [address, signer]);

    return contract;
}

export function usePresaleContract() {
    return useContract(presaleContract[testNetworkChainId], PresaleABI);
}

export function useUSDTContract() {
    return useContract(usdtContract[testNetworkChainId], USDTABI);
}

export function useGDPCContract() {
    return useContract(GDPCContract[testNetworkChainId], GDPCABI);
}

export function useGDPBContract() {
    return useContract(GDPBContract[testNetworkChainId], GDPBABI);
}