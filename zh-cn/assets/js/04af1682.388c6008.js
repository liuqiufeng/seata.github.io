"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[1317],{23844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(74848),o=t(28453);const r={hidden:!0,title:"Helm\u90e8\u7f72",keywords:["kubernetes","helm","ops"],description:"\u4f7f\u7528 Helm \u90e8\u7f72 Seata Server",author:"helloworlde",date:new Date("2019-12-01T00:00:00.000Z")},a="\u4f7f\u7528 Helm \u90e8\u7f72 Seata Server",l={id:"ops/deploy-by-helm",title:"Helm\u90e8\u7f72",description:"\u4f7f\u7528 Helm \u90e8\u7f72 Seata Server",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.7/ops/deploy-by-helm.md",sourceDirName:"ops",slug:"/ops/deploy-by-helm",permalink:"/seata.github.io/zh-cn/docs/v1.7/ops/deploy-by-helm",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.7/ops/deploy-by-helm.md",tags:[],version:"v1.7",frontMatter:{hidden:!0,title:"Helm\u90e8\u7f72",keywords:["kubernetes","helm","ops"],description:"\u4f7f\u7528 Helm \u90e8\u7f72 Seata Server",author:"helloworlde",date:"2019-12-01T00:00:00.000Z"},sidebar:"docs",previous:{title:"Kubernetes\u90e8\u7f72",permalink:"/seata.github.io/zh-cn/docs/v1.7/ops/deploy-by-kubernetes"},next:{title:"\u9ad8\u53ef\u7528\u90e8\u7f72",permalink:"/seata.github.io/zh-cn/docs/v1.7/ops/deploy-ha"}},i={},c=[{value:"\u5feb\u901f\u542f\u52a8",id:"\u5feb\u901f\u542f\u52a8",level:3},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4f7f\u7528-helm-\u90e8\u7f72-seata-server",children:"\u4f7f\u7528 Helm \u90e8\u7f72 Seata Server"}),"\n",(0,s.jsx)(n.h3,{id:"\u5feb\u901f\u542f\u52a8",children:"\u5feb\u901f\u542f\u52a8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cd ./script/server/helm/seata-server\n$ helm install seata-server ./seata-server\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",children:"\u81ea\u5b9a\u4e49\u914d\u7f6e"}),"\n",(0,s.jsx)(n.h3,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,s.jsxs)(n.p,{children:["\u652f\u6301\u7684\u73af\u5883\u53d8\u91cf\u548c Docker \u76f8\u540c\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"./deploy-by-docker",children:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u901a\u8fc7\u6302\u8f7d\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u5982\u5c06",(0,s.jsx)(n.code,{children:"/root/workspace/seata/seata-config/file"}),"  \u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\u6302\u8f7d\u5230 pod \u4e2d\uff0c\u6302\u8f7d\u540e\u9700\u8981\u901a\u8fc7\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"SEATA_CONFIG_NAME"})," \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e\uff0c\u5e76\u4e14\u73af\u5883\u53d8\u91cf\u7684\u503c\u9700\u8981\u4ee5",(0,s.jsx)(n.code,{children:"file:"}),"\u5f00\u59cb, \u5982: ",(0,s.jsx)(n.code,{children:"file:/root/seata-config/registry"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Values.yaml"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'replicaCount: 1\n\nnamespace: default\n\nimage:\n  repository: seataio/seata-server\n  tag: latest\n  pullPolicy: IfNotPresent\n\nservice:\n  type: NodePort\n  port: 30091\n\nenv:\n  seataPort: "8091"\n  storeMode: "file"\n  seataIp: "127.0.0.1"\n  seataConfigName: "file:/root/seata-config/registry"\n\nvolume:\n  - name: seata-config\n    mountPath: /root/seata-config\n    hostPath: /root/workspace/seata/seata-config/file\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);