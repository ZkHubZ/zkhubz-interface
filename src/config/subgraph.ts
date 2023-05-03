import { ARBITRUM, AVALANCHE, ETH_MAINNET } from "./chains";
import { isDevelopment } from "./env";
import { getSubgraphUrlKey } from "./localStorage";

const SUBGRAPH_URLS = {
  [ARBITRUM]: {
    // stats: "https://api.thegraph.com/subgraphs/name/gdev8317/zmx-arbitrum-stats
    stats: "https://api.thegraph.com/subgraphs/name/zmx-io/zmx-stats",
    referrals: "https://api.thegraph.com/subgraphs/name/zmx-io/zmx-arbitrum-referrals",
    nissohVault: "https://api.thegraph.com/subgraphs/name/nissoh/zmx-vault",
  },

  [AVALANCHE]: {
    // stats: "https://api.thegraph.com/subgraphs/name/gdev8317/zmx-avalanche-staging", // testing
    stats: "https://api.thegraph.com/subgraphs/name/zmx-io/zmx-avalanche-stats",
    referrals: "https://api.thegraph.com/subgraphs/name/zmx-io/zmx-avalanche-referrals",
  },

  [ETH_MAINNET]: {
    chainLink: "https://api.thegraph.com/subgraphs/name/deividask/chainlink",
  },
};

export function getSubgraphUrl(chainId: number, subgraph: string) {
  if (isDevelopment()) {
    const localStorageKey = getSubgraphUrlKey(chainId, subgraph);
    const url = localStorage.getItem(localStorageKey);
    if (url) {
      // eslint-disable-next-line no-console
      console.warn("%s subgraph on chain %s url is overriden: %s", subgraph, chainId, url);
      return url;
    }
  }

  return SUBGRAPH_URLS[chainId][subgraph];
}
