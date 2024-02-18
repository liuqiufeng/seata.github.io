"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[58353],{59146:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(74848),r=t(28453);const i={title:"MT \u6a21\u5f0f",keywords:["MT \u6a21\u5f0f"],description:"\u4ecb\u7ecd MT \u6a21\u5f0f",author:"kmmshmily",date:new Date("2019-02-13T00:00:00.000Z")},a="Manual Transaction \u6a21\u5f0f",o={permalink:"/seata.github.io/zh-cn/blog/manual-transaction-mode",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/manual-transaction-mode.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/manual-transaction-mode.md",title:"MT \u6a21\u5f0f",description:"\u4ecb\u7ecd MT \u6a21\u5f0f",date:"2019-02-13T00:00:00.000Z",formattedDate:"2019\u5e742\u670813\u65e5",tags:[],readingTime:1.605,hasTruncateMarker:!1,authors:[{name:"kmmshmily"}],frontMatter:{title:"MT \u6a21\u5f0f",keywords:["MT \u6a21\u5f0f"],description:"\u4ecb\u7ecd MT \u6a21\u5f0f",author:"kmmshmily",date:"2019-02-13T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Fescar\u5206\u5e03\u5f0f\u4e8b\u52a1\u539f\u7406\u89e3\u6790\u63a2\u79d8",permalink:"/seata.github.io/zh-cn/blog/seata-analysis-simple"}},c={authorsImageUrls:[void 0]},l=[];function d(n){const e={img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u56de\u987e\u603b\u89c8\u4e2d\u7684\u63cf\u8ff0\uff1a\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u5168\u5c40\u4e8b\u52a1\uff0c\u6574\u4f53\u662f ",(0,s.jsx)(e.strong,{children:"\u4e24\u9636\u6bb5\u63d0\u4ea4"})," \u7684\u6a21\u578b\u3002\u5168\u5c40\u4e8b\u52a1\u662f\u7531\u82e5\u5e72\u5206\u652f\u4e8b\u52a1\u7ec4\u6210\u7684\uff0c\u5206\u652f\u4e8b\u52a1\u8981\u6ee1\u8db3 ",(0,s.jsx)(e.strong,{children:"\u4e24\u9636\u6bb5\u63d0\u4ea4"})," \u7684\u6a21\u578b\u8981\u6c42\uff0c\u5373\u9700\u8981\u6bcf\u4e2a\u5206\u652f\u4e8b\u52a1\u90fd\u5177\u5907\u81ea\u5df1\u7684\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a"}),"\n",(0,s.jsx)(e.li,{children:"\u4e8c\u9636\u6bb5 commit \u6216 rollback \u884c\u4e3a"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://upload-images.jianshu.io/upload_images/4420767-e48f0284a037d1df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Overview of a global transaction"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6839\u636e\u4e24\u9636\u6bb5\u884c\u4e3a\u6a21\u5f0f\u7684\u4e0d\u540c\uff0c\u6211\u4eec\u5c06\u5206\u652f\u4e8b\u52a1\u5212\u5206\u4e3a ",(0,s.jsx)(e.strong,{children:"Automatic (Branch) Transaction Mode"})," \u548c ",(0,s.jsx)(e.strong,{children:"Manual (Branch) Transaction Mode"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["AT \u6a21\u5f0f\u57fa\u4e8e ",(0,s.jsx)(e.strong,{children:"\u652f\u6301\u672c\u5730 ACID \u4e8b\u52a1"})," \u7684 ",(0,s.jsx)(e.strong,{children:"\u5173\u7cfb\u578b\u6570\u636e\u5e93"}),"\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a\uff1a\u5728\u672c\u5730\u4e8b\u52a1\u4e2d\uff0c\u4e00\u5e76\u63d0\u4ea4\u4e1a\u52a1\u6570\u636e\u66f4\u65b0\u548c\u76f8\u5e94\u56de\u6eda\u65e5\u5fd7\u8bb0\u5f55\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u4e8c\u9636\u6bb5 commit \u884c\u4e3a\uff1a\u9a6c\u4e0a\u6210\u529f\u7ed3\u675f\uff0c",(0,s.jsx)(e.strong,{children:"\u81ea\u52a8"})," \u5f02\u6b65\u6279\u91cf\u6e05\u7406\u56de\u6eda\u65e5\u5fd7\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4e8c\u9636\u6bb5 rollback \u884c\u4e3a\uff1a\u901a\u8fc7\u56de\u6eda\u65e5\u5fd7\uff0c",(0,s.jsx)(e.strong,{children:"\u81ea\u52a8"})," \u751f\u6210\u8865\u507f\u64cd\u4f5c\uff0c\u5b8c\u6210\u6570\u636e\u56de\u6eda\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u76f8\u5e94\u7684\uff0cMT \u6a21\u5f0f\uff0c\u4e0d\u4f9d\u8d56\u4e8e\u5e95\u5c42\u6570\u636e\u8d44\u6e90\u7684\u4e8b\u52a1\u652f\u6301\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4e00\u9636\u6bb5 prepare \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,s.jsx)(e.strong,{children:"\u81ea\u5b9a\u4e49"})," \u7684 prepare \u903b\u8f91\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4e8c\u9636\u6bb5 commit \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,s.jsx)(e.strong,{children:"\u81ea\u5b9a\u4e49"})," \u7684 commit \u903b\u8f91\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4e8c\u9636\u6bb5 rollback \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,s.jsx)(e.strong,{children:"\u81ea\u5b9a\u4e49"})," \u7684 rollback \u903b\u8f91\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6240\u8c13 MT \u6a21\u5f0f\uff0c\u662f\u6307\u652f\u6301\u628a ",(0,s.jsx)(e.strong,{children:"\u81ea\u5b9a\u4e49"})," \u7684\u5206\u652f\u4e8b\u52a1\u7eb3\u5165\u5230\u5168\u5c40\u4e8b\u52a1\u7684\u7ba1\u7406\u4e2d\u3002"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);