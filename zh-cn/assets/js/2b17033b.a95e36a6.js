"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[81571],{37437:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=i(74848),t=i(28453);const a={title:"Seata\u7684\u53ef\u89c2\u6d4b\u5b9e\u8df5",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001\u6570\u636e\u4e00\u81f4\u6027\u3001\u5fae\u670d\u52a1\u3001\u53ef\u89c2\u6d4b"],description:"\u672c\u6587\u4ecb\u7ecdSeata\u5728\u53ef\u89c2\u6d4b\u9886\u57df\u7684\u63a2\u7d22\u548c\u5b9e\u8df5",author:"\u5218\u620e-Seata",date:"2023/06/25"},r=void 0,l={permalink:"/seata.github.io/zh-cn/blog/seata-observable-practice",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-observable-practice.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-observable-practice.md",title:"Seata\u7684\u53ef\u89c2\u6d4b\u5b9e\u8df5",description:"\u672c\u6587\u4ecb\u7ecdSeata\u5728\u53ef\u89c2\u6d4b\u9886\u57df\u7684\u63a2\u7d22\u548c\u5b9e\u8df5",date:"2023-06-25T00:00:00.000Z",formattedDate:"2023\u5e746\u670825\u65e5",tags:[],readingTime:11.375,hasTruncateMarker:!1,authors:[{name:"\u5218\u620e-Seata"}],frontMatter:{title:"Seata\u7684\u53ef\u89c2\u6d4b\u5b9e\u8df5",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001\u6570\u636e\u4e00\u81f4\u6027\u3001\u5fae\u670d\u52a1\u3001\u53ef\u89c2\u6d4b"],description:"\u672c\u6587\u4ecb\u7ecdSeata\u5728\u53ef\u89c2\u6d4b\u9886\u57df\u7684\u63a2\u7d22\u548c\u5b9e\u8df5",author:"\u5218\u620e-Seata",date:"2023/06/25"},unlisted:!1,prevItem:{title:"Seata\uff1a\u8fde\u63a5\u6570\u636e\u4e0e\u5e94\u7528",permalink:"/seata.github.io/zh-cn/blog/seata-connect-data-and-application"},nextItem:{title:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684 seata-go 1.2.0 \u6765\u4e86\uff01\uff01\uff01",permalink:"/seata.github.io/zh-cn/blog/seata-go-1.2.0"}},c={authorsImageUrls:[void 0]},d=[{value:"Seata\u7b80\u4ecb",id:"seata\u7b80\u4ecb",level:2},{value:"\u4e1a\u52a1\u573a\u666f",id:"\u4e1a\u52a1\u573a\u666f",level:3},{value:"\u573a\u666f\u4e00\uff1a\u5206\u5e93\u5206\u8868\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1",id:"\u573a\u666f\u4e00\u5206\u5e93\u5206\u8868\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1",level:4},{value:"\u573a\u666f\u4e8c\uff1a\u8de8\u670d\u52a1\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1",id:"\u573a\u666f\u4e8c\u8de8\u670d\u52a1\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1",level:4},{value:"Seata\u67b6\u6784",id:"seata\u67b6\u6784",level:3},{value:"Seata\u7684\u53ef\u89c2\u6d4b\u5b9e\u8df5",id:"seata\u7684\u53ef\u89c2\u6d4b\u5b9e\u8df5",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u53ef\u89c2\u6d4b\uff1f",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u53ef\u89c2\u6d4b",level:3},{value:"\u53ef\u89c2\u6d4b\u80fd\u529b\u6982\u89c8",id:"\u53ef\u89c2\u6d4b\u80fd\u529b\u6982\u89c8",level:3},{value:"Metrics\u7ef4\u5ea6",id:"metrics\u7ef4\u5ea6",level:3},{value:"\u8bbe\u8ba1\u601d\u8def",id:"\u8bbe\u8ba1\u601d\u8def",level:4},{value:"\u6a21\u5757\u8bbe\u8ba1",id:"\u6a21\u5757\u8bbe\u8ba1",level:4},{value:"metrics\u6a21\u5757\u5de5\u4f5c\u6d41",id:"metrics\u6a21\u5757\u5de5\u4f5c\u6d41",level:4},{value:"TC\u6838\u5fc3\u6307\u6807",id:"tc\u6838\u5fc3\u6307\u6807",level:4},{value:"TM\u6838\u5fc3\u6307\u6807",id:"tm\u6838\u5fc3\u6307\u6807",level:4},{value:"RM\u6838\u5fc3\u6307\u6807",id:"rm\u6838\u5fc3\u6307\u6807",level:4},{value:"\u5927\u76d8\u5c55\u793a",id:"\u5927\u76d8\u5c55\u793a",level:4},{value:"Tracing\u7ef4\u5ea6",id:"tracing\u7ef4\u5ea6",level:3},{value:"Seata\u4e3a\u4ec0\u4e48\u9700\u8981tracing\uff1f",id:"seata\u4e3a\u4ec0\u4e48\u9700\u8981tracing",level:4},{value:"Seata\u7684tracing\u89e3\u51b3\u65b9\u6848",id:"seata\u7684tracing\u89e3\u51b3\u65b9\u6848",level:4},{value:"tracing\u6548\u679c",id:"tracing\u6548\u679c",level:4},{value:"Logging\u7ef4\u5ea6",id:"logging\u7ef4\u5ea6",level:3},{value:"\u8bbe\u8ba1\u601d\u8def",id:"\u8bbe\u8ba1\u601d\u8def-1",level:4},{value:"\u65e5\u5fd7\u683c\u5f0f\u8bbe\u8ba1",id:"\u65e5\u5fd7\u683c\u5f0f\u8bbe\u8ba1",level:4},{value:"\u603b\u7ed3&amp;\u5c55\u671b",id:"\u603b\u7ed3\u5c55\u671b",level:2},{value:"Metrics",id:"metrics",level:4},{value:"Tracing",id:"tracing",level:4},{value:"Logging",id:"logging",level:4}];function h(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"seata\u7b80\u4ecb",children:"Seata\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"Seata\u7684\u524d\u8eab\u662f\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u5185\u5927\u89c4\u6a21\u4f7f\u7528\u4fdd\u8bc1\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e00\u81f4\u6027\u7684\u4e2d\u95f4\u4ef6\uff0cSeata\u662f\u5176\u5f00\u6e90\u4ea7\u54c1\uff0c\u7531\u793e\u533a\u7ef4\u62a4\u3002\u5728\u4ecb\u7ecdSeata\u524d\uff0c\u5148\u4e0e\u5927\u5bb6\u8ba8\u8bba\u4e0b\u6211\u4eec\u4e1a\u52a1\u53d1\u5c55\u8fc7\u7a0b\u4e2d\u7ecf\u5e38\u9047\u5230\u7684\u4e00\u4e9b\u95ee\u9898\u573a\u666f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4e1a\u52a1\u573a\u666f",children:"\u4e1a\u52a1\u573a\u666f"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u4e1a\u52a1\u5728\u53d1\u5c55\u7684\u8fc7\u7a0b\u4e2d\uff0c\u57fa\u672c\u4e0a\u90fd\u662f\u4ece\u4e00\u4e2a\u7b80\u5355\u7684\u5e94\u7528\uff0c\u9010\u6e10\u8fc7\u6e21\u5230\u89c4\u6a21\u5e9e\u5927\u3001\u4e1a\u52a1\u590d\u6742\u7684\u5e94\u7528\u3002\u8fd9\u4e9b\u590d\u6742\u7684\u573a\u666f\u96be\u514d\u9047\u5230\u5206\u5e03\u5f0f\u4e8b\u52a1\u7ba1\u7406\u95ee\u9898\uff0cSeata\u7684\u51fa\u73b0\u6b63\u662f\u89e3\u51b3\u8fd9\u4e9b\u5206\u5e03\u5f0f\u573a\u666f\u4e0b\u7684\u4e8b\u52a1\u7ba1\u7406\u95ee\u9898\u3002\u4ecb\u7ecd\u4e0b\u5176\u4e2d\u51e0\u4e2a\u7ecf\u5178\u7684\u573a\u666f\uff1a"}),"\n",(0,s.jsx)(n.h4,{id:"\u573a\u666f\u4e00\u5206\u5e93\u5206\u8868\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1",children:"\u573a\u666f\u4e00\uff1a\u5206\u5e93\u5206\u8868\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"image.png",src:i(2881).A+"",width:"1200",height:"624"}),"\n\u8d77\u521d\u6211\u4eec\u7684\u4e1a\u52a1\u89c4\u6a21\u5c0f\u3001\u8f7b\u91cf\u5316\uff0c\u5355\u4e00\u6570\u636e\u5e93\u5c31\u80fd\u4fdd\u969c\u6211\u4eec\u7684\u6570\u636e\u94fe\u8def\u3002\u4f46\u968f\u7740\u4e1a\u52a1\u89c4\u6a21\u4e0d\u65ad\u6269\u5927\u3001\u4e1a\u52a1\u4e0d\u65ad\u590d\u6742\u5316\uff0c\u901a\u5e38\u5355\u4e00\u6570\u636e\u5e93\u5728\u5bb9\u91cf\u3001\u6027\u80fd\u4e0a\u4f1a\u906d\u9047\u74f6\u9888\u3002\u901a\u5e38\u7684\u89e3\u51b3\u65b9\u6848\u662f\u5411\u5206\u5e93\u3001\u5206\u8868\u7684\u67b6\u6784\u6f14\u8fdb\u3002\u6b64\u65f6\uff0c\u5373\u5f15\u5165\u4e86",(0,s.jsx)(n.strong,{children:"\u5206\u5e93\u5206\u8868\u573a\u666f\u4e0b"}),"\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u573a\u666f\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u573a\u666f\u4e8c\u8de8\u670d\u52a1\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1",children:"\u573a\u666f\u4e8c\uff1a\u8de8\u670d\u52a1\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"image.png",src:i(28660).A+"",width:"1200",height:"647"}),"\n\u964d\u4f4e\u5355\u4f53\u5e94\u7528\u590d\u6742\u5ea6\u7684\u65b9\u6848\uff1a\u5e94\u7528\u5fae\u670d\u52a1\u5316\u62c6\u5206\u3002\u62c6\u5206\u540e\uff0c\u6211\u4eec\u7684\u4ea7\u54c1\u7531\u591a\u4e2a\u529f\u80fd\u5404\u5f02\u7684\u5fae\u670d\u52a1\u7ec4\u4ef6\u6784\u6210\uff0c\u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u4f7f\u7528\u72ec\u7acb\u7684\u6570\u636e\u5e93\u8d44\u6e90\u3002\u5728\u6d89\u53ca\u5230\u8de8\u670d\u52a1\u8c03\u7528\u7684\u6570\u636e\u4e00\u81f4\u6027\u573a\u666f\u65f6\uff0c\u5c31\u5f15\u5165\u4e86",(0,s.jsx)(n.strong,{children:"\u8de8\u670d\u52a1\u573a\u666f\u4e0b"}),"\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"seata\u67b6\u6784",children:"Seata\u67b6\u6784"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"image.png",src:i(49918).A+"",width:"1534",height:"908"}),"\n\u5176\u6838\u5fc3\u7ec4\u4ef6\u4e3b\u8981\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Transaction Coordinator\uff08TC\uff09"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e8b\u52a1\u534f\u8c03\u5668\uff0c\u7ef4\u62a4\u5168\u5c40\u4e8b\u52a1\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u8d1f\u8d23\u534f\u8c03\u5e76\u9a71\u52a8\u5168\u5c40\u4e8b\u52a1\u7684\u63d0\u4ea4\u6216\u56de\u6eda\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Transaction Manager\uff08TM\uff09"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u63a7\u5236\u5168\u5c40\u4e8b\u52a1\u7684\u8fb9\u754c\uff0c\u8d1f\u8d23\u5f00\u542f\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\uff0c\u5e76\u6700\u7ec8\u53d1\u8d77\u5168\u5c40\u63d0\u4ea4\u6216\u5168\u5c40\u56de\u6eda\u7684\u51b3\u8bae\uff0cTM\u5b9a\u4e49\u5168\u5c40\u4e8b\u52a1\u7684\u8fb9\u754c\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Resource Manager\uff08RM\uff09"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u63a7\u5236\u5206\u652f\u4e8b\u52a1\uff0c\u8d1f\u8d23\u5206\u652f\u6ce8\u518c\u3001\u72b6\u6001\u6c47\u62a5\uff0c\u5e76\u63a5\u6536\u4e8b\u52a1\u534f\u8c03\u5668\u7684\u6307\u4ee4\uff0c\u9a71\u52a8\u5206\u652f\uff08\u672c\u5730\uff09\u4e8b\u52a1\u7684\u63d0\u4ea4\u548c\u56de\u6eda\u3002RM\u8d1f\u8d23\u5b9a\u4e49\u5206\u652f\u4e8b\u52a1\u7684\u8fb9\u754c\u548c\u884c\u4e3a\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"seata\u7684\u53ef\u89c2\u6d4b\u5b9e\u8df5",children:"Seata\u7684\u53ef\u89c2\u6d4b\u5b9e\u8df5"}),"\n",(0,s.jsx)(n.h3,{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u53ef\u89c2\u6d4b",children:"\u4e3a\u4ec0\u4e48\u9700\u8981\u53ef\u89c2\u6d4b\uff1f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u6d88\u606f\u94fe\u8def\u8f83\u590d\u6742"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Seata\u5728\u89e3\u51b3\u4e86\u7528\u6237\u6613\u7528\u6027\u548c\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e00\u81f4\u6027\u8fd9\u4e9b\u95ee\u9898\u7684\u540c\u65f6\uff0c\u9700\u8981\u591a\u6b21TC\u4e0eTM\u3001RM\u4e4b\u95f4\u7684\u4ea4\u4e92\uff0c\u5c24\u5176\u5f53\u5fae\u670d\u52a1\u7684\u94fe\u8def\u53d8\u590d\u6742\u65f6\uff0cSeata\u7684\u4ea4\u4e92\u94fe\u8def\u4e5f\u4f1a\u5448\u6b63\u76f8\u5173\u6027\u589e\u52a0\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5176\u5b9e\u6211\u4eec\u5c31\u9700\u8981\u5f15\u5165\u53ef\u89c2\u6d4b\u7684\u80fd\u529b\u6765\u89c2\u5bdf\u3001\u5206\u6790\u4e8b\u7269\u94fe\u8def\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u5f02\u5e38\u94fe\u8def\u3001\u6545\u969c\u6392\u67e5\u96be\u5b9a\u4f4d\uff0c\u6027\u80fd\u4f18\u5316\u65e0\u4ece\u4e0b\u624b"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u6392\u67e5Seata\u7684\u5f02\u5e38\u4e8b\u52a1\u94fe\u8def\u65f6\uff0c\u4f20\u7edf\u7684\u65b9\u6cd5\u9700\u8981\u770b\u65e5\u5fd7\uff0c\u8fd9\u6837\u68c0\u7d22\u8d77\u6765\u6bd4\u8f83\u9ebb\u70e6\u3002\u5728\u5f15\u5165\u53ef\u89c2\u6d4b\u80fd\u529b\u540e\uff0c\u5e2e\u52a9\u6211\u4eec\u76f4\u89c2\u7684\u5206\u6790\u94fe\u8def\uff0c\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\uff1b\u4e3a\u4f18\u5316\u8017\u65f6\u7684\u4e8b\u52a1\u94fe\u8def\u63d0\u4f9b\u4f9d\u636e\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53ef\u89c6\u5316\u3001\u6570\u636e\u53ef\u91cf\u5316"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u89c6\u5316\u80fd\u529b\u53ef\u8ba9\u7528\u6237\u5bf9\u4e8b\u52a1\u6267\u884c\u60c5\u51b5\u6709\u76f4\u89c2\u7684\u611f\u53d7\uff1b\u501f\u52a9\u53ef\u91cf\u5316\u7684\u6570\u636e\uff0c\u53ef\u5e2e\u52a9\u7528\u6237\u8bc4\u4f30\u8d44\u6e90\u6d88\u8017\u3001\u89c4\u5212\u9884\u7b97\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u53ef\u89c2\u6d4b\u80fd\u529b\u6982\u89c8",children:"\u53ef\u89c2\u6d4b\u80fd\u529b\u6982\u89c8"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53ef\u89c2\u6d4b\u7ef4\u5ea6"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"seata\u671f\u671b\u7684\u80fd\u529b"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u6280\u672f\u9009\u578b\u53c2\u8003"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Metrics"}),(0,s.jsx)(n.td,{children:"\u529f\u80fd\u5c42\u9762\uff1a\u53ef\u6309\u4e1a\u52a1\u5206\u7ec4\u9694\u79bb\uff0c\u91c7\u96c6\u4e8b\u52a1\u603b\u91cf\u3001\u8017\u65f6\u7b49\u91cd\u8981\u6307\u6807"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u6027\u80fd\u5c42\u9762\uff1a\u9ad8\u5ea6\u91cf\u6027\u80fd\uff0c\u63d2\u4ef6\u6309\u9700\u52a0\u8f7d"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u67b6\u6784\u5c42\u9762\uff1a\u51cf\u5c11\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u670d\u52a1\u7aef\u3001\u5ba2\u6237\u7aef\u80fd\u591f\u91c7\u7528\u7edf\u4e00\u7684\u67b6\u6784\uff0c\u51cf\u5c11\u6280\u672f\u590d\u6742\u5ea6"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u517c\u5bb9\u6027\u5c42\u9762\uff1a\u81f3\u5c11\u517c\u5bb9Prometheus\u751f\u6001"}),(0,s.jsx)(n.td,{children:"Prometheus\uff1a\u6307\u6807\u5b58\u50a8\u548c\u67e5\u8be2\u7b49\u9886\u57df\u6709\u7740\u4e1a\u754c\u9886\u5148\u7684\u5730\u4f4d"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OpenTelemetry\uff1a\u53ef\u89c2\u6d4b\u6570\u636e\u91c7\u96c6\u548c\u89c4\u8303\u7684\u4e8b\u5b9e\u6807\u51c6\u3002\u4f46\u81ea\u8eab\u5e76\u4e0d\u8d1f\u8d23\u6570\u636e\u7684\u5b58\u50a8\uff0c\u5c55\u793a\u548c\u5206\u6790"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Tracing"}),(0,s.jsx)(n.td,{children:"\u529f\u80fd\u5c42\u9762\uff1a\u5168\u94fe\u8def\u8ffd\u8e2a\u5206\u5e03\u5f0f\u4e8b\u52a1\u751f\u547d\u5468\u671f\uff0c\u53cd\u5e94\u5206\u5e03\u5f0f\u4e8b\u52a1\u6267\u884c\u6027\u80fd\u6d88\u8017"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u6613\u7528\u6027\u65b9\u9762\uff1a\u5bf9\u4f7f\u7528seata\u7684\u7528\u6237\u800c\u8a00\u7b80\u5355\u6613\u63a5\u5165"}),(0,s.jsx)(n.td,{children:"SkyWalking\uff1a\u5229\u7528Java\u7684Agent\u63a2\u9488\u6280\u672f\uff0c\u6548\u7387\u9ad8\uff0c\u7b80\u5355\u6613\u7528\u3002"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Logging"}),(0,s.jsx)(n.td,{children:"\u529f\u80fd\u5c42\u9762\uff1a\u8bb0\u5f55\u670d\u52a1\u7aef\u3001\u5ba2\u6237\u7aef\u5168\u90e8\u751f\u547d\u5468\u671f\u4fe1\u606f"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u6613\u7528\u6027\u5c42\u9762\uff1a\u80fd\u6839\u636eXID\u5feb\u901f\u5339\u914d\u5168\u5c40\u4e8b\u52a1\u5bf9\u5e94\u94fe\u8def\u65e5\u5fd7"}),(0,s.jsx)(n.td,{children:"Alibaba Cloud Service"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ELK"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"metrics\u7ef4\u5ea6",children:"Metrics\u7ef4\u5ea6"}),"\n",(0,s.jsx)(n.h4,{id:"\u8bbe\u8ba1\u601d\u8def",children:"\u8bbe\u8ba1\u601d\u8def"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Seata\u4f5c\u4e3a\u4e00\u4e2a\u88ab\u96c6\u6210\u7684\u6570\u636e\u4e00\u81f4\u6027\u6846\u67b6\uff0cMetrics\u6a21\u5757\u5c06\u5c3d\u53ef\u80fd\u5c11\u7684\u4f7f\u7528\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4ee5\u964d\u4f4e\u53d1\u751f\u51b2\u7a81\u7684\u98ce\u9669"}),"\n",(0,s.jsx)(n.li,{children:"Metrics\u6a21\u5757\u5c06\u7aed\u529b\u4e89\u53d6\u66f4\u9ad8\u7684\u5ea6\u91cf\u6027\u80fd\u548c\u66f4\u4f4e\u7684\u8d44\u6e90\u5f00\u9500\uff0c\u5c3d\u53ef\u80fd\u964d\u4f4e\u5f00\u542f\u540e\u5e26\u6765\u7684\u526f\u4f5c\u7528"}),"\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u65f6\uff0cMetrics\u662f\u5426\u6fc0\u6d3b\u3001\u6570\u636e\u5982\u4f55\u53d1\u5e03\uff0c\u53d6\u51b3\u4e8e\u5bf9\u5e94\u7684\u914d\u7f6e\uff1b\u5f00\u542f\u914d\u7f6e\u5219\u81ea\u52a8\u542f\u7528\uff0c\u5e76\u9ed8\u8ba4\u5c06\u5ea6\u91cf\u6570\u636e\u901a\u8fc7prometheusexporter\u7684\u5f62\u5f0f\u53d1\u5e03"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u4f7f\u7528Spring\uff0c\u4f7f\u7528SPI(Service Provider Interface)\u52a0\u8f7d\u6269\u5c55"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u6a21\u5757\u8bbe\u8ba1",children:"\u6a21\u5757\u8bbe\u8ba1"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u56fe\u7247 1.png",src:i(49249).A+"",width:"1296",height:"746"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"seata-metrics-core\uff1aMetrics\u6838\u5fc3\u6a21\u5757\uff0c\u6839\u636e\u914d\u7f6e\u7ec4\u7ec7\uff08\u52a0\u8f7d\uff091\u4e2aRegistry\u548cN\u4e2aExporter\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"seata-metrics-api\uff1a\u5b9a\u4e49\u4e86Meter\u6307\u6807\u63a5\u53e3\uff0cRegistry\u6307\u6807\u6ce8\u518c\u4e2d\u5fc3\u63a5\u53e3\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"seata-metrics-exporter-prometheus\uff1a\u5185\u7f6e\u7684prometheus-exporter\u5b9e\u73b0\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"seata-metrics-registry-compact\uff1a\u5185\u7f6e\u7684Registry\u5b9e\u73b0\uff0c\u5e76\u8f7b\u91cf\u7ea7\u5b9e\u73b0\u4e86Gauge\u3001Counter\u3001Summay\u3001Timer\u6307\u6807\uff1b"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"metrics\u6a21\u5757\u5de5\u4f5c\u6d41",children:"metrics\u6a21\u5757\u5de5\u4f5c\u6d41"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"\u56fe\u7247 1.png",src:i(86356).A+"",width:"1534",height:"964"}),"\n\u4e0a\u56fe\u662fmetrics\u6a21\u5757\u7684\u5de5\u4f5c\u6d41\uff0c\u5176\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5229\u7528SPI\u673a\u5236\uff0c\u6839\u636e\u914d\u7f6e\u52a0\u8f7dExporter\u548cRegistry\u7684\u5b9e\u73b0\u7c7b\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u57fa\u4e8e\u6d88\u606f\u8ba2\u9605\u4e0e\u901a\u77e5\u673a\u5236\uff0c\u76d1\u542c\u6240\u6709\u5168\u5c40\u4e8b\u52a1\u7684\u72b6\u6001\u53d8\u66f4\u4e8b\u4ef6\uff0c\u5e76publish\u5230EventBus\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u4e8b\u4ef6\u8ba2\u9605\u8005\u6d88\u8d39\u4e8b\u4ef6\uff0c\u5e76\u5c06\u751f\u6210\u7684metrics\u5199\u5165Registry\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u76d1\u63a7\u7cfb\u7edf\uff08\u5982prometheus\uff09\u4eceExporter\u4e2d\u62c9\u53d6\u6570\u636e\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"tc\u6838\u5fc3\u6307\u6807",children:"TC\u6838\u5fc3\u6307\u6807"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image.png",src:i(31976).A+"",width:"1746",height:"1072"})}),"\n",(0,s.jsx)(n.h4,{id:"tm\u6838\u5fc3\u6307\u6807",children:"TM\u6838\u5fc3\u6307\u6807"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image.png",src:i(63138).A+"",width:"2308",height:"1094"})}),"\n",(0,s.jsx)(n.h4,{id:"rm\u6838\u5fc3\u6307\u6807",children:"RM\u6838\u5fc3\u6307\u6807"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image.png",src:i(51200).A+"",width:"2122",height:"1580"})}),"\n",(0,s.jsx)(n.h4,{id:"\u5927\u76d8\u5c55\u793a",children:"\u5927\u76d8\u5c55\u793a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"lQLPJxZhZlqESU3NBpjNBp6w8zYK6VbMgzYCoKVrWEDWAA_1694_1688.png",src:i(83406).A+"",width:"1694",height:"1688"})}),"\n",(0,s.jsx)(n.h3,{id:"tracing\u7ef4\u5ea6",children:"Tracing\u7ef4\u5ea6"}),"\n",(0,s.jsx)(n.h4,{id:"seata\u4e3a\u4ec0\u4e48\u9700\u8981tracing",children:"Seata\u4e3a\u4ec0\u4e48\u9700\u8981tracing\uff1f"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5bf9\u4e1a\u52a1\u4fa7\u800c\u8a00\uff0c\u5f15\u5165Seata\u540e\uff0c\u5bf9\u4e1a\u52a1\u6027\u80fd\u4f1a\u5e26\u6765\u591a\u5927\u635f\u8017\uff1f\u4e3b\u8981\u65f6\u95f4\u6d88\u8017\u5728\u4ec0\u4e48\u5730\u65b9\uff1f\u5982\u4f55\u9488\u5bf9\u6027\u7684\u4f18\u5316\u4e1a\u52a1\u903b\u8f91\uff1f\u8fd9\u4e9b\u90fd\u662f\u672a\u77e5\u7684\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Seata\u7684\u6240\u6709\u6d88\u606f\u8bb0\u5f55\u90fd\u901a\u8fc7\u65e5\u5fd7\u6301\u4e45\u5316\u843d\u76d8\uff0c\u4f46\u5bf9\u4e0d\u4e86\u89e3Seata\u7684\u7528\u6237\u800c\u8a00\uff0c\u65e5\u5fd7\u975e\u5e38\u4e0d\u53cb\u597d\u3002\u80fd\u5426\u901a\u8fc7\u63a5\u5165Tracing\uff0c\u63d0\u5347\u4e8b\u52a1\u94fe\u8def\u6392\u67e5\u6548\u7387\uff1f"}),"\n",(0,s.jsx)(n.li,{children:"\u5bf9\u4e8e\u65b0\u624b\u7528\u6237\uff0c\u53ef\u901a\u8fc7Tracing\u8bb0\u5f55\uff0c\u5feb\u901f\u4e86\u89e3seata\u7684\u5de5\u4f5c\u539f\u7406\uff0c\u964d\u4f4eseata\u4f7f\u7528\u95e8\u69db\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"seata\u7684tracing\u89e3\u51b3\u65b9\u6848",children:"Seata\u7684tracing\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Seata\u5728\u81ea\u5b9a\u4e49\u7684RPC\u6d88\u606f\u534f\u8bae\u4e2d\u5b9a\u4e49\u4e86Header\u4fe1\u606f\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"SkyWalking\u62e6\u622a\u6307\u5b9a\u7684RPC\u6d88\u606f\uff0c\u5e76\u6ce8\u5165tracing\u76f8\u5173\u7684span\u4fe1\u606f\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u4ee5RPC\u6d88\u606f\u7684\u53d1\u51fa&\u63a5\u6536\u4e3a\u4e34\u754c\u70b9\uff0c\u5b9a\u4e49\u4e86span\u7684\u751f\u547d\u5468\u671f\u8303\u56f4\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u57fa\u4e8e\u4e0a\u8ff0\u7684\u65b9\u5f0f\uff0cSeata\u5b9e\u73b0\u4e86\u4e8b\u52a1\u5168\u94fe\u8def\u7684tracing\uff0c\u5177\u4f53\u63a5\u5165\u53ef\u53c2\u8003",(0,s.jsx)(n.a,{href:"/docs/user/apm/skywalking/",children:"\u4e3a[Seata\u5e94\u7528 | Seata-server]\u63a5\u5165Skywalking"}),"\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"tracing\u6548\u679c",children:"tracing\u6548\u679c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u57fa\u4e8e\u7684demo\u573a\u666f\uff1a"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u7528\u6237\u8bf7\u6c42\u4ea4\u6613\u670d\u52a1"}),"\n",(0,s.jsx)(n.li,{children:"\u4ea4\u6613\u670d\u52a1\u9501\u5b9a\u5e93\u5b58"}),"\n",(0,s.jsx)(n.li,{children:"\u4ea4\u6613\u670d\u52a1\u521b\u5efa\u8d26\u5355"}),"\n",(0,s.jsx)(n.li,{children:"\u8d26\u5355\u670d\u52a1\u8fdb\u884c\u6263\u6b3e"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image.png",src:i(15374).A+"",width:"865",height:"489"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GlobalCommit\u6210\u529f\u7684\u4e8b\u52a1\u94fe\u8def\uff08\u4e8b\u4f8b\uff09"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"image.png",src:i(13376).A+"",width:"1080",height:"1788"}),"\n",(0,s.jsx)(n.img,{alt:"image.png",src:i(10939).A+"",width:"1080",height:"2647"}),"\n",(0,s.jsx)(n.img,{alt:"image.png",src:i(89394).A+"",width:"1080",height:"1466"})]}),"\n",(0,s.jsx)(n.h3,{id:"logging\u7ef4\u5ea6",children:"Logging\u7ef4\u5ea6"}),"\n",(0,s.jsx)(n.h4,{id:"\u8bbe\u8ba1\u601d\u8def-1",children:"\u8bbe\u8ba1\u601d\u8def"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"image.png",src:i(40536).A+"",width:"1434",height:"454"}),"\nLogging\u8fd9\u4e00\u5757\u5176\u5b9e\u627f\u62c5\u7684\u662f\u53ef\u89c2\u6d4b\u8fd9\u51e0\u4e2a\u7ef4\u5ea6\u5f53\u4e2d\u7684\u515c\u5e95\u89d2\u8272\u3002\u653e\u5728\u6700\u5e95\u5c42\u7684\uff0c\u5176\u5b9e\u5c31\u662f\u6211\u4eec\u65e5\u5fd7\u683c\u5f0f\u7684\u8bbe\u8ba1\uff0c\u53ea\u6709\u597d\u65e5\u5fd7\u683c\u5f0f\uff0c\u6211\u4eec\u624d\u80fd\u5bf9\u5b83\u8fdb\u884c\u66f4\u597d\u7684\u91c7\u96c6\u3001\u6a21\u5757\u5316\u7684\u5b58\u50a8\u548c\u5c55\u793a\u3002\u5728\u5176\u4e4b\u4e0a\uff0c\u662f\u65e5\u5fd7\u7684\u91c7\u96c6\u3001\u5b58\u50a8\u3001\u76d1\u63a7\u3001\u544a\u8b66\u3001\u6570\u636e\u53ef\u89c6\u5316\uff0c\u8fd9\u4e9b\u6a21\u5757\u66f4\u591a\u7684\u662f\u6709\u73b0\u6210\u7684\u5de5\u5177\uff0c\u6bd4\u5982\u963f\u91cc\u7684SLS\u65e5\u5fd7\u670d\u52a1\u3001\u8fd8\u6709ELK\u7684\u4e00\u5957\u6280\u672f\u6808\uff0c\u6211\u4eec\u66f4\u591a\u662f\u5c06\u5f00\u9500\u6210\u672c\u3001\u63a5\u5165\u590d\u6742\u5ea6\u3001\u751f\u6001\u7e41\u8363\u5ea6\u7b49\u4f5c\u4e3a\u8003\u91cf\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u65e5\u5fd7\u683c\u5f0f\u8bbe\u8ba1",children:"\u65e5\u5fd7\u683c\u5f0f\u8bbe\u8ba1"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u62ffSeata-Server\u7684\u4e00\u4e2a\u65e5\u5fd7\u683c\u5f0f\u4f5c\u4e3a\u6848\u4f8b\uff1a\n",(0,s.jsx)(n.img,{alt:"image.png",src:i(32767).A+"",width:"1342",height:"364"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7ebf\u7a0b\u6c60\u89c4\u8303\u547d\u540d\uff1a\u5f53\u7ebf\u7a0b\u6c60\u3001\u7ebf\u7a0b\u6bd4\u8f83\u591a\u65f6\uff0c\u89c4\u8303\u7684\u7ebf\u7a0b\u547d\u540d\u80fd\u5c06\u65e0\u5e8f\u6267\u884c\u7684\u7ebf\u7a0b\u6267\u884c\u6b21\u5e8f\u6e05\u6670\u5c55\u793a\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u65b9\u6cd5\u5168\u7c7b\u540d\u53ef\u8ffd\u6eaf\uff1a\u5feb\u901f\u5b9a\u4f4d\u5230\u5177\u4f53\u7684\u4ee3\u7801\u5757\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u91cd\u70b9\u8fd0\u884c\u65f6\u4fe1\u606f\u900f\u51fa\uff1a\u91cd\u70b9\u7a81\u51fa\u5173\u952e\u65e5\u5fd7\uff0c\u4e0d\u5173\u952e\u7684\u65e5\u5fd7\u4e0d\u6253\u5370\uff0c\u51cf\u5c11\u65e5\u5fd7\u5197\u4f59\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6d88\u606f\u683c\u5f0f\u53ef\u6269\u5c55\uff1a\u901a\u8fc7\u6269\u5c55\u6d88\u606f\u7c7b\u7684\u8f93\u51fa\u683c\u5f0f\uff0c\u51cf\u5c11\u65e5\u5fd7\u7684\u4ee3\u7801\u4fee\u6539\u91cf\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u603b\u7ed3\u5c55\u671b",children:"\u603b\u7ed3&\u5c55\u671b"}),"\n",(0,s.jsx)(n.h4,{id:"metrics",children:"Metrics"}),"\n",(0,s.jsx)(n.p,{children:"\u603b\u7ed3\uff1a\u57fa\u672c\u5b9e\u73b0\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u53ef\u91cf\u5316\u3001\u53ef\u89c2\u6d4b\u3002\n\u5c55\u671b\uff1a\u66f4\u7ec6\u7c92\u5ea6\u7684\u6307\u6807\u3001\u66f4\u5e7f\u9614\u7684\u751f\u6001\u517c\u5bb9\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"tracing",children:"Tracing"}),"\n",(0,s.jsx)(n.p,{children:"\u603b\u7ed3\uff1a\u5206\u5e03\u5f0f\u4e8b\u52a1\u5168\u94fe\u8def\u7684\u53ef\u8ffd\u6eaf\u3002\n\u5c55\u671b\uff1a\u6839\u636exid\u8ffd\u6eaf\u4e8b\u52a1\u94fe\u8def\uff0c\u5f02\u5e38\u94fe\u8def\u6839\u56e0\u5feb\u901f\u5b9a\u4f4d\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"logging",children:"Logging"}),"\n",(0,s.jsx)(n.p,{children:"\u603b\u7ed3\uff1a\u7ed3\u6784\u5316\u7684\u65e5\u5fd7\u683c\u5f0f\u3002\n\u5c55\u671b\uff1a\u65e5\u5fd7\u53ef\u89c2\u6d4b\u4f53\u7cfb\u6f14\u8fdb\u3002"})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},51200:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-RM\u6838\u5fc3\u6307\u6807-30ac5fe4e5c6e0d0727a3d28bf94ec82.png"},49918:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-Seata\u67b6\u6784-d45c1d1bf146b044c4f1b7f85ba3beb8.png"},31976:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-TC\u6838\u5fc3\u6307\u6807-7de91006545ab3e5518b6889456a8302.png"},63138:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-TM\u6838\u5fc3\u6307\u6807-8ef5523801c632ae5af707ade30576b5.png"},32767:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-logging\u65e5\u5fd7\u6548\u679c-049f409856a4895fe3d27d7930e028f8.png"},40536:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-logging\u8bbe\u8ba1\u601d\u8def-c90fe7b88cab305e7b3c918df2cba8b6.png"},13376:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-tracing\u6548\u679c-tracing\u94fe1-e4e8b13e4b0a74c76631560a66973d2a.png"},10939:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-tracing\u6548\u679c-tracing\u94fe2-d5a816ec8b49b6ca95309eeda8470825.png"},89394:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-tracing\u6548\u679c-tracing\u94fe3-c50deab1728f8e61946a26d7d1b49da8.png"},15374:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-tracing\u6548\u679c-\u4e1a\u52a1\u903b\u8f91\u56fe-92ed3a1bb1fc62135d8d02d1a21951fb.png"},2881:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-\u5206\u5e93\u5206\u8868\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1-ee0eff8cf24e6e3e997b0b040c56690e.png"},83406:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-\u5927\u76d8\u5c55\u793a-1f6d2bdf7f5bc02f56244b361764ee7c.png"},86356:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-\u6a21\u5757\u5de5\u4f5c\u6d41-cf55ed8598aa42930fb5d0c58399463d.png"},49249:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-\u6a21\u5757\u8bbe\u8ba1-44acf0482c9b8fbb5f6ec11a1423440c.png"},28660:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metrics-\u8de8\u670d\u52a1\u573a\u666f\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1-ccc122e03531914d0945e82137912655.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);