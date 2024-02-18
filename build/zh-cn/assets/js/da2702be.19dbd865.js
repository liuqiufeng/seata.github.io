"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[73398],{68665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(74848),c=t(28453);const r={title:"Seata TCC \u6a21\u5f0f",keywords:["Seata"],description:"Seata Tcc \u6a21\u5f0f\u3002"},i="Seata TCC \u6a21\u5f0f",o={id:"dev/mode/tcc-mode",title:"Seata TCC \u6a21\u5f0f",description:"Seata Tcc \u6a21\u5f0f\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/mode/tcc-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/tcc-mode",permalink:"/seata.github.io/zh-cn/docs/next/dev/mode/tcc-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/mode/tcc-mode.md",tags:[],version:"current",frontMatter:{title:"Seata TCC \u6a21\u5f0f",keywords:["Seata"],description:"Seata Tcc \u6a21\u5f0f\u3002"},sidebar:"docs",previous:{title:"Seata AT \u6a21\u5f0f",permalink:"/seata.github.io/zh-cn/docs/next/dev/mode/at-mode"},next:{title:"Seata SAGA \u6a21\u5f0f",permalink:"/seata.github.io/zh-cn/docs/next/dev/mode/saga-mode"}},a={},d=[];function l(e){const n={h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"seata-tcc-\u6a21\u5f0f",children:"Seata TCC \u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u56de\u987e\u603b\u89c8\u4e2d\u7684\u63cf\u8ff0\uff1a\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u5168\u5c40\u4e8b\u52a1\uff0c\u6574\u4f53\u662f ",(0,s.jsx)(n.strong,{children:"\u4e24\u9636\u6bb5\u63d0\u4ea4"})," \u7684\u6a21\u578b\u3002\u5168\u5c40\u4e8b\u52a1\u662f\u7531\u82e5\u5e72\u5206\u652f\u4e8b\u52a1\u7ec4\u6210\u7684\uff0c\u5206\u652f\u4e8b\u52a1\u8981\u6ee1\u8db3 ",(0,s.jsx)(n.strong,{children:"\u4e24\u9636\u6bb5\u63d0\u4ea4"})," \u7684\u6a21\u578b\u8981\u6c42\uff0c\u5373\u9700\u8981\u6bcf\u4e2a\u5206\u652f\u4e8b\u52a1\u90fd\u5177\u5907\u81ea\u5df1\u7684\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a"}),"\n",(0,s.jsx)(n.li,{children:"\u4e8c\u9636\u6bb5 commit \u6216 rollback \u884c\u4e3a"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Overview of a global transaction",src:t(45340).A+"",width:"853",height:"482"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636e\u4e24\u9636\u6bb5\u884c\u4e3a\u6a21\u5f0f\u7684\u4e0d\u540c\uff0c\u6211\u4eec\u5c06\u5206\u652f\u4e8b\u52a1\u5212\u5206\u4e3a ",(0,s.jsx)(n.strong,{children:"Automatic (Branch) Transaction Mode"})," \u548c ",(0,s.jsx)(n.strong,{children:"TCC (Branch) Transaction Mode"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["AT \u6a21\u5f0f\u57fa\u4e8e ",(0,s.jsx)(n.strong,{children:"\u652f\u6301\u672c\u5730 ACID \u4e8b\u52a1"})," \u7684 ",(0,s.jsx)(n.strong,{children:"\u5173\u7cfb\u578b\u6570\u636e\u5e93"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a\uff1a\u5728\u672c\u5730\u4e8b\u52a1\u4e2d\uff0c\u4e00\u5e76\u63d0\u4ea4\u4e1a\u52a1\u6570\u636e\u66f4\u65b0\u548c\u76f8\u5e94\u56de\u6eda\u65e5\u5fd7\u8bb0\u5f55\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u4e8c\u9636\u6bb5 commit \u884c\u4e3a\uff1a\u9a6c\u4e0a\u6210\u529f\u7ed3\u675f\uff0c",(0,s.jsx)(n.strong,{children:"\u81ea\u52a8"})," \u5f02\u6b65\u6279\u91cf\u6e05\u7406\u56de\u6eda\u65e5\u5fd7\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e8c\u9636\u6bb5 rollback \u884c\u4e3a\uff1a\u901a\u8fc7\u56de\u6eda\u65e5\u5fd7\uff0c",(0,s.jsx)(n.strong,{children:"\u81ea\u52a8"})," \u751f\u6210\u8865\u507f\u64cd\u4f5c\uff0c\u5b8c\u6210\u6570\u636e\u56de\u6eda\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u76f8\u5e94\u7684\uff0cTCC \u6a21\u5f0f\uff0c\u4e0d\u4f9d\u8d56\u4e8e\u5e95\u5c42\u6570\u636e\u8d44\u6e90\u7684\u4e8b\u52a1\u652f\u6301\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e00\u9636\u6bb5 prepare \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,s.jsx)(n.strong,{children:"\u81ea\u5b9a\u4e49"})," \u7684 prepare \u903b\u8f91\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e8c\u9636\u6bb5 commit \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,s.jsx)(n.strong,{children:"\u81ea\u5b9a\u4e49"})," \u7684 commit \u903b\u8f91\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e8c\u9636\u6bb5 rollback \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,s.jsx)(n.strong,{children:"\u81ea\u5b9a\u4e49"})," \u7684 rollback \u903b\u8f91\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u8c13 TCC \u6a21\u5f0f\uff0c\u662f\u6307\u652f\u6301\u628a ",(0,s.jsx)(n.strong,{children:"\u81ea\u5b9a\u4e49"})," \u7684\u5206\u652f\u4e8b\u52a1\u7eb3\u5165\u5230\u5168\u5c40\u4e8b\u52a1\u7684\u7ba1\u7406\u4e2d\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},45340:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/seata_tcc-1-1f7a834639aa755d73fa2af435c4f042.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const c={},r=s.createContext(c);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);