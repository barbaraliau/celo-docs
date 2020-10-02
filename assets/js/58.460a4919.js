(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{407:function(e,a,t){"use strict";t.r(a);var o=t(42),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"quick-start-for-celo-holders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-start-for-celo-holders"}},[e._v("#")]),e._v(" Quick Start for CELO Holders")]),e._v(" "),t("p",[e._v("If you are a self-custodying holder of CELO on the Celo "),t("RouterLink",{attrs:{to:"/docs/getting-started/mainnet.html"}},[e._v("Mainnet")]),e._v(", this guide will help you access your account and do the setup necessary to earn rewards on those funds.")],1),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("This guide assumes:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("You are self-custodying (you hold the private key to your address), and that you have provided that address directly to cLabs. If you are using a custody provider ("),t("a",{attrs:{href:"https://anchorage.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Anchorage"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://custody.coinbase.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coinbase"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://coinlist.co",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoinList"),t("OutboundLink")],1),e._v(", or others), please contact them for directions.")])]),e._v(" "),t("li",[t("p",[e._v("Your address is the beneficiary of a "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/release-gold.html"}},[e._v("ReleaseGold")]),e._v(" contract, which releases CELO programmatically to a beneficiary over a period of time.")],1)]),e._v(" "),t("li",[t("p",[e._v("You have been informed by cLabs that the "),t("code",[e._v("ReleaseGold")]),e._v(" instance corresponding to your address has been deployed.")])]),e._v(" "),t("li",[t("p",[e._v("You have your private key held on a "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/ledger.html"}},[e._v("Ledger Nano S or Ledger Nano X")]),e._v(" device, and you have a second such device available for managing a voting key. If you only have a single Ledger available, see "),t("a",{attrs:{href:"#Using-a-single-Ledger"}},[e._v("below")]),e._v(".")],1)])]),e._v(" "),t("p",[e._v('{% hint style="warning" %}\n'),t("strong",[e._v("Warning")]),e._v(": Self-custodying keys has associated security and financial risks. Loss or theft of keys can result in irrecovable loss of funds. This guide also requires technical knowledge. You should be comfortable with using a Command Line Interface (CLI) and understand the basics of how cryptographic network accounts work.\n{% endhint %}")]),e._v(" "),t("h2",{attrs:{id:"support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[e._v("#")]),e._v(" Support")]),e._v(" "),t("p",[e._v("If you have any questions or need assistance with these instructions, please contact cLabs or ask in the "),t("code",[e._v("#celo-holders")]),e._v(" channel on "),t("a",{attrs:{href:"https://chat.celo.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celo's Discord server"),t("OutboundLink")],1),e._v(". Remember that Discord is a public channel: never disclose recovery phrases (also known as backup keys, or mnemonics), private keys, unsantized log output, or personal information.")]),e._v(" "),t("p",[e._v("Please refer to the "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/ledger.html#Troubleshooting"}},[e._v("Ledger Troubleshooting")]),e._v(" for issues using Ledgers with the Celo CLI.")],1),e._v(" "),t("h2",{attrs:{id:"outline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),t("p",[e._v("In this guide, you will:")]),e._v(" "),t("ul",[t("li",[e._v("Install the Celo CLI (and optionally, a local node to connect to the network)")]),e._v(" "),t("li",[e._v("Access the "),t("code",[e._v("ReleaseGold")]),e._v(" account associated with your address using your existing Ledger")]),e._v(" "),t("li",[e._v("Authorize a voting key, which you will hold on a new, second Ledger")]),e._v(" "),t("li",[e._v("Lock some of the Gold in your "),t("code",[e._v("ReleaseGold")]),e._v(" account")]),e._v(" "),t("li",[e._v("Use that Locked Gold to vote for Validator Groups to operate Celo's "),t("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/proof-of-stake/"}},[e._v("Proof of Stake")]),e._v(" network (and in doing so be ready to receive epoch rewards of 6% when the community enables them in a forthcoming governance proposal)")],1)]),e._v(" "),t("h2",{attrs:{id:"preparing-ledgers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-ledgers"}},[e._v("#")]),e._v(" Preparing Ledgers")]),e._v(" "),t("p",[e._v("You will need:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Your "),t("strong",[e._v("Beneficiary Ledger")]),e._v(': One Ledger Nano S or X configured with your beneficiary key (used to produce the address you supplied cLabs). Once you have completed this guide, this will become a "cold wallet" that you can keep offline most of the time.')])]),e._v(" "),t("li",[t("p",[e._v("Your "),t("strong",[e._v("Vote Signer Ledger:")]),e._v(' One Ledger Nano S or X configured with a new, unused key. This will become a "warm wallet" you can use whenever you want to participate in validator elections or governance proposals.')])])]),e._v(" "),t("p",[e._v("As a first step, follow "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/ledger.html"}},[e._v("these instructions")]),e._v(" for both Ledgers to install the Ledger Celo app, obtain and verify the associated addresses, and (recommended) run a test transaction on the Alfajores test network.")],1),e._v(" "),t("p",[e._v('{% hint style="info" %}\nThe latest version of the Celo Ledger app is 1.0.3. If you are already using a Ledger with an earlier version installed, please [upgrade]](ledger.md).\n{% endhint %}')]),e._v(" "),t("p",[e._v("The remainder of this guide assumes you are using the first address available on each Ledger. You can add the flags described in "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/ledger.html"}},[e._v("these instructions")]),e._v(" to commands below to use different addresses.")],1),e._v(" "),t("h3",{attrs:{id:"using-a-single-ledger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-a-single-ledger"}},[e._v("#")]),e._v(" Using a single Ledger")]),e._v(" "),t("p",[e._v("If you only have a single Ledger, and are comfortable losing the security advantage of keeping the beneficiary key offline when voting, you can configure a second address on the same Ledger as your voting key.")]),e._v(" "),t("p",[e._v("First, read "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/ledger.html"}},[e._v("these instructions")]),e._v(" carefully. Then, whereever you see instructions to connect your Vote Signer Ledger, for each command line containing "),t("code",[e._v("--useLedger")]),e._v(" also add "),t("code",[e._v('--ledgerCustomAddresses "[1]"')]),e._v(". If in doubt, "),t("a",{attrs:{href:"#Support"}},[e._v("ask for help")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),t("p",[e._v("If you haven't already, open a terminal window and install the "),t("a",{attrs:{href:"https://docs.celo.org/command-line-interface/introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celo CLI"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @celo/celocli\n")])])]),t("p",[e._v("If you have previously installed the CLI, ensure that you are using version 0.0.47 or later:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli --version\n")])])]),t("p",[e._v("And if not, upgrade by running the same command as above.")]),e._v(" "),t("p",[e._v("You will now need to point the Celo CLI to a node that is synchronized with the "),t("RouterLink",{attrs:{to:"/docs/getting-started/mainnet.html"}},[e._v("Mainnet")]),e._v(" network. There are two options:")],1),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Local Celo Blockchain node")]),e._v(": You can run a full node on your local machine which will communicate\nwith other nodes and cryptographically verify all data it receives. Since this approach does not require you to trust the network, it is most secure.")]),e._v(" "),t("p",[e._v("To do this, follow the tutorial for "),t("RouterLink",{attrs:{to:"/docs/getting-started/running-a-full-node-in-mainnet.html"}},[e._v("running a full node")]),e._v(" (and make sure to pass "),t("code",[e._v("--nousb")]),e._v(").")],1),e._v(" "),t("p",[e._v("Then run:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli config:set --node http://localhost:8545\n")])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("cLabs-operated node")]),e._v(": As an alternative to using your own node, you can use an existing transaction\nnode service. Forno, operated by cLabs, is one example. While this approach does not require you to deploy a node locally, it requires you to trust cLabs and the remote Forno nodes (in the same way you would trust a centralized web service). An attacker may be able to manipulate data returned to you from the service, which the CLI may rely on to complete operations.")]),e._v(" "),t("p",[e._v("To use Forno, run this command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli config:set --node https://rc1-forno.celo-testnet.org\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"locate-and-verify-your-releasegold-contract-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#locate-and-verify-your-releasegold-contract-address"}},[e._v("#")]),e._v(" Locate and verify your "),t("code",[e._v("ReleaseGold")]),e._v(" contract address")]),e._v(" "),t("p",[e._v("First, copy the beneficiary address into the clipboard, and set it in an environment variable:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CELO_BENEFICIARY_ADDRESS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Beneficiary"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Next, you will find the address of the "),t("code",[e._v("ReleaseGold")]),e._v(" contract deployed for your beneficiary address. The "),t("code",[e._v("ReleaseGold")]),e._v(" contract has its own address and is separate from the beneficiary address, but there are certain aspects of it that can be controlled only by the beneficiary. For more details, please refer to the "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/release-gold.html"}},[e._v("Understanding ReleaseGold page")]),e._v(".")],1),e._v(" "),t("p",[e._v("Open the list of "),t("a",{attrs:{href:"https://storage.googleapis.com/celo-website/releasegold/CeloMainnetReleaseGoldAll.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("all ReleaseGold deployments"),t("OutboundLink")],1),e._v(" and locate your address (use Edit>Find in your browser, then paste the beneficiary address). Copy the matching value next to "),t("code",[e._v("ContractAddress")]),e._v(" into your clipboard.")]),e._v(" "),t("p",[e._v("If you cannot locate your address in these mappings, please contact cLabs.")]),e._v(" "),t("p",[e._v("If you have more than one beneficiary address, you'll want to step through this guide and complete the steps for each one separately.")]),e._v(" "),t("p",[e._v("Record the value of the "),t("code",[e._v("ContractAddress")]),e._v(" in an environment variable:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CELO_RG_ADDRESS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ContractAddress"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("You should find your beneficiary account already has a very small CELO balance to pay for transaction fees (values are shown in wei, so For example, 1 CELO = 1000000000000000000):")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli account:balance "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_BENEFICIARY_ADDRESS")]),e._v("\n")])])]),t("p",[e._v("Next, check the details of your "),t("code",[e._v("ReleaseGold")]),e._v(" contract:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli releasegold:show --contract "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v("\n")])])]),t("p",[e._v("Verify the configuration, balance, and beneficiary details. You can find an explanation of these parameters on the "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/release-gold.html"}},[e._v("ReleaseGold")]),e._v(" page.")],1),e._v(" "),t("p",[e._v("If any of these details appear to be incorrect, please contact cLabs, and do not proceed with the remainder of this guide.")]),e._v(" "),t("p",[e._v("If the configuration shows "),t("code",[e._v("canVote: true")]),e._v(", your contract allows you to participate in electing Validator Groups for Celo's Proof of Stake protocol, and potentially earn epoch rewards for doing so. Please continue to follow the remainder of this guide (or you can come back and continue at any time).")]),e._v(" "),t("p",[e._v("Otherwise, you're all set. You don't need to take any further action right now.")]),e._v(" "),t("h2",{attrs:{id:"authorize-vote-signer-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authorize-vote-signer-keys"}},[e._v("#")]),e._v(" Authorize Vote Signer Keys")]),e._v(" "),t("p",[e._v("To allow you to keep your Beneficiary Ledger offline on a day-to-day basis, it’s recommended to use a separate "),t("a",{attrs:{href:"https://docs.celo.org/validator-guide/summary/detailed#authorized-vote-signers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Authorized Vote Signer Account"),t("OutboundLink")],1),e._v(" that will vote on behalf of the beneficiary.")]),e._v(" "),t("p",[e._v('{% hint style="info" %}\nA vote signer can either be another Ledger device or a cloud Hardware Security Module (HSM). Explore '),t("RouterLink",{attrs:{to:"/docs/developer-resources/integrations/cloud-hsm.html"}},[e._v("this guide")]),e._v(" to learn more about cloud HSM setup and celocli integration.\n{% endhint %}")],1),e._v(" "),t("p",[e._v('This is a two step process. First, you create a "proof of possession" that shows that the holder of the beneficiary key also holds the vote signer key. Then, you will use that when the beneficiary signs a transaction authorizing the vote signer key. This proves to the Celo network that a single entity holds both keys.')]),e._v(" "),t("p",[e._v('{% hint style="info" %}\nConnect your '),t("strong",[e._v("Vote Signer Ledger")]),e._v(" now, unlock it, and open the Celo application.\n{% endhint %}")]),e._v(" "),t("p",[e._v("First obtain your vote signer address:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Vote Signer Ledger")]),e._v("\ncelocli account:list --useLedger\n")])])]),t("p",[e._v("Your address is listed under "),t("code",[e._v("Ledger Addresses")]),e._v(". Create an environment variable for your vote signer address.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CELO_VOTE_SIGNER_ADDRESS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("YOUR-VOTE-SIGNER-ADDRESS"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Then create the proof of possession:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Vote Signer Ledger")]),e._v("\ncelocli account:proof-of-possession --signer "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_VOTE_SIGNER_ADDRESS")]),e._v(" --account "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v(" --useLedger\n")])])]),t("p",[e._v("The Ledger "),t("code",[e._v("Celo app")]),e._v(" will ask you to confirm the transaction. Toggle right on the device until you see "),t("code",[e._v("Sign Message")]),e._v(" on screen. Press both buttons at the same time to confirm.")]),e._v(" "),t("p",[e._v("Take note of the signature produced by the "),t("code",[e._v("proof-of-possession")]),e._v(" command and create an environment variable for it.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CELO_VOTE_SIGNER_SIGNATURE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("YOUR-VOTE-SIGNER-SIGNATURE"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Now switch ledgers.")]),e._v(" "),t("p",[e._v('{% hint style="info" %}\nConnect your '),t("strong",[e._v("Beneficiary Ledger")]),e._v(" now, unlock it, and open the Celo application.\n{% endhint %}")]),e._v(" "),t("p",[e._v("Next, register the "),t("code",[e._v("ReleaseGold")]),e._v(" contract as a “Locked Gold” account:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Beneficiary Ledger")]),e._v("\ncelocli releasegold:create-account --contract "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v(" --useLedger\n")])])]),t("p",[e._v('You\'ll need to press right on the Ledger several times to review details of the transactions, then when the device says "Accept and send" press both buttons together.')]),e._v(" "),t("p",[e._v("Check that the "),t("code",[e._v("ReleaseGold")]),e._v(" contract address is associated with a registered Locked Gold Account:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli account:show "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v("\n")])])]),t("p",[e._v("Now, using the proof-of-possession you generated above, as the Locked Gold Account account, you will authorize the vote signing key to vote on the Locked Gold Account's behalf:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Beneficiary Ledger")]),e._v("\ncelocli releasegold:authorize --contract "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v(" --role"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("vote --signer "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_VOTE_SIGNER_ADDRESS")]),e._v(" --signature "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_VOTE_SIGNER_SIGNATURE")]),e._v(" --useLedger\n")])])]),t("p",[e._v("Finally, verify that your signer was correctly authorized:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli account:show "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v("\n")])])]),t("p",[e._v("The "),t("code",[e._v("vote")]),e._v(" address under "),t("code",[e._v("authorizedSigners")]),e._v(" should match "),t("code",[e._v("$CELO_VOTE_SIGNER_ADDRESS")]),e._v(".")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("ReleaseGold")]),e._v(" contract was funded with an additional 1 CELO that it sends to the first vote signer account to be authorized. This allows the vote signer account to cover transaction fees. You can confirm this:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli account:balance "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_VOTE_SIGNER_ADDRESS")]),e._v("\n")])])]),t("p",[e._v('{% hint style="warning" %}\n'),t("strong",[e._v("Warning")]),e._v(": If you authorize a second vote signer, it will not be automatically funded by the "),t("code",[e._v("ReleaseGold")]),e._v(" contract. You will need to transfer a fraction of 1 CELO from your beneficiary address to it in order to cover transaction fees when using it.\n{% endhint %}")]),e._v(" "),t("h2",{attrs:{id:"lock-celo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lock-celo"}},[e._v("#")]),e._v(" Lock CELO")]),e._v(" "),t("p",[e._v("To vote for Validator Groups and on governance proposals you will need to lock CELO. This is to keep the network secure by making sure each unit of CELO can only be used to vote once.")]),e._v(" "),t("p",[e._v("Specify the amount of CELO you wish to lock (don’t include the "),t("code",[e._v("< >")]),e._v("  braces). All amounts are given as wei, i.e units of 10^-18 CELO. For example, 1 CELO = 1000000000000000000.")]),e._v(" "),t("p",[e._v('{% hint style="warning" %}\nMake sure to leave at least 1 CELO unlocked to pay for transaction fees.\n{% endhint %}')]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Beneficiary Ledger")]),e._v("\ncelocli releasegold:locked-gold --contract "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v(" --action lock  --useLedger --value "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CELO-GOLD-AMOUNT"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Check that your CELO was successfully locked.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli lockedgold:show "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v("\n")])])]),t("h2",{attrs:{id:"vote-for-a-validator-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vote-for-a-validator-group"}},[e._v("#")]),e._v(" Vote for a Validator Group")]),e._v(" "),t("p",[e._v("CELO holders can vote for Validator Groups and not Validators directly. This is similar to delegating on other cryptographic networks. CELO holders who vote for an elected Validator Group may earn "),t("a",{attrs:{href:"https://docs.celo.org/getting-started/glossary#epoch-rewards",target:"_blank",rel:"noopener noreferrer"}},[e._v("epoch rewards"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/voting-validators.html"}},[e._v("Voting on Validators")]),e._v(" has useful background and guidance on how to select a Validator Group to vote for. Community Validator explorers include the "),t("a",{attrs:{href:"https://celo.org/validators/explore",target:"_blank",rel:"noopener noreferrer"}},[e._v("cLabs Validator explorer"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://thecelo.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bi23 Labs' "),t("code",[e._v("thecelo")]),e._v(" dashboard"),t("OutboundLink")],1),e._v(".")],1),e._v(" "),t("p",[e._v("You can also see registered Validator Groups through the Celo CLI. This will display a list of Validator Groups, the number of votes they have received, the number of additional votes they are able to receive, and whether or not they are eligible to elect Validators:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli election:list\n")])])]),t("p",[e._v("Once you have found one or more Validator Groups you’d like to vote for, create an environment variable for its Group address (don’t include the "),t("code",[e._v("< >")]),e._v(" braces):")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CELO_VALIDATOR_GROUP_ADDRESS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("VALIDATOR-GROUP-ADDRESS-TO-VOTE-FOR"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("For each vote you will need to select the amount of locked CELO you wish to vote with. You can lookup your balance again if you need to:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli account:balance "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v("\n")])])]),t("p",[e._v("All CELO amounts should be expressed in wei: that means 1 CELO = 1000000000000000000. Don’t include the "),t("code",[e._v("< >")]),e._v(" braces in the line below.")]),e._v(" "),t("p",[e._v("To vote, you will use your vote signer key, which is voting "),t("em",[e._v("on behalf of")]),e._v(" your Locked Gold account.")]),e._v(" "),t("p",[e._v('{% hint style="info" %}\nConnect your '),t("strong",[e._v("Vote Signer Ledger")]),e._v(" now, unlock it, and open the Celo application.\n{% endhint %}")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Vote Signer Ledger")]),e._v("\ncelocli election:vote --from "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_VOTE_SIGNER_ADDRESS")]),e._v(" --for "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_VALIDATOR_GROUP_ADDRESS")]),e._v(" --useLedger --value "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CELO-GOLD-AMOUNT"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Verify that your votes were cast successfully. Since your Vote Signer account votes on behalf of the Celo Locked Gold account, you want to check the election status for that account:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli election:show "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v(" --voter\n")])])]),t("p",[e._v("Your locked CELO votes should be displayed next to "),t("code",[e._v("pending")]),e._v(" under "),t("code",[e._v("votes")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"the-next-day-activate-your-vote"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-next-day-activate-your-vote"}},[e._v("#")]),e._v(" The next day: Activate your Vote")]),e._v(" "),t("p",[e._v("Your vote will apply starting at the next Validator Election, held once per day, and will continue to apply at each subsequent election until you change it.")]),e._v(" "),t("p",[e._v("After that election has occurred, you will need to activate your vote. This will allow you to receive epoch rewards if in that election (or at any subsequent one, until you change your vote) the Validator Group for which you voted elected at least one Validator. Rewards will get added to your votes for that Group and will compound automatically.")]),e._v(" "),t("p",[e._v('{% hint style="info" %}\nEpoch lengths in Mainnet are set to be the number of blocks produced in a day. As a result, votes may need to be activated up to 24 hours after they are cast.\n{% endhint %}')]),e._v(" "),t("p",[e._v("Check that your votes were cast in a previous epoch:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli election:show "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v(" --voter\n")])])]),t("p",[e._v("Your vote should be displayed next to "),t("code",[e._v("pending")]),e._v(" under "),t("code",[e._v("votes")]),e._v(".")]),e._v(" "),t("p",[e._v('{% hint style="info" %}\nConnect your '),t("strong",[e._v("Vote Signer Ledger")]),e._v(" now, unlock it, and open the Celo application.\n{% endhint %}")]),e._v(" "),t("p",[e._v("Now activate your votes:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Vote Signer Ledger")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You must do this in an epoch after the one you voted in: this may take up to 24h")]),e._v("\ncelocli election:activate --from "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_VOTE_SIGNER_ADDRESS")]),e._v(" --useLedger\n")])])]),t("p",[e._v("If you run "),t("code",[e._v("election:show")]),e._v(" again, your vote should be displayed next to "),t("code",[e._v("active")]),e._v(" under "),t("code",[e._v("votes")]),e._v(".")]),e._v(" "),t("p",[e._v("Congratulations! You're all set.")]),e._v(" "),t("p",[e._v("At the end of the epoch following your vote activation, you may receive voter rewards (if at least one Validator from the Validator Group for which you voted was elected).")]),e._v(" "),t("p",[e._v("You can see rewards using:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli rewards:show --voter "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v("\n")])])]),t("p",[e._v("Or by searching for your "),t("code",[e._v("ReleaseGold")]),e._v(" address on the "),t("a",{attrs:{href:"https://explorer.celo.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Block Explorer"),t("OutboundLink")],1),e._v(' and clicking the "Celo Info" tab.')]),e._v(" "),t("h2",{attrs:{id:"next-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),t("p",[e._v("You are now set up to participate in the Celo network!")]),e._v(" "),t("p",[e._v("You might want to read more about "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/voting-validators.html"}},[e._v("choosing a Validator Group")]),e._v(" to vote for, and how "),t("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/proof-of-stake/locked-gold-rewards.html"}},[e._v("voter rewards")]),e._v(" are calculated.  You can vote for up to ten different Groups from a single account.")],1),e._v(" "),t("p",[e._v("Now you've locked CELO, you can use it to participate in voting for or against "),t("RouterLink",{attrs:{to:"/docs/celo-holder-guide/voting-governance.html"}},[e._v("Governance proposals")]),e._v(". You can do this without affecting any vote you have made for Validator Groups.")],1),e._v(" "),t("p",[e._v("You can also read more about how Celo's "),t("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/proof-of-stake/"}},[e._v("Proof of Stake")]),e._v(" and on-chain "),t("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/governance.html"}},[e._v("Governance")]),e._v(" mechanisms work.")],1),e._v(" "),t("h2",{attrs:{id:"revoking-votes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#revoking-votes"}},[e._v("#")]),e._v(" Revoking Votes")]),e._v(" "),t("p",[e._v("At any point you can revoke votes cast for a Validator Group. For example, a Group may be performing poorly and affecting your rewards, and you may prefer to vote for another Group.")]),e._v(" "),t("p",[e._v('{% hint style="info" %}\nWhen you revoke your votes you will stop receiving voter rewards.\n{% endhint %}')]),e._v(" "),t("p",[e._v("Specify the amount of CELO you wish to revoke (don’t include the  "),t("code",[e._v("< >")]),e._v("  braces). All CELO amounts should be expressed in 18 decimal places. For example, 1 CELO = 1000000000000000000.")]),e._v(" "),t("p",[e._v('{% hint style="info" %}\nConnect your '),t("strong",[e._v("Vote Signer Ledger")]),e._v(" now, unlock it, and open the Celo application.\n{% endhint %}")]),e._v(" "),t("p",[e._v("Revoke votes for the Group:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Vote Signer Ledger")]),e._v("\ncelocli election:revoke --from "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_VOTE_SIGNER_ADDRESS")]),e._v(" --for "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_VALIDATOR_GROUP_ADDRESS")]),e._v(" --value "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CELO-GOLD-AMOUNT"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --useLedger\n")])])]),t("p",[e._v("You can immediately re-use this locked CELO to vote for another Group.")]),e._v(" "),t("h2",{attrs:{id:"unlocking-and-withdrawing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unlocking-and-withdrawing"}},[e._v("#")]),e._v(" Unlocking and Withdrawing")]),e._v(" "),t("p",[e._v("At some point, the terms of your "),t("code",[e._v("ReleaseGold")]),e._v(" contract will allow you to withdraw funds and transfer them to your beneficiary address.")]),e._v(" "),t("p",[e._v("There are actually several steps to this process:")]),e._v(" "),t("ol",[t("li",[e._v("First, revoke all outstanding votes as above (including for governance proposals)")]),e._v(" "),t("li",[e._v("Unlock the non-voting Locked Gold, starting a 72 hour unlocking period")]),e._v(" "),t("li",[e._v("After the three day unlocking period is complete, withdraw the CELO back to the "),t("code",[e._v("ReleaseGold")]),e._v(" contract")]),e._v(" "),t("li",[e._v("Assuming vesting and distribution requirements are met, withdraw the CELO to the beneficiary address")])]),e._v(" "),t("p",[e._v("Check the current status of outstanding votes:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli election:show "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v(" --voter\n")])])]),t("p",[e._v("You can view the balance of locked CELO:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("celocli account:balance "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v("\n")])])]),t("p",[e._v('{% hint style="info" %}\nConnect your '),t("strong",[e._v("Beneficiary Ledger")]),e._v(" now, unlock it, and open the Celo application.\n{% endhint %}")]),e._v(" "),t("p",[e._v("Assuming you have non-voting Locked Gold, you can initiate the process to unlock:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Beneficiary Ledger")]),e._v("\ncelocli releasegold:locked-gold --contract "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v(" --action unlock  --useLedger --value "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CELO-GOLD-AMOUNT"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("After the 72 hour unlocking period has passed, withdraw the CELO back to the "),t("code",[e._v("ReleaseGold")]),e._v(" contract:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Beneficiary Ledger")]),e._v("\ncelocli releasegold:locked-gold --contract "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v(" --action withdraw  --useLedger --value "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CELO-GOLD-AMOUNT"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Finally, request that the "),t("code",[e._v("ReleaseGold")]),e._v(" contract transfer an amount to your beneficiary address:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using the Beneficiary Ledger")]),e._v("\ncelocli releasegold:withdraw --contract "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$CELO_RG_ADDRESS")]),e._v(" --useLedger --value "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CELO-GOLD-AMOUNT"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("To vote with any CELO in your beneficiary account, you'll want to register it as a Locked Gold Acccount, authorize a new vote signing key for it, then lock CELO.")])])}),[],!1,null,null,null);a.default=s.exports}}]);