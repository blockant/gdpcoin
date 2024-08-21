export const ChainId = {
  MAINNET: 43114,
  TESTNET: 43113,
  AVALANCHE: 43114,
  FUJI: 43113,
  ETHEREUM: 1,
  GÖRLI: 5,
  KOVAN: 42,
  MATIC: 137,
  MATIC_TESTNET: 80001,
  FANTOM: 250,
  FANTOM_TESTNET: 4002,
  BSC: 56,
  BSC_TESTNET: 97,
  ARBITRUM: 79377087078960,
  HARMONY: 1666600000,
  HARMONY_TESTNET: 1666700000,
};

export const tokenPrice = 0.532602;
export const bonusPercent = 5;
export const stage = 1;

export const GDPCContract = {
  [ChainId["MAINNET"]]: "0x1622ddfe621F5a3fB43a95cD575fc164A7e6c158",
  [ChainId["TESTNET"]]: "0xc748aBDf2443c5EEcEaE17c8998704CC40f555A7",
};

export const GDPBContract = {
  [ChainId["MAINNET"]]: "0x1622ddfe621F5a3fB43a95cD575fc164A7e6c158",
  [ChainId["TESTNET"]]: "0x99daBa55f5AA3eda027139C3967D167d786a63fF",
};

export const presaleContract = {
  [ChainId["MAINNET"]]: "0x1622ddfe621F5a3fB43a95cD575fc164A7e6c158",
  [ChainId["TESTNET"]]: "0xa13ffd4A98F7BC5C177982208AD11f2a4338d0ca",
};

export const usdtContract = {
  [ChainId["MAINNET"]]: "0x1622ddfe621F5a3fB43a95cD575fc164A7e6c158",
  [ChainId["TESTNET"]]: "0x5425890298aed601595a70AB815c96711a31Bc65",
}

export const mainNetworkChainId = ChainId.MAINNET;
export const testNetworkChainId = ChainId.TESTNET;
export const NetworkContextName = "NETWORK";

export const ErrorMessages = {
  "-32002":
    "Already processing Metamask wallet connect. Please confirm metamask modal.",
};

export const MoralisAPIKey =
  "pT8v9ybSBYdDiwVF6uytzwEuHU5uyUMisiqMMTnu6mlS4LPjG2hgFUeNiSgXE7VN";

export const CoinmarketcapAPIKey = 
  "c1aa34f3-7b85-481f-9fe6-55b9454ef4c1";