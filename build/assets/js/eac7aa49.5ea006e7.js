"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[55258],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"MT mode",keywords:["MT mode"],description:"introduce MT mode",author:"kmmshmily",date:new Date("2019-02-13T00:00:00.000Z")},i="Manual Transaction Mode",l={permalink:"/seata.github.io/blog/manual-transaction-mode",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/manual-transaction-mode.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/manual-transaction-mode.md",title:"MT mode",description:"introduce MT mode",date:"2019-02-13T00:00:00.000Z",formattedDate:"February 13, 2019",tags:[],readingTime:1.12,hasTruncateMarker:!1,authors:[{name:"kmmshmily"}],frontMatter:{title:"MT mode",keywords:["MT mode"],description:"introduce MT mode",author:"kmmshmily",date:"2019-02-13T00:00:00.000Z"},prevItem:{title:"How to use Seata to ensure consistency between Dubbo Microservices",permalink:"/seata.github.io/blog/quick-start-use-seata-and-dubbo-services"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Review the description in the overview: a distributed global transaction, the whole is a model of ",(0,n.kt)("strong",{parentName:"p"},"the two-phase commit"),". A global transaction consists of several branch transactions that meet the model requirements of ",(0,n.kt)("strong",{parentName:"p"},"the two-phase commit"),", which requires each branch transaction to have its own:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"One phase prepare behavior"),(0,n.kt)("li",{parentName:"ul"},"Two phase commit or rollback behavior")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://upload-images.jianshu.io/upload_images/4420767-e48f0284a037d1df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Overview of a global transaction"})),(0,n.kt)("p",null,"According to the two phase behavior pattern\uff0cWe divide the branch transaction into ",(0,n.kt)("strong",{parentName:"p"},"Automatic (Branch) Transaction Mode")," and ",(0,n.kt)("strong",{parentName:"p"},"Manual (Branch) Transaction Mode"),"."),(0,n.kt)("p",null,"The AT mode is based on the ",(0,n.kt)("strong",{parentName:"p"},"Relational Database")," that ",(0,n.kt)("strong",{parentName:"p"},"supports local ACID transactions"),"\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"One phase prepare behavior: In the local transaction, the business data update and the corresponding rollback log record are submitted together."),(0,n.kt)("li",{parentName:"ul"},"Two phase commit behavior: Immediately ended successfully, ",(0,n.kt)("strong",{parentName:"li"},"Auto")," asynchronous batch cleanup of the rollback log."),(0,n.kt)("li",{parentName:"ul"},"Two phase rollback behavior: By rolling back the log, ",(0,n.kt)("strong",{parentName:"li"},"automatic")," generates a compensation operation to complete the data rollback.")),(0,n.kt)("p",null,"Accordingly, the MT mode does not rely on transaction support for the underlying data resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"One phase prepare behavior: Call the prepare logic of ",(0,n.kt)("strong",{parentName:"li"},"custom")," ."),(0,n.kt)("li",{parentName:"ul"},"Two phase commit behavior:Call the commit logic of ",(0,n.kt)("strong",{parentName:"li"},"custom")," ."),(0,n.kt)("li",{parentName:"ul"},"Two phase rollback behavior:Call the rollback logic of ",(0,n.kt)("strong",{parentName:"li"},"custom")," .")),(0,n.kt)("p",null,"The so-called MT mode refers to the support of the branch transaction of ",(0,n.kt)("strong",{parentName:"p"},"custom")," into the management of global transactions."))}m.isMDXComponent=!0}}]);