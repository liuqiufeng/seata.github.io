"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[90212],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",keywords:["Seata"],description:"Seata upgrade."},i="\u7248\u672c\u5347\u7ea7\u6307\u5357",s={unversionedId:"ops/upgrade",id:"version-v1.5/ops/upgrade",title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",description:"Seata upgrade.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/seata.github.io/zh-cn/docs/v1.5/ops/upgrade",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5/ops/upgrade.md",tags:[],version:"v1.5",frontMatter:{title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",keywords:["Seata"],description:"Seata upgrade."},sidebar:"docs",previous:{title:"Metrics \u8bbe\u8ba1",permalink:"/seata.github.io/zh-cn/docs/v1.5/dev/seata-mertics"},next:{title:"\u591a\u914d\u7f6e\u9694\u79bb",permalink:"/seata.github.io/zh-cn/docs/v1.5/ops/multi-configuration-isolation"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7248\u672c\u5347\u7ea7\u6307\u5357"},"\u7248\u672c\u5347\u7ea7\u6307\u5357"),(0,a.kt)("hr",null),(0,a.kt)("h3",null,"1. \u5347\u7ea7\u5230 seata 1.5.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("mark",null,"\u6ce8\u610f\u4e8b\u9879")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"seata-server \u5b58\u50a8\u6a21\u5f0f\u4e3a db \u65f6\uff0c\u9700\u8981\u6ce8\u610f\u8868\u7ed3\u6784\u53d8\u66f4\uff0c\u5728\u5347\u7ea71.5.0 \u524d\u9700\u5148\u53d8\u66f4\u8868\u7ed3\u6784\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8868\u7ed3\u6784\u5b57\u7b26\u96c6\u7edf\u4e00\u4ece utf8 \u8c03\u6574\u4e3a utf8mb4"),(0,a.kt)("li",{parentName:"ul"},"global_table \u8c03\u6574\u7d22\u5f15\u4ece idx_gmt_modified_status \u8c03\u6574\u4e3a idx_status_gmt_modified"),(0,a.kt)("li",{parentName:"ul"},"lock_table \u589e\u52a0 status \u5b57\u6bb5,\u589e\u52a0 idx_status\uff0cidx_xid_and_branch_id \u7d22\u5f15"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0 distributed_lock \u8868\u7528\u4e8e seata-server \u5f02\u6b65\u4efb\u52a1\u8c03\u5ea6\n\u5347\u7ea71.5.0\u524d\uff0c\u8bf7\u6ce8\u610f\u8868\u7ed3\u6784\u53d8\u66f4\uff0c\u8868\u7ed3\u6784\u8be6\u60c5\u8bf7",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/tree/1.5.0/script/server/db"},"\u70b9\u51fb\u6b64\u5904"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TCC\u4e8b\u52a1\u6a21\u5f0f\u57281.5.0 \u589e\u52a0\u9632\u60ac\u6302\u529f\u80fd,\u5982\u9700\u7531 Seata \u6846\u67b6\u5f00\u542f\u9632\u60ac\u6302,\u9700\u8981\u63d0\u524d\u5728\u5ba2\u6237\u7aef\u4e1a\u52a1\u5e93\u4e2d\u589e\u52a0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/tree/1.5.0/script/client/tcc/db"},"\u6b64\u8868"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TCC\u6a21\u5f0f\u4e00\u9636\u6bb5\u65b9\u6cd5\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u4e0d\u518d\u9700\u8981\u5728\u4e00\u9636\u6bb5\u7684\u63a5\u53e3\u5165\u53c2\u5b9a\u4e49",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessActionContext"),"\uff0c\u82e5\u4e00\u9636\u6bb5\u9700\u8981\u4f7f\u7528\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessActionContext"),"\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessActionContextUtil.getContext()"),"\u53d6\u5f97")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"redis\u6ce8\u518c\u4e2d\u5fc3\u5185\u90e8\u7ed3\u6784\u8c03\u6574,\u4e0d\u518d\u5411\u4e0b\u517c\u5bb9,\u5982\u4f7f\u7528redis\u4f5c\u4e3aseata\u7684\u6ce8\u518c\u4e2d\u5fc3,\u8bf7\u5c06\u5ba2\u6237\u7aef\u4f9d\u8d56\u7684 seata-all(seata-spring-boot-starter) \u548c seata-server \u4e00\u5e76\u5347\u7ea7\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e8b\u52a1\u5206\u7ec4\u914d\u7f6e\u652f\u6301\u4e86\u9ed8\u8ba4\u503c\uff0c\u4e3a\u4e86\u907f\u514d\u6b67\u4e49\u548c\u964d\u4f4e\u5b66\u4e60\u6210\u672c\uff0c\u9ed8\u8ba4\u4e8b\u52a1\u5206\u7ec4\u7684\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"my_test_tx_group")," \u4fee\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"default_tx_group"),"\u3002\u57281.5.X\u7684\u7248\u672c\u4e2d\u4f1a\u5411\u4e0b\u8fdb\u884c\u517c\u5bb9\u3002")))))}d.isMDXComponent=!0}}]);