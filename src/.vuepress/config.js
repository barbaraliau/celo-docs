const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Celo',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/celo-docs/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    // repo: '',
    // editLinks: false,
    // docsDir: '',
    // editLinkText: '',
    sidebarDepth: 1,
    lastUpdated: false,
    nav: [
      {
        text: 'Introduction',
        link: '/docs/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Start Here',
          collapsable: true,
          children: [
            '',
            'overview'
          ]
        },
        {
          title: 'Celo Protocol',
          collapsable: false,
          path: '/docs/celo-codebase/protocol/',
          children: [
            {
              title: 'Consensus',
              path: '/docs/celo-codebase/protocol/consensus/',
              collapsable: true,
              children: [
                '/docs/celo-codebase/protocol/consensus/validator-set-differences',
                '/docs/celo-codebase/protocol/consensus/locating-nodes',
                '/docs/celo-codebase/protocol/consensus/ultralight-sync',
              ]
            },
            {
              title: 'Proof of Stake',
              path: '/docs/celo-codebase/protocol/proof-of-stake/',
              collapsable: true,
              children: [
                '/docs/celo-codebase/protocol/proof-of-stake/validator-groups',
                '/docs/celo-codebase/protocol/proof-of-stake/locked-gold',
                '/docs/celo-codebase/protocol/proof-of-stake/validator-elections',
                '/docs/celo-codebase/protocol/proof-of-stake/penalties',
                '/docs/celo-codebase/protocol/proof-of-stake/epoch-rewards',
                '/docs/celo-codebase/protocol/proof-of-stake/validator-rewards',
                '/docs/celo-codebase/protocol/proof-of-stake/locked-gold-rewards',
                '/docs/celo-codebase/protocol/proof-of-stake/community-fund',
                '/docs/celo-codebase/protocol/proof-of-stake/carbon-offsetting-fund',
              ]
            },
            '/docs/celo-codebase/protocol/governance',
            {
              title: 'Stability',
              path: '/docs/celo-codebase/protocol/stability/',
              collapsable: true,
              children: [
                '/docs/celo-codebase/protocol/stability/doto',
                '/docs/celo-codebase/protocol/stability/oracles',
                '/docs/celo-codebase/protocol/stability/stability-fees',
                '/docs/celo-codebase/protocol/stability/tobin-tax',
              ]
            },
            {
              title: 'Transactions',
              path: '/docs/celo-codebase/protocol/transactions/',
              collapsable: true,
              children: [
                '/docs/celo-codebase/protocol/transactions/native-currency',
                '/docs/celo-codebase/protocol/transactions/erc20-transaction-fees',
                '/docs/celo-codebase/protocol/transactions/gas-pricing',
                '/docs/celo-codebase/protocol/transactions/escrow',
                '/docs/celo-codebase/protocol/transactions/tx-comment-encryption',
                '/docs/celo-codebase/protocol/transactions/full-node-incentives',
              ]
            },
            {
              title: 'Identity',
              path: '/docs/celo-codebase/protocol/identity/',
              collapsable: true,
              children: [
                '/docs/celo-codebase/protocol/identity/phone-number-privacy',
                '/docs/celo-codebase/protocol/identity/metadata',
                '/docs/celo-codebase/protocol/identity/randomness',
              ]
            }
          ]
        },
        {
          title: 'Celo Wallet',
          collapsable: false,
          path: '/docs/celo-codebase/wallet/',
          children: [
            '/docs/celo-codebase/wallet/intro',
            '/docs/celo-codebase/wallet/how-the-wallet-works/'
          ]
        },
        {
          title: 'Disclaimers',
          collapsable: true,
          children: [
            'important-information/alfajores-testnet-disclaimer',
            'important-information/baklava-testnet-disclaimer',
            'important-information/mainnet-network-disclaimer',
          ]
        }
      ],
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ]
    }
  },

  base: '/celo-docs/',

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
