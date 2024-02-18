"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[61962],{88191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(74848),r=n(28453);const o={title:"Etcd3 Configuration Center",keywords:["Seata","Etcd3"],description:"Etcd3 Configuration Center."},c="Etcd3 Configuration Center",a={id:"user/configuration/etcd3",title:"Etcd3 Configuration Center",description:"Etcd3 Configuration Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.0/user/configuration/etcd3.md",sourceDirName:"user/configuration",slug:"/user/configuration/etcd3",permalink:"/seata.github.io/docs/v1.0/user/configuration/etcd3",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.0/user/configuration/etcd3.md",tags:[],version:"v1.0",frontMatter:{title:"Etcd3 Configuration Center",keywords:["Seata","Etcd3"],description:"Etcd3 Configuration Center."},sidebar:"docs",previous:{title:"Apollo Configuration Center",permalink:"/seata.github.io/docs/v1.0/user/configuration/apollo"},next:{title:"Consul Configuration Center",permalink:"/seata.github.io/docs/v1.0/user/configuration/consul"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Adding Maven Dependencies",id:"adding-maven-dependencies",level:3},{value:"Client-side Configuration Center",id:"client-side-configuration-center",level:3},{value:"Server-side Configuration Center",id:"server-side-configuration-center",level:3},{value:"Upload Configuration to Etcd3 Configuration Center",id:"upload-configuration-to-etcd3-configuration-center",level:3},{value:"Upload Configuration to Etcd3 via Script",id:"upload-configuration-to-etcd3-via-script",level:4}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"etcd3-configuration-center",children:"Etcd3 Configuration Center"}),"\n",(0,i.jsx)(t.p,{children:"Etcd3 is an important configuration center implementation in the Seata component."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["Before integrating ",(0,i.jsx)(t.code,{children:"Etcd3"})," into your Seata project, make sure that the Etcd3 Server service has been started in the background. If you are not familiar with the basic usage of Etcd3, you can refer to the ",(0,i.jsx)(t.a,{href:"https://etcd.io/docs/v3.5/quickstart",children:"Etcd3 Quickstart"})," for preliminary understanding. It is recommended to use Etcd3 version ",(0,i.jsx)(t.code,{children:"3.5.0"})," or above."]}),"\n",(0,i.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(t.p,{children:'The steps to integrate Etcd3 registry center into Seata are very simple, and can be roughly divided into "Adding Maven Dependencies" and "Configuring the Registry Center".'}),"\n",(0,i.jsx)(t.h3,{id:"adding-maven-dependencies",children:"Adding Maven Dependencies"}),"\n",(0,i.jsxs)(t.p,{children:["First, you need to add the Maven dependency of ",(0,i.jsx)(t.code,{children:"jetcd-core"})," to your project's ",(0,i.jsx)(t.code,{children:"pom.xml"})," file. It is recommended to use jetcd-core version ",(0,i.jsx)(t.code,{children:"0.3.0+"}),". The version relationship between ",(0,i.jsx)(t.code,{children:"spring-cloud-starter-alibaba-seata"})," and the corresponding microservice version can be found in the ",(0,i.jsx)(t.a,{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",children:"Version Description"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version</version>\n</dependency>\n        \x3c!-- Etcd3 Client Dependency --\x3e\n<dependency>\n    <groupId>io.etcd</groupId>\n    <artifactId>jetcd-core</artifactId>\n    <version>0.3.0 or above</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"client-side-configuration-center",children:"Client-side Configuration Center"}),"\n",(0,i.jsxs)(t.p,{children:["Add the corresponding configuration center to the ",(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:(0,i.jsx)(t.strong,{children:"application.yml"})})," file. For other configurations, please refer to the ",(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/client",children:"Configuration Reference"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"seata:\n  config:\n    type: etcd3\n    etcd3:\n      server-addr: http://localhost:2379\n"})}),"\n",(0,i.jsx)(t.h3,{id:"server-side-configuration-center",children:"Server-side Configuration Center"}),"\n",(0,i.jsxs)(t.p,{children:["Add the corresponding configuration center to the ",(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/server/config/registry.conf",children:"registry.conf"})," file. For other configurations, please refer to the ",(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/server",children:"Configuration Reference"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'config {\n  type = "etcd3"\n\n  etcd3 {\n    serverAddr = "http://localhost:2379"\n  }\n}\n\n'})}),"\n",(0,i.jsx)(t.h3,{id:"upload-configuration-to-etcd3-configuration-center",children:"Upload Configuration to Etcd3 Configuration Center"}),"\n",(0,i.jsx)(t.h4,{id:"upload-configuration-to-etcd3-via-script",children:"Upload Configuration to Etcd3 via Script"}),"\n",(0,i.jsxs)(t.p,{children:["Refer to the ",(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/config-center",children:"config.txt"})," in the repository and make modifications. Then run the provided etcd3 script in the repository to submit the information to the Etcd3 server. If necessary, you can directly modify it through the console."]}),"\n",(0,i.jsx)(t.p,{children:"eg: sh ${SEATAPATH}/script/config-center/etcd3/etcd3-config.sh -h localhost -p 2379"}),"\n",(0,i.jsxs)(t.p,{children:["For detailed analysis, please refer to the ",(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/README.md",children:"Readme document"})]}),"\n",(0,i.jsx)(t.p,{children:"After that, start the Seata-Server and Client (business side) applications. If the Seata-Server and Client (business side) applications have already been started before importing the configuration to Etcd3, they need to be restarted."})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);