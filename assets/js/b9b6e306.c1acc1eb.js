"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[78542],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3582:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const n={title:"Seata XA Mode",keywords:["Seata","XA"],description:"User guide for Seata XA mode"},i="Seata XA Mode",s={unversionedId:"user/mode/xa",id:"version-v1.8/user/mode/xa",title:"Seata XA Mode",description:"User guide for Seata XA mode",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.8/user/mode/xa.md",sourceDirName:"user/mode",slug:"/user/mode/xa",permalink:"/seata.github.io/docs/v1.8/user/mode/xa",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.8/user/mode/xa.md",tags:[],version:"v1.8",frontMatter:{title:"Seata XA Mode",keywords:["Seata","XA"],description:"User guide for Seata XA mode"},sidebar:"docs",previous:{title:"Seata Saga Mode",permalink:"/seata.github.io/docs/v1.8/user/mode/saga"},next:{title:"Transaction Group Introduction",permalink:"/seata.github.io/docs/v1.8/user/txgroup/transaction-group"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Overall Mechanism",id:"overall-mechanism",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Getting Started",id:"getting-started",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seata-xa-mode"},"Seata XA Mode"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"XA Mode is a transaction mode supported from version 1.2. The XA specification is a Distributed Transaction Processing (DTP) standard defined by the X/Open organization. Seata XA Mode utilizes the support of the XA protocol by transaction resources (databases, message services, etc.) to manage branch transactions using the mechanisms of the XA protocol."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1hSpccIVl614jSZKPXXaGjpXa-1330-924.png",alt:"Overview of a global transaction"})),(0,o.kt)("p",null,"In this document, we will focus on the usage of Seata XA Mode. If you are interested in the principles behind XA Mode, please read the corresponding ",(0,o.kt)("a",{parentName:"p",href:"../../dev/mode/xa-mode"},"Developer Guide"),"."),(0,o.kt)("h3",{id:"advantages"},"Advantages"),(0,o.kt)("p",null,"Unlike other transaction modes supported by Seata, the XA protocol requires transaction resources themselves to support the specification and protocol. This ensures effective isolation of data from any perspective, meeting global data consistency. Some additional advantages include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Non-intrusive to business: Similar to AT Mode, XA Mode is non-intrusive to business, not imposing additional burdens on application design and development."),(0,o.kt)("li",{parentName:"ol"},"Wide database support: The XA protocol is widely supported by mainstream relational databases, requiring no additional adaptation for use.")),(0,o.kt)("h3",{id:"disadvantages"},"Disadvantages"),(0,o.kt)("p",null,"After XA prepare, the branch transaction enters a blocking stage and must wait for XA commit or XA rollback. The transaction resource is not released for a long time, leading to a long lock cycle. Additionally, intervention at the application layer is not possible, resulting in poor performance."),(0,o.kt)("h3",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"Suitable for migrating old applications to the Seata platform based on the XA protocol. Using XA Mode provides a smoother transition, especially for database applications not adapted to AT Mode."),(0,o.kt)("h2",{id:"overall-mechanism"},"Overall Mechanism"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execution Phase:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Rollback Capability: Business SQL operations are performed within the XA branch, and the support of resources for the XA protocol ensures ",(0,o.kt)("em",{parentName:"li"},"rollback capability"),"."),(0,o.kt)("li",{parentName:"ul"},"Persistence: After the XA branch is completed, XA prepare is executed. Similarly, the support of resources for the XA protocol ensures ",(0,o.kt)("em",{parentName:"li"},"persistence")," (i.e., any subsequent accidents will not prevent rollback)."))),(0,o.kt)("li",{parentName:"ul"},"Completion Phase:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Branch Commit: Execute XA branch commit."),(0,o.kt)("li",{parentName:"ul"},"Branch Rollback: Execute XA branch rollback.")))),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"Using XA Mode is almost identical to AT Mode in terms of usage. The only difference lies in the replacement of the data source proxy: use ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSourceProxyXA")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSourceProxy"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class DataSourceProxy {\n    @Bean("dataSourceProxy")\n    public DataSource dataSource(DruidDataSource druidDataSource) {\n        // DataSourceProxyXA for XA mode\n        return new DataSourceProxyXA(druidDataSource);\n        // DataSourceProxy for AT mode\n        // return new DataSourceProxy(druidDataSource);\n    }\n}\n')),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Follow the examples in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata-samples/tree/master/tcc"},"seata-samples/xa")," for experimentation."))}d.isMDXComponent=!0}}]);