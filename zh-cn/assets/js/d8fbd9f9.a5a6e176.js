"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[67026],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(a),m=n,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Seata XA \u6a21\u5f0f",keywords:["Seata","XA"],description:"Seata XA \u6a21\u5f0f\u7528\u6237\u6587\u6863"},l="Seata XA \u6a21\u5f0f",i={unversionedId:"user/mode/xa",id:"user/mode/xa",title:"Seata XA \u6a21\u5f0f",description:"Seata XA \u6a21\u5f0f\u7528\u6237\u6587\u6863",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/mode/xa.md",sourceDirName:"user/mode",slug:"/user/mode/xa",permalink:"/seata.github.io/zh-cn/docs/next/user/mode/xa",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/mode/xa.md",tags:[],version:"current",frontMatter:{title:"Seata XA \u6a21\u5f0f",keywords:["Seata","XA"],description:"Seata XA \u6a21\u5f0f\u7528\u6237\u6587\u6863"},sidebar:"docs",previous:{title:"Seata Saga \u6a21\u5f0f",permalink:"/seata.github.io/zh-cn/docs/next/user/mode/saga"},next:{title:"\u4e8b\u52a1\u5206\u7ec4\u4ecb\u7ecd",permalink:"/seata.github.io/zh-cn/docs/next/user/txgroup/transaction-group"}},u={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:3},{value:"\u6574\u4f53\u673a\u5236",id:"\u6574\u4f53\u673a\u5236",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"seata-xa-\u6a21\u5f0f"},"Seata XA \u6a21\u5f0f"),(0,n.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.kt)("p",null,"XA \u6a21\u5f0f\u662f\u4ece 1.2 \u7248\u672c\u652f\u6301\u7684\u4e8b\u52a1\u6a21\u5f0f\u3002XA \u89c4\u8303 \u662f X/Open \u7ec4\u7ec7\u5b9a\u4e49\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u5904\u7406\uff08DTP\uff0cDistributed Transaction Processing\uff09\u6807\u51c6\u3002Seata XA \u6a21\u5f0f\u662f\u5229\u7528\u4e8b\u52a1\u8d44\u6e90\uff08\u6570\u636e\u5e93\u3001\u6d88\u606f\u670d\u52a1\u7b49\uff09\u5bf9 XA \u534f\u8bae\u7684\u652f\u6301\uff0c\u4ee5 XA \u534f\u8bae\u7684\u673a\u5236\u6765\u7ba1\u7406\u5206\u652f\u4e8b\u52a1\u7684\u4e00\u79cd\u4e8b\u52a1\u6a21\u5f0f\u3002"),(0,n.kt)("img",{src:"https://img.alicdn.com/tfs/TB1hSpccIVl614jSZKPXXaGjpXa-1330-924.png",style:{zoom:"50%"}}),(0,n.kt)("p",null,"\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u91cd\u70b9\u4ecb\u7ecd Seata XA \u6a21\u5f0f\u7684\u4f7f\u7528\uff0c\u5982\u679c\u60a8\u5bf9\u4e8e XA \u6a21\u5f0f\u539f\u7406\u611f\u5174\u8da3\uff0c\u8fd8\u8bf7\u9605\u8bfb\u5bf9\u5e94\u4e8e\u672c\u7bc7\u6587\u7ae0\u7684",(0,n.kt)("a",{parentName:"p",href:"../../dev/mode/xa-mode"},"\u5f00\u53d1\u8005\u6307\u5357"),"\u3002"),(0,n.kt)("h3",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),(0,n.kt)("p",null,"\u4e0e Seata \u652f\u6301\u7684\u5176\u5b83\u4e8b\u52a1\u6a21\u5f0f\u4e0d\u540c\uff0cXA \u534f\u8bae\u8981\u6c42\u4e8b\u52a1\u8d44\u6e90\u672c\u8eab\u63d0\u4f9b\u5bf9\u89c4\u8303\u548c\u534f\u8bae\u7684\u652f\u6301\uff0c\u6240\u4ee5\u4e8b\u52a1\u8d44\u6e90\uff08\u5982\u6570\u636e\u5e93\uff09\u53ef\u4ee5\u4fdd\u969c\u4ece\u4efb\u610f\u89c6\u89d2\u5bf9\u6570\u636e\u7684\u8bbf\u95ee\u6709\u6548\u9694\u79bb\uff0c\u6ee1\u8db3\u5168\u5c40\u6570\u636e\u4e00\u81f4\u6027\u3002\u6b64\u5916\u7684\u4e00\u4e9b\u4f18\u52bf\u8fd8\u5305\u62ec\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e1a\u52a1\u65e0\u4fb5\u5165\uff1a\u548c AT \u4e00\u6837\uff0cXA \u6a21\u5f0f\u5c06\u662f\u4e1a\u52a1\u65e0\u4fb5\u5165\u7684\uff0c\u4e0d\u7ed9\u5e94\u7528\u8bbe\u8ba1\u548c\u5f00\u53d1\u5e26\u6765\u989d\u5916\u8d1f\u62c5\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u7684\u652f\u6301\u5e7f\u6cdb\uff1aXA \u534f\u8bae\u88ab\u4e3b\u6d41\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5e7f\u6cdb\u652f\u6301\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684\u9002\u914d\u5373\u53ef\u4f7f\u7528\u3002")),(0,n.kt)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,n.kt)("p",null,"XA prepare \u540e\uff0c\u5206\u652f\u4e8b\u52a1\u8fdb\u5165\u963b\u585e\u9636\u6bb5\uff0c\u6536\u5230 XA commit \u6216 XA rollback \u524d\u5fc5\u987b\u963b\u585e\u7b49\u5f85\u3002\u4e8b\u52a1\u8d44\u6e90\u957f\u65f6\u95f4\u5f97\u4e0d\u5230\u91ca\u653e\uff0c\u9501\u5b9a\u5468\u671f\u957f\uff0c\u800c\u4e14\u5728\u5e94\u7528\u5c42\u4e0a\u9762\u65e0\u6cd5\u5e72\u9884\uff0c\u6027\u80fd\u5dee\u3002"),(0,n.kt)("h3",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,n.kt)("p",null,"\u9002\u7528\u4e8e\u60f3\u8981\u8fc1\u79fb\u5230 Seata \u5e73\u53f0\u57fa\u4e8e XA \u534f\u8bae\u7684\u8001\u5e94\u7528\uff0c\u4f7f\u7528 XA \u6a21\u5f0f\u5c06\u66f4\u5e73\u6ed1\uff0c\u8fd8\u6709 AT \u6a21\u5f0f\u672a\u9002\u914d\u7684\u6570\u636e\u5e93\u5e94\u7528\u3002"),(0,n.kt)("h2",{id:"\u6574\u4f53\u673a\u5236"},"\u6574\u4f53\u673a\u5236"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c\u9636\u6bb5\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u56de\u6eda\uff1a\u4e1a\u52a1 SQL \u64cd\u4f5c\u653e\u5728 XA \u5206\u652f\u4e2d\u8fdb\u884c\uff0c\u7531\u8d44\u6e90\u5bf9 XA \u534f\u8bae\u7684\u652f\u6301\u6765\u4fdd\u8bc1 ",(0,n.kt)("em",{parentName:"li"},"\u53ef\u56de\u6eda")),(0,n.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316\uff1aXA \u5206\u652f\u5b8c\u6210\u540e\uff0c\u6267\u884c XA prepare\uff0c\u540c\u6837\uff0c\u7531\u8d44\u6e90\u5bf9 XA \u534f\u8bae\u7684\u652f\u6301\u6765\u4fdd\u8bc1 ",(0,n.kt)("em",{parentName:"li"},"\u6301\u4e45\u5316"),"\uff08\u5373\uff0c\u4e4b\u540e\u4efb\u4f55\u610f\u5916\u90fd\u4e0d\u4f1a\u9020\u6210\u65e0\u6cd5\u56de\u6eda\u7684\u60c5\u51b5\uff09"))),(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u9636\u6bb5\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5206\u652f\u63d0\u4ea4\uff1a\u6267\u884c XA \u5206\u652f\u7684 commit"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u652f\u56de\u6eda\uff1a\u6267\u884c XA \u5206\u652f\u7684 rollback")))),(0,n.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,n.kt)("p",null,"XA \u6a21\u5f0f\u4f7f\u7528\u8d77\u6765\u4e0e AT \u6a21\u5f0f\u57fa\u672c\u4e00\u81f4\uff0c\u7528\u6cd5\u4e0a\u7684\u552f\u4e00\u533a\u522b\u5728\u4e8e\u6570\u636e\u6e90\u4ee3\u7406\u7684\u66ff\u6362\uff1a\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"DataSourceProxyXA")," \u6765\u66ff\u4ee3 ",(0,n.kt)("inlineCode",{parentName:"p"},"DataSourceProxy"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class DataSourceProxy {\n    @Bean("dataSourceProxy")\n    public DataSource dataSource(DruidDataSource druidDataSource) {\n        // DataSourceProxyXA for XA mode\n        return new DataSourceProxyXA(druidDataSource);\n        // DataSourceProxy for AT mode\n        // return new DataSourceProxy(druidDataSource);\n    }\n}\n')),(0,n.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,n.kt)("p",null,"\u8bf7\u8ddf\u968f ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata-samples/tree/master/tcc"},"seata-samples/xa")," \u4e2d\u7684\u793a\u4f8b\u8fdb\u884c\u5b9e\u9a8c\u3002"))}d.isMDXComponent=!0}}]);