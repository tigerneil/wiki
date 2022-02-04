"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7779],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return b}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),b=n,h=m["".concat(l,".").concat(b)]||m[b]||u[b]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},634:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_label:"WebAssembly (WASM)",sidebar_position:6},l="What is WebAssembly (WASM)",c={unversionedId:"gear/WASM",id:"gear/WASM",title:"What is WebAssembly (WASM)",description:"WebAssembly is a way to run applications in programming languages other than JavaScript as web pages. Essentially, WASM is just a virtual machine that runs on all modern browsers, but whereas in the past you were required to use JavaScript to run code in a web page, WASM makes it possible to run code in browsers with programming languages other than JavaScript.",source:"@site/docs/gear/WASM.md",sourceDirName:"gear",slug:"/gear/WASM",permalink:"/gear/WASM",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/gear/WASM.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"WebAssembly (WASM)",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Memory Parallelism",permalink:"/gear/memory-parallelism"},next:{title:"Polkadot",permalink:"/ecosystem/polkadot"}},p=[],u={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-webassembly-wasm"},"What is WebAssembly (WASM)"),(0,i.kt)("p",null,"WebAssembly is a way to run applications in programming languages other than JavaScript as web pages. Essentially, WASM is just a virtual machine that runs on all modern browsers, but whereas in the past you were required to use JavaScript to run code in a web page, WASM makes it possible to run code in browsers with programming languages other than JavaScript."),(0,i.kt)("p",null,"The WebAssembly Virtual Machine, or WASM for short, is proven to be faster than any alternative virtual machine because of technology peculiarities. The use of WebAssembly enables Gear\u2019s smart contracts to compile directly into machine code and run at near-native speeds. Higher speeds means lower transaction costs and higher efficiency."),(0,i.kt)("p",null,"All Gear programs and smart-contract are run as WebAssembly programs. This means for example, that developers can bring their applications to the web and achieve full performance with the apps\u2019 full set of capabilities - that they\u2019d typically have when running native on Windows or Mac - in a web browser. The developers won\u2019t actually have to write the WASM code directly either. Instead, they\u2019d use WASM as a compilation target for programs written in other languages."),(0,i.kt)("p",null,"The main problem that WASM solves is the inability to use programming languages other than JavaScript on the web. Although JavaScript is a great programming language, it wasn\u2019t designed to be super fast in large applications. What\u2019s game changing about WASM is that it brings the performance of native applications, written in other programming languages,  to the web in a way that's completely secure."),(0,i.kt)("p",null,"WASM should give significant speed increases in two main areas. First, it should significantly increase application start up speed. In fact, applications that are already using WASM have been able to cut application start up time in half, and as more optimizations are made, it will only continue to increase startup speed further. This will allow huge applications to load up very, very quickly. Secondly, WASM enables significant benefits in throughput too, which means that once code is compiled, it will run much faster - making applications more efficient and responsive which will significantly improve user experience."),(0,i.kt)("p",null,"WebAssembly has the following advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WASM is extremely fast, efficient and portable. Code can be executed at near-native speed across different platforms. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WASM is also readable and debuggable. Although WebAssembly is a low-level language, it does have a human-readable text format that allows code to be written, viewed and debugged by hand. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It\u2019s also extremely secure as it\u2019s run in a safe, sandboxed environment and like other web code, it will enforce the browsers same-origin and permissionless security policies."))))}m.isMDXComponent=!0}}]);