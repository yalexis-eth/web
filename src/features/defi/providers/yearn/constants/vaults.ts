import { ChainTypes } from '@shapeshiftoss/types'
import {
  DefiProvider,
  DefiType
} from 'features/defi/contexts/DefiManagerProvider/DefiManagerProvider'

export type SupportedYearnVault = {
  vaultAddress: string
  name: string
  symbol: string
  tokenAddress: string
  chain: ChainTypes
  provider: string
  type: string
}

// TODO: support caip2/19 and network type
export const SUPPORTED_VAULTS: SupportedYearnVault[] = [
  {
    vaultAddress: '0xa258c4606ca8206d8aa700ce2143d7db854d168c',
    name: 'WETH yVault 0.4.2',
    symbol: 'yvWETH',
    tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xdcd90c7f6324cfa40d7169ef80b12031770b4325',
    name: 'Curve stETH Pool yVault 0.3.0',
    symbol: 'yvCurve-stETH',
    tokenAddress: '0x06325440d014e39736583c165c2963ba99faf14e',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xda816459f1ab5631232fe5e97a05bbbb94970c95',
    name: 'DAI yVault 0.4.3',
    symbol: 'yvDAI',
    tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x27b7b1ad7288079a66d12350c828d3c00a6f07d7',
    name: 'Curve Iron Bank Pool yVault 0.3.2',
    symbol: 'yvCurve-IronBank',
    tokenAddress: '0x5282a4ef67d9c33135340fb3289cc1711c13638c',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xa354f35829ae975e850e23e9615b11da1b3dc4de',
    name: 'USDC yVault 0.4.3',
    symbol: 'yvUSDC',
    tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x5f18c75abdae578b483e5f43f12a39cf75b973a9',
    name: 'USDC yVault 0.3.0',
    symbol: 'yvUSDC',
    tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xb4ada607b9d6b2c9ee07a275e9616b84ac560139',
    name: 'Curve FRAX Pool yVault 0.3.5',
    symbol: 'yvCurve-FRAX',
    tokenAddress: '0xd632f22692fac7611d2aa1c0d552930d43caed3b',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x7da96a3891add058ada2e826306d812c638d87a7',
    name: 'USDT yVault 0.3.5',
    symbol: 'yvUSDT',
    tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x2dfb14e32e2f8156ec15a2c21c3a6c053af52be8',
    name: 'Curve MIM Pool yVault 0.4.3',
    symbol: 'yvCurve-MIM',
    tokenAddress: '0x5a6a4d54456819380173272a5e8e9b9904bdf41b',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x3b96d491f067912d18563d56858ba7d6ec67a6fa',
    name: 'Curve USDN Pool yVault 0.3.5',
    symbol: 'yvCurve-USDN',
    tokenAddress: '0x4f3e8f405cf5afc05d68142f3783bdfe13811522',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x67e019bfbd5a67207755d04467d6a70c0b75bf60',
    name: 'Curve ibEUR Pool yVault 0.4.3',
    symbol: 'yvCurve-ibEUR',
    tokenAddress: '0x19b080fe1ffa0553469d20ca36219f17fcf03859',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xa696a63cc78dffa1a63e9e50587c197387ff6c7e',
    name: 'WBTC yVault 0.3.5',
    symbol: 'yvWBTC',
    tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xdb25ca703181e7484a155dd612b06f57e12be5f0',
    name: 'YFI yVault 0.4.3',
    symbol: 'yvYFI',
    tokenAddress: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xa74d4b67b3368e83797a35382afb776baae4f5c8',
    name: 'Curve alUSD Pool yVault 0.3.5',
    symbol: 'yvCurve-alUSD',
    tokenAddress: '0x43b4fdfd4ff969587185cdb6f0bd875c5fc83f8c',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x595a68a8c9d5c230001848b69b1947ee2a607164',
    name: 'Curve ibGBP Pool yVault 0.4.3',
    symbol: 'yvCurve-ibGBP',
    tokenAddress: '0xd6ac1cb9019137a896343da59dde6d097f710538',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xd6ea40597be05c201845c0bfd2e96a60bacde267',
    name: 'Curve Compound Pool yVault 0.3.5',
    symbol: 'yvCurve-Compound',
    tokenAddress: '0x845838df265dcd2c412a1dc9e959c7d08537f8a2',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x625b7df2fa8abe21b0a976736cda4775523aed1e',
    name: 'Curve HBTC Pool yVault 0.3.3',
    symbol: 'yvCurve-HBTC',
    tokenAddress: '0xb19059ebb43466c323583928285a49f558e572fd',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x5fa5b62c8af877cb37031e0a3b2f34a78e3c56a6',
    name: 'Curve LUSD Pool yVault 0.3.5',
    symbol: 'yvCurve-LUSD',
    tokenAddress: '0xed279fdd11ca84beef15af5d39bb4d4bee23f0ca',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x528d50dc9a333f01544177a924893fa1f5b9f748',
    name: 'Curve ibKRW Pool yVault 0.4.3',
    symbol: 'yvCurve-ibKRW',
    tokenAddress: '0x8461a004b50d321cb22b7d034969ce6803911899',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xe14d13d8b3b85af791b2aadd661cdbd5e6097db1',
    name: 'YFI yVault 0.3.2',
    symbol: 'yvYFI',
    tokenAddress: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xe537b5cc158eb71037d4125bdd7538421981e6aa',
    name: 'Curve 3Crypto Pool yVault 0.4.3',
    symbol: 'yvCurve-3Crypto',
    tokenAddress: '0xc4ad29ba4b3c580e6d59105fff484999997675ff',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x25212df29073fffa7a67399acefc2dd75a831a1a',
    name: 'Curve EURS Pool yVault 0.3.5',
    symbol: 'yvCurve-EURS',
    tokenAddress: '0x194ebd173f6cdace046c53eacce9b953f28411d1',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xc4daf3b5e2a9e93861c3fbdd25f1e943b8d87417',
    name: 'Curve USDP Pool yVault 0.3.5',
    symbol: 'yvCurve-USDP',
    tokenAddress: '0x7eb40e450b9655f4b3cc4259bcc731c63ff55ae6',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x671a912c10bba0cfa74cfc2d6fba9ba1ed9530b2',
    name: 'LINK yVault 0.4.2',
    symbol: 'yvLINK',
    tokenAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x4b5bfd52124784745c1071dcb244c6688d2533d3',
    name: 'Curve Y Pool yVault 0.3.5',
    symbol: 'yUSD',
    tokenAddress: '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x84e13785b5a27879921d6f685f041421c7f482da',
    name: 'Curve 3pool yVault 0.3.5',
    symbol: 'yvCurve-3pool',
    tokenAddress: '0x6c3f90f043a72fa612cbac8115ee7e52bde6e490',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x8fa3a9ecd9efb07a8ce90a6eb014cf3c0e3b32ef',
    name: 'Curve BBTC Pool yVault 0.3.5',
    symbol: 'yvCurve-BBTC',
    tokenAddress: '0x410e3e86ef427e30b9235497143881f717d93c2a',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xf29ae508698bdef169b89834f76704c3b205aedf',
    name: 'SNX yVault 0.3.5',
    symbol: 'yvSNX',
    tokenAddress: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x986b4aff588a109c09b50a03f42e4110e29d353f',
    name: 'Curve sETH Pool yVault 0.3.2',
    symbol: 'yvCurve-sETH',
    tokenAddress: '0xa3d87fffce63b53e0d54faa1cc983b7eb0b74a9c',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xbcbb5b54fa51e7b7dc920340043b203447842a6b',
    name: 'Curve EURT-USD Pool yVault 0.4.3',
    symbol: 'yvCurve-EURTUSD',
    tokenAddress: '0x3b6831c0077a1e44ed0a21841c3bc4dc11bce833',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x3c5df3077bcf800640b5dae8c91106575a4826e6',
    name: 'Curve pBTC Pool yVault 0.3.5',
    symbol: 'yvCurve-pBTC',
    tokenAddress: '0xde5331ac4b3630f94853ff322b66407e0d6331e8',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x19d3364a399d251e894ac732651be8b0e4e85001',
    name: 'DAI yVault 0.3.0',
    symbol: 'yvDAI',
    tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xa9fe4601811213c340e850ea305481aff02f5b28',
    name: 'WETH yVault 0.3.2',
    symbol: 'yvWETH',
    tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xd8c620991b8e626c099eaab29b1e3eea279763bb',
    name: 'Curve MIM-UST Pool yVault 0.4.3',
    symbol: 'yvCurve-MIMUST',
    tokenAddress: '0x55a8a39bc9694714e2874c1ce77aa1e599461e18',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x6ede7f19df5df6ef23bd5b9cedb651580bdf56ca',
    name: 'Curve BUSD Pool yVault 0.3.5',
    symbol: 'yvCurve-BUSD',
    tokenAddress: '0x4807862aa8b2bf68830e4c8dc86d0e9a998e085a',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x5a770dbd3ee6baf2802d29a901ef11501c44797a',
    name: 'Curve sUSD Pool yVault 0.3.5',
    symbol: 'yvCurve-sUSD',
    tokenAddress: '0xc25a3a3b969415c80451098fa907ec722572917f',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xf2db9a7c0acd427a680d640f02d90f6186e71725',
    name: 'Curve LINK Pool yVault 0.3.5',
    symbol: 'yvCurve-LINK',
    tokenAddress: '0xcee60cfa923170e4f8204ae08b4fa6a3f5656f3a',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xd9788f3931ede4d5018184e198699dc6d66c1915',
    name: 'AAVE yVault 0.4.3',
    symbol: 'yvAAVE',
    tokenAddress: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xbfedbcbe27171c418cdabc2477042554b1904857',
    name: 'Curve rETH Pool yVault 0.3.5',
    symbol: 'yvCurve-rETH',
    tokenAddress: '0x53a901d48795c58f485cbb38df08fa96a24669d5',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x8414db07a7f743debafb402070ab01a4e0d2e45e',
    name: 'Curve sBTC Pool yVault 0.3.5',
    symbol: 'yvCurve-sBTC',
    tokenAddress: '0x075b1bb99792c9e1041ba13afef80c91a1e70fb3',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x490bd0886f221a5f79713d3e84404355a9293c50',
    name: 'Curve ibCHF Pool yVault 0.4.3',
    symbol: 'yvCurve-ibCHF',
    tokenAddress: '0x9c2c8910f113181783c249d8f6aa41b51cde0f0c',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xfbeb78a723b8087fd2ea7ef1afec93d35e8bed42',
    name: 'UNI yVault 0.3.5',
    symbol: 'yvUNI',
    tokenAddress: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x2a38b9b0201ca39b17b460ed2f11e4929559071e',
    name: 'Curve GUSD Pool yVault 0.3.5',
    symbol: 'yvCurve-GUSD',
    tokenAddress: '0xd2967f45c4f384deea880f807be904762a3dea07',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x378cb52b00f9d0921cb46dfc099cff73b42419dc',
    name: 'LUSD yVault 0.4.3',
    symbol: 'yvLUSD',
    tokenAddress: '0x5f98805a4e8be255a32880fdec7f6728c6568ba0',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x2d5d4869381c4fce34789bc1d38acce747e295ae',
    name: 'Curve RAI Pool yVault 0.4.3',
    symbol: 'yvCurve-RAI',
    tokenAddress: '0x6ba5b4e438fa0aaf7c1bd179285af65d13bd3d90',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xb8c3b7a2a618c552c23b1e4701109a9e756bab67',
    name: '1INCH yVault 0.3.2',
    symbol: 'yv1INCH',
    tokenAddress: '0x111111111117dc0aa78b770fa6a738034120c302',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xb4d1be44bff40ad6e506edf43156577a3f8672ec',
    name: 'Curve sAave Pool yVault 0.3.5',
    symbol: 'yvCurve-sAave',
    tokenAddress: '0x02d341ccb60faaf662bc0554d13778015d1b285c',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x30fcf7c6cdfc46ec237783d94fc78553e79d4e9c',
    name: 'Curve DUSD Pool yVault 0.3.5',
    symbol: 'yvCurve-DUSD',
    tokenAddress: '0x3a664ab939fd8482048609f652f9a0b0677337b9',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x6d765cbe5bc922694afe112c140b8878b9fb0390',
    name: 'SUSHI yVault 0.4.3',
    symbol: 'yvSUSHI',
    tokenAddress: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xe9dc63083c464d6edccff23444ff3cfc6886f6fb',
    name: 'Curve oBTC Pool yVault 0.3.5',
    symbol: 'yvCurve-oBTC',
    tokenAddress: '0x2fe94ea3d5d4a175184081439753de15aef9d614',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x39caf13a104ff567f71fd2a4c68c026fdb6e740b',
    name: 'Curve Aave Pool yVault 0.3.5',
    symbol: 'yvCurve-Aave',
    tokenAddress: '0xfd2a8fa60abd58efe3eee34dd494cd491dc14900',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x8cc94ccd0f3841a468184aca3cc478d2148e1757',
    name: 'Curve mUSD Pool yVault 0.3.5',
    symbol: 'yvCurve-mUSD',
    tokenAddress: '0x1aef73d49dedc4b1778d0706583995958dc862e6',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x8ee57c05741aa9db947a744e713c15d4d19d8822',
    name: 'Curve yBUSD Pool yVault 0.3.5',
    symbol: 'yvCurve-yBUSD',
    tokenAddress: '0x3b3ac5386837dc563660fb6a0937dfaa5924333b',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x132d8d2c76db3812403431facb00f3453fc42125',
    name: 'Curve ankrETH Pool yVault 0.3.5',
    symbol: 'yvCurve-ankrETH',
    tokenAddress: '0xaa17a236f2badc98ddc0cf999abb47d47fc0a6cf',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x23d3d0f1c697247d5e0a9efb37d8b0ed0c464f7f',
    name: 'Curve tBTC Pool yVault 0.3.5',
    symbol: 'yvCurve-tBTC',
    tokenAddress: '0x64eda51d3ad40d56b9dfc5554e06f94e1dd786fd',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x4a3fe75762017db0ed73a71c9a06db7768db5e66',
    name: 'COMP yVault 0.4.3',
    symbol: 'yvCOMP',
    tokenAddress: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xa5ca62d95d24a4a350983d5b8ac4eb8638887396',
    name: 'sUSD yVault 0.3.3',
    symbol: 'yvsUSD',
    tokenAddress: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x4560b99c904aad03027b5178cca81584744ac01f',
    name: 'Curve cvxCRV Pool yVault 0.4.3',
    symbol: 'yvCurve-cvxCRV',
    tokenAddress: '0x9d0464996170c6b9e75eed71c68b99ddedf279e8',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x6a5468752f8db94134b6508dabac54d3b45efce6',
    name: 'Curve CRV-ETH Pool yVault 0.4.3',
    symbol: 'yvCurve-CRVETH',
    tokenAddress: '0xed4064f376cb8d68f770fb1ff088a3d0f3ff5c4d',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x3d980e50508cfd41a13837a60149927a11c03731',
    name: 'Curve triCrypto Pool yVault 0.4.2',
    symbol: 'yvCurve-triCrypto',
    tokenAddress: '0xca3d75ac011bf5ad07a98d02f18225f9bd9a6bdf',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x1c6a9783f812b3af3abbf7de64c3cd7cc7d1af44',
    name: 'Curve UST Pool yVault 0.3.5',
    symbol: 'yvCurve-UST',
    tokenAddress: '0x94e131324b6054c0d789b190b2dac504e4361b53',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x16825039dfe2a5b01f3e1e6a2bbf9a576c6f95c4',
    name: 'Curve d3pool Pool yVault 0.4.3',
    symbol: 'yvCurve-d3pool',
    tokenAddress: '0xbaaa1f5dba42c3389bdbc2c9d2de134f5cd0dc89',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x7047f90229a057c13bf847c0744d646cfb6c9e1a',
    name: 'Curve renBTC Pool yVault 0.3.5',
    symbol: 'yvCurve-renBTC',
    tokenAddress: '0x49849c98ae39fff122806c06791fa73784fb3675',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x801ab06154bf539dea4385a39f5fa8534fb53073',
    name: 'Curve EURS-USDC Pool yVault 0.4.3',
    symbol: 'yvCurve-EURSUSDC',
    tokenAddress: '0x3d229e1b4faab62f621ef2f6a610961f7bd7b23b',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xf59d66c1d593fb10e2f8c2a6fd2c958792434b9c',
    name: 'Curve OUSD Pool yVault 0.4.3',
    symbol: 'yvCurve-OUSD',
    tokenAddress: '0x87650d7bbfc3a9f10587d7778206671719d9910d',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x59518884eebfb03e90a18adbaaab770d4666471e',
    name: 'Curve ibJPY Pool yVault 0.4.3',
    symbol: 'yvCurve-ibJPY',
    tokenAddress: '0x8818a9bb44fbf33502be7c15c500d0c783b73067',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x718abe90777f5b778b52d553a5abaa148dd0dc5d',
    name: 'Curve alETH Pool yVault 0.4.3',
    symbol: 'yvCurve-alETH',
    tokenAddress: '0xc4c319e2d4d66cca4464c0c2b32c9bd23ebe784e',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x0d4ea8536f9a13e4fba16042a46c30f092b06aa5',
    name: 'Curve EURT Pool yVault 0.4.3',
    symbol: 'yvCurve-EURT',
    tokenAddress: '0xfd5db7463a3ab53fd211b4af195c5bccc1a03890',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xc116df49c02c5fd147de25baa105322ebf26bd97',
    name: 'Curve RSV Pool yVault 0.3.5',
    symbol: 'yvCurve-RSV',
    tokenAddress: '0xc2ee6b0334c261ed60c72f6054450b61b8f18e35',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xfd0877d9095789caf24c98f7cce092fa8e120775',
    name: 'TUSD yVault 0.4.3',
    symbol: 'yvTUSD',
    tokenAddress: '0x0000000000085d4780b73119b644ae5ecd22b376',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xe11ba472f74869176652c35d30db89854b5ae84d',
    name: 'HEGIC yVault 0.3.0',
    symbol: 'yvHEGIC',
    tokenAddress: '0x584bc13c7d411c00c01a62e8019472de68768430',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x5ab64c599fcc59f0f2726a300b03166a395578da',
    name: 'Curve 3EUR Pool yVault 0.4.3',
    symbol: 'yvCurve-3EUR',
    tokenAddress: '0xb9446c4ef5ebe66268da6700d26f96273de3d571',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x054af22e1519b020516d72d749221c24756385c9',
    name: 'Curve HUSD Pool yVault 0.3.5',
    symbol: 'yvCurve-HUSD',
    tokenAddress: '0x5b5cfe992adac0c9d48e05854b2d91c73a003858',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xf8768814b88281de4f532a3beefa5b85b69b9324',
    name: 'Curve TUSD Pool yVault 0.3.5',
    symbol: 'yvCurve-TUSD',
    tokenAddress: '0xecd5e75afb02efa118af914515d6521aabd189f1',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x873fb544277fd7b977b196a826459a69e27ea4ea',
    name: 'RAI yVault 0.4.2',
    symbol: 'yvRAI',
    tokenAddress: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xcb550a6d4c8e3517a939bc79d0c7093eb7cf56b5',
    name: 'WBTC yVault 0.3.1',
    symbol: 'yvWBTC',
    tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x1b905331f7de2748f4d6a0678e1521e20347643f',
    name: 'Curve ibAUD Pool yVault 0.4.3',
    symbol: 'yvCurve-ibAUD',
    tokenAddress: '0x3f1b0278a9ee595635b61817630cc19de792f506',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x8b9c0c24307344b6d7941ab654b2aeee25347473',
    name: 'Curve EURN Pool yVault 0.4.3',
    symbol: 'yvCurve-EURN',
    tokenAddress: '0x3fb78e61784c9c637d560ede23ad57ca1294c14a',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x6fafca7f49b4fd9dc38117469cd31a1e5aec91f5',
    name: 'Curve USDM Pool yVault 0.4.3',
    symbol: 'yvCurve-USDM',
    tokenAddress: '0x5b3b5df2bf2b6543f78e053bd91c4bdd820929f1',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x1635b506a88fbf428465ad65d00e8d6b6e5846c3',
    name: 'Curve CVX-ETH Pool yVault 0.4.3',
    symbol: 'yvCurve-CVXETH',
    tokenAddress: '0x3a283d9c08e8b55966afb64c515f5143cf907611',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x5e69e8b51b71c8596817fd442849bd44219bb095',
    name: 'Curve ibBTC Pool yVault 0.4.3',
    symbol: 'yvCurve-ibBTC',
    tokenAddress: '0xfbdca68601f835b27790d98bbb8ec7f05fdeaa9b',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0x04d73c87b20d372cb3240c72eefb9d79ba5e4959',
    name: 'Curve UST Wormhole Pool yVault 0.4.3',
    symbol: 'yvCurve-UST',
    tokenAddress: '0xceaf7747579696a2f0bb206a14210e3c9e6fb269',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xc97511a1ddb162c8742d39ff320cfdcd13fbcf7e',
    name: 'Curve Paxos Pool yVault 0.4.3',
    symbol: 'yvCurve-USDP',
    tokenAddress: '0xc270b3b858c335b6ba5d5b10e2da8a09976005ad',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  },
  {
    vaultAddress: '0xd88dbba3f9c4391ee46f5ff548f289054db6e51c',
    name: 'Curve DOLA Pool yVault 0.4.3',
    symbol: 'yvCurve-DOLA',
    tokenAddress: '0xaa5a67c256e27a5d80712c51971408db3370927d',
    chain: ChainTypes.Ethereum,
    provider: DefiProvider.Yearn,
    type: DefiType.Vault
  }
]
