import { http, createConfig } from 'wagmi'
import { type Chain } from 'viem'
 
// export const stylus = {} as const satisfies Chain
 
const stylus = {
  id: 23011913,
  name: 'Stylus',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://stylus-testnet.arbitrum.io/rpc'] },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://stylus-testnet-explorer.arbitrum.io/' },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    ensUniversalResolver: {
      address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
      blockCreated: 16773775,
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14353601,
    },
  },
} as const satisfies Chain


export const config = createConfig({
  chains: [stylus],
  connectors: [
  ],
  transports: {
    [stylus.id]: http('https://stylus-testnet.arbitrum.io/rpc')
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
