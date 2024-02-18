"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[71547],{72496:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=s(74848),l=s(28453);const r={title:"\u76f4\u63a5\u90e8\u7f72",keywords:["Seata"],description:"Server\u652f\u6301\u591a\u79cd\u65b9\u5f0f\u90e8\u7f72\uff1a\u76f4\u63a5\u90e8\u7f72\uff0c\u4f7f\u7528 Docker, \u4f7f\u7528 Docker-Compose, \u4f7f\u7528 Kubernetes,  \u4f7f\u7528 Helm\u3002"},i="\u90e8\u7f72 Server",d={id:"ops/deploy-server",title:"\u76f4\u63a5\u90e8\u7f72",description:"Server\u652f\u6301\u591a\u79cd\u65b9\u5f0f\u90e8\u7f72\uff1a\u76f4\u63a5\u90e8\u7f72\uff0c\u4f7f\u7528 Docker, \u4f7f\u7528 Docker-Compose, \u4f7f\u7528 Kubernetes,  \u4f7f\u7528 Helm\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/ops/deploy-server.md",sourceDirName:"ops",slug:"/ops/deploy-server",permalink:"/seata.github.io/zh-cn/docs/v1.4/ops/deploy-server",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/ops/deploy-server.md",tags:[],version:"v1.4",frontMatter:{title:"\u76f4\u63a5\u90e8\u7f72",keywords:["Seata"],description:"Server\u652f\u6301\u591a\u79cd\u65b9\u5f0f\u90e8\u7f72\uff1a\u76f4\u63a5\u90e8\u7f72\uff0c\u4f7f\u7528 Docker, \u4f7f\u7528 Docker-Compose, \u4f7f\u7528 Kubernetes,  \u4f7f\u7528 Helm\u3002"},sidebar:"docs",previous:{title:"\u65b0\u4eba\u6587\u6863",permalink:"/seata.github.io/zh-cn/docs/v1.4/ops/deploy-guide-beginner"},next:{title:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",permalink:"/seata.github.io/zh-cn/docs/v1.4/ops/deploy-by-docker-142"}},c={},o=[{value:"\u76f4\u63a5\u90e8\u7f72",id:"\u76f4\u63a5\u90e8\u7f72",level:2},{value:"\u652f\u6301\u7684\u542f\u52a8\u53c2\u6570",id:"\u652f\u6301\u7684\u542f\u52a8\u53c2\u6570",level:3},{value:"\u5bb9\u5668\u90e8\u7f72",id:"\u5bb9\u5668\u90e8\u7f72",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u90e8\u7f72-server",children:"\u90e8\u7f72 Server"}),"\n",(0,n.jsx)(t.p,{children:"Server\u652f\u6301\u591a\u79cd\u65b9\u5f0f\u90e8\u7f72\uff1a\u76f4\u63a5\u90e8\u7f72\uff0c\u4f7f\u7528 Docker, \u4f7f\u7528 Docker-Compose, \u4f7f\u7528 Kubernetes,  \u4f7f\u7528 Helm."}),"\n",(0,n.jsx)(t.h2,{id:"\u76f4\u63a5\u90e8\u7f72",children:"\u76f4\u63a5\u90e8\u7f72"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["\u5728",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/releases",children:"RELEASE"}),"\u9875\u9762\u4e0b\u8f7d\u76f8\u5e94\u7248\u672c\u5e76\u89e3\u538b"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"\u76f4\u63a5\u542f\u52a8"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u5728 Linux/Mac \u4e0b"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ sh ./bin/seata-server.sh\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u5728 Windows \u4e0b"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cmd",children:"bin\\seata-server.bat\n"})}),"\n",(0,n.jsx)(t.h3,{id:"\u652f\u6301\u7684\u542f\u52a8\u53c2\u6570",children:"\u652f\u6301\u7684\u542f\u52a8\u53c2\u6570"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u5168\u5199"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u4f5c\u7528"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u5907\u6ce8"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-h"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"--host"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u6307\u5b9a\u5728\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u7684 IP"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u4e0d\u6307\u5b9a\u65f6\u83b7\u53d6\u5f53\u524d\u7684 IP\uff0c\u5916\u90e8\u8bbf\u95ee\u90e8\u7f72\u5728\u4e91\u73af\u5883\u548c\u5bb9\u5668\u4e2d\u7684 server \u5efa\u8bae\u6307\u5b9a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"--port"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u6307\u5b9a server \u542f\u52a8\u7684\u7aef\u53e3"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u4e3a 8091"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-m"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"--storeMode"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u4e8b\u52a1\u65e5\u5fd7\u5b58\u50a8\u65b9\u5f0f"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u652f\u6301",(0,n.jsx)(t.code,{children:"file"}),",",(0,n.jsx)(t.code,{children:"db"}),",",(0,n.jsx)(t.code,{children:"redis"}),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,n.jsx)(t.code,{children:"file"})," \u6ce8",":redis","\u9700seata-server 1.3\u7248\u672c\u53ca\u4ee5\u4e0a"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-n"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"--serverNode"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u7528\u4e8e\u6307\u5b9aseata-server\u8282\u70b9ID"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u5982 ",(0,n.jsx)(t.code,{children:"1"}),",",(0,n.jsx)(t.code,{children:"2"}),",",(0,n.jsx)(t.code,{children:"3"}),"..., \u9ed8\u8ba4\u4e3a ",(0,n.jsx)(t.code,{children:"1"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-e"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"--seataEnv"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u6307\u5b9a seata-server \u8fd0\u884c\u73af\u5883"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u5982 ",(0,n.jsx)(t.code,{children:"dev"}),", ",(0,n.jsx)(t.code,{children:"test"})," \u7b49, \u670d\u52a1\u542f\u52a8\u65f6\u4f1a\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"registry-dev.conf"})," \u8fd9\u6837\u7684\u914d\u7f6e"]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"\u5982\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ sh ./bin/seata-server.sh -p 8091 -h 127.0.0.1 -m file\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u5bb9\u5668\u90e8\u7f72",children:"\u5bb9\u5668\u90e8\u7f72"}),"\n",(0,n.jsx)(t.p,{children:"\u5bb9\u5668\u90e8\u7f72\u5f53\u524d\u652f\u6301\u4e09\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"./deploy-by-docker",children:"\u4f7f\u7528 Docker / Docker Compose \u90e8\u7f72 "})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"./deploy-by-kubernetes",children:"\u4f7f\u7528 Kubernetes \u90e8\u7f72 "})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"./deploy-by-helm",children:"\u4f7f\u7528 Helm \u90e8\u7f72"})}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var n=s(96540);const l={},r=n.createContext(l);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);