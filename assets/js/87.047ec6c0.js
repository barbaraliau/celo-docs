(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{436:function(e,a,t){"use strict";t.r(a);var s=t(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"blockchain-client-release-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-client-release-process"}},[e._v("#")]),e._v(" Blockchain Client Release Process")]),e._v(" "),t("h2",{attrs:{id:"versioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[e._v("#")]),e._v(" Versioning")]),e._v(" "),t("p",[e._v("Releases of celo-blockchain are numbered according to semantic versioning, as described at "),t("a",{attrs:{href:"https://semver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("semver.org"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("ul",[t("li",[e._v("New releases of celo-blockchain can be expected as follows:")]),e._v(" "),t("li",[e._v("Major releases: approximately yearly")]),e._v(" "),t("li",[e._v("Minor releases: approximately 4 times a year")]),e._v(" "),t("li",[e._v("Patch releases: as needed")])]),e._v(" "),t("p",[e._v("All builds are identified as "),t("code",[e._v("unstable")]),e._v(" (a development build) or "),t("code",[e._v("stable")]),e._v(" (a commit released as a particular version number). There should only ever exist one commit with a version "),t("code",[e._v("x.y.z-stable")]),e._v(" for any "),t("code",[e._v("(x, y, z)")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"signatures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signatures"}},[e._v("#")]),e._v(" Signatures")]),e._v(" "),t("p",[e._v("Artifacts produced by this build process (e.g. tags, binaries, Docker images) will be signed. Signatures are produced using any one of the core developer keys listed below.")]),e._v(" "),t("p",[e._v("Public keys for corek developers are hosted on celo.org and can be imported to "),t("code",[e._v("gpg")]),e._v(" with the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("gpg --auto-key-locate wkd --locate-keys "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$EMAIL")]),e._v("\n")])])]),t("p",[e._v("Currently hosted core developer keys include:")]),e._v(" "),t("ul",[t("li",[e._v("victor@clabs.co")]),e._v(" "),t("li",[e._v("mariano@clabs.co")])]),e._v(" "),t("h2",{attrs:{id:"documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),t("p",[e._v("Documentation for client features, such as APIs and commands, are maintained in the "),t("code",[e._v("docs")]),e._v(" directory within the "),t("code",[e._v("celo-blockchain")]),e._v(" repository. Documentation on protocol features, such as the proof-of-stake protocol, is hosted on "),t("a",{attrs:{href:"https://docs.celo.org/celo-codebase/protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs.celo.org"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"identifying-releases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#identifying-releases"}},[e._v("#")]),e._v(" Identifying releases:")]),e._v(" "),t("h3",{attrs:{id:"git-branches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-branches"}},[e._v("#")]),e._v(" Git branches")]),e._v(" "),t("p",[e._v("Each minor version of celo-blockchain has its own “release branch”, e.g. "),t("code",[e._v("release/1.0")]),e._v(".")]),e._v(" "),t("p",[e._v("Development is done on the "),t("code",[e._v("master")]),e._v(" branch, which corresponds to the next major or minor version. Changes to be included in a patch release of an existing minor version are cherry-picked to that existing release branch.")]),e._v(" "),t("h3",{attrs:{id:"git-tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-tags"}},[e._v("#")]),e._v(" Git tags")]),e._v(" "),t("p",[e._v("All releases should be tagged with the version number, e.g. "),t("code",[e._v("vX.Y.Z")]),e._v(". Each release should include a summary of the release contents, including links to pull requests and issues with detailed description of any notable changes.")]),e._v(" "),t("p",[e._v("Tags should be signed and can be verified with the following command.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" verify-tag vX.Y.Z\n")])])]),t("p",[e._v("On Github, each release tag should have attached the Geth binaries for supported platforms, along with signatures that can be used to verify the binary and Docker images.")]),e._v(" "),t("h3",{attrs:{id:"docker-tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-tags"}},[e._v("#")]),e._v(" Docker tags")]),e._v(" "),t("p",[e._v("Each released Docker image should should be tagged with it’s version number such that for release "),t("code",[e._v("x.y.z")]),e._v(", the image should have tags "),t("code",[e._v("x")]),e._v(", "),t("code",[e._v("x.y")]),e._v(", and "),t("code",[e._v("x.y.z")]),e._v(", with the first two tags potentially being moved from a previous image. Just as a Git tag "),t("code",[e._v("x.y.z")]),e._v(" immutably points to a commit hash, the Docker tag, "),t("code",[e._v("x.y.z")]),e._v(" should immutably point to an image hash.")]),e._v(" "),t("h2",{attrs:{id:"build-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-process"}},[e._v("#")]),e._v(" Build process")]),e._v(" "),t("h3",{attrs:{id:"binaries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binaries"}},[e._v("#")]),e._v(" Binaries")]),e._v(" "),t("p",[e._v("Binaries for common platforms are built automatically with "),t("a",{attrs:{href:"https://cloud.google.com/cloud-build",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Build"),t("OutboundLink")],1),e._v(" upon pushes to "),t("code",[e._v("master")]),e._v(" and all release branches.")]),e._v(" "),t("p",[e._v("A signature should be produced over the binary automatically built at the corresponding commit hash and included in the Github release.")]),e._v(" "),t("p",[e._v("Release binary signatures can be verified with the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("gpg --verify celo-blockchain-vX.Y.Z-stable.tar.gz.asc celo-blockchain-vX.Y.Z-stable.tar.gz\n")])])]),t("h3",{attrs:{id:"docker-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-images"}},[e._v("#")]),e._v(" Docker images")]),e._v(" "),t("p",[e._v("Docker images are built automatically with "),t("a",{attrs:{href:"https://cloud.google.com/cloud-build",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Build"),t("OutboundLink")],1),e._v(" upon pushes to "),t("code",[e._v("master")]),e._v(" and all release branches. Automated builds will be tagged in "),t("a",{attrs:{href:"https://cloud.google.com/container-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Container Registry"),t("OutboundLink")],1),e._v(" with the corresponding commit hash.")]),e._v(" "),t("p",[e._v("A signature should be produced over the image automatically built at the corresponding commit hash and included with the Github release.")]),e._v(" "),t("p",[e._v("Release image signatures can be verified with the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker save "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("docker image inspect us.gcr.io/celo-org/celo-node:X.Y.Z -f "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{{ .Id }}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" gpg --verify celo-blockchain-vX.Y.Z.docker.asc -\n")])])]),t("h2",{attrs:{id:"testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),t("p",[e._v("All builds of "),t("code",[e._v("celo-blockchain")]),e._v(" are automatically tested for performance and backwards compatibility in CI. Any regressions in these tests should be considered a blocker for a release.")]),e._v(" "),t("p",[e._v("Minor and major releases are expected to go through additional rounds of manual testing as needed to verify behavior under stress conditions, such as a network with faulty nodes, and poor network connectivity.")]),e._v(" "),t("h2",{attrs:{id:"promotion-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#promotion-process"}},[e._v("#")]),e._v(" Promotion process")]),e._v(" "),t("h3",{attrs:{id:"source-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-control"}},[e._v("#")]),e._v(" Source control")]),e._v(" "),t("p",[e._v("Patch releases should be constructed by cherry-picking all included commits from "),t("code",[e._v("master")]),e._v(" to the "),t("code",[e._v("release/x.y")]),e._v(" branch. The first commit of this process should change the version number encoded in the source from "),t("code",[e._v("x.y.z-stable")]),e._v(" to "),t("code",[e._v("x.y.z+1-unstable")]),e._v(" and the final commit should change the version number to "),t("code",[e._v("x.y.z+1-stable")]),e._v(".")]),e._v(" "),t("p",[e._v("Major and minor releases should be constructed by pushing a commit to the "),t("code",[e._v("master")]),e._v(" branch to change the encoded version number from "),t("code",[e._v("x.y.z-unstable")]),e._v(" to "),t("code",[e._v("x.y.z-stable")]),e._v(". A "),t("code",[e._v("release/x.y")]),e._v(" branch should be created from this commit.  The next commit must change the version number from "),t("code",[e._v("x.y.z-stable")]),e._v(" to "),t("code",[e._v("x.y+1.0-unstable")]),e._v(", or "),t("code",[e._v("x+1.0.0-unstable")]),e._v(" if the next planned release is a major release.")]),e._v(" "),t("p",[e._v("Only one commit should ever have a “stable” tag at any given version number. When that commit is created, a tag should be added along with release notes. Once the tag is published it should not be reused for any further release or changes.")]),e._v(" "),t("h3",{attrs:{id:"distribution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#distribution"}},[e._v("#")]),e._v(" Distribution")]),e._v(" "),t("p",[e._v("Distribution of an image should occur along the following schedule:")]),e._v(" "),t("table",[t("tr",[t("td",[e._v("Date")]),e._v(" "),t("td",[e._v("Action")])]),e._v(" "),t("tr",[t("td",[e._v("T")]),e._v(" "),t("td",[t("ol",[t("li",[e._v("Publish the Git tag and signed release artifacts.")]),e._v(" "),t("li",[e._v("Communicate T+1w Baklava upgrade date.")]),e._v(" "),t("li",[e._v("Tag released Docker image with "),t("code",[e._v("baklava")]),e._v(".")])])])]),e._v(" "),t("tr",[t("td",[e._v("T+1w")]),e._v(" "),t("td",[t("ol",[t("li",[e._v("Confirm Baklava users have upgraded without issues")]),e._v(" "),t("li",[e._v("If release introduces a hard fork")]),e._v(" "),t("ol",[t("li",[e._v("Ensure at least a quorum of the validator set has upgraded")]),e._v(" "),t("li",[e._v("Submit governance proposal to increment minimum client version")])]),e._v(" "),t("li",[e._v("Communicate T+2w Alfajores upgrade date")]),e._v(" "),t("li",[e._v("Tag released Docker image with "),t("code",[e._v("alfajores")])])])])]),e._v(" "),t("tr",[t("td",[e._v("T+2w")]),e._v(" "),t("td",[t("ol",[t("li",[e._v("Confirm Alfajores users have upgraded without issues")]),e._v(" "),t("li",[e._v("If release introduces a hard fork")]),e._v(" "),t("ol",[t("li",[e._v("Ensure at least a quorum of the validator set has upgraded")]),e._v(" "),t("li",[e._v("Submit governance proposal to increment minimum client version ")])]),e._v(" "),t("li",[e._v("Communicate T+3w Mainnet upgrade date")]),e._v(" "),t("li",[e._v("Tag released Docker image with "),t("code",[e._v("mainnet")]),e._v(" and "),t("code",[e._v("latest")])])])])]),e._v(" "),t("tr",[t("td",[e._v("T+3w")]),e._v(" "),t("td",[t("ol",[t("li",[e._v("Confirm Mainnet users have upgraded without issues")]),e._v(" "),t("li",[e._v("If release introduces a hard fork")]),e._v(" "),t("ol",[t("li",[e._v("Ensure at least a quorum of the validator set has upgraded")]),e._v(" "),t("li",[e._v("Submit governance proposal to increment minimum client version")])])])])])]),e._v(" "),t("h3",{attrs:{id:"emergency-patches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emergency-patches"}},[e._v("#")]),e._v(" Emergency Patches")]),e._v(" "),t("p",[e._v("Bugs which affect the security, stability, or core functionality of the network may need to be released outside the standard release cycle. In this case, an emergency patch release should be created on top of all supported minor releases which contains the minimal change and corresponding test for the fix.")]),e._v(" "),t("p",[e._v("If the issue is not exploitable, release notes should describe the issue in detail and the image should be distributed publicly. If network stability is at risk, a Governance proposal may be submitted to increment the minimum client version.")]),e._v(" "),t("p",[e._v("If the issue is exploitable and mitigations are not readily available, a patch should be prepared privately and signed binaries should be distributed from private commits. Establishing trust is key to pushing out the fix. An audit from a reputable third party may be contracted to verify the release to help earn that trust. A hotfix should be proposed to raise the minimum client version number to the patched release and then patch details made public.")]),e._v(" "),t("blockquote",[t("p",[e._v("Pushing an upgrade with this process will be disruptive to any nodes that do not upgrade quickly. It should "),t("em",[e._v("only")]),e._v(" be used when the circumstances require it.")])]),e._v(" "),t("h2",{attrs:{id:"vulnerability-disclosure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vulnerability-disclosure"}},[e._v("#")]),e._v(" Vulnerability Disclosure")]),e._v(" "),t("p",[e._v("Vulnerabilities in "),t("code",[e._v("celo-blockchain")]),e._v(" releases should be disclosed according to the "),t("a",{attrs:{href:"https://github.com/celo-org/celo-blockchain/blob/master/SECURITY.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("security policy"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),t("p",[e._v("None")]),e._v(" "),t("h2",{attrs:{id:"dependents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependents"}},[e._v("#")]),e._v(" Dependents")]),e._v(" "),t("p",[e._v("None")])])}),[],!1,null,null,null);a.default=r.exports}}]);