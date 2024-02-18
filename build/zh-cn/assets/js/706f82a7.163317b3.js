"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[56692],{61751:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=s(74848),t=s(28453);const r={title:"Nacos \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Nacos"],description:"Nacos \u6ce8\u518c\u4e2d\u5fc3\u3002"},c="Nacos \u6ce8\u518c\u4e2d\u5fc3",i={id:"user/registry/nacos",title:"Nacos \u6ce8\u518c\u4e2d\u5fc3",description:"Nacos \u6ce8\u518c\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/registry/nacos.md",sourceDirName:"user/registry",slug:"/user/registry/nacos",permalink:"/seata.github.io/zh-cn/docs/next/user/registry/nacos",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/registry/nacos.md",tags:[],version:"current",frontMatter:{title:"Nacos \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Nacos"],description:"Nacos \u6ce8\u518c\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"\u7b80\u4ecb",permalink:"/seata.github.io/zh-cn/docs/next/user/registry/"},next:{title:"Eureka \u6ce8\u518c\u4e2d\u5fc3",permalink:"/seata.github.io/zh-cn/docs/next/user/registry/eureka"}},o={},d=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u589e\u52a0 Maven \u4f9d\u8d56",id:"\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"Client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"nacos-\u6ce8\u518c\u4e2d\u5fc3",children:"Nacos \u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,a.jsx)(n.p,{children:"Nacos \u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0."}),"\n",(0,a.jsx)(n.h2,{id:"\u9884\u5907\u5de5\u4f5c",children:"\u9884\u5907\u5de5\u4f5c"}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u60a8\u5c06",(0,a.jsx)(n.code,{children:"nacos-client"}),"\u6574\u5408\u5230\u60a8\u7684 Seata\u5de5\u7a0b\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 Nacos \u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 Nacos \u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://nacos.io/zh-cn/docs/quick-start.html",children:"Nacos \u5feb\u901f\u5165\u95e8"}),"\u3002\u5efa\u8bae\u4f7f\u7528 Nacos ",(0,a.jsx)(n.code,{children:"1.4.0"})," \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,a.jsx)(n.p,{children:'Seata \u878d\u5408 Nacos \u6ce8\u518c\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a"\u589e\u52a0 Maven \u4f9d\u8d56"\u4ee5\u53ca"\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"\u3002'}),"\n",(0,a.jsx)(n.h3,{id:"\u589e\u52a0-maven-\u4f9d\u8d56",children:"\u589e\u52a0 Maven \u4f9d\u8d56"}),"\n",(0,a.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u60a8\u9700\u8981\u5c06 ",(0,a.jsx)(n.code,{children:"nacos-client"})," \u7684 Maven \u4f9d\u8d56\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee ",(0,a.jsx)(n.code,{children:"pom.xml"})," \u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>\u6700\u65b0\u7248</version>\n</dependency>\n<dependency>\n    <groupId>com.alibaba.nacos</groupId>\n    <artifactId>nacos-client</artifactId>\n    <version>1.4.0+</version>\n</dependency>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",children:"Client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 ",(0,a.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/2.x/script/client/spring/application.yml",children:(0,a.jsx)(n.strong,{children:"application.yml"})})," \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'seata:\n  registry:\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: 127.0.0.1:8848\n      group : "SEATA_GROUP"\n      namespace: ""\n      username: ""\n      password: ""\n      context-path: ""\n      ##if use MSE Nacos with auth, mutex with username/password attribute\n      #access-key: ""\n      #secret-key: ""\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      default_tx_group: default\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",children:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 ",(0,a.jsx)(n.code,{children:"conf/application.yaml"}),"\u52a0\u5165\u4ee5\u4e0b\u914d\u7f6e, \u5176\u4f59\u914d\u7f6e\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/2.x/server/src/main/resources/application.example.yml",children:"configuration options"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'seata:\n  registry:\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: 127.0.0.1:8848\n      group: SEATA_GROUP\n      namespace:\n      cluster: default\n      username:\n      password:\n      ##if use MSE Nacos with auth, mutex with username/password attribute\n      #access-key: ""\n      #secret-key: ""\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u968f\u540e,\u542f\u52a8 Seata-Server \u540e\uff0c\u4f1a\u53d1\u73b0Server\u7aef\u7684\u670d\u52a1\u51fa\u73b0\u5728 Nacos \u63a7\u5236\u53f0\u4e2d\u7684\u6ce8\u518c\u4e2d\u5fc3\u5217\u8868\u4e2d. Client \u914d\u7f6e\u5b8c\u6210\u540e\u542f\u52a8\u5e94\u7528\u5c31\u53ef\u4ee5\u6b63\u5f0f\u4f53\u9a8c Seata \u670d\u52a1\u3002"}),"\n",(0,a.jsx)(n.p,{children:"Tips\uff1a\u8bf7\u786e\u4fddclient\u4e0eserver\u7684\u6ce8\u518c\u5904\u4e8e\u540c\u4e00\u4e2anamespace\u548cgroup\uff0c\u4e0d\u7136\u4f1a\u627e\u4e0d\u5230\u670d\u52a1\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var a=s(96540);const t={},r=a.createContext(t);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);