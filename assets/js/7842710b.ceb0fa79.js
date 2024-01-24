"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[78867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),i=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||n;return r?o.createElement(f,s(s({ref:t},p),{},{components:r})):o.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[d]="string"==typeof e?e:a,s[1]=u;for(var i=2;i<n;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>u,toc:()=>i});var o=r(87462),a=(r(67294),r(3905));const n={title:"Data Source support",keywords:["Seata","Data Source"],description:"Seata data source support"},s="Data source support",u={unversionedId:"user/datasource",id:"user/datasource",title:"Data Source support",description:"Seata data source support",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/user/datasource.md",sourceDirName:"user",slug:"/user/datasource",permalink:"/docs/next/user/datasource",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/current/user/datasource.md",tags:[],version:"current",frontMatter:{title:"Data Source support",keywords:["Seata","Data Source"],description:"Seata data source support"},sidebar:"docs",previous:{title:"ORM Framework Support",permalink:"/docs/next/user/ormframework"},next:{title:"SQL Restrictions",permalink:"/docs/next/user/sqlreference/sql-restrictions"}},c={},i=[{value:"AT mode",id:"at-mode",level:2},{value:"TCC mode",id:"tcc-mode",level:2},{value:"Saga Mode",id:"saga-mode",level:2},{value:"XA mode",id:"xa-mode",level:2}],p={toc:i},d="wrapper";function l(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-source-support"},"Data source support"),(0,a.kt)("h2",{id:"at-mode"},"AT mode"),(0,a.kt)("p",null,"Databases supported by AT mode include: MySQL, Oracle, PostgreSQL, TiDB, and MariaDB."),(0,a.kt)("h2",{id:"tcc-mode"},"TCC mode"),(0,a.kt)("p",null,"TCC mode does not rely on data sources (for version 1.4.2 and before). After version 1.4.2, TCC anti-hanging measures are added, which requires data source support."),(0,a.kt)("h2",{id:"saga-mode"},"Saga Mode"),(0,a.kt)("p",null,"Saga mode does not rely on data sources."),(0,a.kt)("h2",{id:"xa-mode"},"XA mode"),(0,a.kt)("p",null,"XA mode only supports databases that implement the XA protocol. Seata supports MySQL, Oracle, PostgreSQL and MariaDB."))}l.isMDXComponent=!0}}]);