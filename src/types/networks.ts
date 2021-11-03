export const NETWORK_LIST = [
  {
    key: 'kusama',
    value: 'kusama'
  },
  {
    key: 'polkadot',
    value: 'polkadot'
  }
]

export const ENDPOINTS_MAP = {
  polkadot: {
    wss: 'wss://rpc.polkadot.io',
    prefix: 0,
    types: {}
  },
  kusama: {
    wss: 'wss://kusama-rpc.polkadot.io',
    prefix: 2,
    types: {}
  }
}
