"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[50735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},C=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),C=r,d=u["".concat(c,".").concat(C)]||u[C]||m[C]||o;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=C;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}C.displayName="MDXCreateElement"},78992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Seata TCC \u6a21\u5f0f",keywords:["Seata","TCC"],description:"Seata TCC \u6a21\u5f0f\u7528\u6237\u6587\u6863"},l="Seata TCC \u6a21\u5f0f",i={unversionedId:"user/mode/tcc",id:"version-v1.6/user/mode/tcc",title:"Seata TCC \u6a21\u5f0f",description:"Seata TCC \u6a21\u5f0f\u7528\u6237\u6587\u6863",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/mode/tcc.md",sourceDirName:"user/mode",slug:"/user/mode/tcc",permalink:"/zh-cn/docs/v1.6/user/mode/tcc",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/mode/tcc.md",tags:[],version:"v1.6",frontMatter:{title:"Seata TCC \u6a21\u5f0f",keywords:["Seata","TCC"],description:"Seata TCC \u6a21\u5f0f\u7528\u6237\u6587\u6863"},sidebar:"docs",previous:{title:"Seata AT \u6a21\u5f0f",permalink:"/zh-cn/docs/v1.6/user/mode/at"},next:{title:"Seata Saga \u6a21\u5f0f",permalink:"/zh-cn/docs/v1.6/user/mode/saga"}},c={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:3},{value:"\u6574\u4f53\u673a\u5236",id:"\u6574\u4f53\u673a\u5236",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seata-tcc-\u6a21\u5f0f"},"Seata TCC \u6a21\u5f0f"),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"TCC \u6a21\u5f0f\u662f Seata \u652f\u6301\u7684\u4e00\u79cd\u7531\u4e1a\u52a1\u65b9\u7ec6\u7c92\u5ea6\u63a7\u5236\u7684\u4fb5\u5165\u5f0f\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u662f\u7ee7 AT \u6a21\u5f0f\u540e\u7b2c\u4e8c\u79cd\u652f\u6301\u7684\u4e8b\u52a1\u6a21\u5f0f\uff0c\u6700\u65e9\u7531\u8682\u8681\u91d1\u670d\u8d21\u732e\u3002\u5176\u5206\u5e03\u5f0f\u4e8b\u52a1\u6a21\u578b\u76f4\u63a5\u4f5c\u7528\u4e8e\u670d\u52a1\u5c42\uff0c\u4e0d\u4f9d\u8d56\u5e95\u5c42\u6570\u636e\u5e93\uff0c\u53ef\u4ee5\u7075\u6d3b\u9009\u62e9\u4e1a\u52a1\u8d44\u6e90\u7684\u9501\u5b9a\u7c92\u5ea6\uff0c\u51cf\u5c11\u8d44\u6e90\u9501\u6301\u6709\u65f6\u95f4\uff0c\u53ef\u6269\u5c55\u6027\u597d\uff0c\u53ef\u4ee5\u8bf4\u662f\u4e3a\u72ec\u7acb\u90e8\u7f72\u7684 SOA \u670d\u52a1\u800c\u8bbe\u8ba1\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Overview of a global transaction",src:n(55352).Z,width:"853",height:"482"})),(0,r.kt)("p",null,"\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u91cd\u70b9\u4ecb\u7ecd Seata TCC \u6a21\u5f0f\u7684\u4f7f\u7528\uff0c\u5982\u679c\u60a8\u5bf9\u4e8e TCC \u6a21\u5f0f\u539f\u7406\u611f\u5174\u8da3\uff0c\u60f3\u8981\u4e86\u89e3 Seata TCC \u5bf9\u4e8e\u5e42\u7b49\u3001\u7a7a\u56de\u6eda\u3001\u60ac\u6302\u95ee\u9898\u7684\u89e3\u51b3\uff0c\u8fd8\u8bf7\u9605\u8bfb\u5bf9\u5e94\u4e8e\u672c\u7bc7\u6587\u7ae0\u7684",(0,r.kt)("a",{parentName:"p",href:"../../dev/mode/tcc-mode"},"\u5f00\u53d1\u8005\u6307\u5357"),"\u3002"),(0,r.kt)("h3",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),(0,r.kt)("p",null,"TCC \u5b8c\u5168\u4e0d\u4f9d\u8d56\u5e95\u5c42\u6570\u636e\u5e93\uff0c\u80fd\u591f\u5b9e\u73b0\u8de8\u6570\u636e\u5e93\u3001\u8de8\u5e94\u7528\u8d44\u6e90\u7ba1\u7406\uff0c\u53ef\u4ee5\u63d0\u4f9b\u7ed9\u4e1a\u52a1\u65b9\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\u3002"),(0,r.kt)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,r.kt)("p",null,"TCC \u662f\u4e00\u79cd\u4fb5\u5165\u5f0f\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u9700\u8981\u4e1a\u52a1\u7cfb\u7edf\u81ea\u884c\u5b9e\u73b0 Try\uff0cConfirm\uff0cCancel \u4e09\u4e2a\u64cd\u4f5c\uff0c\u5bf9\u4e1a\u52a1\u7cfb\u7edf\u6709\u7740\u975e\u5e38\u5927\u7684\u5165\u4fb5\u6027\uff0c\u8bbe\u8ba1\u76f8\u5bf9\u590d\u6742\u3002"),(0,r.kt)("h3",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,r.kt)("p",null,"TCC \u6a21\u5f0f\u662f\u9ad8\u6027\u80fd\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u9002\u7528\u4e8e\u6838\u5fc3\u7cfb\u7edf\u7b49\u5bf9\u6027\u80fd\u6709\u5f88\u9ad8\u8981\u6c42\u7684\u573a\u666f\u3002"),(0,r.kt)("h2",{id:"\u6574\u4f53\u673a\u5236"},"\u6574\u4f53\u673a\u5236"),(0,r.kt)("p",null,"\u5728\u4e24\u9636\u6bb5\u63d0\u4ea4\u534f\u8bae\u4e2d\uff0c\u8d44\u6e90\u7ba1\u7406\u5668\uff08RM, Resource Manager\uff09\u9700\u8981\u63d0\u4f9b\u201c\u51c6\u5907\u201d\u3001\u201c\u63d0\u4ea4\u201d\u548c\u201c\u56de\u6eda\u201d 3 \u4e2a\u64cd\u4f5c\uff1b\u800c\u4e8b\u52a1\u7ba1\u7406\u5668\uff08TM, Transaction Manager\uff09\u5206 2 \u9636\u6bb5\u534f\u8c03\u6240\u6709\u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u5728\u7b2c\u4e00\u9636\u6bb5\u8be2\u95ee\u6240\u6709\u8d44\u6e90\u7ba1\u7406\u5668\u201c\u51c6\u5907\u201d\u662f\u5426\u6210\u529f\uff0c\u5982\u679c\u6240\u6709\u8d44\u6e90\u5747\u201c\u51c6\u5907\u201d\u6210\u529f\u5219\u5728\u7b2c\u4e8c\u9636\u6bb5\u6267\u884c\u6240\u6709\u8d44\u6e90\u7684\u201c\u63d0\u4ea4\u201d\u64cd\u4f5c\uff0c\u5426\u5219\u5728\u7b2c\u4e8c\u9636\u6bb5\u6267\u884c\u6240\u6709\u8d44\u6e90\u7684\u201c\u56de\u6eda\u201d\u64cd\u4f5c\uff0c\u4fdd\u8bc1\u6240\u6709\u8d44\u6e90\u7684\u6700\u7ec8\u72b6\u6001\u662f\u4e00\u81f4\u7684\uff0c\u8981\u4e48\u5168\u90e8\u63d0\u4ea4\u8981\u4e48\u5168\u90e8\u56de\u6eda\u3002"),(0,r.kt)("p",null,"\u8d44\u6e90\u7ba1\u7406\u5668\u6709\u5f88\u591a\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5176\u4e2d TCC\uff08Try-Confirm-Cancel\uff09\u662f\u8d44\u6e90\u7ba1\u7406\u5668\u7684\u4e00\u79cd\u670d\u52a1\u5316\u7684\u5b9e\u73b0\uff1bTCC \u662f\u4e00\u79cd\u6bd4\u8f83\u6210\u719f\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u7528\u4e8e\u89e3\u51b3\u8de8\u6570\u636e\u5e93\u3001\u8de8\u670d\u52a1\u4e1a\u52a1\u64cd\u4f5c\u7684\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898\uff1bTCC \u5176 Try\u3001Confirm\u3001Cancel 3 \u4e2a\u65b9\u6cd5\u5747\u7531\u4e1a\u52a1\u7f16\u7801\u5b9e\u73b0\uff0c\u6545 TCC \u53ef\u4ee5\u88ab\u79f0\u4e3a\u662f\u670d\u52a1\u5316\u7684\u8d44\u6e90\u7ba1\u7406\u5668\u3002"),(0,r.kt)("p",null,"TCC \u7684 Try \u64cd\u4f5c\u4f5c\u4e3a\u4e00\u9636\u6bb5\uff0c\u8d1f\u8d23\u8d44\u6e90\u7684\u68c0\u67e5\u548c\u9884\u7559\uff1bConfirm \u64cd\u4f5c\u4f5c\u4e3a\u4e8c\u9636\u6bb5\u63d0\u4ea4\u64cd\u4f5c\uff0c\u6267\u884c\u771f\u6b63\u7684\u4e1a\u52a1\uff1bCancel \u662f\u4e8c\u9636\u6bb5\u56de\u6eda\u64cd\u4f5c\uff0c\u6267\u884c\u9884\u7559\u8d44\u6e90\u7684\u53d6\u6d88\uff0c\u4f7f\u8d44\u6e90\u56de\u5230\u521d\u59cb\u72b6\u6001\u3002"),(0,r.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,r.kt)("p",null,"\u533a\u522b\u4e8e\u5728 AT \u6a21\u5f0f\u76f4\u63a5\u4f7f\u7528\u6570\u636e\u6e90\u4ee3\u7406\u6765\u5c4f\u853d\u5206\u5e03\u5f0f\u4e8b\u52a1\u7ec6\u8282\uff0c\u4e1a\u52a1\u65b9\u9700\u8981\u81ea\u884c\u5b9a\u4e49 TCC \u8d44\u6e90\u7684\u201c\u51c6\u5907\u201d\u3001\u201c\u63d0\u4ea4\u201d\u548c\u201c\u56de\u6eda\u201d \u3002\u6bd4\u5982\u5728\u4e0b\u65b9\u7684\u4f8b\u5b50\u4e2d\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public interface TccActionOne {\n    @TwoPhaseBusinessAction(name = "DubboTccActionOne", commitMethod = "commit", rollbackMethod = "rollback")\n    public boolean prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "a") String a);\n    public boolean commit(BusinessActionContext actionContext);\n    public boolean rollback(BusinessActionContext actionContext);\n}\n')),(0,r.kt)("p",null,"Seata \u4f1a\u628a\u4e00\u4e2a TCC \u63a5\u53e3\u5f53\u6210\u4e00\u4e2a Resource\uff0c\u4e5f\u53eb TCC Resource\u3002\u5728\u4e1a\u52a1\u63a5\u53e3\u4e2d\u6838\u5fc3\u7684\u6ce8\u89e3\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"@TwoPhaseBusinessAction"),"\uff0c\u8868\u793a\u5f53\u524d\u65b9\u6cd5\u4f7f\u7528 TCC \u6a21\u5f0f\u7ba1\u7406\u4e8b\u52a1\u63d0\u4ea4\uff0c\u5e76\u6807\u660e\u4e86 Try\uff0cConfirm\uff0cCancel \u4e09\u4e2a\u9636\u6bb5\u3002name\u5c5e\u6027\uff0c\u7ed9\u5f53\u524d\u4e8b\u52a1\u6ce8\u518c\u4e86\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684\u7684 TCC bean name\u3002\u540c\u65f6 TCC \u6a21\u5f0f\u7684\u4e09\u4e2a\u6267\u884c\u9636\u6bb5\u5206\u522b\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try \u9636\u6bb5\uff0c\u9884\u5b9a\u64cd\u4f5c\u8d44\u6e90\uff08Prepare\uff09 \u8fd9\u4e00\u9636\u6bb5\u6240\u4ee5\u6267\u884c\u7684\u65b9\u6cd5\u4fbf\u662f\u88ab ",(0,r.kt)("inlineCode",{parentName:"li"},"@TwoPhaseBusinessAction")," \u6240\u4fee\u9970\u7684\u65b9\u6cd5\u3002\u5982\u793a\u4f8b\u4ee3\u7801\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"prepare")," \u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"Confirm \u9636\u6bb5\uff0c\u6267\u884c\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91\uff08Commit\uff09 \u8fd9\u4e00\u9636\u6bb5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"commitMethod")," \u5c5e\u6027\u6240\u6307\u5411\u7684\u65b9\u6cd5\uff0c\u6765\u6267\u884cConfirm \u7684\u5de5\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},"Cancel \u9636\u6bb5\uff0c\u4e8b\u52a1\u56de\u6eda\uff08Rollback\uff09 \u8fd9\u4e00\u9636\u6bb5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"rollbackMethod")," \u5c5e\u6027\u6240\u6307\u5411\u7684\u65b9\u6cd5\uff0c\u6765\u6267\u884c Cancel \u7684\u5de5\u4f5c\u3002")),(0,r.kt)("p",null,"\u5176\u6b21\uff0c\u53ef\u4ee5\u5728 TCC \u6a21\u5f0f\u4e0b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessActionContext")," \u5728\u4e8b\u52a1\u4e0a\u4e0b\u6587\u4e2d\u4f20\u9012\u67e5\u8be2\u53c2\u6570\u3002\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"xid")," \u5168\u5c40\u4e8b\u52a1id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"branchId")," \u5206\u652f\u4e8b\u52a1id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"actionName")," \u5206\u652f\u8d44\u6e90id\uff0c\uff08resource id\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"actionContext")," \u4e1a\u52a1\u4f20\u9012\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"@BusinessActionContextParameter")," \u6765\u6807\u6ce8\u9700\u8981\u4f20\u9012\u7684\u53c2\u6570\u3002")),(0,r.kt)("p",null,"\u5728\u5b9a\u4e49\u597d TCC \u63a5\u53e3\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf AT \u6a21\u5f0f\u4e00\u6837\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," \u5f00\u542f\u4e00\u4e2a\u5206\u5e03\u5f0f\u4e8b\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GlobalTransactional\npublic String doTransactionCommit(){\n    tccActionOne.prepare(null,"one");\n    tccActionTwo.prepare(null,"two");\n}\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c TCC \u53c2\u4e0e\u8005\u662f\u672c\u5730 bean\uff08\u975e\u8fdc\u7a0bRPC\u670d\u52a1\uff09\uff0c\u672c\u5730 TCC bean \u8fd8\u9700\u8981\u5728\u63a5\u53e3\u5b9a\u4e49\u4e2d\u6dfb\u52a0 @LocalTCC \u6ce8\u89e3\uff0c\u6bd4\u5982,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@LocalTCC\npublic interface TccActionTwo {\n    @TwoPhaseBusinessAction(name = "TccActionTwo", commitMethod = "commit", rollbackMethod = "rollback")\n    public boolean prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "a") String a);\n    public boolean commit(BusinessActionContext actionContext);\n    public boolean rollback(BusinessActionContext actionContext);\n}\n')),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u8bf7\u8ddf\u968f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata-samples/tree/master/tcc"},"seata-samples/tcc")," \u4e2d\u82e5\u5e72\u79cd\u793a\u4f8b\u8fdb\u884c\u5b9e\u9a8c\uff0c\u53ef\u4ee5\u542f\u52a8 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata-samples/tree/master/tcc/local-tcc-sample"},"local-tcc-example")," \u67e5\u770b\u672c\u5730 bean \u7684\u793a\u4f8b\uff0c\u6216\u8005 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata-samples/tree/master/tcc/local-tcc-sample"},"dubbo-tcc-example")," \u67e5\u770b\u8fdc\u7a0b TCC \u793a\u4f8b\u3002"))}m.isMDXComponent=!0},55352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/seata_tcc-1-1f7a834639aa755d73fa2af435c4f042.png"}}]);