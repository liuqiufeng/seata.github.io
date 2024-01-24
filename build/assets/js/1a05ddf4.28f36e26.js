"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[98313],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),g=a,f=l["".concat(c,".").concat(g)]||l[g]||d[g]||i;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},71758:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={title:"Eureka Registry Center",keywords:["Seata","Eureka","Registry Center"],description:"Eureka Registry Center."},o="Eureka Registry",s={unversionedId:"user/registry/eureka",id:"version-v1.6/user/registry/eureka",title:"Eureka Registry Center",description:"Eureka Registry Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/registry/eureka.md",sourceDirName:"user/registry",slug:"/user/registry/eureka",permalink:"/docs/v1.6/user/registry/eureka",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/registry/eureka.md",tags:[],version:"v1.6",frontMatter:{title:"Eureka Registry Center",keywords:["Seata","Eureka","Registry Center"],description:"Eureka Registry Center."},sidebar:"docs",previous:{title:"Nacos Registry Center",permalink:"/docs/v1.6/user/registry/nacos"},next:{title:"Etcd3 Registry Center",permalink:"/docs/v1.6/user/registry/etcd3"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Adding Maven Dependencies",id:"adding-maven-dependencies",level:3},{value:"Configuring the Registry on the Client Side",id:"configuring-the-registry-on-the-client-side",level:3},{value:"Server-side configuration of the registry center",id:"server-side-configuration-of-the-registry-center",level:3}],p={toc:u},l="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eureka-registry"},"Eureka Registry"),(0,a.kt)("p",null,"Eureka is an important registry implementation in the Seata component."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before integrating ",(0,a.kt)("inlineCode",{parentName:"p"},"Eureka")," into your Seata project, make sure that the Eureka Server service is already running in the background. If you are not familiar with the basic usage of Eureka, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://projects.spring.io/spring-cloud/spring-cloud.html#_service_discovery_eureka_clients"},"Eureka Quick Start")," for reference. It is recommended to use Eureka version ",(0,a.kt)("inlineCode",{parentName:"p"},"2.X")," or above."),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,'The steps to integrate Eureka registry into Seata are very simple, and can be roughly divided into "Adding Maven Dependencies" and "Configuring the Registry".'),(0,a.kt)("h3",{id:"adding-maven-dependencies"},"Adding Maven Dependencies"),(0,a.kt)("p",null,"First, you need to add the Maven dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"spring-cloud-starter-netflix-eureka-client")," to your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file. It is recommended to use Seata ",(0,a.kt)("inlineCode",{parentName:"p"},"1.4.0+"),". For the version relationship between ",(0,a.kt)("inlineCode",{parentName:"p"},"spring-cloud-starter-alibaba-seata")," and the corresponding microservice version, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"Version Description"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- seata dependency --\x3e\n<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version</version>\n</dependency>\n<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-seata</artifactId>\n    <version>2.1.2.RELEASE and above</version>\n    <exclusions>\n        <exclusion>\n            <groupId>io.seata</groupId>\n            <artifactId>seata-spring-boot-starter</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n        \x3c!-- eureka client dependency --\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    <version>2.0.0.RELEASE and above</version>\n</dependency>\n")),(0,a.kt)("h3",{id:"configuring-the-registry-on-the-client-side"},"Configuring the Registry on the Client Side"),(0,a.kt)("p",null,"Add the corresponding configuration to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/1.6.0/script/client/spring/application.yml"},(0,a.kt)("strong",{parentName:"a"},"application.yml")),", and refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/tree/1.6.0/script/client"},"Configuration Reference")," for other configurations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      default_tx_group: seata-server # Configure the corresponding value of registry.eureka.application on the Server side here\n  registry:\n    type: eureka\n    eureka:\n      service-url: http://localhost:8761/eureka\n")),(0,a.kt)("h3",{id:"server-side-configuration-of-the-registry-center"},"Server-side configuration of the registry center"),(0,a.kt)("p",null,"Add the corresponding configuration center in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/1.6.0/server/src/main/resources/application.yml"},"conf/application.yml"),", and refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/1.6.0/server/src/main/resources/application.example.yml"},"configuration")," for the rest."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  registry:\n    type: eureka\n    eureka:\n      service-url: http://localhost:8761/eureka\n      application: seata-server\n      weight: 1\n")),(0,a.kt)("p",null,"After that, when Seata-Server is started, the Server-side service will appear in the registry center list in the Eureka console. After configuring the Client, you can start the application to experience the Seata service."))}d.isMDXComponent=!0}}]);