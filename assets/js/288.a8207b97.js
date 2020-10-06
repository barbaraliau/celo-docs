(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{635:function(t,e,r){"use strict";r.r(e);var s=r(42),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"external-module-utils-signature-utils"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#external-module-utils-signature-utils"}},[t._v("#")]),t._v(' External module: "utils/signature-utils"')]),t._v(" "),r("h2",{attrs:{id:"index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),r("h3",{attrs:{id:"classes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#classes"}},[t._v("#")]),t._v(" Classes")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/docs/developer-resources/contractkit/reference/classes/_utils_signature_utils_.signature.html"}},[t._v("Signature")])],1)]),t._v(" "),r("h3",{attrs:{id:"functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/docs/developer-resources/contractkit/reference/modules/_utils_signature_utils_.html#const-bignumbertobuffer"}},[t._v("bigNumberToBuffer")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/developer-resources/contractkit/reference/modules/_utils_signature_utils_.html#const-buffertobignumber"}},[t._v("bufferToBigNumber")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/developer-resources/contractkit/reference/modules/_utils_signature_utils_.html#const-makecanonical"}},[t._v("makeCanonical")])],1)]),t._v(" "),r("h2",{attrs:{id:"functions-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functions-2"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),r("h3",{attrs:{id:"const-bignumbertobuffer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#const-bignumbertobuffer"}},[t._v("#")]),t._v(" "),r("code",[t._v("Const")]),t._v(" bigNumberToBuffer")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("bigNumberToBuffer")]),t._v("("),r("code",[t._v("input")]),t._v(": BigNumber, "),r("code",[t._v("lengthInBytes")]),t._v(": number): "),r("em",[t._v("Buffer")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signature-utils.ts#L27",target:"_blank",rel:"noopener noreferrer"}},[t._v("packages/contractkit/src/utils/signature-utils.ts:27"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("input")])]),t._v(" "),r("td",[t._v("BigNumber")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("lengthInBytes")])]),t._v(" "),r("td",[t._v("number")])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("Buffer")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"const-buffertobignumber"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#const-buffertobignumber"}},[t._v("#")]),t._v(" "),r("code",[t._v("Const")]),t._v(" bufferToBigNumber")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("bufferToBigNumber")]),t._v("("),r("code",[t._v("input")]),t._v(": Buffer): "),r("em",[t._v("BigNumber")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signature-utils.ts#L23",target:"_blank",rel:"noopener noreferrer"}},[t._v("packages/contractkit/src/utils/signature-utils.ts:23"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("input")])]),t._v(" "),r("td",[t._v("Buffer")])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("BigNumber")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"const-makecanonical"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#const-makecanonical"}},[t._v("#")]),t._v(" "),r("code",[t._v("Const")]),t._v(" makeCanonical")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("makeCanonical")]),t._v("("),r("code",[t._v("S")]),t._v(": BigNumber): "),r("em",[t._v("BigNumber")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signature-utils.ts#L14",target:"_blank",rel:"noopener noreferrer"}},[t._v("packages/contractkit/src/utils/signature-utils.ts:14"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v('If the signature is in the "bottom" of the curve, it is non-canonical\nNon-canonical signatures are illegal in Ethereum and therefore the S value\nmust be transposed to the lower intersection\nhttps://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki#Low_S_values_in_signatures')]),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("S")])]),t._v(" "),r("td",[t._v("BigNumber")])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("em",[t._v("BigNumber")])])])}),[],!1,null,null,null);e.default=a.exports}}]);