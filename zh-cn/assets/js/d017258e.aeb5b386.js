"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[84467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u9886\u57df\u6a21\u578b\u6982\u8ff0",keywords:["Seata\u3001\u9886\u57df\u6a21\u578b"],description:"Seata \u9886\u57df\u6a21\u578b\u3002"},l="\u9886\u57df\u6a21\u578b\u6982\u8ff0",i={unversionedId:"dev/domain/overviewDomainModel",id:"dev/domain/overviewDomainModel",title:"\u9886\u57df\u6a21\u578b\u6982\u8ff0",description:"Seata \u9886\u57df\u6a21\u578b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/domain/overviewDomainModel.md",sourceDirName:"dev/domain",slug:"/dev/domain/overviewDomainModel",permalink:"/seata.github.io/zh-cn/docs/next/dev/domain/overviewDomainModel",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/domain/overviewDomainModel.md",tags:[],version:"current",frontMatter:{title:"\u9886\u57df\u6a21\u578b\u6982\u8ff0",keywords:["Seata\u3001\u9886\u57df\u6a21\u578b"],description:"Seata \u9886\u57df\u6a21\u578b\u3002"},sidebar:"docs",previous:{title:"Seata XA \u6a21\u5f0f",permalink:"/seata.github.io/zh-cn/docs/next/dev/mode/xa-mode"},next:{title:"\u4e8b\u52a1\u7ba1\u7406\u8005\uff08TM\uff09",permalink:"/seata.github.io/zh-cn/docs/next/dev/domain/tm"}},p={},c=[{value:"Seata \u9886\u57df\u6a21\u578b",id:"seata-\u9886\u57df\u6a21\u578b",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9886\u57df\u6a21\u578b\u6982\u8ff0"},"\u9886\u57df\u6a21\u578b\u6982\u8ff0"),(0,r.kt)("p",null,"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Seata(Simpe Extensible Autonomous Transaction Architecture) \u7684\u9886\u57df\u6a21\u578b\u3002"),(0,r.kt)("p",null,"Seata \u662f\u4e00\u6b3e\u9488\u5bf9\u5206\u5e03\u5f0f\u67b6\u6784\u4e0b\u4ea7\u751f\u7684\u6570\u636e\u4e00\u81f4\u6027\u95ee\u9898\u800c\u8bde\u751f\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u4ea7\u54c1\uff0c\u4f7f\u75282pc\u6216\u57fa\u4e8ebase\u7406\u8bba\u7684\u6700\u7ec8\u4e00\u81f4\u6027\u6765\u8fbe\u6210\u4e8b\u52a1\u3002\u4e8b\u52a1\u6a21\u5f0f\u7684\u5177\u4f53\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003\u5f00\u53d1\u8005\u6307\u5357\u4e2d\u7684\u4e8b\u52a1\u6a21\u5f0f\u4ecb\u7ecd\u3002 Seata \u4ea7\u54c1\u5177\u5907XA&AT\u65e0\u4e1a\u52a1\u5165\u4fb5\u7684\u5373\u63d2\u5373\u7528\u6a21\u5f0f,TCC\u4e0d\u4e0e\u5177\u4f53\u7684\u670d\u52a1\u6846\u67b6\u8026\u5408,\u4e0e\u5e95\u5c42 RPC \u534f\u8bae\u65e0\u5173,\u4e0e\u5e95\u5c42\u5b58\u50a8\u4ecb\u8d28\u65e0\u5173\u6027\u7684\u4f18\u52bf,SAGA\u6a21\u5f0f\u7684\u9ad8\u5ea6\u81ea\u5b9a\u4e49,\u6700\u7ec8\u4e00\u81f4\u6027,\u9ad8\u6027\u80fd\u7684\u4f18\u52bf,\u9488\u5bf9\u6bcf\u4e2a\u4e1a\u52a1\u573a\u666f\u7684\u4e0d\u540c\u53ef\u6709\u6548\u7684\u57fa\u4e8eSeata\u5206\u5e03\u5f0f\u4e8b\u52a1\u5e73\u53f0,\u5feb\u901f\u9ad8\u6548\u7684\u5efa\u7acb\u5b89\u5168\u7684\u4e8b\u52a1\u4fdd\u969c\u3002"),(0,r.kt)("h2",{id:"seata-\u9886\u57df\u6a21\u578b"},"Seata \u9886\u57df\u6a21\u578b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB19qmhOrY1gK0jSZTEXXXDQVXa-1330-924.png",alt:"image"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0cSeata \u4e2d\u4e8b\u52a1\u751f\u547d\u5468\u671f\u4e3b\u8981\u5206\u4e3aBegin(TM),Registry(RM),Commit/Rollback(TM&TC)\u8fd9\u4e09\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u4e8b\u52a1\u7ba1\u7406\u8005(TM)\u901a\u8fc7rpc\u81f3\u4e8b\u52a1\u534f\u8c03\u8005(TC)\u521b\u5efa\u5168\u5c40\u4e8b\u52a1(Global Transaction)\uff0c\u5c06TC\u751f\u6210\u7684XID\u4f20\u9012\u81f3\u5176TM\u6240\u8c03\u7528\u7684\u4efb\u610f\u8d44\u6e90\u7ba1\u7406\u8005(RM)\u4e2d\uff0cRM\u901a\u8fc7\u5176\u63a5\u6536\u5230\u7684XID,\u5c06\u5176\u6240\u7ba1\u7406\u7684\u8d44\u6e90\u4e14\u88ab\u8be5\u8c03\u7528\u9501\u4f7f\u7528\u5230\u7684\u8d44\u6e90\u6ce8\u518c\u4e3a\u4e00\u4e2a\u4e8b\u52a1\u5206\u652f(Branch Transaction),\u5f53\u8be5\u8bf7\u6c42\u7684\u8c03\u7528\u94fe\u5168\u90e8\u7ed3\u675f\u65f6TM\u5c06\u4e8b\u52a1\u7684\u51b3\u8bae\u7ed3\u679c(Commit/Rollback)\u901a\u77e5TC,TC\u5c06\u534f\u8c03\u6240\u6709RM\u8fdb\u884c\u4e8b\u52a1\u7684\u4e8c\u9636\u6bb5\u52a8\u4f5c."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u52a1\u521b\u5efa")),(0,r.kt)("p",null,"\u4e8b\u52a1\u7ba1\u7406\u8005(TM)\uff1a"),(0,r.kt)("p",null,"Seata \u4e2d\u7528\u4e8e\u521b\u5efa\u548c\u51b3\u8bae\u4e8b\u52a1\u7ed3\u679c\u7684\u5b9e\u4f53,\u4e00\u822c\u96c6\u6210\u4e8e\u4e1a\u52a1\u8c03\u7528\u94fe\u8def\u7684\u4e0a\u6e38."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5206\u652f\u4e8b\u52a1")),(0,r.kt)("p",null,"\u8d44\u6e90\u7ba1\u7406\u8005(RM)\uff1a"),(0,r.kt)("p",null,"Seata \u4e2d\u7528\u4e8e\u7ba1\u7406\u8d44\u6e90\u7684\u5b9e\u4f53,\u4e00\u822c\u60c5\u51b5\u4e0b\u7b49\u540c\u4e8e\u5fae\u670d\u52a1\u4e2d\u7684\u63d0\u4f9b\u65b9(provider),\u7ba1\u7406\u5176\u6240\u5728\u670d\u52a1\u4e2d\u7684\u8d44\u6e90,\u5982\u6570\u636e\u5e93\u8d44\u6e90\u7b49."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u52a1\u51b3\u8bae")),(0,r.kt)("p",null,"\u4e8b\u52a1\u534f\u8c03\u8005(TC)\uff1a"),(0,r.kt)("p",null,"Seata \u4e2d\u7528\u4e8e2pc\u65b9\u5f0f\u7684\u4e8b\u52a1\u6a21\u5f0f\u7edf\u4e00\u534f\u8c03\u4e8b\u52a1\u7684\u5b9e\u4f53(SAGA\u9664\u5916),\u5176\u53ef\u7531\u4e8b\u52a1\u7ba1\u7406\u8005\u9a71\u52a8\u6216\u81ea\u8eab\u9a71\u52a8\u8fdb\u884c\u4e8b\u52a1\u7684\u4e8c\u9636\u6bb5\u884c\u4e3a."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Commit\uff1a"),(0,r.kt)("p",{parentName:"li"},"Seata \u4e2d\u5f53\u4e8b\u52a1\u7ba1\u7406\u5668\u51b3\u8bae\u4e3a\u63d0\u4ea4\u65f6,TC\u624d\u4f1a\u8fdb\u884c\u5bf9\u4e8b\u52a1\u7684\u4e8c\u9636\u6bb5\u63d0\u4ea4\u884c\u4e3a\u4e0b\u53d1,\u5982TCC\u6a21\u5f0f\u4e2d\u7684confirm,AT\u6a21\u5f0f\u7684undolog delete,XA\u6a21\u5f0f\u7684XA Commit\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rollback\uff1a"),(0,r.kt)("p",{parentName:"li"},"Seata \u4e2d\u5f53\u4e8b\u52a1\u7ba1\u7406\u5668\u51b3\u8bae\u4e3a\u56de\u6eda\u65f6,TC\u4f1a\u8fdb\u884c\u5bf9\u4e8b\u52a1\u7684\u4e8c\u9636\u6bb5\u56de\u6eda\u884c\u4e3a\u4e0b\u53d1,\u5982TCC\u6a21\u5f0f\u4e2d\u7684cancel,AT\u6a21\u5f0f\u7684undo,XA\u6a21\u5f0f\u7684XA Rollback\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TimeoutRollback\uff1a"),(0,r.kt)("p",{parentName:"li"},"Seata \u4e2d\u5f53\u4e8b\u52a1\u7ba1\u7406\u5668\u521b\u5efa\u4e8b\u52a1\u65f6\u6307\u5b9a\u7684Timeout\u65f6\u95f4\u5230\u8fbe\u540e\u8fd8\u672a\u51b3\u8bae\u65f6,TC\u4f1a\u4e3b\u52a8\u5c06\u5df2\u8d85\u65f6\u7684\u4e8b\u52a1\u8fdb\u884c\u8d85\u65f6\u56de\u6eda,\u5176\u8d85\u65f6\u884c\u4e3a\u7b49\u540c\u4e0a\u8ff0Rollback\u884c\u4e3a."))),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4e3aTC\u6d89\u53ca\u4e8b\u52a1\u5904\u7406\u7684\u4e09\u79cd\u60c5\u51b5,\u5176\u4e09\u79cd\u72b6\u6001\u4f1a\u6269\u5c55\u51fa\u66f4\u591a\u7684\u4e8b\u52a1\u72b6\u6001,",(0,r.kt)("a",{parentName:"p",href:"/docs/user/appendix/global-transaction-status/"},"\u5177\u4f53\u53ef\u70b9\u51fb\u6b64\u5904\u67e5\u770b"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9ad8\u53ef\u7528")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/user/txgroup/transaction-group/"},"\u4e8b\u52a1\u5206\u7ec4"),"(tx-service-group)\uff1a"),(0,r.kt)("p",null,"seata\u7684\u8d44\u6e90\u903b\u8f91\uff0c\u53ef\u4ee5\u6309\u5fae\u670d\u52a1\u7684\u9700\u8981\uff0c\u5728\u5e94\u7528\u7a0b\u5e8f\uff08\u5ba2\u6237\u7aef\uff09\u5bf9\u81ea\u884c\u5b9a\u4e49\u4e8b\u52a1\u5206\u7ec4\uff0c\u6bcf\u7ec4\u53d6\u4e00\u4e2a\u540d\u5b57\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/user/registry/"},"\u670d\u52a1\u53d1\u73b0"),"\uff1a"),(0,r.kt)("p",null,"Seata \u4e2d\u670d\u52a1\u53d1\u73b0\u652f\u6301eureka,nacos,consul,etcd,zookeeper,sofa,redis,file(\u6587\u4ef6\u6307\u5b9a)"))}m.isMDXComponent=!0}}]);