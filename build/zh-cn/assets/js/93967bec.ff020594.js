"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[53692],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),k=r,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return t?n.createElement(d,o(o({ref:a},c),{},{components:t})):n.createElement(d,o({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=k;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},85143:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const l={title:"Seata \u6781\u7b80\u5165\u95e8",description:"\u4ece 0 \u5f00\u59cb\u5165\u95e8 Seata\uff0c\u642d\u5efa Seata \u670d\u52a1\uff0c\u5e76\u63a5\u5165 Java \u9879\u76ee\u4e2d\u5b9e\u73b0\u5206\u5e03\u5f0f\u4e8b\u52a1",keywords:["fescar\u3001seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"],author:"\u828b\u9053\u6e90\u7801",date:"2020/04/19"},o=void 0,i={permalink:"/zh-cn/blog/seata-quick-start",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-quick-start.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-quick-start.md",title:"Seata \u6781\u7b80\u5165\u95e8",description:"\u4ece 0 \u5f00\u59cb\u5165\u95e8 Seata\uff0c\u642d\u5efa Seata \u670d\u52a1\uff0c\u5e76\u63a5\u5165 Java \u9879\u76ee\u4e2d\u5b9e\u73b0\u5206\u5e03\u5f0f\u4e8b\u52a1",date:"2020-04-19T00:00:00.000Z",formattedDate:"2020\u5e744\u670819\u65e5",tags:[],readingTime:13.355,hasTruncateMarker:!1,authors:[{name:"\u828b\u9053\u6e90\u7801"}],frontMatter:{title:"Seata \u6781\u7b80\u5165\u95e8",description:"\u4ece 0 \u5f00\u59cb\u5165\u95e8 Seata\uff0c\u642d\u5efa Seata \u670d\u52a1\uff0c\u5e76\u63a5\u5165 Java \u9879\u76ee\u4e2d\u5b9e\u73b0\u5206\u5e03\u5f0f\u4e8b\u52a1",keywords:["fescar\u3001seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"],author:"\u828b\u9053\u6e90\u7801",date:"2020/04/19"},prevItem:{title:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u5982\u4f55\u5b9e\u73b0\uff1f\u6df1\u5165\u89e3\u8bfb Seata \u7684 XA \u6a21\u5f0f",permalink:"/zh-cn/blog/seata-xa-introduce"},nextItem:{title:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72\u5b9e\u8df5",permalink:"/zh-cn/blog/seata-ha-practice"}},s={authorsImageUrls:[void 0]},p=[{value:"1.1 \u56db\u79cd\u4e8b\u52a1\u6a21\u5f0f",id:"11-\u56db\u79cd\u4e8b\u52a1\u6a21\u5f0f",level:2},{value:"1.2 \u4e09\u79cd\u89d2\u8272",id:"12-\u4e09\u79cd\u89d2\u8272",level:2},{value:"1.3 \u6846\u67b6\u652f\u6301\u60c5\u51b5",id:"13-\u6846\u67b6\u652f\u6301\u60c5\u51b5",level:2},{value:"1.4 \u6848\u4f8b\u60c5\u51b5",id:"14-\u6848\u4f8b\u60c5\u51b5",level:2},{value:"2.1 \u4e0b\u8f7d Seata \u8f6f\u4ef6\u5305",id:"21-\u4e0b\u8f7d-seata-\u8f6f\u4ef6\u5305",level:2},{value:"2.2 \u542f\u52a8 TC Server",id:"22-\u542f\u52a8-tc-server",level:2},{value:"3.1 \u4e0b\u8f7d Seata \u8f6f\u4ef6\u5305",id:"31-\u4e0b\u8f7d-seata-\u8f6f\u4ef6\u5305",level:2},{value:"3.2 \u521d\u59cb\u5316\u6570\u636e\u5e93",id:"32-\u521d\u59cb\u5316\u6570\u636e\u5e93",level:2},{value:"3.3 \u8bbe\u7f6e\u4f7f\u7528 Nacos \u6ce8\u518c\u4e2d\u5fc3",id:"33-\u8bbe\u7f6e\u4f7f\u7528-nacos-\u6ce8\u518c\u4e2d\u5fc3",level:2},{value:"3.4 \u542f\u52a8 TC Server",id:"34-\u542f\u52a8-tc-server",level:2},{value:"4.1 AT \u6a21\u5f0f",id:"41-at-\u6a21\u5f0f",level:2},{value:"4.2 TCC \u6a21\u5f0f",id:"42-tcc-\u6a21\u5f0f",level:2},{value:"4.3 Saga \u6a21\u5f0f",id:"43-saga-\u6a21\u5f0f",level:2},{value:"4.4 XA \u6a21\u5f0f",id:"44-xa-\u6a21\u5f0f",level:2}],c={toc:p},m="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"1. \u6982\u8ff0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"2. \u90e8\u7f72\u5355\u673a TC Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"3. \u90e8\u7f72\u96c6\u7fa4 TC Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"4. \u63a5\u5165 Java \u5e94\u7528"))),(0,r.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata"},"Seata")," \u662f",(0,r.kt)("strong",{parentName:"p"},"\u963f\u91cc"),"\u5f00\u6e90\u7684\u4e00\u6b3e\u5f00\u6e90\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u4e8b\u52a1"),"\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"),(0,r.kt)("h2",{id:"11-\u56db\u79cd\u4e8b\u52a1\u6a21\u5f0f"},"1.1 \u56db\u79cd\u4e8b\u52a1\u6a21\u5f0f"),(0,r.kt)("p",null,"Seata \u76ee\u6807\u6253\u9020",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u7ad9\u5f0f"),"\u7684\u5206\u5e03\u4e8b\u52a1\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u6700\u7ec8\u4f1a\u63d0\u4f9b\u56db\u79cd\u4e8b\u52a1\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AT \u6a21\u5f0f\uff1a\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://seata.io/zh-cn/docs/dev/mode/at-mode.html"},"\u300aSeata AT \u6a21\u5f0f\u300b"),"\u6587\u6863"),(0,r.kt)("li",{parentName:"ul"},"TCC \u6a21\u5f0f\uff1a\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"},"\u300aSeata TCC \u6a21\u5f0f\u300b"),"\u6587\u6863"),(0,r.kt)("li",{parentName:"ul"},"Saga \u6a21\u5f0f\uff1a\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://seata.io/zh-cn/docs/dev/mode/saga-mode.html"},"\u300aSEATA Saga \u6a21\u5f0f\u300b"),"\u6587\u6863"),(0,r.kt)("li",{parentName:"ul"},"XA \u6a21\u5f0f\uff1a\u6b63\u5728\u5f00\u53d1\u4e2d...")),(0,r.kt)("p",null,"\u76ee\u524d\u4f7f\u7528\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6d41\u884c\u5ea6"),"\u60c5\u51b5\u662f\uff1aAT > TCC > Saga\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5728\u5b66\u4e60 Seata \u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u82b1\u66f4\u591a\u7cbe\u529b\u5728 ",(0,r.kt)("strong",{parentName:"p"},"AT \u6a21\u5f0f"),"\u4e0a\uff0c\u6700\u597d\u641e\u61c2\u80cc\u540e\u7684\u5b9e\u73b0\u539f\u7406\uff0c\u6bd5\u7adf\u5206\u5e03\u5f0f\u4e8b\u52a1\u6d89\u53ca\u5230\u6570\u636e\u7684\u6b63\u786e\u6027\uff0c\u51fa\u95ee\u9898\u9700\u8981\u5feb\u901f\u6392\u67e5\u5b9a\u4f4d\u5e76\u89e3\u51b3\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53cb\u60c5\u63d0\u793a\uff1a\u5177\u4f53\u7684\u6d41\u884c\u5ea6\uff0c\u80d6\u53cb\u53ef\u4ee5\u9009\u62e9\u770b\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/issues/1246"},"Wanted: who's using Seata")," \u6bcf\u4e2a\u516c\u53f8\u767b\u8bb0\u7684\u4f7f\u7528\u65b9\u5f0f\u3002")),(0,r.kt)("h2",{id:"12-\u4e09\u79cd\u89d2\u8272"},"1.2 \u4e09\u79cd\u89d2\u8272"),(0,r.kt)("p",null,"\u5728 Seata \u7684\u67b6\u6784\u4e2d\uff0c\u4e00\u5171\u6709\u4e09\u4e2a\u89d2\u8272\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/02.png",alt:"\u4e09\u4e2a\u89d2\u8272"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TC")," (Transaction Coordinator) - \u4e8b\u52a1\u534f\u8c03\u8005\uff1a\u7ef4\u62a4\u5168\u5c40\u548c\u5206\u652f\u4e8b\u52a1\u7684\u72b6\u6001\uff0c\u9a71\u52a8",(0,r.kt)("strong",{parentName:"li"},"\u5168\u5c40\u4e8b\u52a1"),"\u63d0\u4ea4\u6216\u56de\u6eda\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TM")," (Transaction Manager) - \u4e8b\u52a1\u7ba1\u7406\u5668\uff1a\u5b9a\u4e49",(0,r.kt)("strong",{parentName:"li"},"\u5168\u5c40\u4e8b\u52a1"),"\u7684\u8303\u56f4\uff0c\u5f00\u59cb\u5168\u5c40\u4e8b\u52a1\u3001\u63d0\u4ea4\u6216\u56de\u6eda\u5168\u5c40\u4e8b\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RM")," ( Resource Manager ) - \u8d44\u6e90\u7ba1\u7406\u5668\uff1a\u7ba1\u7406",(0,r.kt)("strong",{parentName:"li"},"\u5206\u652f\u4e8b\u52a1"),"\u5904\u7406\u7684\u8d44\u6e90( Resource )\uff0c\u4e0e TC \u4ea4\u8c08\u4ee5\u6ce8\u518c\u5206\u652f\u4e8b\u52a1\u548c\u62a5\u544a\u5206\u652f\u4e8b\u52a1\u7684\u72b6\u6001\uff0c\u5e76\u9a71\u52a8",(0,r.kt)("strong",{parentName:"li"},"\u5206\u652f\u4e8b\u52a1"),"\u63d0\u4ea4\u6216\u56de\u6eda\u3002")),(0,r.kt)("p",null,"\u5176\u4e2d\uff0cTC \u4e3a\u5355\u72ec\u90e8\u7f72\u7684 ",(0,r.kt)("strong",{parentName:"p"},"Server")," \u670d\u52a1\u7aef\uff0cTM \u548c RM \u4e3a\u5d4c\u5165\u5230\u5e94\u7528\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"Client")," \u5ba2\u6237\u7aef\u3002"),(0,r.kt)("p",null,"\u5728 Seata \u4e2d\uff0c\u4e00\u4e2a\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684",(0,r.kt)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f"),"\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/01.png",alt:"\u67b6\u6784\u56fe"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53cb\u60c5\u63d0\u793a\uff1a\u770b\u4e0b\u827f\u827f\u6dfb\u52a0\u7684\u7ea2\u8272\u5c0f\u52fe\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TM \u8bf7\u6c42 TC \u5f00\u542f\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u3002TC \u4f1a\u751f\u6210\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"XID")," \u4f5c\u4e3a\u8be5\u5168\u5c40\u4e8b\u52a1\u7684\u7f16\u53f7\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"XID"),"\uff0c\u4f1a\u5728\u5fae\u670d\u52a1\u7684\u8c03\u7528\u94fe\u8def\u4e2d\u4f20\u64ad\uff0c\u4fdd\u8bc1\u5c06\u591a\u4e2a\u5fae\u670d\u52a1\u7684\u5b50\u4e8b\u52a1\u5173\u8054\u5728\u4e00\u8d77\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RM \u8bf7\u6c42 TC \u5c06\u672c\u5730\u4e8b\u52a1\u6ce8\u518c\u4e3a\u5168\u5c40\u4e8b\u52a1\u7684\u5206\u652f\u4e8b\u52a1\uff0c\u901a\u8fc7\u5168\u5c40\u4e8b\u52a1\u7684 ",(0,r.kt)("strong",{parentName:"p"},"XID")," \u8fdb\u884c\u5173\u8054\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TM \u8bf7\u6c42 TC \u544a\u8bc9 ",(0,r.kt)("strong",{parentName:"p"},"XID")," \u5bf9\u5e94\u7684\u5168\u5c40\u4e8b\u52a1\u662f\u8fdb\u884c\u63d0\u4ea4\u8fd8\u662f\u56de\u6eda\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TC \u9a71\u52a8 RM \u4eec\u5c06 ",(0,r.kt)("strong",{parentName:"p"},"XID")," \u5bf9\u5e94\u7684\u81ea\u5df1\u7684\u672c\u5730\u4e8b\u52a1\u8fdb\u884c\u63d0\u4ea4\u8fd8\u662f\u56de\u6eda\u3002"))),(0,r.kt)("h2",{id:"13-\u6846\u67b6\u652f\u6301\u60c5\u51b5"},"1.3 \u6846\u67b6\u652f\u6301\u60c5\u51b5"),(0,r.kt)("p",null,"Seata \u76ee\u524d\u63d0\u4f9b\u4e86\u5bf9\u4e3b\u6d41\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5fae\u670d\u52a1\u6846\u67b6"),"\u7684\u652f\u6301\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dubbo"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/integration/dubbo/"},(0,r.kt)("inlineCode",{parentName:"a"},"seata-dubbo"))," \u96c6\u6210"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SOFA-RPC"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/integration/sofa-rpc/"},(0,r.kt)("inlineCode",{parentName:"a"},"seata-sofa-rpc"))," \u96c6\u6210"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Motan"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/integration/motan/"},(0,r.kt)("inlineCode",{parentName:"a"},"seata-motan"))," \u96c6\u6210"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gRPC"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/integration/gprc/"},(0,r.kt)("inlineCode",{parentName:"a"},"seata-grpc"))," \u96c6\u6210"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apache HttpClient"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/integration/http/"},(0,r.kt)("inlineCode",{parentName:"a"},"seata-http"))," \u96c6\u6210"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spring Cloud OpenFeign"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/blob/master/spring-cloud-alibaba-starters/spring-cloud-starter-alibaba-seata/src/main/java/com/alibaba/cloud/seata/"},(0,r.kt)("inlineCode",{parentName:"a"},"spring-cloud-starter-alibaba-seata"))," \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/blob/master/spring-cloud-alibaba-starters/spring-cloud-starter-alibaba-seata/src/main/java/com/alibaba/cloud/seata/feign/"},(0,r.kt)("inlineCode",{parentName:"a"},"feign"))," \u6a21\u5757"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spring RestTemplate   "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/blob/master/spring-cloud-alibaba-starters/spring-cloud-starter-alibaba-seata/src/main/java/com/alibaba/cloud/seata/feign/SeataBeanPostProcessor.java"},(0,r.kt)("inlineCode",{parentName:"a"},"spring-cloud-starter-alibaba-seata"))," \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/blob/master/spring-cloud-alibaba-starters/spring-cloud-starter-alibaba-seata/src/main/java/com/alibaba/cloud/seata/rest/"},(0,r.kt)("inlineCode",{parentName:"a"},"rest"))," \u6a21\u5757")))),(0,r.kt)("p",null,"\u540c\u65f6\u65b9\u4fbf\u6211\u4eec\u96c6\u6210\u5230 Java \u9879\u76ee\u5f53\u4e2d\uff0cSeata \u4e5f\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684 Starter \u5e93\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/io.seata/seata-spring-boot-starter"},(0,r.kt)("inlineCode",{parentName:"a"},"seata-spring-boot-starter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-seata"},(0,r.kt)("inlineCode",{parentName:"a"},"spring-cloud-starter-alibaba-seata")))),(0,r.kt)("p",null,"\u56e0\u4e3a Seata \u662f\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/javax/sql/DataSource.html"},"DataSource")," \u6570\u636e\u6e90\u8fdb\u884c",(0,r.kt)("strong",{parentName:"p"},"\u4ee3\u7406"),"\u6765\u62d3\u5c55\uff0c\u6240\u4ee5\u5929\u7136\u5bf9\u4e3b\u6d41\u7684 ORM \u6846\u67b6\u63d0\u4f9b\u4e86\u975e\u5e38\u597d\u7684\u652f\u6301\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MyBatis\u3001MyBatis-Plus"),(0,r.kt)("li",{parentName:"ul"},"JPA\u3001Hibernate")),(0,r.kt)("h2",{id:"14-\u6848\u4f8b\u60c5\u51b5"},"1.4 \u6848\u4f8b\u60c5\u51b5"),(0,r.kt)("p",null,"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/issues/1246"},"Wanted: who's using Seata")," \u7684\u767b\u8bb0\u60c5\u51b5\uff0cSeata \u5df2\u7ecf\u5728\u56fd\u5185\u5f88\u591a\u56e2\u961f\u5f00\u59cb\u843d\u5730\uff0c\u5176\u4e2d\u4e0d\u4e4f\u6709\u6ef4\u6ef4\u3001\u97f5\u8fbe\u7b49\u5927\u578b\u516c\u53f8\u3002\u53ef\u6c47\u603b\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/03.png",alt:"\u6c47\u603b\u56fe"})),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/awesome-seata"},"awesome-seata")," \u4ed3\u5e93\u4e2d\uff0c\u827f\u827f\u770b\u5230\u4e86\u6ef4\u6ef4\u7b49\u7b49\u516c\u53f8\u7684\u843d\u5730\u65f6\u7684\u6280\u672f\u5206\u4eab\uff0c\u8fd8\u662f\u975e\u5e38\u771f\u5b9e\u53ef\u9760\u7684\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/04.png",alt:"awesome-seata \u6ef4\u6ef4"})),(0,r.kt)("p",null,"\u4ece\u6848\u4f8b\u7684\u60c5\u51b5\u6765\u8bf4\uff0cSeata \u53ef\u80fd\u7ed9\u662f\u76ee\u524d\u5df2\u77e5\u6700\u53ef\u9760\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f3\u5c11\u5bf9\u5b83\u8fdb\u884c\u6280\u672f\u6295\u5165\u662f\u975e\u5e38\u4e0d\u9519\u7684\u9009\u62e9\u3002"),(0,r.kt)("h1",{id:"2-\u90e8\u7f72\u5355\u673a-tc-server"},"2. \u90e8\u7f72\u5355\u673a TC Server"),(0,r.kt)("p",null,"\u672c\u5c0f\u8282\uff0c\u6211\u4eec\u6765\u5b66\u4e60\u90e8\u7f72",(0,r.kt)("strong",{parentName:"p"},"\u5355\u673a")," Seata ",(0,r.kt)("strong",{parentName:"p"},"TC")," Server\uff0c\u5e38\u7528\u4e8e\u5b66\u4e60\u6216\u6d4b\u8bd5\u4f7f\u7528\uff0c\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u90e8\u7f72\u5355\u673a\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a TC \u9700\u8981\u8fdb\u884c\u5168\u5c40\u4e8b\u52a1\u548c\u5206\u652f\u4e8b\u52a1\u7684\u8bb0\u5f55\uff0c\u6240\u4ee5\u9700\u8981\u5bf9\u5e94\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5b58\u50a8"),"\u3002\u76ee\u524d\uff0cTC \u6709\u4e24\u79cd\u5b58\u50a8\u6a21\u5f0f( ",(0,r.kt)("inlineCode",{parentName:"p"},"store.mode")," )\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"file \u6a21\u5f0f\uff1a\u9002\u5408",(0,r.kt)("strong",{parentName:"li"},"\u5355\u673a"),"\u6a21\u5f0f\uff0c\u5168\u5c40\u4e8b\u52a1\u4f1a\u8bdd\u4fe1\u606f\u5728",(0,r.kt)("strong",{parentName:"li"},"\u5185\u5b58"),"\u4e2d\u8bfb\u5199\uff0c\u5e76\u6301\u4e45\u5316\u672c\u5730\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"root.data"),"\uff0c\u6027\u80fd\u8f83\u9ad8\u3002"),(0,r.kt)("li",{parentName:"ul"},"db \u6a21\u5f0f\uff1a\u9002\u5408",(0,r.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u6a21\u5f0f\uff0c\u5168\u5c40\u4e8b\u52a1\u4f1a\u8bdd\u4fe1\u606f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"li"},"db")," \u5171\u4eab\uff0c\u76f8\u5bf9\u6027\u80fd\u5dee\u70b9\u3002")),(0,r.kt)("p",null,"\u663e\u7136\uff0c\u6211\u4eec\u5c06\u91c7\u7528 file \u6a21\u5f0f\uff0c\u6700\u7ec8\u6211\u4eec\u90e8\u7f72\u5355\u673a TC Server \u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/11.png",alt:"\u5355\u673a TC Server"})),(0,r.kt)("p",null,"\u54d4\u54d4\u5b8c\u8fd9\u4e48\u591a\uff0c\u6211\u4eec\u5f00\u59cb\u6b63\u5f0f\u90e8\u7f72\u5355\u673a TC Server\uff0c\u8fd9\u91cc\u827f\u827f\u4f7f\u7528 macOS \u7cfb\u7edf\uff0c\u548c Linux\u3001Windows \u662f\u5dee\u4e0d\u591a\u7684\uff0c\u80d6\u53cb\u8111\u8865\u7ffb\u8bd1\u3002"),(0,r.kt)("h2",{id:"21-\u4e0b\u8f7d-seata-\u8f6f\u4ef6\u5305"},"2.1 \u4e0b\u8f7d Seata \u8f6f\u4ef6\u5305"),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases"},"Seata \u4e0b\u8f7d\u9875\u9762"),"\uff0c\u9009\u62e9\u60f3\u8981\u7684 Seata \u7248\u672c\u3002\u8fd9\u91cc\uff0c\u6211\u4eec\u9009\u62e9 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases/tag/v1.1.0"},"v1.1.0")," \u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"# \u521b\u5efa\u76ee\u5f55\n$ mkdir -p /Users/yunai/Seata\n$ cd /Users/yunai/Seata\n\n# \u4e0b\u8f7d\n$ wget https://github.com/seata/seata/releases/download/v1.1.0/seata-server-1.1.0.tar.gz\n\n# \u89e3\u538b\n$ tar -zxvf seata-server-1.1.0.tar.gz\n\n# \u67e5\u770b\u76ee\u5f55\n$ cd seata\n$ ls -ls\n24 -rw-r--r--    1 yunai  staff  11365 May 13  2019 LICENSE\n 0 drwxr-xr-x    4 yunai  staff    128 Apr  2 07:46 bin # \u6267\u884c\u811a\u672c\n 0 drwxr-xr-x    9 yunai  staff    288 Feb 19 23:49 conf # \u914d\u7f6e\u6587\u4ef6\n 0 drwxr-xr-x  138 yunai  staff   4416 Apr  2 07:46 lib #  seata-*.jar + \u4f9d\u8d56\u5e93 \n")),(0,r.kt)("h2",{id:"22-\u542f\u52a8-tc-server"},"2.2 \u542f\u52a8 TC Server"),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"nohup sh bin/seata-server.sh &")," \u547d\u4ee4\uff0c\u542f\u52a8 TC Server \u5728\u540e\u53f0\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"nohup.out")," \u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u770b\u5230\u5982\u4e0b\u65e5\u5fd7\uff0c\u8bf4\u660e\u542f\u52a8\u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"# \u4f7f\u7528 File \u5b58\u50a8\u5668\n2020-04-02 08:36:01.302 INFO [main]io.seata.common.loader.EnhancedServiceLoader.loadFile:247 -load TransactionStoreManager[FILE] extension by class[io.seata.server.store.file.FileTransactionStoreManager]\n2020-04-02 08:36:01.302 INFO [main]io.seata.common.loader.EnhancedServiceLoader.loadFile:247 -load SessionManager[FILE] extension by class[io.seata.server.session.file.FileBasedSessionManager]\n# \u542f\u52a8\u6210\u529f\n2020-04-02 08:36:01.597 INFO [main]io.seata.core.rpc.netty.RpcServerBootstrap.start:155 -Server started ...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e\u4e0b\uff0cSeata TC Server \u542f\u52a8\u5728 ",(0,r.kt)("strong",{parentName:"li"},"8091")," \u7aef\u70b9\u3002")),(0,r.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528 file \u6a21\u5f0f\uff0c\u6240\u4ee5\u53ef\u4ee5\u770b\u5230\u7528\u4e8e\u6301\u4e45\u5316\u7684\u672c\u5730\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"root.data"),"\u3002\u64cd\u4f5c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"$ ls -ls sessionStore/\ntotal 0\n0 -rw-r--r--  1 yunai  staff  0 Apr  2 08:36 root.data\n")),(0,r.kt)("p",null,"\u540e\u7eed\uff0c\u80d6\u53cb\u53ef\u4ee5\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"#"},"\u300c4. \u63a5\u5165 Java \u5e94\u7528\u300d"),"\u5c0f\u8282\uff0c\u5f00\u59cb\u4f7f\u7528 Seata \u5b9e\u73b0\u5206\u5e03\u5f0f\u4e8b\u52a1\u3002"),(0,r.kt)("h1",{id:"3-\u90e8\u7f72\u96c6\u7fa4-tc-server"},"3. \u90e8\u7f72\u96c6\u7fa4 TC Server"),(0,r.kt)("p",null,"\u672c\u5c0f\u8282\uff0c\u6211\u4eec\u6765\u5b66\u4e60\u90e8\u7f72",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4")," Seata ",(0,r.kt)("strong",{parentName:"p"},"TC")," Server\uff0c\u5b9e\u73b0\u9ad8\u53ef\u7528\uff0c\u751f\u4ea7\u73af\u5883\u4e0b\u5fc5\u5907\u3002\u5728\u96c6\u7fa4\u65f6\uff0c\u591a\u4e2a Seata TC Server \u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"db")," \u6570\u636e\u5e93\uff0c\u5b9e\u73b0\u5168\u5c40\u4e8b\u52a1\u4f1a\u8bdd\u4fe1\u606f\u7684\u5171\u4eab\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u6bcf\u4e2a Seata TC Server \u53ef\u4ee5\u6ce8\u518c\u81ea\u5df1\u5230\u6ce8\u518c\u4e2d\u5fc3\u4e0a\uff0c\u65b9\u4fbf\u5e94\u7528\u4ece\u6ce8\u518c\u4e2d\u5fc3\u83b7\u5f97\u5230\u4ed6\u4eec\u3002\u6700\u7ec8\u6211\u4eec\u90e8\u7f72 \u96c6\u7fa4 TC Server \u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/21.png",alt:"\u96c6\u7fa4 TC Server"})),(0,r.kt)("p",null,"Seata TC Server \u5bf9\u4e3b\u6d41\u7684\u6ce8\u518c\u4e2d\u5fc3\u90fd\u63d0\u4f9b\u4e86\u96c6\u6210\uff0c\u5177\u4f53\u53ef\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/discovery"},"discovery")," \u76ee\u5f55\u3002\u8003\u8651\u5230\u56fd\u5185\u4f7f\u7528 Nacos \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u8d8a\u6765\u8d8a\u6d41\u884c\uff0c\u8fd9\u91cc\u6211\u4eec\u5c31\u91c7\u7528\u5b83\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53cb\u60c5\u63d0\u793a\uff1a\u5982\u679c\u5bf9 Nacos \u4e0d\u4e86\u89e3\u7684\u80d6\u53cb\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"http://www.iocoder.cn/Nacos/install/?self"},"\u300aNacos \u5b89\u88c5\u90e8\u7f72\u300b"),"\u6587\u7ae0\u3002")),(0,r.kt)("p",null,"\u54d4\u54d4\u5b8c\u8fd9\u4e48\u591a\uff0c\u6211\u4eec\u5f00\u59cb\u6b63\u5f0f\u90e8\u7f72\u5355\u673a TC Server\uff0c\u8fd9\u91cc\u827f\u827f\u4f7f\u7528 macOS \u7cfb\u7edf\uff0c\u548c Linux\u3001Windows \u662f\u5dee\u4e0d\u591a\u7684\uff0c\u80d6\u53cb\u8111\u8865\u7ffb\u8bd1\u3002"),(0,r.kt)("h2",{id:"31-\u4e0b\u8f7d-seata-\u8f6f\u4ef6\u5305"},"3.1 \u4e0b\u8f7d Seata \u8f6f\u4ef6\u5305"),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases"},"Seata \u4e0b\u8f7d\u9875\u9762"),"\uff0c\u9009\u62e9\u60f3\u8981\u7684 Seata \u7248\u672c\u3002\u8fd9\u91cc\uff0c\u6211\u4eec\u9009\u62e9 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases/tag/v1.1.0"},"v1.1.0")," \u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"# \u521b\u5efa\u76ee\u5f55\n$ mkdir -p /Users/yunai/Seata\n$ cd /Users/yunai/Seata\n\n# \u4e0b\u8f7d\n$ wget https://github.com/seata/seata/releases/download/v1.1.0/seata-server-1.1.0.tar.gz\n\n# \u89e3\u538b\n$ tar -zxvf seata-server-1.1.0.tar.gz\n\n# \u67e5\u770b\u76ee\u5f55\n$ cd seata\n$ ls -ls\n24 -rw-r--r--    1 yunai  staff  11365 May 13  2019 LICENSE\n 0 drwxr-xr-x    4 yunai  staff    128 Apr  2 07:46 bin # \u6267\u884c\u811a\u672c\n 0 drwxr-xr-x    9 yunai  staff    288 Feb 19 23:49 conf # \u914d\u7f6e\u6587\u4ef6\n 0 drwxr-xr-x  138 yunai  staff   4416 Apr  2 07:46 lib #  seata-*.jar + \u4f9d\u8d56\u5e93 \n")),(0,r.kt)("h2",{id:"32-\u521d\u59cb\u5316\u6570\u636e\u5e93"},"3.2 \u521d\u59cb\u5316\u6570\u636e\u5e93"),(0,r.kt)("p",null,"\u2460 \u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/server/db/mysql.sql"},(0,r.kt)("inlineCode",{parentName:"a"},"mysql.sql"))," \u811a\u672c\uff0c\u521d\u59cb\u5316 Seata TC Server \u7684 db \u6570\u636e\u5e93\u3002\u811a\u672c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"-- -------------------------------- The script used when storeMode is 'db' --------------------------------\n-- the table to store GlobalSession data\nCREATE TABLE IF NOT EXISTS `global_table`\n(\n    `xid`                       VARCHAR(128) NOT NULL,\n    `transaction_id`            BIGINT,\n    `status`                    TINYINT      NOT NULL,\n    `application_id`            VARCHAR(32),\n    `transaction_service_group` VARCHAR(32),\n    `transaction_name`          VARCHAR(128),\n    `timeout`                   INT,\n    `begin_time`                BIGINT,\n    `application_data`          VARCHAR(2000),\n    `gmt_create`                DATETIME,\n    `gmt_modified`              DATETIME,\n    PRIMARY KEY (`xid`),\n    KEY `idx_gmt_modified_status` (`gmt_modified`, `status`),\n    KEY `idx_transaction_id` (`transaction_id`)\n) ENGINE = InnoDB\n  DEFAULT CHARSET = utf8;\n\n-- the table to store BranchSession data\nCREATE TABLE IF NOT EXISTS `branch_table`\n(\n    `branch_id`         BIGINT       NOT NULL,\n    `xid`               VARCHAR(128) NOT NULL,\n    `transaction_id`    BIGINT,\n    `resource_group_id` VARCHAR(32),\n    `resource_id`       VARCHAR(256),\n    `branch_type`       VARCHAR(8),\n    `status`            TINYINT,\n    `client_id`         VARCHAR(64),\n    `application_data`  VARCHAR(2000),\n    `gmt_create`        DATETIME(6),\n    `gmt_modified`      DATETIME(6),\n    PRIMARY KEY (`branch_id`),\n    KEY `idx_xid` (`xid`)\n) ENGINE = InnoDB\n  DEFAULT CHARSET = utf8;\n\n-- the table to store lock data\nCREATE TABLE IF NOT EXISTS `lock_table`\n(\n    `row_key`        VARCHAR(128) NOT NULL,\n    `xid`            VARCHAR(96),\n    `transaction_id` BIGINT,\n    `branch_id`      BIGINT       NOT NULL,\n    `resource_id`    VARCHAR(256),\n    `table_name`     VARCHAR(32),\n    `pk`             VARCHAR(36),\n    `gmt_create`     DATETIME,\n    `gmt_modified`   DATETIME,\n    PRIMARY KEY (`row_key`),\n    KEY `idx_branch_id` (`branch_id`)\n) ENGINE = InnoDB\n  DEFAULT CHARSET = utf8;\n")),(0,r.kt)("p",null,"\u5728 MySQL \u4e2d\uff0c\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"seata")," \u6570\u636e\u5e93\uff0c\u5e76\u5728\u8be5\u5e93\u4e0b\u6267\u884c\u8be5\u811a\u672c\u3002\u6700\u7ec8\u7ed3\u679c\u5982\u4e0b\u56fe\uff1a",(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/22.png",alt:"`seata` \u6570\u636e\u5e93 - MySQL 5.X"})),(0,r.kt)("p",null,"\u2461 \u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/file")," \u914d\u7f6e\u6587\u4ef6\uff0c\u4fee\u6539\u4f7f\u7528 db \u6570\u636e\u5e93\uff0c\u5b9e\u73b0 Seata TC Server \u7684\u5168\u5c40\u4e8b\u52a1\u4f1a\u8bdd\u4fe1\u606f\u7684\u5171\u4eab\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/23.png",alt:"`conf/file` \u914d\u7f6e\u6587\u4ef6"})),(0,r.kt)("p",null,"\u2462 MySQL8 \u7684\u652f\u6301"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u80d6\u53cb\u4f7f\u7528\u7684 MySQL \u662f 8.X \u7248\u672c\uff0c\u5219\u9700\u8981\u770b\u8be5\u6b65\u9aa4\u3002\u5426\u5219\uff0c\u53ef\u4ee5\u76f4\u63a5\u8df3\u8fc7\u3002")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u4e0b\u8f7d MySQL 8.X JDBC \u9a71\u52a8\uff0c\u547d\u4ee4\u884c\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"$ cd lib\n$ wget https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.19/mysql-connector-java-8.0.19.jar\n")),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/file")," \u914d\u7f6e\u6587\u4ef6\uff0c\u4f7f\u7528\u8be5 MySQL 8.X JDBC \u9a71\u52a8\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/24.png",alt:"`seata` \u6570\u636e\u5e93 - MySQL 8.X"})),(0,r.kt)("h2",{id:"33-\u8bbe\u7f6e\u4f7f\u7528-nacos-\u6ce8\u518c\u4e2d\u5fc3"},"3.3 \u8bbe\u7f6e\u4f7f\u7528 Nacos \u6ce8\u518c\u4e2d\u5fc3"),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/registry.conf")," \u914d\u7f6e\u6587\u4ef6\uff0c\u8bbe\u7f6e\u4f7f\u7528 Nacos \u6ce8\u518c\u4e2d\u5fc3\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/25.png",alt:"`conf/registry.conf` \u914d\u7f6e\u6587\u4ef6"})),(0,r.kt)("h2",{id:"34-\u542f\u52a8-tc-server"},"3.4 \u542f\u52a8 TC Server"),(0,r.kt)("p",null,"\u2460 \u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"nohup sh bin/seata-server.sh -p 18091 -n 1 &")," \u547d\u4ee4\uff0c\u542f\u52a8",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a")," TC Server \u5728\u540e\u53f0\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p"),"\uff1aSeata TC Server \u76d1\u542c\u7684\u7aef\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-n"),"\uff1aServer node\u3002\u5728\u591a\u4e2a TC Server \u65f6\uff0c\u9700\u533a\u5206\u5404\u81ea\u8282\u70b9\uff0c\u7528\u4e8e\u751f\u6210\u4e0d\u540c\u533a\u95f4\u7684 transactionId \u4e8b\u52a1\u7f16\u53f7\uff0c\u4ee5\u514d\u51b2\u7a81\u3002")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"nohup.out")," \u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u770b\u5230\u5982\u4e0b\u65e5\u5fd7\uff0c\u8bf4\u660e\u542f\u52a8\u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"# \u4f7f\u7528 DB \u5b58\u50a8\u5668\n2020-04-05 16:54:12.793 INFO [main]io.seata.common.loader.EnhancedServiceLoader.loadFile:247 -load DataSourceGenerator[dbcp] extension by class[io.seata.server.store.db.DbcpDataSourceGenerator]\nLoading class `com.mysql.jdbc.Driver'. This is deprecated. The new driver class is `com.mysql.cj.jdbc.Driver'. The driver is automatically registered via the SPI and manual loading of the driver class is generally unnecessary.\n2020-04-05 16:54:13.442 INFO [main]io.seata.common.loader.EnhancedServiceLoader.loadFile:247 -load LogStore[DB] extension by class[io.seata.core.store.db.LogStoreDataBaseDAO]\n2020-04-05 16:54:13.442 INFO [main]io.seata.common.loader.EnhancedServiceLoader.loadFile:247 -load TransactionStoreManager[DB] extension by class[io.seata.server.store.db.DatabaseTransactionStoreManager]\n2020-04-05 16:54:13.442 INFO [main]io.seata.common.loader.EnhancedServiceLoader.loadFile:247 -load SessionManager[DB] extension by class[io.seata.server.session.db.DataBaseSessionManager]\n# \u542f\u52a8\u6210\u529f\n2020-04-05 16:54:13.779 INFO [main]io.seata.core.rpc.netty.RpcServerBootstrap.start:155 -Server started ...\n# \u4f7f\u7528 Nacos \u6ce8\u518c\u4e2d\u5fc3\n2020-04-05 16:54:13.788 INFO [main]io.seata.common.loader.EnhancedServiceLoader.loadFile:247 -load RegistryProvider[Nacos] extension by class[io.seata.discovery.registry.nacos.NacosRegistryProvider]\n")),(0,r.kt)("p",null,"\u2461 \u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"nohup sh bin/seata-server.sh -p 28091 -n 2 &")," \u547d\u4ee4\uff0c\u542f\u52a8",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u4e2a")," TC Server \u5728\u540e\u53f0\u3002"),(0,r.kt)("p",null,"\u2462 \u6253\u5f00 Nacos \u6ce8\u518c\u4e2d\u5fc3\u7684\u63a7\u5236\u53f0\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6709",(0,r.kt)("strong",{parentName:"p"},"\u4e24\u4e2a")," Seata TC Server \u793a\u4f8b\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Seata/2017-01-01/26.png",alt:"Nacos \u63a7\u5236\u53f0"})),(0,r.kt)("h1",{id:"4-\u63a5\u5165-java-\u5e94\u7528"},"4. \u63a5\u5165 Java \u5e94\u7528"),(0,r.kt)("h2",{id:"41-at-\u6a21\u5f0f"},"4.1 AT \u6a21\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2460 Spring Boot")),(0,r.kt)("p",null,"1\u3001",(0,r.kt)("a",{parentName:"p",href:"http://www.iocoder.cn/Spring-Boot/Seata/?self"},"\u300a\u828b\u9053 Spring Boot \u5206\u5e03\u5f0f\u4e8b\u52a1 Seata \u5165\u95e8\u300b"),"\u7684",(0,r.kt)("a",{parentName:"p",href:"#"},"\u300c2. AT \u6a21\u5f0f + \u591a\u6570\u636e\u6e90\u300d"),"\u5c0f\u8282\uff0c\u5b9e\u73b0\u5355\u4f53 Spring Boot \u9879\u76ee\u5728\u591a\u6570\u636e\u6e90\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Spring-Boot/2020-10-01/01.png",alt:"\u6574\u4f53\u56fe"})),(0,r.kt)("p",null,"2\u3001",(0,r.kt)("a",{parentName:"p",href:"http://www.iocoder.cn/Spring-Boot/Seata/?self"},"\u300a\u828b\u9053 Spring Boot \u5206\u5e03\u5f0f\u4e8b\u52a1 Seata \u5165\u95e8\u300b"),"\u7684",(0,r.kt)("a",{parentName:"p",href:"#"},"\u300cAT \u6a21\u5f0f + HttpClient \u8fdc\u7a0b\u8c03\u7528\u300d"),"\u5c0f\u8282\uff0c\u5b9e\u73b0\u591a\u4e2a Spring Boot \u9879\u76ee\u7684\u5206\u5e03\u4e8b\u52a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Spring-Boot/2020-10-01/21.png",alt:"\u6574\u4f53\u56fe"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2461 Dubbo")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.iocoder.cn/Dubbo/Seata/?sef"},"\u300aDubbo \u5206\u5e03\u5f0f\u4e8b\u52a1 Seata \u5165\u95e8\u300b"),"\u7684",(0,r.kt)("a",{parentName:"p",href:"#"},"\u300c2. AT \u6a21\u5f0f\u300d"),"\u5c0f\u8282\uff0c\u5b9e\u73b0\u591a\u4e2a Dubbo \u670d\u52a1\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Dubbo/2020-04-15/01.png",alt:"\u6574\u4f53\u56fe"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2462 Spring Cloud")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.iocoder.cn/Spring-Cloud-Alibaba/Seata/?self"},"\u300a\u828b\u9053 Spring Cloud Alibaba \u5206\u5e03\u5f0f\u4e8b\u52a1 Seata \u5165\u95e8\u300b"),"\u7684",(0,r.kt)("a",{parentName:"p",href:"#"},"\u300c3. AT \u6a21\u5f0f + Feign\u300d"),"\u5c0f\u8282\uff0c\u5b9e\u73b0\u591a\u4e2a Spring Cloud \u670d\u52a1\u4e0b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://www.iocoder.cn/images/Spring-Cloud/2020-07-15/01.png",alt:"\u6574\u4f53\u56fe"})),(0,r.kt)("h2",{id:"42-tcc-\u6a21\u5f0f"},"4.2 TCC \u6a21\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://seata.io/zh-cn/docs/dev/mode/tcc-mode.html"},"\u300aSeata \u6587\u6863 \u2014\u2014 TCC \u6a21\u5f0f\u300b")),(0,r.kt)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples/blob/master/tcc"},"https://github.com/seata/seata-samples/blob/master/tcc"))),(0,r.kt)("h2",{id:"43-saga-\u6a21\u5f0f"},"4.3 Saga \u6a21\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://seata.io/zh-cn/docs/dev/mode/saga-mode.html"},"\u300aSeata \u6587\u6863 \u2014\u2014 Saga \u6a21\u5f0f\u300b")),(0,r.kt)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples/tree/master/saga"},"https://github.com/seata/seata-samples/tree/master/saga"))),(0,r.kt)("h2",{id:"44-xa-\u6a21\u5f0f"},"4.4 XA \u6a21\u5f0f"),(0,r.kt)("p",null,"Seata \u6b63\u5728\u5f00\u53d1\u4e2d..."))}u.isMDXComponent=!0}}]);