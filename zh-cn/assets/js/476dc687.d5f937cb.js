"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[97816],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},N="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),N=p(a),k=r,f=N["".concat(o,".").concat(k)]||N[k]||c[k]||l;return a?n.createElement(f,m(m({ref:e},d),{},{components:a})):n.createElement(f,m({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,m=new Array(l);m[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[N]="string"==typeof t?t:r,m[1]=i;for(var p=2;p<l;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},78650:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"SQL\u4fee\u9970",keywords:["Seata"],description:"Seata SQL\u4fee\u9970"},m="SQL\u4fee\u9970",i={unversionedId:"user/sqlreference/sql-decoration",id:"version-v1.2/user/sqlreference/sql-decoration",title:"SQL\u4fee\u9970",description:"Seata SQL\u4fee\u9970",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/user/sqlreference/sql-decoration.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/sql-decoration",permalink:"/zh-cn/docs/v1.2/user/sqlreference/sql-decoration",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/user/sqlreference/sql-decoration.md",tags:[],version:"v1.2",frontMatter:{title:"SQL\u4fee\u9970",keywords:["Seata"],description:"Seata SQL\u4fee\u9970"},sidebar:"docs",previous:{title:"DML\u8bed\u53e5",permalink:"/zh-cn/docs/v1.2/user/sqlreference/dml"},next:{title:"\u51fd\u6570",permalink:"/zh-cn/docs/v1.2/user/sqlreference/function"}},o={},p=[{value:"DML\u8bed\u53e5\u652f\u6301",id:"dml\u8bed\u53e5\u652f\u6301",level:3},{value:"Select\u8bed\u53e5\u652f\u6301",id:"select\u8bed\u53e5\u652f\u6301",level:3}],d={toc:p},N="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(N,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sql\u4fee\u9970"},"SQL\u4fee\u9970"),(0,r.kt)("p",null,"Seata \u7684\u9694\u79bb\u7ea7\u522b\u9ed8\u8ba4\u4e3a\u8bfb\u672a\u63d0\u4ea4\uff0c\u8be5\u6a21\u5f0f\u4e0b\u672c\u6587\u8868\u4e2d\u7684 select \u8bed\u53e5\u7684 SQL \u4fee\u9970\u7528\u6cd5\u90fd\u662f\u652f\u6301\u7684\uff1b\u4f7f\u7528 for update \u4ee3\u7406\u53ef\u4ee5\u8ba9 Seata \u8fbe\u5230\u8bfb\u5df2\u63d0\u4ea4\uff0c\u8be5\u6a21\u5f0f\u4e0b select \u8bed\u53e5\u7684\u7528\u6cd5\u53ea\u80fd\u90e8\u5206\u652f\u6301\u3002"),(0,r.kt)("h3",{id:"dml\u8bed\u53e5\u652f\u6301"},"DML\u8bed\u53e5\u652f\u6301"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SQL \u5b9e\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u652f\u6301"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AND & OR"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UPDATE \u2026 WHERE col_name1=expr1 AND col_name2= expr2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LIKE"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UPDATE ... WHERE col_name1 LIKE 'NE'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u914d\u7b26"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UPDATE ... WHERE col_name1 LIKE 'NE%'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BETWEEN"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UPDATE ... WHERE col_name1 BETWEEN expr1 AND expr2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ON DUPLICATE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"`INSERT INTO tb1_name ","[(col_name,...)]","VALUES ({expr"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DEFAULT},...),(...),...","[ ON DUPLICATE KEY UPDATE col_name=expr, ... ]","`")))),(0,r.kt)("h3",{id:"select\u8bed\u53e5\u652f\u6301"},"Select\u8bed\u53e5\u652f\u6301"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SQL \u5b9e\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bfb\u672a\u63d0\u4ea4"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bfb\u5df2\u63d0\u4ea4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AND & OR"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT * FROM tb1_name WHERE col_name1=expr1 AND col_name2= expr2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ORDER BY"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name ORDER BY col_name1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GROUP BY"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name GROUP BY col_name1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LIKE"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 LIKE 'NE'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u914d\u7b26"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 LIKE 'NE%'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EXISTS"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name WHERE EXISTS (expr1)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IN"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 IN (expr1, expr2,...)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BETWEEN"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 BETWEEN expr1 AND expr2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ON DUPLICATE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INSERT INTO tb1_name ","[(col_name,...)]","VALUES ({expr ","|"," DEFAULT},...),(...),...","[ ON DUPLICATE KEY UPDATE col_name=expr, ... ]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ALIASES"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT t1. col_name1, t2.col_name2 FROM tb1_name AS t1, tb2_name AS t2 WHERE t1. col_name=expr AND t2. col_name=expr")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TOP"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT TOP 2 * FROM tb1_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LIMIT"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name LIMIT 5")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JOININNER JOINLEFT JOINRIGHT JOINFULL JOIN"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name JOIN tb2_name>ON tb1_name. col_name1= tb2_name. col_name1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UNIONUNION ALLSELECT INTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name UNION SELECT col_name1, col_name2 FROM tb2_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426")))))}c.isMDXComponent=!0}}]);