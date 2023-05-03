import { ARBITRUM, ARBITRUM_TESTNET, AVALANCHE, AVALANCHE_FUJI } from "config/chains";
import arbitrum from "img/ic_arbitrum_24.svg";
import avalanche from "img/ic_avalanche_24.svg";
import avalancheTestnet from "img/ic_avalanche_testnet_24.svg";

import zmxIcon from "img/ic_zmx_40.svg";
import glpIcon from "img/ic_glp_40.svg";
import zmxArbitrum from "img/ic_zmx_arbitrum.svg";
import zmxAvax from "img/ic_zmx_avax.svg";
import glpArbitrum from "img/ic_glp_arbitrum.svg";
import glpAvax from "img/ic_glp_avax.svg";

const ICONS = {
  [ARBITRUM]: {
    network: arbitrum,
    zmx: zmxArbitrum,
    glp: glpArbitrum,
  },
  [AVALANCHE]: {
    network: avalanche,
    zmx: zmxAvax,
    glp: glpAvax,
  },
  [ARBITRUM_TESTNET]: {
    network: arbitrum,
  },
  [AVALANCHE_FUJI]: {
    network: avalancheTestnet,
  },
  common: {
    zmx: zmxIcon,
    glp: glpIcon,
  },
};

export function getIcon(chainId: number | "common", label: string) {
  if (chainId in ICONS) {
    if (label in ICONS[chainId]) {
      return ICONS[chainId][label];
    }
  }
}
export function getIcons(chainId: number | "common") {
  if (!chainId) return;
  if (chainId in ICONS) {
    return ICONS[chainId];
  }
}
