import iconGithub from "../svgs/icons/icon-github.svg"

export const algoritms = [
  {
    value: "SHA256d",
    miningPools: [
      {
        url: "https://myrsha256.miningfield.com",
        name: "Miningfield",
      },
      { url: "https://www.zpool.ca", name: "zpool" },
      { url: "https://www.multipool.us", name: "MultiPool" },
      { url: "https://zergpool.com/", name: "Zergpool" },
      { url: "http://blockmasters.co/", name: "Block Masters" },
      { url: "https://prohashing.com/", name: "Prohashing" },
    ],
  },
  {
    value: "scrypt",
    miningPools: [
      { url: "https://zergpool.com/", name: "Zergpool" },
      { url: "https://www.ahashpool.com/", name: "ahashpool.com" },
      { url: "http://blockmasters.co/", name: "Block Masters" },
      { url: "https://www.mining-dutch.nl/", name: "Mining Dutch" },
      { url: "https://prohashing.com/", name: "Prohashing" },
    ],
  },
  {
    value: "myr-groestl",
    softwares: [
      {
        label: "SGMiner",
        url: "https://github.com/sgminer-dev/sgminer",
        icon: iconGithub,
        example: {
          code:
            "sgminer --algoritm myriadcoin-groestl --no-extranonce -o {pool-URL} -O Username:Password",
        },
      },
      {
        label: "CCMiner",
        url: "https://github.com/sgminer-dev/sgminer",
        icon: iconGithub,
        example: {
          code: "ccminer -a myr-gr -o {pool-URL} -O Username:Password",
        },
      },
      {
        label: "CPUMiner-multi",
        url: "https://github.com/sgminer-dev/sgminer",
        icon: iconGithub,
        example: {
          code: "cpuminer -a myr-gr -o {pool-URL} -O Username:Password",
        },
      },
    ],
    miningPools: [
      {
        url: "https://myriadcoin-groestl.miningpoolhub.com",
        name: "Mining Pool Hub",
      },
      { url: "https://www.ahashpool.com/", name: "ahashpool.com" },
      { url: "https://www.mining-dutch.nl/", name: "Mining Dutch" },
      {
        url: "https://myriadcoin-groestl.miningpoolhub.com/",
        name: "Mining Pool Hub",
      },
      { url: "https://www.zpool.ca", name: "zpool" },
      { url: "https://zergpool.com/", name: "Zergpool" },
    ],
  },
  {
    value: "argon2d",
    softwares: [
      {
        label: "CPUMiner-opt",
        url: "https://bitcointalk.org/index.php?topic=1326803.0",
        icon: iconGithub,
        example: {
          code: "cpuminer -a argon2d4096 -o {pool-URL} -u username -p password",
        },
      },
    ],
    miningPools: [
      { url: "https://pokemongomongo.tk", name: "Pokemongomongo.tk Pool" },
      { url: "https://www.zpool.ca", name: "zpool" },
      { url: "https://zergpool.com/", name: "Zergpool" },
      { url: "http://p2p-spb.xyz:6002/", name: "p2p-spb.xyz" },
    ],
  },
  {
    value: "yescrypt",
    softwares: [
      {
        label: "CPUMiner-opt",
        url: "https://bitcointalk.org/index.php?topic=1326803.0",
        icon: iconGithub,
        example: {
          code: "cpuminer -a yescrypt -o {pool-URL} -O xmyaddress:home",
        },
      },
    ],
    miningPools: [
      { url: "https://pokemongomongo.tk", name: "Pokemongomongo.tk Pool" },
      {
        url: "https://myriadcoin-yescrypt.miningpoolhub.com/",
        name: "Mining Pool Hub",
      },
      { url: "https://www.zpool.ca", name: "zpool" },
      { url: "https://zergpool.com/", name: "Zergpool" },
      { url: "http://blockmasters.co/", name: "Block Masters" },
      { url: "https://www.ahashpool.com/", name: "ahashpool.com" },
      { url: "https://www.mining-dutch.nl/", name: "Mining Dutch" },
    ],
  },
]
