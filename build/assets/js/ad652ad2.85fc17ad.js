"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[60818],{4573:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>h,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=t(74848),s=t(28453);const n={title:"Release Notes",keywords:["Seata","Release Notes"],description:"This article will introduce you how to understand the details of each version and upgrade matters needing attention."},h="Downloads",l={id:"release-notes",title:"Release Notes",description:"This article will introduce you how to understand the details of each version and upgrade matters needing attention.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.7/release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/seata.github.io/docs/v1.7/release-notes",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.7/release-notes.md",tags:[],version:"v1.7",frontMatter:{title:"Release Notes",keywords:["Seata","Release Notes"],description:"This article will introduce you how to understand the details of each version and upgrade matters needing attention."},sidebar:"release-notes"},r={},c=[{value:"1.7.1 (2023-09-05)",id:"171-2023-09-05",level:3},{value:"Seata 1.7.1",id:"seata-171",level:3},{value:"feature:",id:"feature",level:3},{value:"bugfix:",id:"bugfix",level:3},{value:"optimize:",id:"optimize",level:3},{value:"security:",id:"security",level:3},{value:"Link",id:"link",level:4},{value:"1.7.0 (2023-07-11)",id:"170-2023-07-11",level:3},{value:"Seata 1.7.0",id:"seata-170",level:3},{value:"feature:",id:"feature-1",level:3},{value:"bugfix:",id:"bugfix-1",level:3},{value:"optimize:",id:"optimize-1",level:3},{value:"security:",id:"security-1",level:3},{value:"test:",id:"test",level:3},{value:"Link",id:"link-1",level:4}];function o(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"downloads",children:"Downloads"}),"\n",(0,a.jsx)(i.h1,{id:"seata",children:"Seata"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsxs)(i.p,{children:["GitHub: ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata",children:"https://github.com/apache/incubator-seata"})]}),"\n",(0,a.jsxs)(i.p,{children:["Release Notes: ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/releases",children:"https://github.com/apache/incubator-seata/releases"})]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"171-2023-09-05",children:"1.7.1 (2023-09-05)"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/archive/v1.7.1.zip",children:"source"})," |\n",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/releases/download/v1.7.1/seata-server-1.7.1.zip",children:"binary"})]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)("mark",{children:"Release notes"})}),(0,a.jsx)(i.h3,{id:"seata-171",children:"Seata 1.7.1"}),(0,a.jsx)(i.p,{children:"Seata 1.7.1 Released"}),(0,a.jsx)(i.p,{children:"Seata is an easy-to-use, high-performance, open source distributed transaction solution."}),(0,a.jsx)(i.p,{children:"The version is updated as follows:"}),(0,a.jsx)(i.h3,{id:"feature",children:"feature:"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5803",children:"#5803"}),"] docker image supports JVM parameter injection"]}),"\n"]}),(0,a.jsx)(i.h3,{id:"bugfix",children:"bugfix:"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5749",children:"#5749"}),"] case of the pk col-name in the business sql is inconsistent with the case in the table metadata, resulting in a rollback failure"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5762",children:"#5762"}),"] change some fields type of TableMetaCache to avoid integer overflow"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5769",children:"#5769"}),"] fix the problem that the parameter prefix requirement of the setAttachment method in sofa-rpc is not met"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5814",children:"#5814"}),"] fix XA transaction start exception and rollback failure"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5771",children:"#5771"}),"] insert executor keywords unescape"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5814",children:"#5819"}),"] fix oracle column alias cannot find"]}),"\n"]}),(0,a.jsx)(i.h3,{id:"optimize",children:"optimize:"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5804",children:"#5804"}),"] optimize docker default timezone"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5815",children:"#5815"}),"] support the nacos application name property"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5820",children:"#5820"}),"] unified log output directory"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5822",children:"#5822"}),"] upgrade some deprecated github actions"]}),"\n"]}),(0,a.jsx)(i.h3,{id:"security",children:"security:"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5728",children:"#5728"}),"] fix some dependencies vulnerability"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5766",children:"#5766"}),"] fix some serializer vulnerabilities"]}),"\n"]}),(0,a.jsx)(i.p,{children:"Thanks to these contributors for their code commits. Please report an unintended omission."}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/slievrly",children:"slievrly"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/capthua",children:"capthua"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/robynron",children:"robynron"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/dmego",children:"dmego"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/xingfudeshi",children:"xingfudeshi"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/hadoop835",children:"hadoop835"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/funky-eyes",children:"funky-eyes"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/DroidEye2ONGU",children:"DroidEye2ONGU"})}),"\n"]}),(0,a.jsx)(i.p,{children:"Also, we receive many valuable issues, questions and advices from our community. Thanks for you all."}),(0,a.jsx)(i.h4,{id:"link",children:"Link"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Seata:"})," ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata",children:"https://github.com/apache/incubator-seata"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Seata-Samples:"})," ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata-samples",children:"https://github.com/apache/incubator-seata-samples"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Release:"})," ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/releases",children:"https://github.com/apache/incubator-seata/releases"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"WebSite:"})," ",(0,a.jsx)(i.a,{href:"https://seata.apache.org",children:"https://seata.apache.org"})]}),"\n"]})]}),"\n",(0,a.jsx)(i.h3,{id:"170-2023-07-11",children:"1.7.0 (2023-07-11)"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/archive/v1.7.0.zip",children:"source"})," |\n",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/releases/download/v1.7.0/seata-server-1.7.0.zip",children:"binary"})]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)("mark",{children:"Release notes"})}),(0,a.jsx)(i.h3,{id:"seata-170",children:"Seata 1.7.0"}),(0,a.jsx)(i.p,{children:"Seata 1.7.0 Released"}),(0,a.jsx)(i.p,{children:"Seata is an easy-to-use, high-performance, open source distributed transaction solution."}),(0,a.jsx)(i.p,{children:"The version is updated as follows:"}),(0,a.jsx)(i.h3,{id:"feature-1",children:"feature:"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5476",children:"#5476"}),"] first support ",(0,a.jsx)(i.code,{children:"native-image"})," for ",(0,a.jsx)(i.code,{children:"seata-client"})]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5495",children:"#5495"}),"] console integration saga-statemachine-designer"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5668",children:"#5668"}),"] compatible with file.conf and registry.conf configurations in version 1.4.2 and below"]}),"\n"]}),(0,a.jsx)(i.h3,{id:"bugfix-1",children:"bugfix:"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5682",children:"#5682"}),"]  fix saga mode replay context lost startParams"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5671",children:"#5671"}),"] fix saga mode serviceTask inputParams json autoType convert exception"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5194",children:"#5194"}),"] fix wrong keyword order for oracle when creating a table"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5201",children:"#5021"}),"] fix JDK Reflection for Spring origin proxy failed in JDK17"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5203",children:"#5023"}),"] fix ",(0,a.jsx)(i.code,{children:"seata-core"})," dependency transitive conflict in ",(0,a.jsx)(i.code,{children:"seata-dubbo"})]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5224",children:"#5224"}),"] fix oracle initialize script index_name is duplicate"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5233",children:"#5233"}),"] fix the inconsistent configuration item names related to LoadBalance"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5265",children:"#5266"}),"] fix server console has queried the released lock"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5245",children:"#5245"}),"] fix the incomplete dependency of distribution module"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5239",children:"#5239"}),"] fix ",(0,a.jsx)(i.code,{children:"getConfig"})," throw ",(0,a.jsx)(i.code,{children:"ClassCastException"})," when use JDK proxy"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5281",children:"#5281"}),"] parallel request handle throw IndexOutOfBoundsException"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5288",children:"#5288"}),"] fix auto-increment of pk columns in Oracle in AT mode"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5287",children:"#5287"}),"] fix auto-increment of pk columns in PostgreSQL in AT mode"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5299",children:"#5299"}),"] fix GlobalSession deletion when retry rollback or retry commit timeout"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5307",children:"#5307"}),"] fix that keywords don't add escaped characters"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5311",children:"#5311"}),"] remove RollbackRetryTimeout sessions during in file storage recover"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4734",children:"#4734"}),"] check if table meta cache should be refreshed in AT mode"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5316",children:"#5316"}),"] fix G1 jvm parameter in jdk8"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5321",children:"#5321"}),"] fix When the rollback logic on the TC side returns RollbackFailed, the custom FailureHandler is not executed"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5332",children:"#5332"}),"] fix bugs found in unit tests"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5145",children:"#5145"}),"] fix global session is always begin in saga mode"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5413",children:"#5413"}),"] fix bad service configuration file and compilation failure"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5415",children:"#5415"}),"] fix transaction timeout on client side not execute hook and failureHandler"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5447",children:"#5447"}),"] fix oracle xa mode cannnot be used By same database"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5472",children:"#5472"}),"] fix if using ",(0,a.jsx)(i.code,{children:"@GlobalTransactional"})," in RM, ",(0,a.jsx)(i.code,{children:"ShouldNeverHappenException"})," will be thrown"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5535",children:"#5535"}),"] fix the log file path was loaded incorrectly"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5538",children:"#5538"}),"] fix finished transaction swallows exception when committing"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5539",children:"#5539"}),"] fix the full table scan issue with 'setDate' condition in Oracle 10g"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5540",children:"#5540"}),"] fix GlobalStatus=9 can't be cleared in DB storage mode"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5552",children:"#5552"}),"] fix mariadb rollback failed"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5583",children:"#5583"}),"] fix grpc interceptor xid unbinding problem"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5602",children:"#5602"}),"] fix log in participant transaction role"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5645",children:"#5645"}),"] fix oracle insert undolog failed"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5659",children:"#5659"}),"] fix the issue of case sensitivity enforcement on the database after adding escape characters to keywords"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5663",children:"#5663"}),"] fix the timeout is null when the connectionProxyXA connection is reused"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5675",children:"#5675"}),"] fix compatibility between xxx.grouplist and grouplist.xxx configuration items"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5690",children:"#5690"}),"] fix console print ",(0,a.jsx)(i.code,{children:"unauthorized error"})]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5711",children:"#5711"}),"] fix get configuration item contains underlined error"]}),"\n"]}),(0,a.jsx)(i.h3,{id:"optimize-1",children:"optimize:"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5208",children:"#5208"}),"] optimize throwable getCause once more"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5212",children:"#5212"}),"] optimize log message level"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5237",children:"#5237"}),"] optimize exception log message print(EnhancedServiceLoader.loadFile#cahtch)"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5089",children:"#5089"}),"] optimize the check of the delay value of the TCC fence log clean task"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5243",children:"#5243"}),"] optimize kryo 5.4.0 optimize compatibility with jdk17"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5153",children:"#5153"}),"] Only AT mode try to get channel with other app"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5177",children:"#5177"}),"] If ",(0,a.jsx)(i.code,{children:"server.session.enable-branch-async-remove"})," is true, delete the branch asynchronously and unlock it synchronously."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5273",children:"#5273"}),"] optimize the compilation configuration of the ",(0,a.jsx)(i.code,{children:"protobuf-maven-plugin"})," plug-in to solve the problem of too long command lines in higher versions."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5303",children:"#5303"}),"] remove startup script the -Xmn configuration"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5325",children:"#5325"}),"] add store mode,config type and registry type log info"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5315",children:"#5315"}),"] optimize the log of SPI"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5323",children:"#5323"}),"] add time info for global transaction timeout log"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5414",children:"#5414"}),"] optimize transaction fail handler"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5537",children:"#5537"}),"] optimize transaction log on client side"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5541",children:"#5541"}),"] optimize server log output"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5548",children:"#5548"}),"] update expire gpg key and publish workflow"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5638",children:"#5638"}),"] optimize: set server's transaction level to READ_COMMITTED"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5646",children:"#5646"}),"] refactor ColumnUtils and EscapeHandler"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5648",children:"#5648"}),"] optimize server logs print"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5647",children:"#5647"}),"] support case-sensitive attributes for table and column metadata"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5678",children:"#5678"}),"] optimize escape character for case of columnNames"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5684",children:"#5684"}),"] optimize github actions for CodeQL, skywalking-eyes and checkout"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5700",children:"#5700"}),"] optimize distributed lock log"]}),"\n"]}),(0,a.jsx)(i.h3,{id:"security-1",children:"security:"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5172",children:"#5172"}),"] fix some security vulnerabilities"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5683",children:"#5683"}),"] add Hessian Serializer WhiteDenyList"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5696",children:"#5696"}),"] fix several node.js security vulnerabilities"]}),"\n"]}),(0,a.jsx)(i.h3,{id:"test",children:"test:"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5380",children:"#5380"}),"] fix UpdateExecutorTest failed"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5382",children:"#5382"}),"] fix multi spring version test failed"]}),"\n"]}),(0,a.jsx)(i.p,{children:"Thanks to these contributors for their code commits. Please report an unintended omission."}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/slievrly",children:"slievrly"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/xssdpgy",children:"xssdpgy"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/albumenj",children:"albumenj"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/PeppaO",children:"PeppaO"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/yuruixin",children:"yuruixin"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/dmego",children:"dmego"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/JavaLionLi",children:"CrazyLionLi"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/xingfudeshi",children:"xingfudeshi"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/Bughue",children:"Bughue"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/pengten",children:"pengten"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/wangliang181230",children:"wangliang181230"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/GoodBoyCoder",children:"GoodBoyCoder"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/funky-eyes",children:"funky-eyes"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/isharpever",children:"isharpever"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/ZhangShiYeChina",children:"ZhangShiYeChina"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/mxsm",children:"mxsm"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/l81893521",children:"l81893521"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/liuqiufeng",children:"liuqiufeng"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/wt-better",children:"yixia"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/jumtp",children:"jumtp"})}),"\n"]}),(0,a.jsx)(i.p,{children:"Also, we receive many valuable issues, questions and advices from our community. Thanks for you all."}),(0,a.jsx)(i.h4,{id:"link-1",children:"Link"}),(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Seata:"})," ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata",children:"https://github.com/apache/incubator-seata"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Seata-Samples:"})," ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata-samples",children:"https://github.com/apache/incubator-seata-samples"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Release:"})," ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/releases",children:"https://github.com/apache/incubator-seata/releases"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"WebSite:"})," ",(0,a.jsx)(i.a,{href:"https://seata.apache.org",children:"https://seata.apache.org"})]}),"\n"]})]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>h,x:()=>l});var a=t(96540);const s={},n=a.createContext(s);function h(e){const i=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:h(e.components),a.createElement(n.Provider,{value:i},e.children)}}}]);