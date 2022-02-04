"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8539],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2603:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_label:"Prerequisites",sidebar_position:1},l="Gear Examples",p={unversionedId:"developing-contracts/examples/prerequisites",id:"developing-contracts/examples/prerequisites",title:"Gear Examples",description:"Gear provides a set of examples that can be used for your familiarization with writing programs on Gear or become the basis for your own dApp//github.com/gear-tech/apps.",source:"@site/docs/developing-contracts/examples/prerequisites.md",sourceDirName:"developing-contracts/examples",slug:"/developing-contracts/examples/prerequisites",permalink:"/developing-contracts/examples/prerequisites",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/developing-contracts/examples/prerequisites.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Prerequisites",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Send a Message",permalink:"/developing-contracts/send-a-transaction"},next:{title:"PING-PONG",permalink:"/developing-contracts/examples/ping"}},u=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"First steps",id:"first-steps",children:[],level:2},{value:"Building Rust Contract",id:"building-rust-contract",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gear-examples"},"Gear Examples"),(0,o.kt)("p",null,"Gear provides a set of examples that can be used for your familiarization with writing programs on Gear or become the basis for your own dApp: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/apps"},"https://github.com/gear-tech/apps"),"."),(0,o.kt)("p",null,"You can write your own smart contract or try to build from examples. Let's Rock!"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To develop your first Rust smart-contract you would have to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Rustup:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add wasm target to your toolchain:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup target add wasm32-unknown-unknown\n")),(0,o.kt)("h2",{id:"first-steps"},"First steps"),(0,o.kt)("p",null,"At least 10. x ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," versions must be installed"),(0,o.kt)("p",null,"To create our app project use the command ",(0,o.kt)("strong",{parentName:"p"},"cargo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new gear-app --lib\n")),(0,o.kt)("p",null,"The project structure is following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gear-app/\n  ---Cargo.toml\n  ---src\n  ------lib.rs\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," is a project manifest in Rust, it contains all metadata necessary for compiling the project.\nConfigure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," similarly to how it is configured ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/gear/blob/master/examples/ping/Cargo.toml"},"examples/ping/Cargo.toml"),";"),(0,o.kt)("h2",{id:"building-rust-contract"},"Building Rust Contract"),(0,o.kt)("p",null,"We should compile our smart contract in the app folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo +nightly build --target wasm32-unknown-unknown --release\n")),(0,o.kt)("p",null,"Our application should compile successfully and the final file ",(0,o.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/gear-app.wasm")," should appear."))}m.isMDXComponent=!0}}]);