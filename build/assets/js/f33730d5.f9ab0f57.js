"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[45865],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const n={title:"Seata XA Mode",keywords:["Seata"],description:"Seata XA Mode"},i="Seata XA Mode",s={unversionedId:"dev/mode/xa-mode",id:"version-v2.0/dev/mode/xa-mode",title:"Seata XA Mode",description:"Seata XA Mode",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.0/dev/mode/xa-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/xa-mode",permalink:"/seata.github.io/docs/dev/mode/xa-mode",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.0/dev/mode/xa-mode.md",tags:[],version:"v2.0",frontMatter:{title:"Seata XA Mode",keywords:["Seata"],description:"Seata XA Mode"},sidebar:"docs",previous:{title:"Seata Saga Mode",permalink:"/seata.github.io/docs/dev/mode/saga-mode"},next:{title:"Overview of Domain Model",permalink:"/seata.github.io/docs/dev/domain/overviewDomainModel"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overall Mechanism",id:"overall-mechanism",level:2},{value:"1. Overall Operation Mechanism",id:"1-overall-operation-mechanism",level:4},{value:"2. Data Source Proxy",id:"2-data-source-proxy",level:4},{value:"3. Branch Registration",id:"3-branch-registration",level:4},{value:"How to use XA Mode",id:"how-to-use-xa-mode",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seata-xa-mode"},"Seata XA Mode"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Databases that support XA transaction."),(0,o.kt)("li",{parentName:"ul"},"Java applications that access database via JDBC.")),(0,o.kt)("h2",{id:"overall-mechanism"},"Overall Mechanism"),(0,o.kt)("p",null,"In the distributed transaction framework defined by Seata, XA mode is a transaction mode that manages branch transactions using the XA protocol mechanism, leveraging transaction resources such as databases and message services with XA protocol support."),(0,o.kt)("img",{src:"https://img.alicdn.com/tfs/TB1hSpccIVl614jSZKPXXaGjpXa-1330-924.png",style:{zoom:"50%"}}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Execution Phase:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Rollbackable: Business SQL operations are placed in XA branches, and the XA protocol support ensures ",(0,o.kt)("em",{parentName:"li"},"rollbackability"),"."),(0,o.kt)("li",{parentName:"ul"},"Persistent: After XA branches are completed, XA prepare is executed, and again, XA protocol support ensures ",(0,o.kt)("em",{parentName:"li"},"persistence")," (i.e., no unexpected situations will prevent rollback)."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Completion Phase:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Branch Commit: Execute XA branch commit."),(0,o.kt)("li",{parentName:"ul"},"Branch Rollback: Execute XA branch rollback.")))),(0,o.kt)("h1",{id:"working-mechanism"},"Working Mechanism"),(0,o.kt)("h4",{id:"1-overall-operation-mechanism"},"1. Overall Operation Mechanism"),(0,o.kt)("p",null,"XA mode runs within the transaction framework defined by Seata:"),(0,o.kt)("img",{src:"https://img.alicdn.com/tfs/TB1uM2OaSslXu8jSZFuXXXg7FXa-1330-958.png",alt:"xa-fw",style:{zoom:"50%"}}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Execution Phase (E xecute):"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"XA start/XA end/XA prepare + SQL + Register Branch"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Completion Phase (F inish):"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"XA commit/XA rollback")))),(0,o.kt)("h4",{id:"2-data-source-proxy"},"2. Data Source Proxy"),(0,o.kt)("p",null,"XA mode requires XAConnection."),(0,o.kt)("p",null,"There are two ways to obtain XAConnection:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Option 1: Developers are required to configure XADataSource."),(0,o.kt)("li",{parentName:"ul"},"Option 2: Create it based on the developer's regular DataSource.")),(0,o.kt)("p",null,"The first method adds cognitive burden to developers, as they need to learn and use XADataSource specifically for XA mode, which contradicts the design goal of transparent XA programming."),(0,o.kt)("p",null,"The second method is more developer-friendly. Like the AT mode, developers do not need to worry about any XA-related issues. They can maintain the local programming model."),(0,o.kt)("p",null,"We prioritize designing and implementing the second method: DataSource proxy creates the corresponding XAConnection based on the regular JDBC connection obtained from the regular data source."),(0,o.kt)("p",null,"Compared to the data source proxy mechanism in the AT mode, it looks like this:"),(0,o.kt)("img",{src:"https://img.alicdn.com/tfs/TB11_LJcggP7K4jSZFqXXamhVXa-1564-894.png",alt:"ds1",style:{zoom:"50%"}}),(0,o.kt)("p",null,"However, the second method also has its limitations: it cannot guarantee compatibility correctness."),(0,o.kt)("p",null,"In fact, this method is what database drivers should do. The implementation mechanisms of database drivers from different vendors and versions are vendor-specific. We can only ensure correctness on well-tested driver programs. Differences in the versions of driver programs used by developers may lead to the failure of the mechanism."),(0,o.kt)("p",null,"This is particularly evident with Oracle. See the Druid issue: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/druid/issues/3707"},"https://github.com/alibaba/druid/issues/3707")),(0,o.kt)("p",null,"Taking all factors into consideration, the data source proxy design for XA mode needs to support the first method: proxy based on XADataSource."),(0,o.kt)("p",null,"Compared to the data source proxy mechanism in the AT mode, it looks like this:"),(0,o.kt)("img",{src:"https://img.alicdn.com/tfs/TB1qJ57XZieb18jSZFvXXaI3FXa-1564-894.png",alt:"ds2",style:{zoom:"50%"}}),(0,o.kt)("h4",{id:"3-branch-registration"},"3. Branch Registration"),(0,o.kt)("p",null,"XA start requires an Xid parameter."),(0,o.kt)("p",null,"This parameter needs to be associated with the Seata global transaction's XID and BranchId so that the TC can drive the XA branch's commit or rollback."),(0,o.kt)("p",null,"Currently, Seata's BranchId is generated uniformly during branch registration. Therefore, the timing of XA mode branch registration needs to be before XA start."),(0,o.kt)("p",null,"A possible optimization in the future is:"),(0,o.kt)("p",null,"Delay branch registration as much as possible. Similar to the AT mode, we register the branch just before local transaction submission to avoid registering meaningless branches in case of branch execution failure."),(0,o.kt)("p",null,"This optimization direction requires changes to the BranchId generation mechanism. BranchId should not be generated through branch registration but should be generated separately and then used to register the branch."),(0,o.kt)("h2",{id:"how-to-use-xa-mode"},"How to use XA Mode"),(0,o.kt)("p",null,"From a programming model perspective, XA mode is identical to AT mode."),(0,o.kt)("p",null,"You can refer to Seata's official sample: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata-samples/tree/master/seata-xa"},"seata-xa")),(0,o.kt)("p",null,"In the sample, the upper-level programming model is the same as the AT mode. You only need to modify the data source proxy to switch between XA mode and AT mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Bean("dataSource")\npublic DataSource dataSource(DruidDataSource druidDataSource) {\n    // DataSourceProxy for AT mode\n    // return new DataSourceProxy(druidDataSource);\n\n    // DataSourceProxyXA for XA mode\n    return new DataSourceProxyXA(druidDataSource);\n}\n')))}p.isMDXComponent=!0}}]);