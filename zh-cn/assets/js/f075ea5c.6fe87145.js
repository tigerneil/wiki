"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3962],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6146:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={sidebar_position:1,sidebar_label:"\u8fde\u63a5"},l="Connect API",p={unversionedId:"api/connect",id:"api/connect",title:"Connect API",description:"\u8be5 API \u5141\u8bb8\u6211\u4eec\u4e0e\u94fe\u8fdb\u884c\u4ea4\u4e92\uff0c\u5e76\u901a\u8fc7 Javascript \u8fdb\u884c\u67e5\u8be2\u3002\u57fa\u672c\u7684 API \u662f\u5728 Substrate \u5b9e\u73b0\u7684\uff0c\u5bf9\u6240\u6709\u57fa\u4e8e\u5e95\u5c42\u7684\u7f51\u7edc\u90fd\u662f\u4e00\u6837\u7684\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/connect.md",sourceDirName:"api",slug:"/api/connect",permalink:"/zh-cn/api/connect",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/connect.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u8fde\u63a5"},sidebar:"tutorialSidebar",previous:{title:"\u5de5\u5177",permalink:"/zh-cn/tools/"},next:{title:"CLI",permalink:"/zh-cn/api/cli"}},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u5f00\u59cb",id:"\u5f00\u59cb",children:[],level:2},{value:"\u8303\u4f8b",id:"\u8303\u4f8b",children:[],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-api"},"Connect API"),(0,o.kt)("p",null,"\u8be5 API \u5141\u8bb8\u6211\u4eec\u4e0e\u94fe\u8fdb\u884c\u4ea4\u4e92\uff0c\u5e76\u901a\u8fc7 Javascript \u8fdb\u884c\u67e5\u8be2\u3002\u57fa\u672c\u7684 API \u662f\u5728 Substrate \u5b9e\u73b0\u7684\uff0c\u5bf9\u6240\u6709\u57fa\u4e8e\u5e95\u5c42\u7684\u7f51\u7edc\u90fd\u662f\u4e00\u6837\u7684\u3002"),(0,o.kt)("p",null,"\u5b8c\u6574\u7684 API \u624b\u518c\u5728",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/"},"Polkadot \u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e0e Gear \u4ea4\u4e92\u7684\u51e0\u4e2a\u5207\u5165\u70b9\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ws://127.0.0.1:9944")),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @gear-js/api\n")),(0,o.kt)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,o.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a API \u8fde\u63a5\u5230 localhost \u7684\u8fd0\u884c\u8282\u70b9\u4e0a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { GearApi } from '@gear-js/api';\n\nconst gearApi = await GearApi.create();\n")),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u8fde\u63a5\u5230\u4e00\u4e2a\u4e0d\u540c\u7684\u8282\u70b9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const gearApi = await GearApi.create({ providerAddress: 'wss://someIP:somePort' });\n")),(0,o.kt)("p",null,"\u6ce8\u518c\u81ea\u5b9a\u4e49\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const yourCustomTypesExample = {\n  Person: {\n    surname: 'String',\n    name: 'String',\n    patronymic: 'Option<String>'\n  },\n  Id: {\n    decimal: 'u64',\n    hex: 'Vec<u8>'\n  },\n  Data: {\n    id: 'Id',\n    person: 'Person',\n    data: 'Vec<String>'\n  }\n};\nconst gearApi = await GearApi.create({ customTypes: { ...yourCustomTypesExample } });\n")),(0,o.kt)("h2",{id:"\u8303\u4f8b"},"\u8303\u4f8b"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba2\u9605\u4e00\u4e2a\u65b0\u7684\u533a\u5757\u5e76\u83b7\u53d6\u94fe\u57fa\u7840\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function connect() {\n  const gearApi = await GearApi.create();\n\n  const [chain, nodeName, nodeVersion] = await Promise.all([\n    gearApi.chain(),\n    gearApi.nodeName(),\n    gearApi.nodeVersion(),\n  ]);\n  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);\n\n  gearApi.gearEvents.subscribeNewBlocks((header) => {\n    console.log(`New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`);\n  });\n}\nconnect().catch(console.error);\n")))}d.isMDXComponent=!0}}]);