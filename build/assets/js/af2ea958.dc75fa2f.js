"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[34672],{46175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(74848),s=t(28453);const r={hidden:!0,title:"Deploy Seata Server By Helm",keywords:["kubernetes","helm","ops"],description:"Deploy Seata Server By Helm",author:"helloworlde",date:new Date("2019-12-01T00:00:00.000Z")},a="Deploy Seata Server By Helm",i={id:"ops/deploy-by-helm",title:"Deploy Seata Server By Helm",description:"Deploy Seata Server By Helm",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.5/ops/deploy-by-helm.md",sourceDirName:"ops",slug:"/ops/deploy-by-helm",permalink:"/seata.github.io/docs/v1.5/ops/deploy-by-helm",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.5/ops/deploy-by-helm.md",tags:[],version:"v1.5",frontMatter:{hidden:!0,title:"Deploy Seata Server By Helm",keywords:["kubernetes","helm","ops"],description:"Deploy Seata Server By Helm",author:"helloworlde",date:"2019-12-01T00:00:00.000Z"},sidebar:"docs",previous:{title:"Deploy Seata Server By Kubernetes",permalink:"/seata.github.io/docs/v1.5/ops/deploy-by-kubernetes"},next:{title:"High Available Usage Deployment",permalink:"/seata.github.io/docs/v1.5/ops/deploy-ha"}},l={},c=[{value:"Quick start",id:"quick-start",level:3},{value:"Custom configuration",id:"custom-configuration",level:2},{value:"Environment",id:"environment",level:3},{value:"Use specify configuration file",id:"use-specify-configuration-file",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deploy-seata-server-by-helm",children:"Deploy Seata Server By Helm"}),"\n",(0,o.jsx)(n.h3,{id:"quick-start",children:"Quick start"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ cd ./script/server/helm/seata-server\n$ helm install seata-server ./seata-server\n"})}),"\n",(0,o.jsx)(n.h2,{id:"custom-configuration",children:"Custom configuration"}),"\n",(0,o.jsx)(n.h3,{id:"environment",children:"Environment"}),"\n",(0,o.jsxs)(n.p,{children:["The environment is same with Docker, can reference ",(0,o.jsx)(n.a,{href:"./deploy-by-docker",children:"Deploy Seata Server By Docker"})]}),"\n",(0,o.jsx)(n.h3,{id:"use-specify-configuration-file",children:"Use specify configuration file"}),"\n",(0,o.jsxs)(n.p,{children:["Can specify configuration file by mount files, like mount files under ",(0,o.jsx)(n.code,{children:"/root/workspace/seata/seata-config/file"})," to pod. And need specify environment ",(0,o.jsx)(n.code,{children:"SEATA_CONFIG_NAME"})," also, the value need start with ",(0,o.jsx)(n.code,{children:"file:"}),", like ",(0,o.jsx)(n.code,{children:"file:/root/seata-config/registry"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Values.yaml"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'replicaCount: 1\n\nnamespace: default\n\nimage:\n  repository: seataio/seata-server\n  tag: latest\n  pullPolicy: IfNotPresent\n\nservice:\n  type: NodePort\n  port: 30091\n\nenv:\n  seataPort: "8091"\n  storeMode: "file"\n  seataIp: "127.0.0.1"\n  seataConfigName: "file:/root/seata-config/registry"\n\nvolume:\n  - name: seata-config\n    mountPath: /root/seata-config\n    hostPath: /root/workspace/seata/seata-config/file\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);