"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[5241],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var l=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},o=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=u(a),c=i,k=m["".concat(p,".").concat(c)]||m[c]||h[c]||r;return a?l.createElement(k,n(n({ref:t},o),{},{components:a})):l.createElement(k,n({ref:t},o))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:i,n[1]=s;for(var u=2;u<r;u++)n[u]=a[u];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var l=a(87462),i=(a(67294),a(3905));const r={title:"Release Notes",keywords:["Seata","Release Notes"],description:"This article will introduce you how to understand the details of each version and upgrade matters needing attention."},n="Downloads",s={unversionedId:"release-notes",id:"version-v1.6/release-notes",title:"Release Notes",description:"This article will introduce you how to understand the details of each version and upgrade matters needing attention.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.6/release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/docs/v1.6/release-notes",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.6/release-notes.md",tags:[],version:"v1.6",frontMatter:{title:"Release Notes",keywords:["Seata","Release Notes"],description:"This article will introduce you how to understand the details of each version and upgrade matters needing attention."},sidebar:"release-notes"},p={},u=[{value:"1.6.1 (2022-12-21)",id:"161-2022-12-21",level:3},{value:"Seata 1.6.1",id:"seata-161",level:3},{value:"feature:",id:"feature",level:3},{value:"bugfix:",id:"bugfix",level:3},{value:"optimize:",id:"optimize",level:3},{value:"Link",id:"link",level:4},{value:"1.6.0 (2022-12-17)",id:"160-2022-12-17",level:3},{value:"Seata 1.6.0",id:"seata-160",level:3},{value:"feature\uff1a",id:"feature-1",level:3},{value:"bugfix\uff1a",id:"bugfix-1",level:3},{value:"optimize\uff1a",id:"optimize-1",level:3},{value:"test:",id:"test",level:3},{value:"Link",id:"link-1",level:4}],o={toc:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"downloads"},"Downloads"),(0,i.kt)("h1",{id:"seata"},"Seata"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata"},"https://github.com/seata/seata")),(0,i.kt)("p",{parentName:"blockquote"},"Release Notes: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases"},"https://github.com/seata/seata/releases"))),(0,i.kt)("h3",{id:"161-2022-12-21"},"1.6.1 (2022-12-21)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/archive/v1.6.1.zip"},"source")," |\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases/download/v1.6.1/seata-server-1.6.1.zip"},"binary")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("mark",null,"Release notes")),(0,i.kt)("h3",{id:"seata-161"},"Seata 1.6.1"),(0,i.kt)("p",null,"Seata 1.6.1 Released"),(0,i.kt)("p",null,"Seata is an easy-to-use, high-performance, open source distributed transaction solution."),(0,i.kt)("p",null,"The version is updated as follows:"),(0,i.kt)("h3",{id:"feature"},"feature:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5115"},"#5115"),"] support for ",(0,i.kt)("inlineCode",{parentName:"li"},"spring-boot:3.x"))),(0,i.kt)("h3",{id:"bugfix"},"bugfix:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5179"},"#5179"),"] fix ClassNotFoundException when server starts using Eureka")),(0,i.kt)("h3",{id:"optimize"},"optimize:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5120"},"#5120"),"] unify the format of configuration items in yml files"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5180"},"#5180"),"] GlobalTransactionScanner,SeataAutoDataSourceProxyCreator declare @bean methods as static"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5182"},"#5182"),"] fix some security vulnerabilities in GGEditor"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5183"},"#5183"),"] optimize the default values for some switches")),(0,i.kt)("p",null,"Thanks to these contributors for their code commits. Please report an unintended omission."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/slievrly"},"slievrly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wangliang181230"},"wangliang181230")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/xingfudeshi"},"xingfudeshi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/whxxxxx"},"whxxxxx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/xssdpgy"},"xssdpgy"))),(0,i.kt)("p",null,"Also, we receive many valuable issues, questions and advices from our community. Thanks for you all."),(0,i.kt)("h4",{id:"link"},"Link"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Seata:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata"},"https://github.com/seata/seata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Seata-Samples:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples"},"https://github.com/seata/seata-samples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Release:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/releases"},"https://github.com/seata/seata/releases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WebSite:")," ",(0,i.kt)("a",{parentName:"li",href:"https://seata.io"},"https://seata.io")))),(0,i.kt)("h3",{id:"160-2022-12-17"},"1.6.0 (2022-12-17)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/archive/v1.6.0.zip"},"source")," |\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases/download/v1.6.0/seata-server-1.6.0.zip"},"binary")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("mark",null,"Release notes")),(0,i.kt)("h3",{id:"seata-160"},"Seata 1.6.0"),(0,i.kt)("p",null,"Seata 1.6.0 Released"),(0,i.kt)("p",null,"Seata is an easy-to-use, high-performance, open source distributed transaction solution."),(0,i.kt)("p",null,"The version is updated as follows:"),(0,i.kt)("h3",{id:"feature-1"},"feature\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4863"},"#4863"),"] support oracle and postgresql multi primary key"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4649"},"#4649"),"] seata-server support multiple registry"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4779"},"#4779"),"] support Apache Dubbo3"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4479"},"#4479"),"] TCC mode supports tcc annotation marked on both interface and implementation class"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4877"},"#4877"),"] seata client support jdk17"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4914"},"#4914"),"] support mysql update join sql"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4542"},"#4542"),"] support oracle timestamp types"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5111"},"#5111"),"] support Nacos contextPath"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4802"},"#4802"),"] dockerfile support arm64")),(0,i.kt)("h3",{id:"bugfix-1"},"bugfix\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4780"},"#4780"),"] fix can't post TimeoutRollbacked event after a successful timeout rollback"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4954"},"#4954"),"] fix output expression incorrectly throws npe"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4817"},"#4817"),"] fix in high version springboot property not Standard"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4838"},"#4838"),"] fix when use Statement.executeBatch() can not generate undo log"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4533"},"#4533"),"] fix rollback event repeated and some event status not correct"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4912"},"#4912"),"] fix mysql InsertOnDuplicateUpdate column case is different and cannot be matched"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4543"},"#4543"),"] fix support Oracle nclob types"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4915"},"#4915"),"] fix failed to get server recovery properties"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4919"},"#4919"),"] fix XID port  and  address null:0 before coordinator.init"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4928"},"#4928"),"] fix rpcContext.getClientRMHolderMap NPE"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4953"},"#4953"),"] fix InsertOnDuplicateUpdate bypass modify pk"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4978"},"#4978"),"] fix kryo support circular reference"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4874"},"#4874"),"] fix startup failure by using OpenJDK 11"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5018"},"#5018"),"] fix loader path in startup scripts"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5004"},"#5004"),"] fix duplicate image row for update join"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5032"},"#5032"),"] fix mysql InsertOnDuplicateUpdate sql query error caused by placeholder index calculation error"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5033"},"#5033"),"] fix null exception when sql columns is empty for insert on duplicate"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5038"},"#5038"),"] remove @EnableConfigurationProperties({SagaAsyncThreadPoolProperties.class})"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5050"},"#5050"),"] fix global session is not change to Committed in saga mode"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5052"},"#5052"),"] fix update join condition placeholder param error"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5031"},"#5031"),"] fix mysql InsertOnDuplicateUpdate should not use null index value as image sql query condition"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5075"},"#5075"),"] fix InsertOnDuplicateUpdateExecutor could not intercept the sql which has no primary and unique key"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5093"},"#5093"),"] fix access key loss after seata server restart"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5092"},"#5092"),"] fix when seata and jpa are used together, their AutoConfiguration order is incorrect"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5109"},"#5109"),"] fix NPE caused when there is no @GlobalTransactional annotation on the RM side"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5098"},"#5098"),"] Druid disable oracle implicit cache"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4860"},"#4860"),"] fix metrics tags coverage in the seata-server side"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5028"},"#5028"),"] fix insert value null parsed as string in insert on duplicate SQL"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5078"},"#5078"),"] fix could not intercept the sql witch has no primary and unique key"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5097"},"#5097"),"] fix access key loss after server restart"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5131"},"#5131"),"] fix rollback xa connection active state"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5134"},"#5134"),"] fix hikari datasource auto proxy fail"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5163"},"#5163"),"] fix bad service configuration file and compilation failure")),(0,i.kt)("h3",{id:"optimize-1"},"optimize\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4774"},"#4774"),"] optimize mysql8 dependencies for seataio/seata-server image"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4790"},"#4790"),"] Add a github action to publish Seata to OSSRH"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4765"},"#4765"),"] mysql 8.0.29 not should be hold for connection"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4750"},"#4750"),"] optimize unBranchLock romove xid"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4797"},"#4797"),"] optimize the github actions"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4800"},"#4800"),"] Add NOTICE as Apache License V2"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4681"},"#4681"),"] optimize the check lock during global transaction"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4761"},"#4761"),"] use hget replace hmget because only one field"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4414"},"#4414"),"] exclude log4j dependencies"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4836"},"#4836"),"] optimize BaseTransactionalExecutor#buildLockKey(TableRecords rowsIncludingPK) method more readable"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4865"},"#4865"),"] fix some security vulnerabilities in GGEditor"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4590"},"#4590"),"] auto degrade enable to dynamic configure"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4490"},"#4490"),"] tccfence log table delete by index"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4911"},"#4911"),"] add license checker workflow"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4917"},"#4917"),"] upgrade package-lock.json fix vulnerabilities"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4924"},"#4924"),"] optimize pom dependencies"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4932"},"#4932"),"] extract the default values for some properties"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4925"},"#4925"),"] optimize java doc warning"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4921"},"#4921"),"] fix some vulnerabilities in console and upgrade skywalking-eyes"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4936"},"#4936"),"] optimize read of storage configuration"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4946"},"#4946"),"] pass the sqlexception to client when get lock"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4962"},"#4962"),"] optimize build and fix the base image"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4974"},"#4974"),"] optimize cancel the limit on the number of globalStatus queries in Redis mode"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4981"},"#4981"),"] optimize tcc fence record not exists errMessage"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4985"},"#4985"),"] fix undo_log id repeat"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4995"},"#4995"),"] fix mysql InsertOnDuplicateUpdate duplicate pk condition in after image query sql"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5047"},"#5047"),"] remove useless code"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5051"},"#5051"),"] undo log dirty throw BranchRollbackFailed_Unretriable"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5075"},"#5075"),"] intercept the InsertOnDuplicateUpdate statement which has no primary key and unique index value"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5104"},"#5104"),"] remove the druid dependency in ConnectionProxy"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5124"},"#5124"),"] support oracle on delete tccfence logs"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4968"},"#4468"),"] support kryo 5.3.0"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4807"},"#4807"),"] optimize docker image and oss publish"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4445"},"#4445"),"] optimize transaction timeout judgment"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4958"},"#4958"),"] do not execute triggerAfterCommit() if timeout"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4582"},"#4582"),"] redis mode support sorted set by timeout"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4963"},"#4963"),"] add ARM64 CI workflow"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4434"},"#4434"),"] remove seata-server's CMS parameters")),(0,i.kt)("h3",{id:"test"},"test:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4411"},"#4411"),"] add UT for oracle in AT mode"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4794"},"#4794"),"] try to fix the test ",(0,i.kt)("inlineCode",{parentName:"li"},"DataSourceProxyTest.getResourceIdTest()")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/5101"},"#5101"),"] fix ClassNotFoundException during the zk unit test")),(0,i.kt)("p",null,"Thanks to these contributors for their code commits. Please report an unintended omission."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/slievrly"},"slievrly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/renliangyu857"},"renliangyu857")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wangliang181230"},"wangliang181230")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/funky-eyes"},"funky-eyes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tuwenlin"},"tuwenlin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/conghuhu"},"conghuhu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/a1104321118"},"a1104321118")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/duanqiaoyanyu"},"duanqiaoyanyu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/robynron"},"robynron")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lcmvs"},"lcmvs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/github-ganyu"},"github-ganyu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/1181954449"},"1181954449")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zw201913"},"zw201913")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wingchi-leung"},"wingchi-leung")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AlexStocks"},"AlexStocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/liujunlin5168"},"liujunlin5168")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pengten"},"pengten")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/liuqiufeng"},"liuqiufeng")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yujianfei1986"},"yujianfei1986")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Bughue"},"Bughue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AlbumenJ"},"AlbumenJ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/doubleDimple"},"doubleDimple")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jsbxyyx"},"jsbxyyx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tuwenlin"},"tuwenlin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/JavaLionLi"},"CrazyLionLi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/whxxxxx"},"whxxxxx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neillee95"},"neillee95")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/crazy-sheep"},"crazy-sheep")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zhangzq7"},"zhangzq7")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/l81893521"},"l81893521")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zhuyoufeng"},"zhuyoufeng")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/xingfudeshi"},"xingfudeshi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/odidev"},"odidev")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/miaoxueyu"},"miaoxueyu"))),(0,i.kt)("p",null,"Also, we receive many valuable issues, questions and advices from our community. Thanks for you all."),(0,i.kt)("h4",{id:"link-1"},"Link"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Seata:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata"},"https://github.com/seata/seata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Seata-Samples:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples"},"https://github.com/seata/seata-samples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Release:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/releases"},"https://github.com/seata/seata/releases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WebSite:")," ",(0,i.kt)("a",{parentName:"li",href:"https://seata.io"},"https://seata.io")))))}h.isMDXComponent=!0}}]);