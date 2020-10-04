export const platforms = [
  {
    label: "Windows",
    value: "Windows",
    image: "windows",
    wallets: [
      {
        name: "Myriadcoin 0.16.4.1",
        github: "https://github.com/myriadteam/myriadcoin/",
        homepage: null,
        versions: [
          {
            name: "32-bit",
            url:
              "https://github.com/myriadteam/myriadcoin/releases/download/v0.16.4.1/myriadcoin-0.16.4.1-win32-setup.exe",
          },
          {
            name: "64-bit",
            url:
              "https://github.com/myriadteam/myriadcoin/releases/download/v0.16.4.1/myriadcoin-0.16.4.1-win64-setup.exe",
          },
        ],
      },
    ],
  },
  {
    label: "Mac OS",
    value: "Mac OS",
    image: "mac-os",
    wallets: [
      {
        name: "Myriadcoin 0.16.4.1",
        github: "https://github.com/myriadteam/myriadcoin/",
        homepage: null,
        versions: [
          {
            name: "DMG",
            url:
              "https://github.com/myriadteam/myriadcoin/releases/download/v0.16.4.1/myriadcoin-0.16.4.1-osx.dmg",
          },
        ],
      },
    ],
  },
  {
    label: "iOS",
    value: "iOS",
    image: "ios",
    wallets: [
      {
        name: "COINiD",
        github: "https://github.com/COINiD/COINiDWallet",
        homepage: "https://coinid.org",
        versions: [
          {
            name: "Wallet",
            url: "https://apps.apple.com/app/id1434967792",
          },
          {
            name: "Vault",
            url: "https://apps.apple.com/app/id1362831898",
          },
        ],
      },
    ],
  },
  {
    label: "Android",
    value: "Android",
    wallets: [
      {
        name: "COINiD",
        github: "https://github.com/COINiD/COINiDWallet",
        homepage: "https://coinid.org",
        versions: [
          {
            name: "Wallet",
            url:
              "https://play.google.com/store/apps/details?id=org.coinid.wallet.xmy",
          },
          {
            name: "Vault",
            url:
              "https://play.google.com/store/apps/details?id=org.coinid.vault",
          },
        ],
      },
    ],
  },
]
