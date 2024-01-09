"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[72947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,v=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(v,i(i({ref:t},l),{},{components:r})):n.createElement(v,i({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u6570\u636e\u5e93\u7c7b\u578b\u652f\u6301",keywords:["Seata"],description:"Seata \u6570\u636e\u6e90\u652f\u6301\u3002"},i="\u6570\u636e\u6e90\u652f\u6301",c={unversionedId:"user/datasource",id:"version-v1.6/user/datasource",title:"\u6570\u636e\u5e93\u7c7b\u578b\u652f\u6301",description:"Seata \u6570\u636e\u6e90\u652f\u6301\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/datasource.md",sourceDirName:"user",slug:"/user/datasource",permalink:"/seata.github.io/zh-cn/docs/v1.6/user/datasource",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/datasource.md",tags:[],version:"v1.6",frontMatter:{title:"\u6570\u636e\u5e93\u7c7b\u578b\u652f\u6301",keywords:["Seata"],description:"Seata \u6570\u636e\u6e90\u652f\u6301\u3002"},sidebar:"docs",previous:{title:"ORM\u6846\u67b6\u652f\u6301",permalink:"/seata.github.io/zh-cn/docs/v1.6/user/ormframework"},next:{title:"SQL\u9650\u5236",permalink:"/seata.github.io/zh-cn/docs/v1.6/user/sqlreference/sql-restrictions"}},s={},u=[{value:"AT\u6a21\u5f0f",id:"at\u6a21\u5f0f",level:2},{value:"TCC\u6a21\u5f0f",id:"tcc\u6a21\u5f0f",level:2},{value:"Saga\u6a21\u5f0f",id:"saga\u6a21\u5f0f",level:2},{value:"XA\u6a21\u5f0f",id:"xa\u6a21\u5f0f",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u636e\u6e90\u652f\u6301"},"\u6570\u636e\u6e90\u652f\u6301"),(0,a.kt)("h2",{id:"at\u6a21\u5f0f"},"AT\u6a21\u5f0f"),(0,a.kt)("p",null,"AT\u6a21\u5f0f\u652f\u6301\u7684\u6570\u636e\u5e93\u6709\uff1aMySQL\u3001Oracle\u3001PostgreSQL\u3001 TiDB\u3001MariaDB\u3002"),(0,a.kt)("h2",{id:"tcc\u6a21\u5f0f"},"TCC\u6a21\u5f0f"),(0,a.kt)("p",null,"TCC\u6a21\u5f0f\u4e0d\u4f9d\u8d56\u6570\u636e\u6e90(1.4.2\u7248\u672c\u53ca\u4e4b\u524d)\uff0c1.4.2\u7248\u672c\u4e4b\u540e\u589e\u52a0\u4e86TCC\u9632\u60ac\u6302\u63aa\u65bd\uff0c\u9700\u8981\u6570\u636e\u6e90\u652f\u6301\u3002"),(0,a.kt)("h2",{id:"saga\u6a21\u5f0f"},"Saga\u6a21\u5f0f"),(0,a.kt)("p",null,"Saga\u6a21\u5f0f\u4e0d\u4f9d\u8d56\u6570\u636e\u6e90\u3002"),(0,a.kt)("h2",{id:"xa\u6a21\u5f0f"},"XA\u6a21\u5f0f"),(0,a.kt)("p",null,"XA\u6a21\u5f0f\u53ea\u652f\u6301\u5b9e\u73b0\u4e86XA\u534f\u8bae\u7684\u6570\u636e\u5e93\u3002Seata\u652f\u6301MySQL\u3001Oracle\u3001PostgreSQL\u548cMariaDB\u3002"))}d.isMDXComponent=!0}}]);