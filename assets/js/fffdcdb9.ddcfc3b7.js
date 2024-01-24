"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[88247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"Introduction",keywords:["Seata","configuration center"],description:"Configuration Center Introduction."},a="Introduction",c={unversionedId:"user/configuration/index",id:"version-v1.1/user/configuration/index",title:"Introduction",description:"Configuration Center Introduction.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1/user/configuration/index.md",sourceDirName:"user/configuration",slug:"/user/configuration/",permalink:"/seata.github.io/docs/v1.1/user/configuration/",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.1/user/configuration/index.md",tags:[],version:"v1.1",frontMatter:{title:"Introduction",keywords:["Seata","configuration center"],description:"Configuration Center Introduction."},sidebar:"docs",previous:{title:"Transaction Group and High Availability",permalink:"/seata.github.io/docs/v1.1/user/txgroup/transaction-group-and-ha"},next:{title:"Nacos Configuration Center",permalink:"/seata.github.io/docs/v1.1/user/configuration/nacos"}},s={},u=[],l={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'What is a configuration center? The configuration center can be described as a "large warehouse" that contains various configuration files. You can obtain and load the required configurations into the corresponding clients. For example, Seata client (TM, RM) and Seata server (TC) will read global transaction switches, transaction session storage modes, and other information.'),(0,o.kt)("li",{parentName:"ul"},"What is the difference between Seata's configuration center and Spring Cloud's configuration center? In a broad sense, there is no difference. The only difference is that Spring Cloud's configuration center only applies to its own components, while Seata's configuration center also applies to Seata itself. (Note: Spring Cloud's configuration center is unrelated to Seata)"),(0,o.kt)("li",{parentName:"ul"},"Which configuration centers does Seata support?",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Nacos"),(0,o.kt)("li",{parentName:"ol"},"Consul"),(0,o.kt)("li",{parentName:"ol"},"Apollo"),(0,o.kt)("li",{parentName:"ol"},"Etcd"),(0,o.kt)("li",{parentName:"ol"},"ZooKeeper"),(0,o.kt)("li",{parentName:"ol"},"File (reads local files, including support for conf, properties, and yml configuration files)")))))}f.isMDXComponent=!0}}]);