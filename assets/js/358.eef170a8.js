(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{705:function(e,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-an-account-and-funds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-an-account-and-funds"}},[e._v("#")]),e._v(" Getting an Account and Funds")]),e._v(" "),a("h2",{attrs:{id:"try-the-celo-wallet-with-a-funded-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#try-the-celo-wallet-with-a-funded-account"}},[e._v("#")]),e._v(" Try the Celo Wallet with a Funded Account")]),e._v(" "),a("p",[e._v("To start experimenting with the Alfajores Testnet, you will first need to get a funded account.")]),e._v(" "),a("p",[e._v('{% hint style="warning" %}\nAlfajores Testnet accounts hold no real world economic value. The testnet\'s data may be reset on a regular basis. This will erase your accounts, their balance and your transaction history.\n{% endhint %}')]),e._v(" "),a("p",[e._v("Getting an account is really being given or generating a public-private keypair. This gives you control of balances accessible with the address corresponding to that key. For CELO, this is a native balance stored at the account whose address matches your key. For Celo Dollars, an ERC-20 token, the StableCoin smart contract maintains in its storage a mapping of the balance of each address.")]),e._v(" "),a("h3",{attrs:{id:"get-an-invitation-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-an-invitation-code"}},[e._v("#")]),e._v(" Get an Invitation Code")]),e._v(" "),a("p",[e._v("If you have access to an Android device and would like to try the Celo Wallet, the fastest way to get started is to get an invitation code, pre-funded with 10 Celo Dollars.")]),e._v(" "),a("p",[e._v("Visit the "),a("a",{attrs:{href:"https://celo.org/build/wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celo Wallet Page"),a("OutboundLink")],1),e._v(" and enter your phone number to be messaged an invitation. Following this personalized URL will download the "),a("a",{attrs:{href:"https://play.google.com/store/apps/details?id=org.celo.mobile.alfajores",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celo Wallet App"),a("OutboundLink")],1),e._v(" from the Play Store, generate an account only you have access to, and transfer escrowed funds into it.")]),e._v(" "),a("h3",{attrs:{id:"restore-from-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore-from-backup"}},[e._v("#")]),e._v(" Restore from backup")]),e._v(" "),a("p",[e._v("If you already have an account and the corresponding seed phrase, you can follow the instructions in the "),a("a",{attrs:{href:"https://play.google.com/store/apps/details?id=org.celo.mobile.alfajores",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celo Wallet App"),a("OutboundLink")],1),e._v(" to regain access to your account. You can also receive a seed phrase for a new, funded account by visiting the "),a("a",{attrs:{href:"https://celo.org/build/wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celo Wallet Page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"creating-an-empty-account-with-the-celo-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-empty-account-with-the-celo-client"}},[e._v("#")]),e._v(" Creating an empty account with the Celo Client")]),e._v(" "),a("p",[e._v("You can also use the Celo Blockchain client to create and manage account keypairs.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Prerequisites")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("You have Docker installed.")]),e._v(" If you don’t have it already, follow the instructions here: "),a("a",{attrs:{href:"https://www.docker.com/get-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("Get Started with Docker"),a("OutboundLink")],1),e._v(". It will involve creating or signing in with a Docker account, downloading a desktop app, and then launching the app to be able to use the Docker CLI. If you are running on a Linux server, follow the instructions for your distro "),a("a",{attrs:{href:"https://docs.docker.com/install/#server",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". You may be required to run Docker with sudo depending on your installation environment.")])]),e._v(" "),a("p",[e._v("Create and cd into the directory where you want to store the keypair. You can name this whatever you’d like, but here’s a default you can use:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" celo-data-dir $ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" celo-data-dir\n")])])]),a("p",[e._v("Create an account by running this command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(":/root/.celo --rm -it us.gcr.io/celo-org/celo-node:alfajores account new\n")])])]),a("p",[e._v("It will prompt you for a passphrase, ask you to confirm it, and then will output your account address:")]),e._v(" "),a("p",[a("code",[e._v("Address: <YOUR-ACCOUNT-ADDRESS>")])]),e._v(" "),a("p",[e._v("This creates a keypair and stores it. Save this address to an environment variable, so that you can reference it later:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CELO_ACCOUNT_ADDRESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("YOUR-ACCOUNT-ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h2",{attrs:{id:"add-funds-to-an-existing-account-with-the-faucet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-funds-to-an-existing-account-with-the-faucet"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Add funds to an existing account with the Faucet")])]),e._v(" "),a("p",[e._v("The Alfajores Testnet Faucet is an easy way to get more funds deposited to an account, however it was created.")]),e._v(" "),a("p",[e._v("Visit "),a("a",{attrs:{href:"https://celo.org/build/faucet",target:"_blank",rel:"noopener noreferrer"}},[e._v("celo.org/build/faucet"),a("OutboundLink")],1),e._v(", and enter your account address. If you are using the Celo Wallet, you can find your account address in the Settings page. Complete the Captcha, and click 'Add Funds'.")]),e._v(" "),a("p",[e._v("Each time you complete a faucet request, your account is funded with an additional 10 Celo Dollars and 5 CELO.")]),e._v(" "),a("p",[e._v("You may do this multiple times if you require more funds.")])])}),[],!1,null,null,null);t.default=r.exports}}]);