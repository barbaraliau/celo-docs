(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{371:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"phone-number-privacy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phone-number-privacy"}},[e._v("#")]),e._v(" Phone Number Privacy")]),e._v(" "),r("p",[e._v("Celo's "),r("RouterLink",{attrs:{to:"/docs/celo-codebase/protocol/identity/"}},[e._v("identity protocol")]),e._v(" allows users to associate their phone number with one or more addresses on the Celo blockchain. This allows users to find each other on the Celo network using phone number instead of cumbersome hexadecimal addresses. The Oblivious Decentralized Identifier Service (ODIS) was created to help preserve the privacy of phone numbers and addresses.")],1),e._v(" "),r("h2",{attrs:{id:"understanding-the-problem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-problem"}},[e._v("#")]),e._v(" Understanding the problem")]),e._v(" "),r("p",[e._v("When a user sends a payment to someone in their phone's address book, the mobile client must look up the identifier for that phone number on-chain to find the corresponding Celo blockchain address. This address is needed in order to create a payment transaction. If cleartext phone numbers were used as network identifiers directly, then anyone would be able to associate all phone numbers with blockchain accounts and balances. If instead, the identifier was the hash of the recipient's phone number, attackers would still be able to associate phone numbers with accounts and balances via a "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Rainbow_table",target:"_blank",rel:"noopener noreferrer"}},[e._v("rainbow table attack"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"the-solution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-solution"}},[e._v("#")]),e._v(" The solution")]),e._v(" "),r("p",[e._v("The basis of the solution is to derive a user's identifier from both their phone number and a secret pepper that is provided by the Oblivious Decentralized Identifier Service (ODIS). In order to associate a phone number with a Celo blockchain address, the mobile wallet first queries ODIS for the pepper. It then uses the pepper to compute the unique identifier that's used on-chain.")]),e._v(" "),r("h3",{attrs:{id:"pepper-request-quota"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pepper-request-quota"}},[e._v("#")]),e._v(" Pepper request quota")]),e._v(" "),r("p",[e._v("ODIS imposes a quota on requests for peppers in order to limit the feasibility of rainbow table attacks. When ODIS receives a request for a pepper, it authenticates the request and ensures the requester has not exceeded their quota. Since blockchain accounts and phone numbers are not naturally Sybil-resistant, ODIS bases request quota on the following factors:")]),e._v(" "),r("ul",[r("li",[e._v("Requester transaction history")]),e._v(" "),r("li",[e._v("Requester phone number attestation count and success rate")]),e._v(" "),r("li",[e._v("Requester account balance")])]),e._v(" "),r("p",[e._v("The requirements for these factors are configured to make it prohibitively expensive to scrape large quantities of phone numbers while still allowing typical user flows to remain unaffected.")]),e._v(" "),r("h2",{attrs:{id:"oblivious-decentralized-identifier-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oblivious-decentralized-identifier-service"}},[e._v("#")]),e._v(" Oblivious Decentralized Identifier Service")]),e._v(" "),r("h3",{attrs:{id:"distributed-key-generation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#distributed-key-generation"}},[e._v("#")]),e._v(" Distributed Key Generation")]),e._v(" "),r("p",[e._v("For the sake of user privacy, no single party should have the ability to unilaterally compute the pepper for a given phone number. To ensure this, ODIS was designed to be decentralized across a set of reputable participants. Before the ODIS was deployed, a set of operators participated in a Distributed Key Generation (DKG) ceremony to generate parts of a shared secret. Details of the the DKG setup can be found "),r("a",{attrs:{href:"https://github.com/celo-org/celo-threshold-bls-rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("in the Celo Threshold BLS repository"),r("OutboundLink")],1),e._v(". Each ODIS node holds a share of the key which can be used to sign the response to the user. When enough of these signatures are combined, their combination can be used to derive a unique, deterministic phone number pepper. The number of key holders ("),r("em",[e._v("m")]),e._v(") and threshold of signatures required ("),r("em",[e._v("k")]),e._v(") are both configurable at the time of the DKG ceremony.")]),e._v(" "),r("h3",{attrs:{id:"rotating-keys"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rotating-keys"}},[e._v("#")]),e._v(" Rotating keys")]),e._v(" "),r("p",[e._v("In the case that a key is compromised or a new ODIS operator is added, it will be necessary to perform a key rotation. Before going over the key rotation process, let's take a look at the implications of a compromised key. If the number of keys compromised at a time is less than the threshold "),r("em",[e._v("k")]),e._v(", the attacker will not be able to reach a sufficient threshold to compute the pepper for all phone numbers. Similarly, as long as "),r("em",[e._v("k")]),e._v(" other keys remain uncompromised, good users will still be able to perform the pepper lookup as part of the ODIS. Therefore, in the case that a single key is compromised, user data will remain private and the service operational; however, it's important that we can detect and perform a key rotation before the number of keys compromised exceeds "),r("em",[e._v("k")]),e._v(" or "),r("em",[e._v("m - k + 1")]),e._v(' (whichever is lower). For example, if there are ten ODIS operators and the required threshold is three, then if three of them are compromised an attacker may compute the pepper for all phone numbers. If eight are compromised then an attacker may prevent the rest of the nodes (two in this case) from generating the pepper for users. Note that "compromised" entities in these examples could also be malicious or simply unavailable.')]),e._v(" "),r("p",[e._v("To rotate keys, a new DKG ceremony must be performed with at least "),r("em",[e._v("k")]),e._v(" of the "),r("em",[e._v("m")]),e._v(" original keys. These newly generated keys will not be compatible with the old keys; however if "),r("em",[e._v("k")]),e._v(" of the old keys are used, an attacker may still reach the necessary threshold.Therefore, it's extremely important that all of the old keys are destroyed after a successful key rotation. Note that a DKG ceremony also provides the opportunity to change the values for "),r("em",[e._v("k")]),e._v(" and "),r("em",[e._v("m")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"blinding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blinding"}},[e._v("#")]),e._v(" Blinding")]),e._v(" "),r("p",[e._v("When a client, like the Celo wallet, queries ODIS to retrieve a phone number pepper, the client first blinds the phone number locally. This blinding process preserves the privacy of the mobile number such that ODIS nodes cannot determine what number they're providing a pepper for; reducing risk of targeted censorship and further increasing privacy. After the application receives the response, it unblinds it to compute the pepper.")]),e._v(" "),r("h3",{attrs:{id:"combiner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#combiner"}},[e._v("#")]),e._v(" Combiner")]),e._v(" "),r("p",[e._v("To facilitate the multi-service communication needed for the K of M signing, ODIS includes a combiner service which performs this orchestration for the convenience of wallets and other clients building on Celo. Like ODIS signer nodes, the combiner only receives the blinded phone number and therefore cannot see what number it's handling. The combiner also validates the response from each signer to ensure a corrupt signer cannot corrupt the resulting pepper.")]),e._v(" "),r("p",[e._v("Anyone who wishes to participate in the ODIS service may run a combiner. Currently, cLabs operates one such combiner that may be used by other projects building on Celo.")]),e._v(" "),r("h2",{attrs:{id:"authentication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),r("p",[e._v("In order to measure the quota for a given requester, ODIS must check their account information on the Celo blockchain. To prove ownership over their account, the POST request contains an Authorization header with the signed message body. When ODIS nodes receive the request, it authenticates the user by recovering the message signer from the header and comparing it to the value in the message body.")]),e._v(" "),r("h2",{attrs:{id:"request-flow-diagram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-flow-diagram"}},[e._v("#")]),e._v(" Request Flow Diagram")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://storage.googleapis.com/celo-website/docs/ODIS-flow-diagram.svg",alt:"request flow diagram"}})]),e._v(" "),r("h2",{attrs:{id:"architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://storage.googleapis.com/celo-website/docs/ODIS-architecture-diagram.svg",alt:"architecture diagram"}})]),e._v(" "),r("p",[e._v("The hosted architecture is divided into two components, the Combiner and the Signers. Currently the combiner is a cloud function and the signers are independent NodeJs servers. Both services leverage the "),r("a",{attrs:{href:"https://github.com/celo-org/celo-threshold-bls-rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celo Threshold BLS library"),r("OutboundLink")],1),e._v(" which has been compiled to "),r("a",{attrs:{href:"https://github.com/celo-org/blind-threshold-bls-wasm",target:"_blank",rel:"noopener noreferrer"}},[e._v("a Web Assembly module"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("The combiner and signers maintain some minimal state in a SQL database, mainly related to quota tracking.")]),e._v(" "),r("p",[e._v("For storage of the BLS signing key, the signers currently support three cloud-based keystores: Azure Key Vault, AWS Secret Manager, and Google Secret Manager.")])])}),[],!1,null,null,null);t.default=o.exports}}]);