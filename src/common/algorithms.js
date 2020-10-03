import iconGithub from '../images/icons/icon-github.svg'

export const algorithms = [
  {
    value: 'SHA256d',
    label: 'SHA256d',
    purpose: 'ASIC miners',
    description: 'You may use any SHA256d compatible ASIC',
    miningPools: [
      {
        url: 'https://myrsha256.miningfield.com',
        name: 'Miningfield',
      },
      { url: 'https://www.zpool.ca', name: 'zpool' },
      { url: 'https://www.multipool.us', name: 'MultiPool' },
    ],
  },
  {
    value: 'scrypt',
    label: 'Scrypt',
    purpose: 'ASIC miners',
    description: 'You may use any Scrypt compatible ASIC',
    miningPools: [
      { url: 'https://pokemongomongo.tk', name: 'Pokemongomongo.tk Pool' },
      { url: 'https://www.zpool.ca', name: 'zpool' },
    ],
  },
  {
    value: 'myr-groestl',
    label: 'Myr-Groestl',
    purpose: 'GPU miners',
    description: 'If you mine using Myr-Groestl, you have a few options.',
    softwares: [
      {
        label: 'Bitcoin Talk',
        url: 'https://bitcointalk.org/index.php?topic=632503.0',
      },
      {
        label: 'SGMiner',
        url: 'https://github.com/sgminer-dev/sgminer',
        icon: iconGithub,
        example: {
          label: 'Suggested Command Line',
          code:
            'sgminer --algorithm myriadcoin-groestl --no-extranonce -o {pool-URL} -O Username:Password',
        },
      },
    ],
    miningPools: [
      {
        url: 'https://www.miners-pool.eu/pools/myriadcoin-groestl',
        name: 'Miners-pool eu',
      },
      {
        url: 'https://myriadcoin-groestl.miningpoolhub.com',
        name: 'Mining Pool Hub',
      },
      { url: 'nz.nutty.one:5545', name: 'Nutty P2Pool node' },
    ],
  },
  {
    value: 'argon2d',
    label: 'Argon 2D',
    purpose: 'CPU miners',
    description:
      'Argon2 is a key derivation function that was selected as the winner of the Password Hashing Competition in July 2015. Argon2d maximizes resistance to GPU cracking attacks. It accesses the memory array in a password dependent order, which reduces the possibility of time memory trade-off aka (TMTO) attacks, but introduces possible side-channel attacks.',
    softwares: [
      {
        label: 'CPUMiner-opt',
        url: 'https://bitcointalk.org/index.php?topic=1326803.0',
        icon: iconGithub,
        example: {
          label: 'Suggested Command Line',
          code: 'cpuminer -a argon2d4096 -o {pool-URL} -u username -p password',
        },
      },
    ],
    miningPools: [
      { url: 'https://pokemongomongo.tk', name: 'Pokemongomongo.tk Pool' },
    ],
  },
  {
    value: 'yescrypt',
    label: 'Yescrypt',
    purpose: 'CPU miners',
    description:
      'Yescrypt is a password-based key derivation function. It applies slow cryptographic operations to a password and salt, creating a key suitable for performing encryption or storage to validate the password in the future. Yescrypt algorithm is based on scrypt by Colin Percival of Tarsnap.',
    softwares: [
      {
        label: 'CPUMiner-opt',
        url: 'https://bitcointalk.org/index.php?topic=1326803.0',
        icon: iconGithub,
        example: {
          label: 'Suggested Command Line',
          code: 'cpuminer -a yescrypt -o {pool-URL} -O xmyaddress:home',
        },
      },
    ],
    miningPools: [
      { url: 'https://pokemongomongo.tk', name: 'Pokemongomongo.tk Pool' },
      {
        url: 'https://www.miners-pool.eu/pools/myriadcoin-yescrypt',
        name: 'Miners-pool eu',
      },
      {
        url: 'http://myriadcoin.tk',
        name: 'Myriadcoin.tk Pool',
      },
      {
        url: 'yescrypt.easymine.online:6000',
        name: 'Easymine P2Pool node',
      },
    ],
  },
]
