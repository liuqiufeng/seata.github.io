"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[52681],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},k=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),k=n,g=l["".concat(s,".").concat(k)]||l[k]||d[k]||i;return t?a.createElement(g,o(o({ref:r},p),{},{components:t})):a.createElement(g,o({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=k;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[l]="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},63162:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const i={title:"Eureka \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Eureka"],description:"Eureka \u6ce8\u518c\u4e2d\u5fc3\u3002"},o="Eureka \u6ce8\u518c\u4e2d\u5fc3",c={unversionedId:"user/registry/eureka",id:"user/registry/eureka",title:"Eureka \u6ce8\u518c\u4e2d\u5fc3",description:"Eureka \u6ce8\u518c\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/registry/eureka.md",sourceDirName:"user/registry",slug:"/user/registry/eureka",permalink:"/seata.github.io/zh-cn/docs/next/user/registry/eureka",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/registry/eureka.md",tags:[],version:"current",frontMatter:{title:"Eureka \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Eureka"],description:"Eureka \u6ce8\u518c\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"Nacos \u6ce8\u518c\u4e2d\u5fc3",permalink:"/seata.github.io/zh-cn/docs/next/user/registry/nacos"},next:{title:"Etcd3 \u6ce8\u518c\u4e2d\u5fc3",permalink:"/seata.github.io/zh-cn/docs/next/user/registry/etcd3"}},s={},u=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u589e\u52a0 Maven \u4f9d\u8d56",id:"\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"Client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3}],p={toc:u},l="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(l,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"eureka-\u6ce8\u518c\u4e2d\u5fc3"},"Eureka \u6ce8\u518c\u4e2d\u5fc3"),(0,n.kt)("p",null,"Eureka\u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0."),(0,n.kt)("h2",{id:"\u9884\u5907\u5de5\u4f5c"},"\u9884\u5907\u5de5\u4f5c"),(0,n.kt)("p",null,"\u5f53\u60a8\u5c06",(0,n.kt)("inlineCode",{parentName:"p"},"Eureka"),"\u6574\u5408\u5230\u60a8\u7684 Seata\u5de5\u7a0b\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 Eureka Server\u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 Eureka\u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://projects.spring.io/spring-cloud/spring-cloud.html#_service_discovery_eureka_clients"},"Eureka\u5feb\u901f\u5165\u95e8"),"\u3002\u5efa\u8bae\u4f7f\u7528 Eureka ",(0,n.kt)("inlineCode",{parentName:"p"},"2.X")," \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002"),(0,n.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,n.kt)("p",null,"Seata \u878d\u5408 Eureka\u6ce8\u518c\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a\u201c\u589e\u52a0 Maven \u4f9d\u8d56\u201d\u4ee5\u53ca\u201c\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3\u201c\u3002"),(0,n.kt)("h3",{id:"\u589e\u52a0-maven-\u4f9d\u8d56"},"\u589e\u52a0 Maven \u4f9d\u8d56"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"spring-cloud-starter-netflix-eureka-client")," \u7684 Maven \u4f9d\u8d56\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee ",(0,n.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"spring-cloud-starter-alibaba-seata"),"\u7684\u7248\u672c\u4e0e\u5bf9\u5e94\u5fae\u670d\u52a1\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"\u7248\u672c\u8bf4\u660e")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- seata \u4f9d\u8d56 --\x3e\n<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>\u6700\u65b0\u7248</version>\n</dependency>\n<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-seata</artifactId>\n    <version>2.1.2.RELEASE\u53ca\u4ee5\u4e0a\u7248\u672c</version>\n    <exclusions>\n        <exclusion>\n            <groupId>io.seata</groupId>\n            <artifactId>seata-spring-boot-starter</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n\x3c!-- eureka \u5ba2\u6237\u7aef\u4f9d\u8d56 --\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    <version>2.0.0.RELEASE\u53ca\u4ee5\u4e0a\u7248\u672c</version>\n</dependency>\n")),(0,n.kt)("h3",{id:"client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"},"Client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"),(0,n.kt)("p",null,"\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/2.x/script/client/spring/application.yml"},(0,n.kt)("strong",{parentName:"a"},"application.yml"))," \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/tree/2.x/script/client"},"\u914d\u7f6e\u53c2\u8003")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      default_tx_group: seata-server # \u6b64\u5904\u914d\u7f6e\u5bf9\u5e94Server\u7aef\u914d\u7f6eregistry.eureka.application\u7684\u503c\n  registry:\n    type: eureka\n    eureka:\n      service-url: http://localhost:8761/eureka\n")),(0,n.kt)("h3",{id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"},"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"),(0,n.kt)("p",null,"\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/2.x/server/src/main/resources/application.yml"},"conf/application.yml")," \u4e2d\u52a0\u5165\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/tree/2.x/script/server"},"\u914d\u7f6e\u53c2\u8003")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  registry:\n    type: eureka\n    eureka:\n      service-url: http://localhost:8761/eureka\n      application: seata-server\n      weight: 1\n")),(0,n.kt)("p",null,"\u968f\u540e,\u542f\u52a8 Seata-Server \u540e\uff0c\u4f1a\u53d1\u73b0Server\u7aef\u7684\u670d\u52a1\u51fa\u73b0\u5728 Eureka\u63a7\u5236\u53f0\u4e2d\u7684\u6ce8\u518c\u4e2d\u5fc3\u5217\u8868\u4e2d. Client \u914d\u7f6e\u5b8c\u6210\u540e\u542f\u52a8\u5e94\u7528\u5c31\u53ef\u4ee5\u6b63\u5f0f\u4f53\u9a8c Seata \u670d\u52a1\u3002"))}d.isMDXComponent=!0}}]);