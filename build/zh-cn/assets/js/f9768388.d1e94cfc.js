"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[1568],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(a),m=n,d=c["".concat(o,".").concat(m)]||c[m]||k[m]||l;return a?r.createElement(d,s(s({ref:e},u),{},{components:a})):r.createElement(d,s({ref:e},u))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[c]="string"==typeof t?t:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68497:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",keywords:["Seata"],description:"Seata upgrade."},s="\u7248\u672c\u5347\u7ea7\u6307\u5357",i={unversionedId:"ops/upgrade",id:"ops/upgrade",title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",description:"Seata upgrade.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/zh-cn/docs/next/ops/upgrade",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/upgrade.md",tags:[],version:"current",frontMatter:{title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",keywords:["Seata"],description:"Seata upgrade."},sidebar:"docs",previous:{title:"Metrics \u8bbe\u8ba1",permalink:"/zh-cn/docs/next/dev/seata-mertics"},next:{title:"\u591a\u914d\u7f6e\u9694\u79bb",permalink:"/zh-cn/docs/next/ops/multi-configuration-isolation"}},o={},p=[],u={toc:p},c="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u7248\u672c\u5347\u7ea7\u6307\u5357"},"\u7248\u672c\u5347\u7ea7\u6307\u5357"),(0,n.kt)("a",{href:"#8",target:"_self"},"8. \u5347\u7ea7\u5230 seata 2.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("br",null),(0,n.kt)("a",{href:"#7",target:"_self"},"7. \u5347\u7ea7\u5230 seata 1.6.x \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("br",null),(0,n.kt)("a",{href:"#6",target:"_self"},"6. \u5347\u7ea7\u5230 seata 1.5.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("br",null),(0,n.kt)("a",{href:"#5",target:"_self"},"5. \u5347\u7ea7\u5230 seata 1.4.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("br",null),(0,n.kt)("a",{href:"#4",target:"_self"},"4. \u5347\u7ea7\u5230 seata 1.3.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("br",null),(0,n.kt)("a",{href:"#3",target:"_self"},"3. \u5347\u7ea7\u5230 seata 1.2.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("br",null),(0,n.kt)("a",{href:"#2",target:"_self"},"2. \u5347\u7ea7\u5230 seata 1.1.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("br",null),(0,n.kt)("a",{href:"#1",target:"_self"},"1. 0.8\u30010.9\u7248\u672c\u5982\u4f55\u5347\u7ea7\u52301.0\u7248\u672c\uff1f"),(0,n.kt)("br",null),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"8"},"8. \u5347\u7ea7\u5230 seata 2.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("mark",null,"\u6ce8\u610f\u4e8b\u9879")),"\u4ece1.8.x \u7248\u672c\u5347\u7ea72.0.x \u7248\u672c\uff0c\u5982\u679cundolog\u6216\u901a\u4fe1\u7f16\u89e3\u7801\u7684\u914d\u7f6e\u4e3afst\u90fd\u9700\u8981\u5148\u63d0\u524d\u5728client\u4fee\u6539\u4e3afst\u4ee5\u5916\u7684\u5e8f\u5217\u5316\u65b9\u5f0f,server\u4fa7\u624d\u53ef\u8fdb\u884c\u5347\u7ea7\u3002 \u6ce8: 2.0.0\u7684server \u5b58\u5728at\u6a21\u5f0f\u4e0b\u8d44\u6e90\u91cd\u5165,\u6bd4\u5982\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u4e2d,\u975e\u540c\u4e00\u4e2a\u672c\u5730\u4e8b\u52a1\u8fdb\u884c\u4e86\u591a\u6b21\u76f8\u540c\u7684\u6570\u636e\u4fee\u6539,\u6ce8\u518c\u4e86\u591a\u4e2a\u5206\u652f\u540e\u4f1a\u5bfc\u81f4\u4e8c\u9636\u6bb5\u4e0b\u53d1\u987a\u5e8f\u5f02\u5e38,\u6545\u5982\u679c\u6709\u6b64\u7c7b\u573a\u666f\u8bf7\u52ff\u5347\u7ea7\u52302.0.0\u7248\u672c,\u5efa\u8bae\u5347\u7ea7\u5230\u6700\u65b0snapshot\u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"7"},"7. \u5347\u7ea7\u5230 seata 1.6.x \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("mark",null,"\u6ce8\u610f\u4e8b\u9879")),"\u4ece1.5.x \u7248\u672c\u5347\u7ea71.6.x \u7248\u672c\uff0c\u65e0\u8bba client SDK \u8fd8\u662f seata-server \u90fd\u662f\u5b8c\u5168\u5e73\u6ed1\u517c\u5bb9\u7684\uff0c\u65e0\u9700\u9664\u5347\u7ea7\u7248\u672c\u5916\u7684\u5176\u4ed6\u6539\u52a8\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"6"},"6. \u5347\u7ea7\u5230 seata 1.5.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("mark",null,"\u6ce8\u610f\u4e8b\u9879")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"seata-server \u5b58\u50a8\u6a21\u5f0f\u4e3a db \u65f6\uff0c\u9700\u8981\u6ce8\u610f\u8868\u7ed3\u6784\u53d8\u66f4\uff0c\u5728\u5347\u7ea71.5.0 \u524d\u9700\u5148\u53d8\u66f4\u8868\u7ed3\u6784\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8868\u7ed3\u6784\u5b57\u7b26\u96c6\u7edf\u4e00\u4ece utf8 \u8c03\u6574\u4e3a utf8mb4"),(0,n.kt)("li",{parentName:"ul"},"global_table \u8c03\u6574\u7d22\u5f15\u4ece idx_gmt_modified_status \u8c03\u6574\u4e3a idx_status_gmt_modified"),(0,n.kt)("li",{parentName:"ul"},"lock_table \u589e\u52a0 status \u5b57\u6bb5,\u589e\u52a0 idx_status\uff0cidx_xid_and_branch_id \u7d22\u5f15"),(0,n.kt)("li",{parentName:"ul"},"\u589e\u52a0 distributed_lock \u8868\u7528\u4e8e seata-server \u5f02\u6b65\u4efb\u52a1\u8c03\u5ea6\n\u5347\u7ea71.5.0\u524d\uff0c\u8bf7\u6ce8\u610f\u8868\u7ed3\u6784\u53d8\u66f4\uff0c\u8868\u7ed3\u6784\u8be6\u60c5\u8bf7",(0,n.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/tree/1.5.0/script/server/db"},"\u70b9\u51fb\u6b64\u5904"))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"TCC\u4e8b\u52a1\u6a21\u5f0f\u57281.5.0 \u589e\u52a0\u9632\u60ac\u6302\u529f\u80fd,\u5982\u9700\u7531 Seata \u6846\u67b6\u5f00\u542f\u9632\u60ac\u6302,\u9700\u8981\u63d0\u524d\u5728\u5ba2\u6237\u7aef\u4e1a\u52a1\u5e93\u4e2d\u589e\u52a0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.5.0/script/client/tcc/db"},"\u6b64\u8868"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"TCC\u6a21\u5f0f\u4e00\u9636\u6bb5\u65b9\u6cd5\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u4e0d\u518d\u9700\u8981\u5728\u4e00\u9636\u6bb5\u7684\u63a5\u53e3\u5165\u53c2\u5b9a\u4e49",(0,n.kt)("inlineCode",{parentName:"p"},"BusinessActionContext"),"\uff0c\u82e5\u4e00\u9636\u6bb5\u9700\u8981\u4f7f\u7528\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"BusinessActionContext"),"\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"BusinessActionContextUtil.getContext()"),"\u53d6\u5f97")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"redis\u6ce8\u518c\u4e2d\u5fc3\u5185\u90e8\u7ed3\u6784\u8c03\u6574,\u4e0d\u518d\u5411\u4e0b\u517c\u5bb9,\u5982\u4f7f\u7528redis\u4f5c\u4e3aseata\u7684\u6ce8\u518c\u4e2d\u5fc3,\u8bf7\u5c06\u5ba2\u6237\u7aef\u4f9d\u8d56\u7684 seata-all(seata-spring-boot-starter) \u548c seata-server \u4e00\u5e76\u5347\u7ea7\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e8b\u52a1\u5206\u7ec4\u914d\u7f6e\u652f\u6301\u4e86\u9ed8\u8ba4\u503c\uff0c\u4e3a\u4e86\u907f\u514d\u6b67\u4e49\u548c\u964d\u4f4e\u5b66\u4e60\u6210\u672c\uff0c\u9ed8\u8ba4\u4e8b\u52a1\u5206\u7ec4\u7684\u7531",(0,n.kt)("inlineCode",{parentName:"p"},"my_test_tx_group")," \u4fee\u6539\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"default_tx_group"),"\u3002\u57281.5.X\u7684\u7248\u672c\u4e2d\u4f1a\u5411\u4e0b\u8fdb\u884c\u517c\u5bb9\u3002")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"5"},"5. \u5347\u7ea7\u5230 seata 1.4.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("mark",null,"\u6ce8\u610f\u4e8b\u9879")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"1.3\u4e0e1.4\u7684Redis\u6570\u636e\u65e0\u6cd5\u517c\u5bb9,\u56e0Redis\u6a21\u5f0f\u91cd\u6784\u6570\u636e\u5b58\u50a8\u7ed3\u6784\u4e3ahash,1.3\u5347\u7ea7\u7684\u7528\u6237\u9700\u7b49\u5f85\u4e8b\u52a1\u5168\u90e8\u8fd0\u884c\u5b8c\u6bd5\u540e\u518d\u505a\u8fed\u4ee3.\n"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"4"},"4. \u5347\u7ea7\u5230 seata 1.3.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("mark",null,"\u6ce8\u610f\u4e8b\u9879")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"nacos\u6ce8\u518c\u4e2d\u5fc3\u65b0\u589egroup\u7684\u5c5e\u6027\u914d\u7f6eseata.registry.nacos.group\uff0c\u5982\u679c\u65e0\u914d\u7f6e,\u5219\u9ed8\u8ba4\u4e3aDEFAULT_GROUP\uff0cServer\u548cClient\u7aef\u9700\u4fdd\u6301\u4e00\u81f4\u3002"),(0,n.kt)("li",{parentName:"ol"},"mysql undolog\u8868\u53bb\u9664id\u5b57\u6bb5,\u4e0ebranch_table\u4e00\u5e76\u52a0\u5f3a\u65f6\u95f4\u6233\u7cbe\u5ea6,\u9632\u6b62undolog\u56de\u6eda\u65f6\u987a\u5e8f\u9519\u8bef\u5bfc\u81f4\u51fa\u73b0\u810f\u6570\u636e\u65e0\u6cd5\u56de\u6eda.(\u6ce8:\u9700\u8981mysql5.6\u7248\u672c\u4ee5\u4e0a)"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"3"},"3. \u5347\u7ea7\u5230 seata 1.2.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("mark",null,"\u6ce8\u610f\u4e8b\u9879")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'nacos\u6ce8\u518c\u4e2d\u5fc3\u65b0\u589e\u670d\u52a1\u540d\u7684\u5c5e\u6027\u914d\u7f6eregistry.nacos.application = "seata-server"\uff0c\u539f\u56fa\u5b9a\u540d\u4e3aserverAddr\uff0c\u73b0\u9ed8\u8ba4\u4e3aseata-server\uff0cServer\u548cClient\u7aef\u9700\u4fdd\u6301\u4e00\u81f4\u3002\n'))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"2"},"2. \u5347\u7ea7\u5230 seata 1.1.0 \u6709\u54ea\u4e9b\u517c\u5bb9\u6027\u4e8b\u9879\u662f\u9700\u8981\u6ce8\u610f\u7684\uff1f"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("mark",null,"\u6ce8\u610f\u4e8b\u9879")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9700\u8981\u6ce8\u610f\u914d\u7f6e\u9879\u7684\u517c\u5bb9\u6027\uff0c1.1.0 \u7248\u672c\u5bf9\u4e8e\u914d\u7f6e\u9879\u7684\u98ce\u683c\u8fdb\u884c\u4e86\u7edf\u4e00\u3002\n\u82e5\u7a0b\u5e8f\u4e2d\u4f9d\u8d56\u7684\u662f seata-all\uff0c\u5bf9\u5e94\u4e8e ",(0,n.kt)("em",{parentName:"p"},".conf \u6587\u4ef6\uff0cconf\u6587\u4ef6\u4e2d\u914d\u7f6e\u9879\u7684\u547d\u540d\u98ce\u683c\u7edf\u4e00\u4e3a \u70b9\u53f7+\u9a7c\u5cf0\u5f0f\u7ec4\u5408\uff0c",(0,n.kt)("a",{parentName:"em",href:"https://seata.io/zh-cn/docs/user/configurations.html"},"1.1.0 \u914d\u7f6e\u9879\u8bf4\u660e"),"\uff0c ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/seata/seata/tree/1.1.0/script/client/conf"},"1.1.0 \u914d\u7f6e\u53c2\u8003"),";\n\u82e5\u7a0b\u5e8f\u4e2d\u4f9d\u8d56\u7684\u662fseata-spring-boot-starter\uff0c\u5bf9\u5e94\u4e8e "),".properties \u6216 *.yml\u3002propertie\u3001 yml\u6587\u4ef6\u547d\u540d\u98ce\u683c\u7edf\u4e00\u4e3a \u70b9\u53f7+\u4e2d\u5212\u7ebf\u7ec4\u5408\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.1.0/script/client/spring"},"1.1.0 \u914d\u7f6e\u53c2\u8003")," \u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f1.0.0 \u7248\u672c\u914d\u7f6e\u9879 seata.service\n.vgroup-mapping=default 1.1.0 \u66f4\u6539\u4e3a: seata.service.vgroup-mapping\n.my_test_tx_group=default,\u5176\u4e2dmy_test_tx_group\u4ee3\u8868\u7a0b\u5e8f\u6240\u4f7f\u7528\u7684\u4e8b\u52a1\u5206\u7ec4\uff1b 1.0.0 \u7248\u672c\u914d\u7f6e\u9879seata.service.grouplist=127.0.0.1:8091\uff0c 1.1.0\n\u66f4\u6539\u4e3a\uff1aseata.service.grouplist.default=127.0.0.1:8091 \u5176\u4e2d default \u4ee3\u8868 seata\u6ce8\u518c\u670d\u52a1\u540d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"seata-all \u9ed8\u8ba4\u4e0d\u5f00\u542f\u6570\u636e\u6e90\u81ea\u52a8\u4ee3\u7406\u3002\u539f seata-all\u4e2d conf \u6587\u4ef6\u914d\u7f6e\u9879\nclient.support.spring.datasource.autoproxy \u914d\u7f6e\u9879\u5931\u6548\uff0c\u7531\u6ce8\u89e3 @EnableAutoDataSourceProxy\n\u6ce8\u89e3\u4ee3\u66ff\uff0c\u6ce8\u89e3\u53c2\u6570\u53ef\u9009\u62e9\u4f7f\u7528jdk\u4ee3\u7406\u6216\u8005cglib\u4ee3\u7406\uff0c\u5f53\u4f7f\u7528HikariDataSource \u65f6\u63a8\u8350\u4f7f\u7528 cglib \u4ee3\u7406\u6a21\u5f0f\u3002\nseata-spring-boot-starter \u9ed8\u8ba4\u5f00\u542f\u6570\u636e\u6e90\u4ee3\u7406\uff0c\u5bf9\u5e94\u6570\u636e\u6e90\u81ea\u52a8\u4ee3\u7406\u914d\u7f6e\u9879\u4e0e1.0.0 \u7248\u672c\u4fdd\u6301\u4e0d\u53d8\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528spring cloud\u6846\u67b6\u65f6\u9700\u8981\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba"},"Spring Cloud Alibaba"),"\u6765\u8fdb\u884cseata\n\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u9012\uff0c\u4e0eSpring Cloud Alibaba \u7248\u672c\u96c6\u6210\u4f9d\u8d56\u5173\u7cfb\uff0c\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"\u7248\u672c\u8bf4\u660e"),(0,n.kt)("br",{parentName:"p"}),"\n","spring-cloud-alibaba-seata \u5728 2.2.0.RELEASE \u7248\u672c\u524d \u4f9d\u8d56\u7684\u662fseata-all \u82e5\u7ee7\u7eed\u4f7f\u7528\u4f4e\u7248\u672c\u7684 spring-cloud-alibaba-seata \u53ef\u4ee5\u4f7f\u7528\u9ad8\u7248\u672c\u7684 seata-all \u53d6\u4ee3\u5185\u7f6e\u7684 seata-all \u7248\u672c\uff1b",(0,n.kt)("br",{parentName:"p"}),"\n","\u4ecespring-cloud-alibaba-seata \u5728 2.2.0.RELEASE \u5f00\u59cb\u540e\uff08\u542b\uff09\u5185\u90e8\u5f00\u59cb\u4f9d\u8d56seata-spring-boot-starter,2.2.0.RELEASE \u5185\u90e8\u96c6\u6210 seata-spring-boot-starter 1.0.0 \u53ef\u4ee5\u5347\u7ea7\u4e3a seata-spring-boot-starter 1.1.0\uff0cseata-spring-boot-starter \u96c6\u6210\u4e86seata-all\uff0cseata-spring-boot-starter \u5305\u88c5\u4e86\u5bf9\u4e8eproperties\u6216yml \u914d\u7f6e\u7684autoconfig \u529f\u80fd\uff0c\u5728spring-cloud-alibaba-seata 2.2.0.RELEASE \u524d\nautoconfig \u529f\u80fd\u7531\u5176\u672c\u8eab\u652f\u6301\uff0c\u5728\u5176\u540e\u53bb\u6389 spring-cloud-alibaba-seata \u4e2d\u5173\u4e8e seata \u672c\u8eab\u7684autoconfig \u7531seata-spring-boot-starter \u652f\u6301\uff0c\u56e0\u6b64\u4f4e\u7248\u672cspring-cloud-alibaba-seata \u53ea\u80fd\u914d\u5408 seata-all\u4f7f\u7528\uff0c\u9ad8\u7248\u672cspring-cloud-alibaba-seata \u53ea\u80fd\u914d\u5408seata-spring-boot-starter \u4f7f\u7528\uff0c\u4ee52.2.0.RELEASE\u4e3a\u5206\u754c\u70b9\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"TC\u7aef\u91c7\u7528 db \u5b58\u50a8\u6a21\u5f0f\u65f6 branch_table \u4e2d\u589e\u52a0 gmt_create\uff0cgmt_modified \u5b57\u6bb5\u7684\u7cbe\u5ea6\uff0c\u7528\u4e8e\u7cbe\u786e\u786e\u8ba4\u56de\u6eda\u7684\u987a\u5e8f\uff0c\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.1.0/script/server/db"},"\u5404\u6570\u636e\u5e93\u811a\u672c\u53c2\u8003"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"1"},"1. 0.8\u30010.9\u7248\u672c\u5982\u4f55\u5347\u7ea7\u52301.0\u7248\u672c\uff1f"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("mark",null,"\u6ce8\u610f\u4e8b\u9879")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff091.0\u652f\u6301yml\u3001properties\uff0c\u9700\u7528seata-spring-boot-starter\u66ff\u6362\u6389 seata-all   "),(0,n.kt)("li",{parentName:"ol"},"\uff08\u5fc5\u9009\uff09TC\u7aef\u8868lock_table\u5b57\u6bb5branch_id\u589e\u52a0\u666e\u901a\u7d22\u5f15   "),(0,n.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u90e8\u5206\u53c2\u6570\u547d\u540d\u6539\u52a8\uff0c",(0,n.kt)("a",{href:"https://seata.io/zh-cn/docs/user/configurations100.html",target:"_blank"},"\u70b9\u51fb\u67e5\u770b\u53c2\u6570\u914d\u7f6e"),"   "),(0,n.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09 client.report.success.enable\u53ef\u4ee5\u7f6e\u4e3afalse\uff0c\u63d0\u5347\u6027\u80fd   "))),(0,n.kt)("hr",null))}k.isMDXComponent=!0}}]);