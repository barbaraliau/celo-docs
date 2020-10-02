(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{694:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"typescript-style-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-style-guide"}},[t._v("#")]),t._v(" TypeScript Style Guide")]),t._v(" "),s("h3",{attrs:{id:"function-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-parameters"}},[t._v("#")]),t._v(" Function parameters")]),t._v(" "),s("p",[s("em",[t._v("Vanilla parameters")]),t._v(" are preferred over Object Destructuring.")]),t._v(" "),s("p",[t._v("Example of Vanilla parameters:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export const tokenFetchFactory = (\n  actionName,\n  contractGetter,\n  actionCreator,\n  tag,\n)\n")])])]),s("p",[t._v("Example of Object Destructuring:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export const tokenFetchFactory = ({\n  actionName,\n  contractGetter,\n  actionCreator,\n  tag,\n}: TokenFetchFactory)\n")])])]),s("p",[t._v("This is for simplicity, with fewer lines and some evidence shows it's "),s("a",{attrs:{href:"https://codeburst.io/es6s-function-destructuring-assignment-is-not-free-lunch-19caacc18137",target:"_blank",rel:"noopener noreferrer"}},[t._v("faster"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"function-definitions-arrow-functions-vs-vanilla-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-definitions-arrow-functions-vs-vanilla-functions"}},[t._v("#")]),t._v(" Function definitions: Arrow functions vs Vanilla functions")]),t._v(" "),s("p",[t._v("In the root scope, "),s("em",[t._v("Vanilla functions")]),t._v(" are preferred over Arrow functions.")]),t._v(" "),s("p",[t._v("This is because it's consistent with generator functions, simpler to understand, easier to debug, supports recursion and functions are hoisted, meaning no concern about definition order.")]),t._v(" "),s("h3",{attrs:{id:"class-methods-anonymous-functions-vs-native-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-methods-anonymous-functions-vs-native-methods"}},[t._v("#")]),t._v(" Class methods: anonymous functions vs native methods")]),t._v(" "),s("p",[t._v("Anonymous functions are the preferred way. As shown in the example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class myClass {\n    myMethod = () => {}\n}\n")])])]),s("h3",{attrs:{id:"exporting-variables-only-for-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exporting-variables-only-for-testing"}},[t._v("#")]),t._v(" Exporting variables only for testing")]),t._v(" "),s("p",[t._v("When a variable is exported only for the propose of getting accessed by tests, a low dash should be added before the name.")]),t._v(" "),s("p",[t._v("For example instead of doing this:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export myFunction{...}\n")])])]),s("p",[t._v("This is the preferred way:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const myFunction{...}\nexport _myFunction = myFunction\n")])])]),s("p",[t._v("In case it's necessary, a decorator could wrap the exported function to allow it only to be accessed during testing.")])])}),[],!1,null,null,null);e.default=n.exports}}]);