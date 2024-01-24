"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[26304],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(r),g=a,y=l["".concat(c,".").concat(g)]||l[g]||d[g]||i;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Nacos Registry Center",keywords:["Seata","Nacos","Registry Center"],description:"Nacos Registry Center."},s="Nacos Registry",o={unversionedId:"user/registry/nacos",id:"user/registry/nacos",title:"Nacos Registry Center",description:"Nacos Registry Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/user/registry/nacos.md",sourceDirName:"user/registry",slug:"/user/registry/nacos",permalink:"/seata.github.io/docs/next/user/registry/nacos",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/current/user/registry/nacos.md",tags:[],version:"current",frontMatter:{title:"Nacos Registry Center",keywords:["Seata","Nacos","Registry Center"],description:"Nacos Registry Center."},sidebar:"docs",previous:{title:"Introduction",permalink:"/seata.github.io/docs/next/user/registry/"},next:{title:"Eureka Registry Center",permalink:"/seata.github.io/docs/next/user/registry/eureka"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Adding Maven Dependencies",id:"adding-maven-dependencies",level:3},{value:"Configuring the Registry on the Client Side",id:"configuring-the-registry-on-the-client-side",level:3},{value:"Configuring the Registry on the Server Side",id:"configuring-the-registry-on-the-server-side",level:3}],p={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nacos-registry"},"Nacos Registry"),(0,a.kt)("p",null,"Nacos is an important registry implementation in the Seata component."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before integrating ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos-client")," into your Seata project, make sure that the Nacos service is already running in the background. If you are not familiar with the basic usage of Nacos, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/quick-start.html"},"Nacos Quick Start")," guide. It is recommended to use Nacos version ",(0,a.kt)("inlineCode",{parentName:"p"},"1.4.0")," or above."),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,'The steps to integrate Nacos registry into Seata are very simple and can be roughly divided into "adding Maven dependencies" and "configuring the registry".'),(0,a.kt)("h3",{id:"adding-maven-dependencies"},"Adding Maven Dependencies"),(0,a.kt)("p",null,"First, you need to add the Maven dependency for ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos-client")," to your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version</version>\n</dependency>\n<dependency>\n    <groupId>com.alibaba.nacos</groupId>\n    <artifactId>nacos-client</artifactId>\n    <version>1.4.0+</version>\n</dependency>\n")),(0,a.kt)("h3",{id:"configuring-the-registry-on-the-client-side"},"Configuring the Registry on the Client Side"),(0,a.kt)("p",null,"Add the corresponding configuration to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/2.x/script/client/spring/application.yml"},(0,a.kt)("strong",{parentName:"a"},"application.yml")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'seata:\n  registry:\n    type: nacos\n    nacos:\n      application: seata-server\n      namespace: ""\n      server-addr: 127.0.0.1:8848\n      group: SEATA_GROUP\n      username: ""\n      password: ""\n      ##if use MSE Nacos with auth, mutex with username/password attribute\n      #access-key: ""\n      #secret-key: ""\n      data-id: seata.properties\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      default_tx_group: default\n\n')),(0,a.kt)("h3",{id:"configuring-the-registry-on-the-server-side"},"Configuring the Registry on the Server Side"),(0,a.kt)("p",null,"Add the corresponding configuration to ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application.yaml"),", and refer to other ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/2.x/server/src/main/resources/application.example.yml"},"configuration options"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'seata:\n  registry:\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: 127.0.0.1:8848\n      group: SEATA_GROUP\n      namespace:\n      cluster: default\n      username:\n      password:\n      ##if use MSE Nacos with auth, mutex with username/password attribute\n      #access-key: ""\n      #secret-key: ""\n')),(0,a.kt)("p",null,"After that, when you start the Seata-Server, you will see the server's service appearing in the registry list on the Nacos console. Once the client is configured, you can start the application to experience the Seata service."),(0,a.kt)("p",null,"Tips: Make sure that the client and server are registered in the same namespace and group, otherwise the service will not be found."))}d.isMDXComponent=!0}}]);