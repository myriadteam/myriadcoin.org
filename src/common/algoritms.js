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
    ],
  },
  {
    value: "scrypt",
    miningPools: [
      { url: "https://pokemongomongo.tk", name: "Pokemongomongo.tk Pool" },
      { url: "https://www.zpool.ca", name: "zpool" },
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
        url: "https://www.miners-pool.eu/pools/myriadcoin-groestl",
        name: "Miners-pool eu",
      },
      {
        url: "https://myriadcoin-groestl.miningpoolhub.com",
        name: "Mining Pool Hub",
      },
      { url: "nz.nutty.one:5545", name: "Nutty P2Pool node" },
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
        url: "https://www.miners-pool.eu/pools/myriadcoin-yescrypt",
        name: "Miners-pool eu",
      },
      {
        url: "http://myriadcoin.tk",
        name: "Myriadcoin.tk Pool",
      },
      {
        url: "yescrypt.easymine.online:6000",
        name: "Easymine P2Pool node",
      },
    ],
  },
]
