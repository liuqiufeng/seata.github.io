"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[9202],{66974:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=t(74848),i=t(28453);const r={title:"Introduction",keywords:["Seata","configuration center"],description:"Configuration Center Introduction."},s="Introduction",a={id:"user/configuration/index",title:"Introduction",description:"Configuration Center Introduction.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/configuration/index.md",sourceDirName:"user/configuration",slug:"/user/configuration/",permalink:"/seata.github.io/docs/v1.6/user/configuration/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/configuration/index.md",tags:[],version:"v1.6",frontMatter:{title:"Introduction",keywords:["Seata","configuration center"],description:"Configuration Center Introduction."},sidebar:"docs",previous:{title:"Transaction Group and High Availability",permalink:"/seata.github.io/docs/v1.6/user/txgroup/transaction-group-and-ha"},next:{title:"Nacos Configuration Center",permalink:"/seata.github.io/docs/v1.6/user/configuration/nacos"}},c={},u=[];function l(n){const e={h1:"h1",li:"li",ol:"ol",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:'What is a configuration center? The configuration center can be described as a "large warehouse" that contains various configuration files. You can obtain and load the required configurations into the corresponding clients. For example, Seata client (TM, RM) and Seata server (TC) will read global transaction switches, transaction session storage modes, and other information.'}),"\n",(0,o.jsx)(e.li,{children:"What is the difference between Seata's configuration center and Spring Cloud's configuration center? In a broad sense, there is no difference. The only difference is that Spring Cloud's configuration center only applies to its own components, while Seata's configuration center also applies to Seata itself. (Note: Spring Cloud's configuration center is unrelated to Seata)"}),"\n",(0,o.jsxs)(e.li,{children:["Which configuration centers does Seata support?","\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Nacos"}),"\n",(0,o.jsx)(e.li,{children:"Consul"}),"\n",(0,o.jsx)(e.li,{children:"Apollo"}),"\n",(0,o.jsx)(e.li,{children:"Etcd"}),"\n",(0,o.jsx)(e.li,{children:"ZooKeeper"}),"\n",(0,o.jsx)(e.li,{children:"File (reads local files, including support for conf, properties, and yml configuration files)"}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);