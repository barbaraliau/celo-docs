(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{722:function(e,t,o){"use strict";o.r(t);var a=o(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"key-management"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#key-management"}},[e._v("#")]),e._v(" Key management")]),e._v(" "),o("blockquote",[o("p",[e._v("Crypto is a tool for turning a whole swathe of problems into key management problems. Key management problems are way harder than (virtually all) cryptographers think.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://twitter.com/LeaKissner/status/1198595109756887040",target:"_blank",rel:"noopener noreferrer"}},[e._v("@LeaKissner on Twitter"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"philosophy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#philosophy"}},[e._v("#")]),e._v(" Philosophy")]),e._v(" "),o("p",[e._v("The Celo protocol was designed with the understanding that there is often an inherent tradeoff between the convenience of accessing a private key and the security with which that private key can be custodied. In general Celo is unopinionated about how keys are custodied, but also allows users to authorize private keys with specific, limited privileges. This allows users to custody each private key according to its sensitivity (i.e. what is the impact of this key being lost or stolen?) and usage patterns (i.e. how often and under which circumstances will this key need to be accessed).")]),e._v(" "),o("h2",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),o("p",[e._v("The table below outlines a summary of the various account roles in the Celo protocol. Note that these roles are often  "),o("em",[e._v("mutually exclusive")]),e._v(". An account that has been designated as one role can often not be used for a different purpose. Also note that under the hood, all of these accounts) are based on secp256k1 ECDSA private keys with the exception of the BLS signer. The different account roles are simply a concept encoded into the Celo proof-of-stake smart contracts, specifically "),o("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/common/Accounts.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("Accounts.sol"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("For more details on a specific key type, please see the more detailed sections below.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Role")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("Ledger compatible")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Celo Account")]),e._v(" "),o("td",[e._v("An account used to send transactions in the Celo protocol")]),e._v(" "),o("td",[e._v("Yes")])]),e._v(" "),o("tr",[o("td",[e._v("Locked Gold Account")]),e._v(" "),o("td",[e._v("Used to lock and unlock CELO and authorize signers")]),e._v(" "),o("td",[e._v("Yes")])]),e._v(" "),o("tr",[o("td",[e._v("Authorized vote signer")]),e._v(" "),o("td",[e._v("Can vote on behalf of a Locked Gold Account")]),e._v(" "),o("td",[e._v("Yes")])]),e._v(" "),o("tr",[o("td",[e._v("Authorized validator (group) signer")]),e._v(" "),o("td",[e._v("Can register and manage a validator group on behalf of a Locked Gold Account")]),e._v(" "),o("td",[e._v("Yes")])]),e._v(" "),o("tr",[o("td",[e._v("Authorized validator signer")]),e._v(" "),o("td",[e._v("Can register, manage a validator, and sign consensus messages on behalf of a Locked Gold Account")]),e._v(" "),o("td",[e._v("No")])]),e._v(" "),o("tr",[o("td",[e._v("Authorized validator BLS signer")]),e._v(" "),o("td",[e._v("Used to sign blocks as a validator")]),e._v(" "),o("td",[e._v("No")])]),e._v(" "),o("tr",[o("td",[e._v("Authorized attestation signer")]),e._v(" "),o("td",[e._v("Can sign attestation messages on behalf of a Locked Gold account")]),e._v(" "),o("td",[e._v("No")])])])]),e._v(" "),o("p",[e._v('{% hint style="warning" %}\nA Locked Gold Account may have at most one authorized signer of each type at any time. Once a signer is authorized, the only way to deauthorize that signer is to authorize a new signer that has never previously been used as an authorized signer or Locked Gold Account. It follows then that a newly deauthorized signer cannot be reauthorized.\n{% endhint %}')])])}),[],!1,null,null,null);t.default=n.exports}}]);