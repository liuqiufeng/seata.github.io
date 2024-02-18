"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[55860],{15991:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=t(74848),o=t(28453);const s={title:"\u7b80\u4ecb",keywords:["Seata","configuration center"],description:"\u914d\u7f6e\u4e2d\u5fc3\u7b80\u4ecb\u3002"},r="\u7b80\u4ecb",c={id:"user/configuration/index",title:"\u7b80\u4ecb",description:"\u914d\u7f6e\u4e2d\u5fc3\u7b80\u4ecb\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/configuration/index.md",sourceDirName:"user/configuration",slug:"/user/configuration/",permalink:"/seata.github.io/zh-cn/docs/v1.6/user/configuration/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/configuration/index.md",tags:[],version:"v1.6",frontMatter:{title:"\u7b80\u4ecb",keywords:["Seata","configuration center"],description:"\u914d\u7f6e\u4e2d\u5fc3\u7b80\u4ecb\u3002"},sidebar:"docs",previous:{title:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",permalink:"/seata.github.io/zh-cn/docs/v1.6/user/txgroup/transaction-group-and-ha"},next:{title:"Nacos \u914d\u7f6e\u4e2d\u5fc3",permalink:"/seata.github.io/zh-cn/docs/v1.6/user/configuration/nacos"}},a={},u=[];function l(n){const e={h1:"h1",li:"li",ol:"ol",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'\u4ec0\u4e48\u662f\u914d\u7f6e\u4e2d\u5fc3?\u914d\u7f6e\u4e2d\u5fc3\u53ef\u4ee5\u8bf4\u662f\u4e00\u4e2a"\u5927\u8d27\u4ed3",\u5185\u90e8\u653e\u7f6e\u7740\u5404\u79cd\u914d\u7f6e\u6587\u4ef6,\u4f60\u53ef\u4ee5\u901a\u8fc7\u81ea\u5df1\u6240\u9700\u8fdb\u884c\u83b7\u53d6\u914d\u7f6e\u52a0\u8f7d\u5230\u5bf9\u5e94\u7684\u5ba2\u6237\u7aef.\u6bd4\u5982Seata Client\u7aef(TM,RM),Seata Server(TC),\u4f1a\u53bb\u8bfb\u53d6\u5168\u5c40\u4e8b\u52a1\u5f00\u5173,\u4e8b\u52a1\u4f1a\u8bdd\u5b58\u50a8\u6a21\u5f0f\u7b49\u4fe1\u606f.'}),"\n",(0,i.jsxs)(e.li,{children:["Seata\u7684\u914d\u7f6e\u4e2d\u5fc3\u4e0eSpring cloud\u7684\u914d\u7f6e\u4e2d\u5fc3\u533a\u522b\u662f?\u5728\u5e7f\u4e49\u4e0a\u6765\u8bf4,\u5e76\u65e0\u533a\u522b,\u53ea\u4e0d\u8fc7Spring cloud\u7684\u914d\u7f6e\u4e2d\u5fc3\u4ec5\u662f\u4f5c\u7528\u4e8e\u5b83\u4eec\u81ea\u8eab\u7684\u7ec4\u4ef6,\u800cSeata\u7684\u914d\u7f6e\u4e2d\u5fc3\u4e5f\u662f\u4e00\u6837\u662f\u4f5c\u7528\u4e8eSeata\u81ea\u8eab.(\u6ce8",":Spring"," cloud\u7684\u914d\u7f6e\u4e2d\u5fc3\u4e0eSeata\u65e0\u5173)"]}),"\n",(0,i.jsxs)(e.li,{children:["Seata\u652f\u6301\u54ea\u4e9b\u914d\u7f6e\u4e2d\u5fc3?","\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"nacos"}),"\n",(0,i.jsx)(e.li,{children:"consul"}),"\n",(0,i.jsx)(e.li,{children:"apollo"}),"\n",(0,i.jsx)(e.li,{children:"etcd"}),"\n",(0,i.jsx)(e.li,{children:"zookeeper"}),"\n",(0,i.jsx)(e.li,{children:"file (\u8bfb\u672c\u5730\u6587\u4ef6, \u5305\u542bconf\u3001properties\u3001yml\u914d\u7f6e\u6587\u4ef6\u7684\u652f\u6301)"}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);