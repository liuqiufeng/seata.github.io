"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[86198],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3869:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Seata AT Mode",keywords:["Seata","AT"],description:"User guide for Seata AT mode"},i="Seata AT Mode",s={unversionedId:"user/mode/at",id:"version-v2.0/user/mode/at",title:"Seata AT Mode",description:"User guide for Seata AT mode",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.0/user/mode/at.md",sourceDirName:"user/mode",slug:"/user/mode/at",permalink:"/seata.github.io/docs/user/mode/at",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.0/user/mode/at.md",tags:[],version:"v2.0",frontMatter:{title:"Seata AT Mode",keywords:["Seata","AT"],description:"User guide for Seata AT mode"},sidebar:"docs",previous:{title:"Seata Parameter Configuration",permalink:"/seata.github.io/docs/user/configurations"},next:{title:"Seata TCC Mode",permalink:"/seata.github.io/docs/user/mode/tcc"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Overall Mechanism",id:"overall-mechanism",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Getting Started",id:"getting-started",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seata-at-mode"},"Seata AT Mode"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"AT Mode is an innovative non-intrusive distributed transaction solution introduced by Seata. Seata internally incorporates a proxy layer for database operations. When using Seata AT Mode, we effectively utilize Seata's built-in data source proxy, where Seata adds various logic, such as inserting rollback undo_log logs and checking global locks."),(0,o.kt)("p",null,"In this document, we will focus on the usage of Seata AT Mode. If you are interested in the principles behind the AT Mode, please read the corresponding ",(0,o.kt)("a",{parentName:"p",href:"../../dev/mode/at-mode"},"Developer Guide"),"."),(0,o.kt)("h3",{id:"overall-mechanism"},"Overall Mechanism"),(0,o.kt)("p",null,"Evolution of Two-Phase Commit Protocol:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First Phase: Business data and rollback logs are committed in the same local transaction, releasing local locks and connection resources."),(0,o.kt)("li",{parentName:"ul"},"Second Phase:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Asynchronous commit, completed very quickly."),(0,o.kt)("li",{parentName:"ul"},"Rollback is compensated through the rollback logs of the first phase.")))),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"Let's abstract a use case where, during a user's purchase action, we need to decrease inventory and reduce the account balance. When the ",(0,o.kt)("inlineCode",{parentName:"p"},"stock_tbl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"account_tbl")," tables are in the same database, we can easily implement the transaction using the capabilities of the relational database itself. However, if these two tables belong to different data sources, we need to leverage Seata's distributed transaction capabilities."),(0,o.kt)("p",null,"Examine the example code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@GlobalTransactional\npublic void purchase(String userId, String commodityCode, int count, int money) {\n    jdbcTemplateA.update("update stock_tbl set count = count - ? where commodity_code = ?", new Object[] {count, commodityCode});\n    jdbcTemplateB.update("update account_tbl set money = money - ? where user_id = ?", new Object[] {money, userId});\n}\n')),(0,o.kt)("p",null,"If you have used the Spring framework's ",(0,o.kt)("inlineCode",{parentName:"p"},"@Transactional")," annotation before, you can understand the functionality of ",(0,o.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," based on a similar naming analogy. Yes, here we introduce an annotation to easily implement distributed transaction capabilities, and using AT Mode can minimize the cost of business refactoring."),(0,o.kt)("p",null,"It is important to note that ",(0,o.kt)("inlineCode",{parentName:"p"},"jdbcTemplateA")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jdbcTemplateB")," use different data sources for construction, and both of these different data sources need to be wrapped using Seata's AT data source proxy class ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSourceProxy"),". For information on what the data source proxy helps us achieve, please read the ",(0,o.kt)("a",{parentName:"p",href:"../appendix/isolation#%E4%BB%8E%E4%BB%A3%E7%90%86%E6%95%B0%E6%8D%AE%E6%BA%90%E8%AF%B4%E8%B5%B7"},"Transaction Isolation")," section in the appendix."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"../quickstart"},"Quick Start")," section to get hands-on experience with a complete example."))}p.isMDXComponent=!0}}]);