"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[8458],{42020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(74848),s=n(28453);const i={title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},r="Version Upgrade Guide",a={id:"ops/upgrade",title:"Version Upgrade Guide",description:"Seata upgrade.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/seata.github.io/docs/v1.2/ops/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/ops/upgrade.md",tags:[],version:"v1.2",frontMatter:{title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},sidebar:"docs",previous:{title:"Metrics Design",permalink:"/seata.github.io/docs/v1.2/dev/seata-mertics"},next:{title:"Multi-configuration Isolation",permalink:"/seata.github.io/docs/v1.2/ops/multi-configuration-isolation"}},d={},c=[];function u(e){const t={code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"version-upgrade-guide",children:"Version Upgrade Guide"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)("h3",{children:"1. What compatibility matters need to be paid attention to when upgrading to seata 1.2.0? "}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("mark",{children:"Notes"})}),(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["The nacos registration center adds a new service attribute configuration ",(0,o.jsx)(t.code,{children:"registry.nacos.application"}),' = "seata-server". The original default name is serverAddr, and now the default is seata-server. The Server and Client must be consistent.']}),"\n"]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);