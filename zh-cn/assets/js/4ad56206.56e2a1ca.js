"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[63175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u7b80\u4ecb",keywords:["Seata","registry center"],description:"\u6ce8\u518c\u4e2d\u5fc3\u7b80\u4ecb\u3002"},i="\u7b80\u4ecb",c={unversionedId:"user/registry/index",id:"version-v1.8/user/registry/index",title:"\u7b80\u4ecb",description:"\u6ce8\u518c\u4e2d\u5fc3\u7b80\u4ecb\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/user/registry/index.md",sourceDirName:"user/registry",slug:"/user/registry/",permalink:"/zh-cn/docs/v1.8/user/registry/",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/user/registry/index.md",tags:[],version:"v1.8",frontMatter:{title:"\u7b80\u4ecb",keywords:["Seata","registry center"],description:"\u6ce8\u518c\u4e2d\u5fc3\u7b80\u4ecb\u3002"},sidebar:"docs",previous:{title:"Zookeeper \u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.8/user/configuration/zookeeper"},next:{title:"Nacos \u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.8/user/registry/nacos"}},l={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u662f\u6ce8\u518c\u4e2d\u5fc3?\u6ce8\u518c\u4e2d\u5fc3\u53ef\u4ee5\u8bf4\u662f\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u7684\u201d\u901a\u8baf\u5f55\u201c\uff0c\u5b83\u8bb0\u5f55\u4e86\u670d\u52a1\u548c\u670d\u52a1\u5730\u5740\u7684\u6620\u5c04\u5173\u7cfb\u3002\u5728\u5206\u5e03\u5f0f\u67b6\u6784\u4e2d\uff0c\u670d\u52a1\u4f1a\u6ce8\u518c\u5230\u8fd9\u91cc\uff0c\u5f53\u670d\u52a1\u9700\u8981\u8c03\u7528\u5176\u5b83\u670d\u52a1\u65f6\uff0c\u5c31\u5230\u8fd9\u91cc\u627e\u5230\u670d\u52a1\u7684\u5730\u5740\uff0c\u8fdb\u884c\u8c03\u7528.\u6bd4\u5982Seata Client\u7aef(TM,RM),\u53d1\u73b0Seata Server(TC)\u96c6\u7fa4\u7684\u5730\u5740,\u5f7c\u6b64\u901a\u4fe1."),(0,o.kt)("li",{parentName:"ul"},"Seata\u7684\u6ce8\u518c\u4e2d\u5fc3\u4e0eDubbo,Spring cloud\u7684\u6ce8\u518c\u4e2d\u5fc3\u533a\u522b\u662f?\u5728\u5e7f\u4e49\u4e0a\u6765\u8bf4,\u5e76\u65e0\u533a\u522b,\u53ea\u4e0d\u8fc7Dubbo\u4e0eSpring cloud\u7684\u6ce8\u518c\u4e2d\u5fc3\u4ec5\u662f\u4f5c\u7528\u4e8e\u5b83\u4eec\u81ea\u8eab\u7684\u7ec4\u4ef6,\u800cSeata\u7684\u6ce8\u518c\u4e2d\u5fc3\u4e5f\u662f\u4e00\u6837\u662f\u4f5c\u7528\u4e8eSeata\u81ea\u8eab.(\u6ce8:Dubbo\u4e0eSpring cloud\u7684\u6ce8\u518c\u4e2d\u5fc3\u4e0eSeata\u65e0\u5173)"),(0,o.kt)("li",{parentName:"ul"},"Seata\u652f\u6301\u54ea\u4e9b\u6ce8\u518c\u4e2d\u5fc3?",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"eureka"),(0,o.kt)("li",{parentName:"ol"},"consul"),(0,o.kt)("li",{parentName:"ol"},"nacos"),(0,o.kt)("li",{parentName:"ol"},"etcd"),(0,o.kt)("li",{parentName:"ol"},"zookeeper"),(0,o.kt)("li",{parentName:"ol"},"sofa "),(0,o.kt)("li",{parentName:"ol"},"redis "),(0,o.kt)("li",{parentName:"ol"},"file (\u76f4\u8fde)")))))}d.isMDXComponent=!0}}]);