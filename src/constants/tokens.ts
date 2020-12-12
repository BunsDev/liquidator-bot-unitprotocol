export const tokenList = [
  {
    addresses: {
      1: '0x1456688345527bE1f37E9e627DA0837D6f08C925',
      4: '0x2905F3Dd1406797b6214Ee0654E2FB6e694C8773',
    },
    symbol: 'USDP',
    collateral: false,
    decimals: 18,
    logoUrl: `${process.env.PUBLIC_URL}/usdp.png`,
  },
  {
    addresses: {
      1: '0xc76fb75950536d98fa62ea968e1d6b45ffea2a55',
      4: '0x0F235462cA4a41EA92Fca6b7c4d67dAe0DA8d1D6',
    },
    symbol: 'COL',
    collateral: true,
    defaultOracleType: 3,
    decimals: 18,
    logoUrl: `${process.env.PUBLIC_URL}/logo.png`,
  },
  {
    addresses: {
      1: '0x6aade8A8A6b85921009D2CaA25Dc69348f4c009e',
      4: '0x6aade8A8A6b85921009D2CaA25Dc69348f4c009e',
    },
    symbol: 'COL main asset mock',
    collateral: true,
    defaultOracleType: 3,
    decimals: 18,
    logoUrl: `${process.env.PUBLIC_URL}/logo.png`,
  },
  {
    addresses: {
      1: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      4: '0x03f1A5d11cB1C698d865756EBEdeb144898bB319',
    },
    symbol: 'WBTC',
    collateral: true,
    defaultOracleType: 3,
    decimals: 8,
  },
  {
    addresses: {
      1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      4: '0xc778417e063141139fce010982780140aa0cd5ab',
    },
    symbol: 'ETH',
    collateral: true,
    decimals: 18,
    defaultOracleType: 3,
    useWeth: false,
  },
  {
    addresses: {
      1: '0x0Ae055097C6d159879521C384F1D2123D1f195e6',
      4: '0xeED5B67BEf854D8Cb7FCa3e8220c54b3b48C461B',
    },
    symbol: 'STAKE',
    collateral: true,
    defaultOracleType: 3,
    decimals: 18,
  },
  {
    addresses: {
      1: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      4: '0x62289C64a943416205142BDCcF1D752792A687e3',
    },
    symbol: 'YFI',
    collateral: true,
    defaultOracleType: 3,
    decimals: 18,
  },
  {
    addresses: {
      1: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      4: '0xC5d9497Fd3fa13549026f2fC8048DbaE11D7114c',
    },
    symbol: 'MKR',
    collateral: true,
    defaultOracleType: 3,
    decimals: 18,
  },
  {
    addresses: {
      1: '0xd533a949740bb3306d119cc777fa900ba034cd52',
    },
    symbol: 'CRV',
    defaultOracleType: 3,
    collateral: true,
    decimals: 18,
  },
  {
    addresses: {
      1: '0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44',
    },
    symbol: 'KP3R',
    defaultOracleType: 3,
    collateral: true,
    decimals: 18,
  },
  {
    addresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    symbol: 'UNI',
    defaultOracleType: 3,
    collateral: true,
    decimals: 18,
  },
  {
    addresses: {
      1: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    },
    symbol: 'AAVE',
    defaultOracleType: 3,
    collateral: true,
    decimals: 18,
  },
  {
    addresses: {
      1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    },
    symbol: 'COMP',
    defaultOracleType: 3,
    collateral: true,
    decimals: 18,
  },
  {
    addresses: {
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    symbol: 'SNX',
    defaultOracleType: 3,
    collateral: true,
    decimals: 18,
  },
  {
    addresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    symbol: 'LINK',
    defaultOracleType: 3,
    collateral: true,
    decimals: 18,
  },
  {
    addresses: {
      1: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
    },
    symbol: 'UMA',
    defaultOracleType: 3,
    collateral: true,
    decimals: 18,
  },
  {
    addresses: {
      1: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
    },
    symbol: 'renBTC',
    defaultOracleType: 3,
    collateral: true,
    decimals: 18,
  },
  {
    addresses: {
      1: '0x584bc13c7d411c00c01a62e8019472de68768430',
    },
    symbol: 'HEGIC',
    defaultOracleType: 3,
    collateral: true,
    decimals: 18,
  },
  {
    addresses: {
      1: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
    },
    symbol: 'UNISWAP LP WBTC-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['WBTC', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0x87febfb3ac5791034fd5ef1a615e9d9627c2665d',
    },
    symbol: 'UNISWAP LP KP3R-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['KP3R', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0x3da1313ae46132a397d90d95b1424a9a7e3e0fce',
    },
    symbol: 'UNISWAP LP CRV-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['CRV', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0x3B3d4EeFDc603b232907a7f3d0Ed1Eea5C62b5f7',
    },
    symbol: 'UNISWAP LP STAKE-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['STAKE', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
    },
    symbol: 'UNISWAP LP YFI-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['YFI', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0xc2adda861f89bbb333c90c492cb837741916a225',
    },
    symbol: 'UNISWAP LP MKR-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['MKR', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
    },
    symbol: 'UNISWAP LP USDT-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['USDT', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    symbol: 'UNISWAP LP USDC-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['USDC', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    symbol: 'UNISWAP LP DAI-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['DAI', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    symbol: 'UNISWAP LP UNI-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['UNI', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    },
    symbol: 'UNISWAP LP LINK-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['LINK', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0xdfc14d2af169b0d36c4eff567ada9b2e0cae044f',
    },
    symbol: 'UNISWAP LP AAVE-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['AAVE', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0x81fbef4704776cc5bba0a5df3a90056d2c6900b3',
    },
    symbol: 'UNISWAP LP renBTC-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['renBTC', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0x43ae24960e5534731fc831386c07755a2dc33d47',
    },
    symbol: 'UNISWAP LP SNX-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['SNX', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0xcffdded873554f362ac02f8fb1f02e5ada10516f',
    },
    symbol: 'UNISWAP LP COMP-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['COMP', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0x88d97d199b9ed37c29d846d00d443de980832a22',
    },
    symbol: 'UNISWAP LP UMA-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['UMA', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0x1273ad5d8f3596a7a39efdb5a4b8f82e8f003fc3',
    },
    symbol: 'UNISWAP LP HEGIC-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['HEGIC', 'ETH'],
    decimals: 18,
  },
  {
    addresses: {
      1: '0xfd29420060464b69f2e1804b685354c31687121e',
    },
    symbol: 'UNISWAP LP COL-ETH',
    collateral: true,
    defaultOracleType: 4,
    poolTokens: ['COL', 'ETH'],
    decimals: 18,
  },
]

export function tokenByAddress(address) {
  return tokenList.find(t => Object.values(t.addresses).map(a => a.toLowerCase()).includes(address.toLowerCase()))
}
