"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[36820],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var l=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=l.createContext({}),u=function(t){var e=l.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return l.createElement(s.Provider,{value:e},t.children)},o="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,s=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=u(a),c=r,k=o["".concat(s,".").concat(c)]||o[c]||h[c]||n;return a?l.createElement(k,i(i({ref:e},m),{},{components:a})):l.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=c;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[o]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19836:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var l=a(87462),r=(a(67294),a(3905));const n={title:"Seata 1.5.2 \u91cd\u78c5\u53d1\u5e03\uff0c\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861",author:"Seata\u793e\u533a",keywords:["seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u30011.5.2"],description:"Seata 1.5.2 \u91cd\u78c5\u53d1\u5e03\uff0c\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861",date:"2022/07/12"},i=void 0,p={permalink:"/seata.github.io/zh-cn/blog/seata-1.5.2",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-1.5.2.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-1.5.2.md",title:"Seata 1.5.2 \u91cd\u78c5\u53d1\u5e03\uff0c\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861",description:"Seata 1.5.2 \u91cd\u78c5\u53d1\u5e03\uff0c\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861",date:"2022-07-12T00:00:00.000Z",formattedDate:"2022\u5e747\u670812\u65e5",tags:[],readingTime:2.735,hasTruncateMarker:!1,authors:[{name:"Seata\u793e\u533a"}],frontMatter:{title:"Seata 1.5.2 \u91cd\u78c5\u53d1\u5e03\uff0c\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861",author:"Seata\u793e\u533a",keywords:["seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u30011.5.2"],description:"Seata 1.5.2 \u91cd\u78c5\u53d1\u5e03\uff0c\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861",date:"2022/07/12"},prevItem:{title:"Seata 1.6.0 \u91cd\u78c5\u53d1\u5e03\uff0c\u5927\u5e45\u63d0\u5347\u6027\u80fd",permalink:"/seata.github.io/zh-cn/blog/seata-1.6.0"},nextItem:{title:"\u963f\u91cc Seata \u65b0\u7248\u672c\u7ec8\u4e8e\u89e3\u51b3\u4e86 TCC \u6a21\u5f0f\u7684\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u95ee\u9898",permalink:"/seata.github.io/zh-cn/blog/seata-tcc-fence"}},s={authorsImageUrls:[void 0]},u=[{value:"Seata 1.5.2 \u91cd\u78c5\u53d1\u5e03\uff0c\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861",id:"seata-152-\u91cd\u78c5\u53d1\u5e03\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861",level:3},{value:"feature\uff1a",id:"feature",level:3},{value:"bugfix\uff1a",id:"bugfix",level:3},{value:"optimize\uff1a",id:"optimize",level:3},{value:"test\uff1a",id:"test",level:3},{value:"Link",id:"link",level:4}],m={toc:u},o="wrapper";function h(t){let{components:e,...a}=t;return(0,r.kt)(o,(0,l.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"seata-152-\u91cd\u78c5\u53d1\u5e03\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861"},"Seata 1.5.2 \u91cd\u78c5\u53d1\u5e03\uff0c\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("p",null,"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"seata-server \u4e0b\u8f7d\u94fe\u63a5\uff1a")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/archive/v1.5.2.zip"},"source")," |\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases/download/v1.5.2/seata-server-1.5.2.zip"},"binary")),(0,r.kt)("p",null,"\u6b64\u7248\u672c\u66f4\u65b0\u5982\u4e0b\uff1a"),(0,r.kt)("h3",{id:"feature"},"feature\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4713"},"#4661"),"] \u652f\u6301\u6839\u636exid\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4676"},"#4676"),"] \u652f\u6301Nacos\u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u65f6\uff0cserver\u901a\u8fc7\u6302\u8f7dSLB\u66b4\u9732\u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4642"},"#4642"),"] \u652f\u6301client\u6279\u91cf\u8bf7\u6c42\u5e76\u884c\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4567"},"#4567"),"] \u652f\u6301where\u6761\u4ef6\u4e2dfind_in_set\u51fd\u6570")),(0,r.kt)("h3",{id:"bugfix"},"bugfix\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4515"},"#4515"),"] \u4fee\u590ddevelop\u5206\u652fSeataTCCFenceAutoConfiguration\u5728\u5ba2\u6237\u7aef\u672a\u4f7f\u7528DB\u65f6\uff0c\u542f\u52a8\u629b\u51faClassNotFoundException\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4661"},"#4661"),"] \u4fee\u590d\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528PostgreSQL\u51fa\u73b0\u7684SQL\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4682"},"#4667"),"] \u4fee\u590ddevelop\u5206\u652fRedisTransactionStoreManager\u8fed\u4ee3\u65f6\u66f4\u65b0map\u7684\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4678"},"#4678"),"] \u4fee\u590d\u5c5e\u6027transport.enableRmClientBatchSendRequest\u6ca1\u6709\u914d\u7f6e\u7684\u60c5\u51b5\u4e0b\u7f13\u5b58\u7a7f\u900f\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4701"},"#4701"),"] \u4fee\u590d\u547d\u4ee4\u884c\u53c2\u6570\u4e22\u5931\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4607"},"#4607"),"] \u4fee\u590d\u8df3\u8fc7\u5168\u5c40\u9501\u6821\u9a8c\u7684\u7f3a\u9677"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4696"},"#4696"),"] \u4fee\u590d oracle \u5b58\u50a8\u6a21\u5f0f\u65f6\u7684\u63d2\u5165\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4726"},"#4726"),"] \u4fee\u590d\u6279\u91cf\u53d1\u9001\u6d88\u606f\u65f6\u53ef\u80fd\u7684NPE\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4729"},"#4729"),"] \u4fee\u590dAspectTransactional.rollbackForClassName\u8bbe\u7f6e\u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4653"},"#4653"),"] \u4fee\u590d INSERT_ON_DUPLICATE \u4e3b\u952e\u4e3a\u975e\u6570\u503c\u5f02\u5e38")),(0,r.kt)("h3",{id:"optimize"},"optimize\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4650"},"#4650"),"] \u4fee\u590d\u5b89\u5168\u6f0f\u6d1e"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4670"},"#4670"),"] \u4f18\u5316branchResultMessageExecutor\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\u6570"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4662"},"#4662"),"] \u4f18\u5316\u56de\u6eda\u4e8b\u52a1\u76d1\u63a7\u6307\u6807"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4693"},"#4693"),"] \u4f18\u5316\u63a7\u5236\u53f0\u5bfc\u822a\u680f"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4700"},"#4700"),"] \u4fee\u590d maven-compiler-plugin \u548c maven-resources-plugin \u6267\u884c\u5931\u8d25"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4711"},"#4711"),"] \u5206\u79bb\u90e8\u7f72\u65f6 lib \u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4720"},"#4720"),"] \u4f18\u5316pom\u63cf\u8ff0"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4728"},"#4728"),"] \u5c06logback\u7248\u672c\u4f9d\u8d56\u5347\u7ea7\u81f31.2.9"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4745"},"#4745"),"] \u53d1\u884c\u5305\u4e2d\u652f\u6301 mysql8 driver"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4626"},"#4626"),"] \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"easyj-maven-plugin")," \u63d2\u4ef6\u4ee3\u66ff ",(0,r.kt)("inlineCode",{parentName:"li"},"flatten-maven-plugin"),"\u63d2\u4ef6\uff0c\u4ee5\u4fee\u590d",(0,r.kt)("inlineCode",{parentName:"li"},"shade")," \u63d2\u4ef6\u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"flatten")," \u63d2\u4ef6\u4e0d\u517c\u5bb9\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4629"},"#4629"),"] \u66f4\u65b0globalSession\u72b6\u6001\u65f6\u68c0\u67e5\u66f4\u6539\u524d\u540e\u7684\u7ea6\u675f\u5173\u7cfb"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4662"},"#4662"),"] \u4f18\u5316 EnhancedServiceLoader \u53ef\u8bfb\u6027")),(0,r.kt)("h3",{id:"test"},"test\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4544"},"#4544"),"] \u4f18\u5316TransactionContextFilterTest\u4e2djackson\u5305\u4f9d\u8d56\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/pull/4731"},"#4731"),"] \u4fee\u590d AsyncWorkerTest \u548c LockManagerTest \u7684\u5355\u6d4b\u95ee\u9898\u3002")),(0,r.kt)("p",null,"\u975e\u5e38\u611f\u8c22\u4ee5\u4e0b contributors \u7684\u4ee3\u7801\u8d21\u732e\u3002\u82e5\u6709\u65e0\u610f\u9057\u6f0f\uff0c\u8bf7\u62a5\u544a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/slievrly"},"slievrly")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pengten"},"pengten")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/YSF-A"},"YSF-A")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tuwenlin"},"tuwenlin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/2129zxl"},"2129zxl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ifdevil"},"Ifdevil")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wingchi-leung"},"wingchi-leung")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/robynron"},"liurong")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opelok-z"},"opelok-z")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/funky-eyes"},"funky-eyes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Smery-lxm"},"Smery-lxm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lvekee"},"lvekee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/doubleDimple"},"doubleDimple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wangliang181230"},"wangliang181230")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Bughue"},"Bughue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AYue-94"},"AYue-94")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lingxiao-wu"},"lingxiao-wu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/caohdgege"},"caohdgege"))),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u6536\u5230\u4e86\u793e\u533a\u53cd\u9988\u7684\u5f88\u591a\u6709\u4ef7\u503c\u7684issue\u548c\u5efa\u8bae\uff0c\u975e\u5e38\u611f\u8c22\u5927\u5bb6\u3002"),(0,r.kt)("h4",{id:"link"},"Link"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Seata:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata"},"https://github.com/seata/seata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Seata-Samples:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples"},"https://github.com/seata/seata-samples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Release:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/releases"},"https://github.com/seata/seata/releases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WebSite:")," ",(0,r.kt)("a",{parentName:"li",href:"https://seata.io"},"https://seata.io"))))}h.isMDXComponent=!0}}]);