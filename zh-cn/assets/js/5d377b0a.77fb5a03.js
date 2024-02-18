"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[56528],{23826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var s=n(74848),i=n(28453);const r={title:"\u62a5\u544a\u5b89\u5168\u95ee\u9898",keywords:["Seata"],description:"Seata\u5728\u6d88\u9664\u5176\u8f6f\u4ef6\u9879\u76ee\u4e2d\u7684\u5b89\u5168\u6027\u95ee\u9898\u65b9\u9762\u91c7\u53d6\u4e25\u683c\u7684\u7acb\u573a\uff0c\u5bf9\u4e0e\u5176\u529f\u80fd\u548c\u7279\u6027\u6709\u5173\u7684\u95ee\u9898\u975e\u5e38\u654f\u611f\u5e76\u5f88\u5feb\u63d0\u51fa\u3002"},o="\u62a5\u544a\u5b89\u5168\u95ee\u9898",a={id:"developers/contributor-guide/reporting-security-issues_dev",title:"\u62a5\u544a\u5b89\u5168\u95ee\u9898",description:"Seata\u5728\u6d88\u9664\u5176\u8f6f\u4ef6\u9879\u76ee\u4e2d\u7684\u5b89\u5168\u6027\u95ee\u9898\u65b9\u9762\u91c7\u53d6\u4e25\u683c\u7684\u7acb\u573a\uff0c\u5bf9\u4e0e\u5176\u529f\u80fd\u548c\u7279\u6027\u6709\u5173\u7684\u95ee\u9898\u975e\u5e38\u654f\u611f\u5e76\u5f88\u5feb\u63d0\u51fa\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/developers/contributor-guide/reporting-security-issues_dev.md",sourceDirName:"developers/contributor-guide",slug:"/developers/contributor-guide/reporting-security-issues_dev",permalink:"/seata.github.io/zh-cn/docs/v1.3/developers/contributor-guide/reporting-security-issues_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/developers/contributor-guide/reporting-security-issues_dev.md",tags:[],version:"v1.3",frontMatter:{title:"\u62a5\u544a\u5b89\u5168\u95ee\u9898",keywords:["Seata"],description:"Seata\u5728\u6d88\u9664\u5176\u8f6f\u4ef6\u9879\u76ee\u4e2d\u7684\u5b89\u5168\u6027\u95ee\u9898\u65b9\u9762\u91c7\u53d6\u4e25\u683c\u7684\u7acb\u573a\uff0c\u5bf9\u4e0e\u5176\u529f\u80fd\u548c\u7279\u6027\u6709\u5173\u7684\u95ee\u9898\u975e\u5e38\u654f\u611f\u5e76\u5f88\u5feb\u63d0\u51fa\u3002"},sidebar:"developers",previous:{title:"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc",permalink:"/seata.github.io/zh-cn/docs/v1.3/developers/contributor-guide/test-coverage-guide_dev"},next:{title:"\u4e3aSeata\u8d21\u732e",permalink:"/seata.github.io/zh-cn/docs/v1.3/developers/guide_dev"}},c={},u=[{value:"\u62a5\u544a\u6f0f\u6d1e",id:"\u62a5\u544a\u6f0f\u6d1e",level:2},{value:"\u6f0f\u6d1e\u5904\u7406",id:"\u6f0f\u6d1e\u5904\u7406",level:2}];function d(e){const t={a:"a",br:"br",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u62a5\u544a\u5b89\u5168\u95ee\u9898",children:"\u62a5\u544a\u5b89\u5168\u95ee\u9898"}),"\n",(0,s.jsx)(t.p,{children:"Seata\u5728\u6d88\u9664\u5176\u8f6f\u4ef6\u9879\u76ee\u4e2d\u7684\u5b89\u5168\u6027\u95ee\u9898\u65b9\u9762\u91c7\u53d6\u4e25\u683c\u7684\u7acb\u573a\uff0c\u5bf9\u4e0e\u5176\u529f\u80fd\u548c\u7279\u6027\u6709\u5173\u7684\u95ee\u9898\u975e\u5e38\u654f\u611f\u5e76\u5f88\u5feb\u63d0\u51fa\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u62a5\u544a\u6f0f\u6d1e",children:"\u62a5\u544a\u6f0f\u6d1e"}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u679c\u60a8\u5bf9Seata\u7684\u5b89\u5168\u6027\u6709\u62c5\u5fc3\uff0c\u6216\u8005\u53d1\u73b0\u6f0f\u6d1e\u6216\u6f5c\u5728\u5a01\u80c1\uff0c\u8bf7\u901a\u8fc7\u62a5\u544a\u81f3",(0,s.jsx)(t.a,{href:"https://security.alibaba.com/",children:"ASRC(Alibaba Security Response Center)"}),"\u4e0eSeata\u5b89\u5168\u56e2\u961f\u53d6\u5f97\u8054\u7cfb\u3002\u5728\u62a5\u544a\u4e2d\uff0c\u9700\u8981\u60a8\u6307\u5b9a\u95ee\u9898\u6216\u6f5c\u5728\u5a01\u80c1\u7684\u63cf\u8ff0\u3002\u540c\u65f6\u63a8\u8350\u60a8\u5728\u62a5\u544a\u4e2d\u91cd\u73b0\u548c\u590d\u5236\u95ee\u9898\u7684\u65b9\u6cd5\u3002Seata\u793e\u533a\u4f1a\u5728\u8bc4\u4f30\u548c\u5206\u6790\u8c03\u67e5\u7ed3\u679c\u4e4b\u540e\u4e0e\u60a8\u8054\u7cfb\u3002",(0,s.jsx)(t.br,{}),"\n","\u8bf7\u5148\u6ce8\u610f\u5728",(0,s.jsx)(t.a,{href:"https://security.alibaba.com/",children:"ASRC(Alibaba Security Response Center)"}),"\u7cfb\u7edf\u4e2d\u62a5\u544a\u5b89\u5168\u95ee\u9898\uff0c\u4e0d\u8981\u5728\u516c\u5f00\u5730\u65b9\u8ba8\u8bba\u8be5\u95ee\u9898\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u6f0f\u6d1e\u5904\u7406",children:"\u6f0f\u6d1e\u5904\u7406"}),"\n",(0,s.jsx)(t.p,{children:"\u6f0f\u6d1e\u5904\u7406\u8fc7\u7a0b\u7684\u6982\u8ff0\u662f\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u62a5\u544a\u8005\u5c06\u6f0f\u6d1e\u79d8\u5bc6\u62a5\u544a\u7ed9Seata\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u76f8\u5e94\u9879\u76ee\u7684\u5b89\u5168\u56e2\u961f\u4e0e\u62a5\u544a\u8005\u79c1\u4e0b\u5408\u4f5c\u6765\u89e3\u51b3\u6f0f\u6d1e\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u5236\u4f5c\u4e86\u5305\u542b\u8be5\u4fee\u590d\u7a0b\u5e8f\u7684\u6709\u5173Seata\u4ea7\u54c1\u7684\u65b0\u7248\u672c\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u8be5\u6f0f\u6d1e\u516c\u5f00\u5ba3\u5e03\u3002"}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);