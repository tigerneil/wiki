"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3586],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2005:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_label:"Upload Program",sidebar_position:5},s="Deploy smart contracts",p={unversionedId:"developing-contracts/deploy",id:"developing-contracts/deploy",title:"Deploy smart contracts",description:"Following the principles of Actor model for communication, creating a program is just one of the specific types of transactions that contain a WASM file as a payload.",source:"@site/docs/developing-contracts/deploy.md",sourceDirName:"developing-contracts",slug:"/developing-contracts/deploy",permalink:"/developing-contracts/deploy",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/developing-contracts/deploy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Upload Program",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Program testing",permalink:"/developing-contracts/testing"},next:{title:"Send a Message",permalink:"/developing-contracts/send-a-transaction"}},c=[{value:"Program submit events",id:"program-submit-events",children:[],level:2},{value:"How to deploy",id:"how-to-deploy",children:[{value:"Upload via Gear GUI",id:"upload-via-gear-gui",children:[],level:3},{value:"Via Polkadot.js.org",id:"via-polkadotjsorg",children:[],level:3},{value:"Via gear-js library",id:"via-gear-js-library",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-smart-contracts"},"Deploy smart contracts"),(0,o.kt)("p",null,"Following the principles of Actor model for communication, creating a program is just one of the specific types of transactions that contain a WASM file as a payload."),(0,o.kt)("p",null,"Uploading a new program (smart-contract) to the blockchain takes place by calling the custom extrinsic ",(0,o.kt)("inlineCode",{parentName:"p"},"gear.submitProgram(code, salt, initPayload, gasLimit, value)"),". Where:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"code: Bytes")," - binary WASM code."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"salt: Bytes")," - the random data that is added to the hashing process to force their uniqueness."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"initPayload: Bytes"),"- the init message payload that will be processed by the init() function during program initialization."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gasLimit: u64")," -  is the amount of gas that users are willing to spend on processing the upload of a new program."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"value: u128")," - the value that will be transferred to a balance of the newly created account for the program."),(0,o.kt)("h2",{id:"program-submit-events"},"Program submit events"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: while extrinsics represent information from the outside world, events represent information from the chain. Extrinsics can trigger events.")),(0,o.kt)("p",null,"The extrinsic called to submit a program triggers a series of events. They appear this way:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Gear network tries to post a message into the queue that aims to verify the source account has enough balance to cover sending of value and gas_limit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Block producer of Gear network posts the message into the block.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Gear network reserves a maximum amount of gas specified by the user to be spent on program initialization.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Program creation and an init message enqueue:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"MessageInfo example:\n\n{\n  messageId: 0x4b92a8589e06def4ce06257138ae6fd16c44d065abee9580b4b607fe3c85baa2\n  programId: 0xf33843d1481416928d0a432cf357ee3e4dc562a2a963505a8efec75febb4f9de\n  origin: 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d\n}\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Program initialization process. ",(0,o.kt)("inlineCode",{parentName:"li"},"gear.InitSuccess")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"gear.InitFailure")," events.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"programId")," is the unique address of the program.")),(0,o.kt)("h2",{id:"how-to-deploy"},"How to deploy"),(0,o.kt)("p",null,"There are several ways to deploy a program:"),(0,o.kt)("h3",{id:"upload-via-gear-gui"},"Upload via Gear GUI"),(0,o.kt)("p",null,"The easiest way to deploy the program is to use the \u201cUpload program\u201d option in the official website ",(0,o.kt)("a",{parentName:"p",href:"https://idea.gear-tech.io"},"idea.gear-tech.io"),"."),(0,o.kt)("h3",{id:"via-polkadotjsorg"},"Via Polkadot.js.org"),(0,o.kt)("p",null,"Also, you can use the standard GUI for substrate-based projects to submit a program. It's the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org"},"polkadot{.js}")," app. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"gear.submitProgram")," extrinsic in Developer -> Extrinsic menu."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img alt",src:a(9711).Z,width:"2872",height:"1418"})),(0,o.kt)("h3",{id:"via-gear-js-library"},"Via gear-js library"),(0,o.kt)("p",null,"Gear-js library provides a simple and intuitive way to connect GEAR Component APIs, including interaction with programs. More details ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.gear-tech.io/api/connect"},"Gear API"),"."))}u.isMDXComponent=!0},9711:function(e,t,a){t.Z=a.p+"assets/images/polkadot-gui-451dfaa4c075e0aeb8710a85a802a89b.png"}}]);