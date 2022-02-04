"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[611],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return s}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),s=a,d=m["".concat(l,".").concat(s)]||m[s]||g[s]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3867:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_label:"cargo-program \u5de5\u5177",sidebar_position:5},l="`cargo-program` \u5de5\u5177",p={unversionedId:"developing-contracts/cargo-program",id:"developing-contracts/cargo-program",title:"`cargo-program` \u5de5\u5177",description:"cargo-program \u662f Rust \u7684 cargo \u6269\u5c55\u7a0b\u5e8f\uff0c\u65e8\u5728\u7b80\u5316 Gear \u7a0b\u5e8f\u7684\u5f00\u53d1\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/developing-contracts/cargo-program.md",sourceDirName:"developing-contracts",slug:"/developing-contracts/cargo-program",permalink:"/zh-cn/developing-contracts/cargo-program",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/developing-contracts/cargo-program.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"cargo-program \u5de5\u5177",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Program testing",permalink:"/zh-cn/developing-contracts/testing"},next:{title:"\u524d\u671f\u51c6\u5907",permalink:"/zh-cn/developing-contracts/examples/prerequisites"}},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Gear \u7a0b\u5e8f",id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684-gear-\u7a0b\u5e8f",children:[],level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5f02\u6b65 Gear \u7a0b\u5e8f",id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5f02\u6b65-gear-\u7a0b\u5e8f",children:[],level:3},{value:"\u6784\u5efa Gear \u7a0b\u5e8f",id:"\u6784\u5efa-gear-\u7a0b\u5e8f",children:[],level:3}],level:2}],g={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cargo-program-\u5de5\u5177"},(0,o.kt)("inlineCode",{parentName:"h1"},"cargo-program")," \u5de5\u5177"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo-program")," \u662f Rust \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo")," \u6269\u5c55\u7a0b\u5e8f\uff0c\u65e8\u5728\u7b80\u5316 Gear \u7a0b\u5e8f\u7684\u5f00\u53d1\u3002"),(0,o.kt)("p",null,"GitHub repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gear-tech/cargo-program"},"https://github.com/gear-tech/cargo-program")),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"\uff08\u63a8\u8350\uff09")," \u4f7f\u7528 cargo-program \u7684\u6700\u65b0\u7248\u672c\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo install --git https://github.com/gear-tech/cargo-program.git\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4ece ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/cargo-program"},"crates.io")," \u83b7\u53d6\u7a33\u5b9a\u7248\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo install cargo-program\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684-gear-\u7a0b\u5e8f"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Gear \u7a0b\u5e8f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo program new my-program\n")),(0,o.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5f02\u6b65-gear-\u7a0b\u5e8f"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5f02\u6b65 Gear \u7a0b\u5e8f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo program new my-async-program --async\n")),(0,o.kt)("h3",{id:"\u6784\u5efa-gear-\u7a0b\u5e8f"},"\u6784\u5efa Gear \u7a0b\u5e8f"),(0,o.kt)("p",null,"debug \u6a21\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo program build\n")),(0,o.kt)("p",null,"\u53d1\u5e03\u6a21\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo program build --release\n")),(0,o.kt)("p",null,"\u4f60\u4f1a\u53d1\u73b0\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release")," \u76ee\u5f55\uff0c\u6709 3 \u4e2a\nWASM \u6587\u4ef6\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e26\u6709",(0,o.kt)("inlineCode",{parentName:"li"},".wasm")," \u6269\u5c55\u540d\u7684\u4e3b\u8981\u7f16\u8bd1\u7a0b\u5e8f"),(0,o.kt)("li",{parentName:"ul"},"\u5e26\u6709",(0,o.kt)("inlineCode",{parentName:"li"},".opt.wasm")," \u6269\u5c55\u540d\u7684\u4f18\u5316\u7a0b\u5e8f"),(0,o.kt)("li",{parentName:"ul"},"\u5e26\u6709",(0,o.kt)("inlineCode",{parentName:"li"},".meta.wasm")," \u6269\u5c55\u540d\u7684\u5143\u6570\u636e\u63d0\u4f9b\u7a0b\u5e8f")))}m.isMDXComponent=!0}}]);