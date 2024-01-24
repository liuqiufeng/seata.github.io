"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[8015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?o.createElement(g,i(i({ref:t},l),{},{components:n})):o.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Consul Configuration Center",keywords:["Seata","Consul"],description:"Consul Configuration Center."},i="Consul Configuration Center",s={unversionedId:"user/configuration/consul",id:"version-v1.2/user/configuration/consul",title:"Consul Configuration Center",description:"Consul Configuration Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/configuration/consul.md",sourceDirName:"user/configuration",slug:"/user/configuration/consul",permalink:"/docs/v1.2/user/configuration/consul",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/configuration/consul.md",tags:[],version:"v1.2",frontMatter:{title:"Consul Configuration Center",keywords:["Seata","Consul"],description:"Consul Configuration Center."},sidebar:"docs",previous:{title:"Etcd3 Configuration Center",permalink:"/docs/v1.2/user/configuration/etcd3"},next:{title:"Zookeeper Configuration Center",permalink:"/docs/v1.2/user/configuration/zookeeper"}},c={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Configure Consul as the Configuration Center",id:"configure-consul-as-the-configuration-center",level:3},{value:"Submit Key-Value Configuration to Consul",id:"submit-key-value-configuration-to-consul",level:3},{value:"Client-side Configuration of Consul as Configuration Center",id:"client-side-configuration-of-consul-as-configuration-center",level:3},{value:"Client-side Configuration",id:"client-side-configuration",level:3}],l={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consul-configuration-center"},"Consul Configuration Center"),(0,r.kt)("p",null,"Based on ",(0,r.kt)("a",{parentName:"p",href:"/docs/user/registry/consul"},"Using Consul as a Registry"),", put Seata configuration into Consul."),(0,r.kt)("p",null,"This article is based on Seata 1.4.2, and Consul version 1.8+ is recommended. Consul 1.11.2 is used as an example in the following text."),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"Before using Consul as the Seata configuration center, make sure that the Consul service has been started."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"The steps to configure Consul as the Seata configuration center are very simple and can be divided into the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure Consul as the configuration center for seata-server."),(0,r.kt)("li",{parentName:"ol"},"Submit Key-Value configuration to Consul."),(0,r.kt)("li",{parentName:"ol"},"Configure Consul as the configuration center for the client.")),(0,r.kt)("h3",{id:"configure-consul-as-the-configuration-center"},"Configure Consul as the Configuration Center"),(0,r.kt)("p",null,"First, make sure that your Consul service has been started."),(0,r.kt)("p",null,"In the Seata directory /conf/registry.conf, add the corresponding configuration center. For other configuration references, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/server/config/registry.conf"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'config {\n  type = "consul"\n\n  consul {\n    serverAddr = "127.0.0.1:8500"\n    aclToken = ""\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"At this time, when starting the Seata service, the following information will be prompted. You can close the service first.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"config operation timeout,cost:5015 ms,op:GET,dataId:store.mode\nconfig operation timeout,cost:5006 ms,op:GET,dataId:metrics.enabled\nconfig operation timeout,cost:5001 ms,op:GET,dataId:transport.threadFactory.bossThreadPrefix\nconfig operation timeout,cost:5009 ms,op:GET,dataId:transport.threadFactory.workerThreadPrefix\n# Other similar information is omitted here~\n")),(0,r.kt)("h3",{id:"submit-key-value-configuration-to-consul"},"Submit Key-Value Configuration to Consul"),(0,r.kt)("p",null,"The above error message appears because the corresponding configuration is missing in Consul. Please submit the configuration to Consul Key/Value in one of the following ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Through the Consul console UI, Key/Value -> create."),(0,r.kt)("li",{parentName:"ol"},"Through ",(0,r.kt)("a",{parentName:"li",href:"https://www.consul.io/api-docs/kv"},"HTTP requests"),"."),(0,r.kt)("li",{parentName:"ol"},"Through ",(0,r.kt)("a",{parentName:"li",href:"https://www.consul.io/commands/kv"},"Consul command-line tools"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Recommended: Use the official provided script to upload the configuration"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tips"),": For version 1.4.2, you need to create key-value one by one. Starting from version 1.5.0, it supports key corresponding to a file."),(0,r.kt)("p",null,"Taking store.mode=file as an example, submit the configuration corresponding to the error message. You can find the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/config.txt"},"default configuration")," here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"store.mode=file\nstore.publicKey=\nstore.file.dir=file_store/data\nstore.file.maxBranchSessionSize=16384\n# The remaining configuration items are omitted~\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Recommended to use official script:")," The above methods 1~3 require adding configurations one by one, which is cumbersome. To address this, the official provides a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/consul/consul-config.sh"},"script")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/config.txt"},"default configuration")," for quickly adding configurations."),(0,r.kt)("p",null,"Place the config.txt file in the ",(0,r.kt)("strong",{parentName:"p"},"parent directory")," of consul-config.sh, and adjust the configuration in config.txt according to your needs (mainly seata.mode and configurations with prefixes seata.file, seata.db, and seata.redis)."),(0,r.kt)("p",null,"Execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh {PATH}/consul-config.sh -h localhost -p 8500\n")),(0,r.kt)("p",null,"For specific operations, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/README.md"},"README.md"),"."),(0,r.kt)("p",null,"Restart the Seata service at this point, and you will find that there are no more errors, indicating that Consul is successfully used as the configuration center. If you need to adjust the configuration later, you can go to the console to modify the corresponding configuration separately, and restart the service after modification."),(0,r.kt)("h3",{id:"client-side-configuration-of-consul-as-configuration-center"},"Client-side Configuration of Consul as Configuration Center"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Taking a SpringBoot project as an example, add the following to the project's pom.xml file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version (Seata version)</version>\n</dependency>\n<dependency>\n<groupId>org.springframework.cloud</groupId>\n<artifactId>spring-cloud-starter-consul-config</artifactId>\n</dependency>\n")),(0,r.kt)("h3",{id:"client-side-configuration"},"Client-side Configuration"),(0,r.kt)("p",null,"Add the corresponding configuration center in application.yml, and refer to other ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml"},"configurations"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  config:\n    type: consul\n    consul:\n      server-addr: 127.0.0.1:8500\n")),(0,r.kt)("p",null,"Restart the Client."))}f.isMDXComponent=!0}}]);