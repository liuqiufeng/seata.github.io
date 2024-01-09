"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[37355],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},c="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),c=p(a),s=r,k=c["".concat(i,".").concat(s)]||c[s]||N[s]||l;return a?n.createElement(k,o(o({ref:e},d),{},{components:a})):n.createElement(k,o({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m[c]="string"==typeof t?t:r,o[1]=m;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},54359:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"SQL Decoration",keywords:["Seata"],description:"Seata SQL Decoration"},o="SQL Decoration",m={unversionedId:"user/sqlreference/sql-decoration",id:"user/sqlreference/sql-decoration",title:"SQL Decoration",description:"Seata SQL Decoration",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/user/sqlreference/sql-decoration.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/sql-decoration",permalink:"/seata.github.io/docs/next/user/sqlreference/sql-decoration",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/current/user/sqlreference/sql-decoration.md",tags:[],version:"current",frontMatter:{title:"SQL Decoration",keywords:["Seata"],description:"Seata SQL Decoration"},sidebar:"docs",previous:{title:"DML",permalink:"/seata.github.io/docs/next/user/sqlreference/dml"},next:{title:"Functions",permalink:"/seata.github.io/docs/next/user/sqlreference/function"}},i={},p=[{value:"DML Statement Support",id:"dml-statement-support",level:3},{value:"Select Statement Support",id:"select-statement-support",level:3}],d={toc:p},c="wrapper";function N(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sql-decoration"},"SQL Decoration"),(0,r.kt)("p",null,"Seata's isolation level defaults to read uncommitted. In this mode, the SQL decoration usage of select statements in this article table is supported. Using for update proxy can make Seata achieve read committed. In this mode, the usage of select statements can only be partially supported."),(0,r.kt)("h3",{id:"dml-statement-support"},"DML Statement Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SQL Example"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported or not"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AND & OR"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UPDATE \u2026 WHERE col_name1=expr1 AND col_name2= expr2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LIKE"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UPDATE ... WHERE col_name1 LIKE 'NE'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Wildcard"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UPDATE ... WHERE col_name1 LIKE 'NE%'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BETWEEN"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UPDATE ... WHERE col_name1 BETWEEN expr1 AND expr2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ON DUPLICATE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"`INSERT INTO tb1_name ","[(col_name,...)]","VALUES ({expr"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DEFAULT},...),(...),...","[ ON DUPLICATE KEY UPDATE col_name=expr, ... ]","`")))),(0,r.kt)("h3",{id:"select-statement-support"},"Select Statement Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SQL Example"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Read Uncommitted"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Read Committed"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AND & OR"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT * FROM tb1_name WHERE col_name1=expr1 AND col_name2= expr2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ORDER BY"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name ORDER BY col_name1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GROUP BY"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name GROUP BY col_name1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LIKE"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 LIKE 'NE'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Wildcards"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 LIKE 'NE%'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EXISTS"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name WHERE EXISTS (expr1)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IN"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 IN (expr1, expr2,...)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BETWEEN"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name WHERE col_name1 BETWEEN expr1 AND expr2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ON DUPLICATE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INSERT INTO tb1_name ","[(col_name,...)]","VALUES ({expr ","|"," DEFAULT},...),(...),...","[ ON DUPLICATE KEY UPDATE col_name=expr, ... ]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ALIASES"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT t1. col_name1, t2.col_name2 FROM tb1_name AS t1, tb2_name AS t2 WHERE t1. col_name=expr AND t2. col_name=expr")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TOP"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT TOP 2 * FROM tb1_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LIMIT"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name LIMIT 5")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JOININNER JOINLEFT JOINRIGHT JOINFULL JOIN"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name JOIN tb2_name>ON tb1_name. col_name1= tb2_name. col_name1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UNIONUNION ALLSELECT INTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SELECT col_name1, col_name2 FROM tb1_name UNION SELECT col_name1, col_name2 FROM tb2_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))))}N.isMDXComponent=!0}}]);