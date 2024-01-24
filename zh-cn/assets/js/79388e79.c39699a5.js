"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[27631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"SQL\u9650\u5236",keywords:["Seata"],description:"Seata SQL\u9650\u5236"},c="SQL\u9650\u5236",s={unversionedId:"user/sqlreference/sql-restrictions",id:"version-v1.0/user/sqlreference/sql-restrictions",title:"SQL\u9650\u5236",description:"Seata SQL\u9650\u5236",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.0/user/sqlreference/sql-restrictions.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/sql-restrictions",permalink:"/zh-cn/docs/v1.0/user/sqlreference/sql-restrictions",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.0/user/sqlreference/sql-restrictions.md",tags:[],version:"v1.0",frontMatter:{title:"SQL\u9650\u5236",keywords:["Seata"],description:"Seata SQL\u9650\u5236"},sidebar:"docs",previous:{title:"\u6570\u636e\u5e93\u7c7b\u578b\u652f\u6301",permalink:"/zh-cn/docs/v1.0/user/datasource"},next:{title:"DML\u8bed\u53e5",permalink:"/zh-cn/docs/v1.0/user/sqlreference/dml"}},i={},l=[{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sql\u9650\u5236"},"SQL\u9650\u5236"),(0,a.kt)("p",null,"Seata \u4e8b\u52a1\u76ee\u524d\u652f\u6301 INSERT\u3001UPDATE\u3001DELETE \u4e09\u7c7b DML \u8bed\u6cd5\u7684\u90e8\u5206\u529f\u80fd\uff0c\u8fd9\u4e9b\u7c7b\u578b\u90fd\u662f\u5df2\u7ecf\u7ecf\u8fc7Seata\u5f00\u6e90\u793e\u533a\u7684\u9a8c\u8bc1\u3002SQL \u7684\u652f\u6301\u8303\u56f4\u8fd8\u5728\u4e0d\u65ad\u6269\u5927\uff0c\u5efa\u8bae\u5728\u672c\u6587\u9650\u5236\u7684\u8303\u56f4\u5185\u4f7f\u7528\u3002\u5982\u679c\u60a8\u6709\u610f\u5e2e\u52a9\u793e\u533a\u652f\u6301\u66f4\u591a\u7c7b\u578b\u7684SQL\uff0c\u8bf7\u63d0\u4ea4PR\u7533\u8bf7\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 SQL \u5d4c\u5957"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u591a\u8868\u590d\u6742 SQL(\u81ea1.6.0\u7248\u672c\uff0cMySQL\u652f\u6301UPDATE JOIN\u8bed\u53e5\uff0c",(0,a.kt)("a",{href:"./dml"},"\u8be6\u60c5\u8bf7\u770b")," )"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5b58\u50a8\u8fc7\u7a0b\u3001\u89e6\u53d1\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u5206\u6570\u636e\u5e93\u4e0d\u652f\u6301\u6279\u91cf\u66f4\u65b0\uff0c\u5728\u4f7f\u7528 MySQL\u3001Mariadb\u3001PostgreSQL9.6+\u4f5c\u4e3a\u6570\u636e\u5e93\u65f6\u652f\u6301\u6279\u91cf\uff0c\u6279\u91cf\u66f4\u65b0\u65b9\u5f0f\u5982\u4e0b\u4ee5 Java \u4e3a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    // use JdbcTemplate\n    public void batchUpdate() {\n        jdbcTemplate.batchUpdate(\n            "update storage_tbl set count = count -1 where id = 1",\n            "update storage_tbl set count = count -1 where id = 2"\n        );\n    }\n\n    // use Statement\n    public void batchUpdateTwo() {\n        statement.addBatch("update storage_tbl set count = count -1 where id = 1");\n        statement.addBatch("update storage_tbl set count = count -1 where id = 2");\n        statement.executeBatch();\n    }\n')))}d.isMDXComponent=!0}}]);