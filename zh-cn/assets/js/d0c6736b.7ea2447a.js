"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[79471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Seata\u57fa\u4e8e\u6539\u826f\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u5206\u5e03\u5f0fUUID\u751f\u6210\u5668\u5206\u6790",author:"selfishlover",keywords:["Seata","snowflake","UUID"],date:"2021/05/08"},o="Seata\u57fa\u4e8e\u6539\u826f\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u5206\u5e03\u5f0fUUID\u751f\u6210\u5668\u5206\u6790",i={permalink:"/seata.github.io/zh-cn/blog/seata-analysis-UUID-generator",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-analysis-UUID-generator.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-analysis-UUID-generator.md",title:"Seata\u57fa\u4e8e\u6539\u826f\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u5206\u5e03\u5f0fUUID\u751f\u6210\u5668\u5206\u6790",description:"Seata\u5185\u7f6e\u4e86\u4e00\u4e2a\u5206\u5e03\u5f0fUUID\u751f\u6210\u5668\uff0c\u7528\u4e8e\u8f85\u52a9\u751f\u6210\u5168\u5c40\u4e8b\u52a1ID\u548c\u5206\u652f\u4e8b\u52a1ID\u3002\u6211\u4eec\u5e0c\u671b\u8be5\u751f\u6210\u5668\u5177\u6709\u5982\u4e0b\u7279\u70b9\uff1a",date:"2021-05-08T00:00:00.000Z",formattedDate:"2021\u5e745\u67088\u65e5",tags:[],readingTime:8.405,hasTruncateMarker:!1,authors:[{name:"selfishlover"}],frontMatter:{title:"Seata\u57fa\u4e8e\u6539\u826f\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u5206\u5e03\u5f0fUUID\u751f\u6210\u5668\u5206\u6790",author:"selfishlover",keywords:["Seata","snowflake","UUID"],date:"2021/05/08"},prevItem:{title:"\u5173\u4e8e\u65b0\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u7b54\u7591",permalink:"/seata.github.io/zh-cn/blog/seata-snowflake-explain"},nextItem:{title:"Seata\u65b0\u7279\u6027\u652f\u6301 -- undo_log\u538b\u7f29",permalink:"/seata.github.io/zh-cn/blog/seata-feature-undo-log-compress"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Seata\u5185\u7f6e\u4e86\u4e00\u4e2a\u5206\u5e03\u5f0fUUID\u751f\u6210\u5668\uff0c\u7528\u4e8e\u8f85\u52a9\u751f\u6210\u5168\u5c40\u4e8b\u52a1ID\u548c\u5206\u652f\u4e8b\u52a1ID\u3002\u6211\u4eec\u5e0c\u671b\u8be5\u751f\u6210\u5668\u5177\u6709\u5982\u4e0b\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u5168\u5c40\u552f\u4e00"),(0,r.kt)("li",{parentName:"ul"},"\u8d8b\u52bf\u9012\u589e")),(0,r.kt)("p",null,"\u9ad8\u6027\u80fd\u4e0d\u5fc5\u591a\u8a00\u3002\u5168\u5c40\u552f\u4e00\u5f88\u91cd\u8981\uff0c\u5426\u5219\u4e0d\u540c\u7684\u5168\u5c40\u4e8b\u52a1/\u5206\u652f\u4e8b\u52a1\u4f1a\u6df7\u6dc6\u5728\u4e00\u8d77\u3002\n\u6b64\u5916\uff0c\u8d8b\u52bf\u9012\u589e\u5bf9\u4e8e\u4f7f\u7528\u6570\u636e\u5e93\u4f5c\u4e3aTC\u96c6\u7fa4\u7684\u5b58\u50a8\u5de5\u5177\u7684\u7528\u6237\u800c\u8a00\uff0c\u80fd\u964d\u4f4e\u6570\u636e\u9875\u5206\u88c2\u7684\u9891\u7387\uff0c\u4ece\u800c\u51cf\u5c11\u6570\u636e\u5e93\u7684IO\u538b\u529b\n(branch_table\u8868\u4ee5\u5206\u652f\u4e8b\u52a1ID\u4f5c\u4e3a\u4e3b\u952e)\u3002"),(0,r.kt)("p",null,"\u5728\u8001\u7248Seata(1.4\u4ee5\u524d)\uff0c\u8be5\u751f\u6210\u5668\u7684\u5b9e\u73b0\u57fa\u4e8e\u6807\u51c6\u7248\u7684\u96ea\u82b1\u7b97\u6cd5\u3002\u6807\u51c6\u7248\u96ea\u82b1\u7b97\u6cd5\u7f51\u4e0a\u5df2\u7ecf\u6709\u5f88\u591a\u89e3\u8bfb\u6587\u7ae0\u4e86\uff0c\u6b64\u5904\u5c31\u4e0d\u518d\u8d58\u8ff0\u4e86\u3002\n\u5c1a\u672a\u4e86\u89e3\u7684\u540c\u5b66\u53ef\u4ee5\u5148\u770b\u770b\u7f51\u4e0a\u7684\u76f8\u5173\u8d44\u6599\uff0c\u518d\u6765\u770b\u6b64\u6587\u7ae0\u3002\n\u6b64\u5904\u6211\u4eec\u8c08\u8c08\u6807\u51c6\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u51e0\u4e2a\u7f3a\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\u65f6\u949f\u654f\u611f\u3002\u56e0\u4e3aID\u751f\u6210\u603b\u662f\u548c\u5f53\u524d\u64cd\u4f5c\u7cfb\u7edf\u7684\u65f6\u95f4\u6233\u7ed1\u5b9a\u7684(\u5229\u7528\u4e86\u65f6\u95f4\u7684\u5355\u8c03\u9012\u589e\u6027)\uff0c\u56e0\u6b64\u82e5\u64cd\u4f5c\u7cfb\u7edf\u7684\u65f6\u949f\u51fa\u73b0\u56de\u62e8\uff0c\n\u751f\u6210\u7684ID\u5c31\u4f1a\u91cd\u590d(\u4e00\u822c\u800c\u8a00\u4e0d\u4f1a\u4eba\u4e3a\u5730\u53bb\u56de\u62e8\u65f6\u949f\uff0c\u4f46\u670d\u52a1\u5668\u4f1a\u6709\u5076\u53d1\u7684"\u65f6\u949f\u6f02\u79fb"\u73b0\u8c61)\u3002\n\u5bf9\u4e8e\u6b64\u95ee\u9898\uff0cSeata\u7684\u89e3\u51b3\u7b56\u7565\u662f\u8bb0\u5f55\u4e0a\u4e00\u6b21\u7684\u65f6\u95f4\u6233\uff0c\u82e5\u53d1\u73b0\u5f53\u524d\u65f6\u95f4\u6233\u5c0f\u4e8e\u8bb0\u5f55\u503c(\u610f\u5473\u7740\u51fa\u73b0\u4e86\u65f6\u949f\u56de\u62e8)\uff0c\u5219\u62d2\u7edd\u670d\u52a1\uff0c\n\u7b49\u5f85\u65f6\u95f4\u6233\u8ffd\u4e0a\u8bb0\u5f55\u503c\u3002 \u4f46\u8fd9\u4e5f\u610f\u5473\u7740\u8fd9\u6bb5\u65f6\u95f4\u5185\u8be5TC\u5c06\u5904\u4e8e\u4e0d\u53ef\u7528\u72b6\u6001\u3002'),(0,r.kt)("li",{parentName:"ol"},"\u7a81\u53d1\u6027\u80fd\u6709\u4e0a\u9650\u3002\u6807\u51c6\u7248\u96ea\u82b1\u7b97\u6cd5\u5ba3\u79f0\u7684QPS\u5f88\u5927\uff0c\u7ea6400w/s\uff0c\u4f46\u4e25\u683c\u6765\u8bf4\u8fd9\u7b97\u800d\u4e86\u4e2a\u6587\u5b57\u6e38\u620f~\n\u56e0\u4e3a\u7b97\u6cd5\u7684\u65f6\u95f4\u6233\u5355\u4f4d\u662f\u6beb\u79d2\uff0c\u800c\u5206\u914d\u7ed9\u5e8f\u5217\u53f7\u7684\u4f4d\u957f\u5ea6\u4e3a12\uff0c\u5373\u6bcf\u6beb\u79d24096\u4e2a\u5e8f\u5217\u7a7a\u95f4\u3002\n\u6240\u4ee5\u66f4\u51c6\u786e\u7684\u63cf\u8ff0\u5e94\u8be5\u662f4096/ms\u3002400w/s\u4e0e4096/ms\u7684\u533a\u522b\u5728\u4e8e\u524d\u8005\u4e0d\u8981\u6c42\u6bcf\u4e00\u6beb\u79d2\u7684\u5e76\u53d1\u90fd\u5fc5\u987b\u4f4e\u4e8e4096\n(\u4e5f\u8bb8\u6709\u4e9b\u6beb\u79d2\u4f1a\u9ad8\u4e8e4096\uff0c\u6709\u4e9b\u5219\u4f4e\u4e8e)\u3002Seata\u4ea6\u9075\u5faa\u6b64\u9650\u5236\uff0c\u82e5\u5f53\u524d\u65f6\u95f4\u6233\u7684\u5e8f\u5217\u7a7a\u95f4\u5df2\u8017\u5c3d\uff0c\u4f1a\u81ea\u65cb\u7b49\u5f85\u4e0b\u4e00\u4e2a\u65f6\u95f4\u6233\u3002")),(0,r.kt)("p",null,"\u5728\u8f83\u65b0\u7684\u7248\u672c\u4e0a(1.4\u4e4b\u540e)\uff0c\u8be5\u751f\u6210\u5668\u9488\u5bf9\u539f\u7b97\u6cd5\u8fdb\u884c\u4e86\u4e00\u5b9a\u7684\u4f18\u5316\u6539\u826f\uff0c\u5f88\u597d\u5730\u89e3\u51b3\u4e86\u4e0a\u8ff0\u76842\u4e2a\u95ee\u9898\u3002\n\u6539\u8fdb\u7684\u6838\u5fc3\u601d\u60f3\u662f\u89e3\u9664\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u65f6\u95f4\u6233\u7684\u65f6\u523b\u7ed1\u5b9a\uff0c\u751f\u6210\u5668\u53ea\u5728\u521d\u59cb\u5316\u65f6\u83b7\u53d6\u4e86\u7cfb\u7edf\u5f53\u524d\u7684\u65f6\u95f4\u6233\uff0c\u4f5c\u4e3a\u521d\u59cb\u65f6\u95f4\u6233\uff0c\n\u4f46\u4e4b\u540e\u5c31\u4e0d\u518d\u4e0e\u7cfb\u7edf\u65f6\u95f4\u6233\u4fdd\u6301\u540c\u6b65\u4e86\u3002\u5b83\u4e4b\u540e\u7684\u9012\u589e\uff0c\u53ea\u7531\u5e8f\u5217\u53f7\u7684\u9012\u589e\u6765\u9a71\u52a8\u3002\u6bd4\u5982\u5e8f\u5217\u53f7\u5f53\u524d\u503c\u662f4095\uff0c\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u8fdb\u6765\uff0c\n\u5e8f\u5217\u53f7+1\u6ea2\u51fa12\u4f4d\u7a7a\u95f4\uff0c\u5e8f\u5217\u53f7\u91cd\u65b0\u5f52\u96f6\uff0c\u800c\u6ea2\u51fa\u7684\u8fdb\u4f4d\u5219\u52a0\u5230\u65f6\u95f4\u6233\u4e0a\uff0c\u4ece\u800c\u8ba9\u65f6\u95f4\u6233+1\u3002\n\u81f3\u6b64\uff0c\u65f6\u95f4\u6233\u548c\u5e8f\u5217\u53f7\u5b9e\u9645\u53ef\u89c6\u4e3a\u4e00\u4e2a\u6574\u4f53\u4e86\u3002\u5b9e\u9645\u4e0a\u6211\u4eec\u4e5f\u662f\u8fd9\u6837\u505a\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u8fd9\u79cd\u6ea2\u51fa\u8fdb\u4f4d\uff0c\u6211\u4eec\u8c03\u6574\u4e8664\u4f4dID\u7684\u4f4d\u5206\u914d\u7b56\u7565\uff0c\n\u7531\u539f\u7248\u7684\uff1a\n",(0,r.kt)("img",{alt:"\u539f\u7248\u4f4d\u5206\u914d\u7b56\u7565",src:n(75675).Z,width:"904",height:"156"})),(0,r.kt)("p",null,"\u6539\u6210(\u5373\u65f6\u95f4\u6233\u548c\u8282\u70b9ID\u6362\u4e2a\u4f4d\u7f6e)\uff1a\n",(0,r.kt)("img",{alt:"\u6539\u8fdb\u7248\u4f4d\u5206\u914d\u7b56\u7565",src:n(20393).Z,width:"900",height:"157"})),(0,r.kt)("p",null,"\u8fd9\u6837\u65f6\u95f4\u6233\u548c\u5e8f\u5217\u53f7\u5728\u5185\u5b58\u4e0a\u662f\u8fde\u5728\u4e00\u5757\u7684\uff0c\u5728\u5b9e\u73b0\u4e0a\u5c31\u5f88\u5bb9\u6613\u7528\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicLong"),"\u6765\u540c\u65f6\u4fdd\u5b58\u5b83\u4fe9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n * timestamp and sequence mix in one Long\n * highest 11 bit: not used\n * middle  41 bit: timestamp\n * lowest  12 bit: sequence\n */\nprivate AtomicLong timestampAndSequence;\n")),(0,r.kt)("p",null,"\u6700\u9ad811\u4f4d\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u65f6\u5c31\u786e\u5b9a\u597d\uff0c\u4e4b\u540e\u4e0d\u518d\u53d8\u5316\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n * business meaning: machine ID (0 ~ 1023)\n * actual layout in memory:\n * highest 1 bit: 0\n * middle 10 bit: workerId\n * lowest 53 bit: all 0\n */\nprivate long workerId;\n")),(0,r.kt)("p",null,"\u90a3\u4e48\u5728\u751f\u4ea7ID\u65f6\u5c31\u5f88\u7b80\u5355\u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public long nextId() {\n   // \u83b7\u5f97\u9012\u589e\u540e\u7684\u65f6\u95f4\u6233\u548c\u5e8f\u5217\u53f7\n   long next = timestampAndSequence.incrementAndGet();\n   // \u622a\u53d6\u4f4e53\u4f4d\n   long timestampWithSequence = next & timestampAndSequenceMask;\n   // \u8ddf\u5148\u524d\u4fdd\u5b58\u597d\u7684\u9ad811\u4f4d\u8fdb\u884c\u4e00\u4e2a\u6216\u7684\u4f4d\u8fd0\u7b97\n   return workerId | timestampWithSequence;\n}\n")),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\u751f\u6210\u5668\u4e0d\u518d\u67094096/ms\u7684\u7a81\u53d1\u6027\u80fd\u9650\u5236\u4e86\u3002\u5018\u82e5\u67d0\u4e2a\u65f6\u95f4\u6233\u7684\u5e8f\u5217\u53f7\u7a7a\u95f4\u8017\u5c3d\uff0c\u5b83\u4f1a\u76f4\u63a5\u63a8\u8fdb\u5230\u4e0b\u4e00\u4e2a\u65f6\u95f4\u6233\uff0c\n"\u501f\u7528"\u4e0b\u4e00\u4e2a\u65f6\u95f4\u6233\u7684\u5e8f\u5217\u53f7\u7a7a\u95f4(\u4e0d\u5fc5\u62c5\u5fc3\u8fd9\u79cd"\u8d85\u524d\u6d88\u8d39"\u4f1a\u9020\u6210\u4e25\u91cd\u540e\u679c\uff0c\u4e0b\u9762\u4f1a\u9610\u8ff0\u7406\u7531)\u3002'),(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u5668\u5f31\u4f9d\u8d56\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u65f6\u949f\u3002\u5728\u8fd0\u884c\u671f\u95f4\uff0c\u751f\u6210\u5668\u4e0d\u53d7\u65f6\u949f\u56de\u62e8\u7684\u5f71\u54cd(\u65e0\u8bba\u662f\u4eba\u4e3a\u56de\u62e8\u8fd8\u662f\u673a\u5668\u7684\u65f6\u949f\u6f02\u79fb)\uff0c\n\u56e0\u4e3a\u751f\u6210\u5668\u4ec5\u5728\u542f\u52a8\u65f6\u83b7\u53d6\u4e86\u4e00\u904d\u7cfb\u7edf\u65f6\u949f\uff0c\u4e4b\u540e\u4e24\u8005\u4e0d\u518d\u4fdd\u6301\u540c\u6b65\u3002\n\u552f\u4e00\u53ef\u80fd\u4ea7\u751f\u91cd\u590dID\u7684\u53ea\u6709\u5728\u91cd\u542f\u65f6\u7684\u5927\u5e45\u5ea6\u65f6\u949f\u56de\u62e8(\u4eba\u4e3a\u523b\u610f\u56de\u62e8\u6216\u8005\u4fee\u6539\u64cd\u4f5c\u7cfb\u7edf\u65f6\u533a\uff0c\u5982\u5317\u4eac\u65f6\u95f4\u6539\u4e3a\u4f26\u6566\u65f6\u95f4~\n\u673a\u5668\u65f6\u949f\u6f02\u79fb\u57fa\u672c\u662f\u6beb\u79d2\u7ea7\u7684\uff0c\u4e0d\u4f1a\u6709\u8fd9\u4e48\u5927\u7684\u5e45\u5ea6)\u3002"),(0,r.kt)("li",{parentName:"ol"},'\u6301\u7eed\u4e0d\u65ad\u7684"\u8d85\u524d\u6d88\u8d39"\u4f1a\u4e0d\u4f1a\u4f7f\u5f97\u751f\u6210\u5668\u5185\u7684\u65f6\u95f4\u6233\u5927\u5927\u8d85\u524d\u4e8e\u7cfb\u7edf\u7684\u65f6\u95f4\u6233\uff0c \u4ece\u800c\u5728\u91cd\u542f\u65f6\u9020\u6210ID\u91cd\u590d\uff1f\n\u7406\u8bba\u4e0a\u5982\u6b64\uff0c\u4f46\u5b9e\u9645\u51e0\u4e4e\u4e0d\u53ef\u80fd\u3002\u8981\u8fbe\u5230\u8fd9\u79cd\u6548\u679c\uff0c\u610f\u5473\u8be5\u751f\u6210\u5668\u63a5\u6536\u7684QPS\u5f97\u6301\u7eed\u7a33\u5b9a\u5728400w/s\u4e4b\u4e0a~\n\u8bf4\u5b9e\u8bdd\uff0cTC\u4e5f\u625b\u4e0d\u4f4f\u8fd9\u4e48\u9ad8\u7684\u6d41\u91cf\uff0c\u6240\u4ee5\u8bf4\u5462\uff0c\u5929\u584c\u4e0b\u6765\u6709\u4e2a\u5b50\u9ad8\u7684\u5148\u625b\u7740\uff0c\u74f6\u9888\u4e00\u5b9a\u4e0d\u5728\u751f\u6210\u5668\u8fd9\u91cc\u3002')),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u8c03\u6574\u4e86\u4e0b\u8282\u70b9ID\u7684\u751f\u6210\u7b56\u7565\u3002\u539f\u7248\u5728\u7528\u6237\u672a\u624b\u52a8\u6307\u5b9a\u8282\u70b9ID\u65f6\uff0c\u4f1a\u622a\u53d6\u672c\u5730IPv4\u5730\u5740\u7684\u4f4e10\u4f4d\u4f5c\u4e3a\u8282\u70b9ID\u3002\n\u5728\u5b9e\u8df5\u751f\u4ea7\u4e2d\uff0c\u53d1\u73b0\u6709\u96f6\u6563\u7684\u8282\u70b9ID\u91cd\u590d\u7684\u73b0\u8c61(\u591a\u4e3a\u91c7\u7528k8s\u90e8\u7f72\u7684\u7528\u6237)\u3002\u4f8b\u5982\u8fd9\u6837\u7684IP\u5c31\u4f1a\u91cd\u590d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"192.168.4.10"),(0,r.kt)("li",{parentName:"ul"},"192.168.8.10")),(0,r.kt)("p",null,"\u5373\u53ea\u8981IP\u7684\u7b2c4\u4e2a\u5b57\u8282\u548c\u7b2c3\u4e2a\u5b57\u8282\u7684\u4f4e2\u4f4d\u4e00\u6837\u5c31\u4f1a\u91cd\u590d\u3002\n\u65b0\u7248\u7684\u7b56\u7565\u6539\u4e3a\u4f18\u5148\u4ece\u672c\u673a\u7f51\u5361\u7684MAC\u5730\u5740\u622a\u53d6\u4f4e10\u4f4d\uff0c\u82e5\u672c\u673a\u672a\u914d\u7f6e\u6709\u6548\u7684\u7f51\u5361\uff0c\u5219\u5728","[0, 1023]","\u4e2d\u968f\u673a\u6311\u4e00\u4e2a\u4f5c\u4e3a\u8282\u70b9ID\u3002\n\u8fd9\u6837\u8c03\u6574\u540e\u4f3c\u4e4e\u6ca1\u6709\u65b0\u7248\u7684\u7528\u6237\u518d\u62a5\u540c\u6837\u7684\u95ee\u9898\u4e86(\u5f53\u7136\uff0c\u6709\u5f85\u65f6\u95f4\u7684\u68c0\u9a8c\uff0c\u4e0d\u7ba1\u600e\u6837\uff0c\u4e0d\u4f1a\u6bd4IP\u622a\u53d6\u7b56\u7565\u66f4\u7cdf\u7cd5)\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u5bf9Seata\u7684\u5206\u5e03\u5f0fUUID\u751f\u6210\u5668\u7684\u7b80\u6790\uff0c\u5982\u679c\u60a8\u559c\u6b22\u8fd9\u4e2a\u751f\u6210\u5668\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u60a8\u7684\u9879\u76ee\u91cc\u4f7f\u7528\u5b83\uff0c\n\u5b83\u7684\u7c7b\u58f0\u660e\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"public"),"\u7684\uff0c\u5b8c\u6574\u7c7b\u540d\u4e3a\uff1a\n",(0,r.kt)("inlineCode",{parentName:"p"},"io.seata.common.util.IdWorker")),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u60a8\u6709\u66f4\u597d\u7684\u70b9\u5b50\uff0c\u4e5f\u6b22\u8fce\u8ddfSeata\u793e\u533a\u8ba8\u8bba\u3002"))}m.isMDXComponent=!0},20393:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/after-cad00baeb92d348340136601174c9d8c.png"},75675:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/before-8c52102c116e08f0b37d947b30008b58.png"}}]);