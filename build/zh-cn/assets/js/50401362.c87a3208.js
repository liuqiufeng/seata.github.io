"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[80620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,v=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u7ed9\u95ee\u9898\u6253\u6807\u7b7e",keywords:["Seata"],description:"\u5982\u679c\u60a8\u6b63\u5728\u5904\u7406\u4e00\u4e2a\u95ee\u9898\uff0c\u8bf7\u8bb0\u5f97\u7ed9\u8fd9\u4e2a\u95ee\u9898\u6807\u8bb0\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u60a8\u8ba4\u4e3a\u6709\u610f\u4e49\u7684\u6807\u7b7e\u3002\u6709\u4e86\u6807\u7b7e\uff0c\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u5c31\u4f1a\u5f88\u8f7b\u677e\u5730\u8bc6\u522b\u51fa\u95ee\u9898\uff0c\u4ee5\u4fbf\u5bf9\u5176\u8fdb\u884c\u5206\u7c7b\u5e76\u8ddf\u8e2a\u8fdb\u5ea6\u3002"},l="\u7ed9\u95ee\u9898\u6253\u6807\u7b7e",o={unversionedId:"developers/committer-guide/label-an-issue-guide_dev",id:"version-v1.7/developers/committer-guide/label-an-issue-guide_dev",title:"\u7ed9\u95ee\u9898\u6253\u6807\u7b7e",description:"\u5982\u679c\u60a8\u6b63\u5728\u5904\u7406\u4e00\u4e2a\u95ee\u9898\uff0c\u8bf7\u8bb0\u5f97\u7ed9\u8fd9\u4e2a\u95ee\u9898\u6807\u8bb0\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u60a8\u8ba4\u4e3a\u6709\u610f\u4e49\u7684\u6807\u7b7e\u3002\u6709\u4e86\u6807\u7b7e\uff0c\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u5c31\u4f1a\u5f88\u8f7b\u677e\u5730\u8bc6\u522b\u51fa\u95ee\u9898\uff0c\u4ee5\u4fbf\u5bf9\u5176\u8fdb\u884c\u5206\u7c7b\u5e76\u8ddf\u8e2a\u8fdb\u5ea6\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.7/developers/committer-guide/label-an-issue-guide_dev.md",sourceDirName:"developers/committer-guide",slug:"/developers/committer-guide/label-an-issue-guide_dev",permalink:"/zh-cn/docs/v1.7/developers/committer-guide/label-an-issue-guide_dev",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.7/developers/committer-guide/label-an-issue-guide_dev.md",tags:[],version:"v1.7",frontMatter:{title:"\u7ed9\u95ee\u9898\u6253\u6807\u7b7e",keywords:["Seata"],description:"\u5982\u679c\u60a8\u6b63\u5728\u5904\u7406\u4e00\u4e2a\u95ee\u9898\uff0c\u8bf7\u8bb0\u5f97\u7ed9\u8fd9\u4e2a\u95ee\u9898\u6807\u8bb0\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u60a8\u8ba4\u4e3a\u6709\u610f\u4e49\u7684\u6807\u7b7e\u3002\u6709\u4e86\u6807\u7b7e\uff0c\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u5c31\u4f1a\u5f88\u8f7b\u677e\u5730\u8bc6\u522b\u51fa\u95ee\u9898\uff0c\u4ee5\u4fbf\u5bf9\u5176\u8fdb\u884c\u5206\u7c7b\u5e76\u8ddf\u8e2a\u8fdb\u5ea6\u3002"},sidebar:"developers",previous:{title:"\u4e3aSeata\u8d21\u732e",permalink:"/zh-cn/docs/v1.7/developers/guide_dev"},next:{title:"\u7f51\u7ad9\u5411\u5bfc",permalink:"/zh-cn/docs/v1.7/developers/committer-guide/website-guide_dev"}},u={},s=[],p={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ed9\u95ee\u9898\u6253\u6807\u7b7e"},"\u7ed9\u95ee\u9898\u6253\u6807\u7b7e"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u5904\u7406\u4e00\u4e2a\u95ee\u9898\uff0c\u8bf7\u8bb0\u5f97",(0,a.kt)("strong",{parentName:"p"},"\u7ed9\u8fd9\u4e2a\u95ee\u9898\u6807\u8bb0\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u60a8\u8ba4\u4e3a\u6709\u610f\u4e49\u7684\u6807\u7b7e"),"\u3002\u6709\u4e86\u6807\u7b7e\uff0c\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u5c31\u4f1a\u5f88\u8f7b\u677e\u5730\u8bc6\u522b\u51fa\u95ee\u9898\uff0c\u4ee5\u4fbf\u5bf9\u5176\u8fdb\u884c\u5206\u7c7b\u5e76\u8ddf\u8e2a\u8fdb\u5ea6\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u9700\u8981\u7f16\u7801\u548c\u53d1\u7248\u4fee\u590d\u7684issues\u548cpull requests\uff0c\u9700\u8981\u60a8",(0,a.kt)("strong",{parentName:"p"},"\u5c06\u5176\u6807\u8bb0\u4e3a",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/seata/seata/milestones"},"milestone")),"\u3002"),(0,a.kt)("p",null,"\u4e00\u4e9b\u5e38\u7528\u7684\u6807\u7b7e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u5e2e\u52a9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"help wanted"),(0,a.kt)("li",{parentName:"ul"},"good first issue"))),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"priority/blocker"),(0,a.kt)("li",{parentName:"ul"},"priority/high"),(0,a.kt)("li",{parentName:"ul"},"priority/low"),(0,a.kt)("li",{parentName:"ul"},"priority/normal"))),(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"status/need-triage"),(0,a.kt)("li",{parentName:"ul"},"status/DO-NOT-MERGE"),(0,a.kt)("li",{parentName:"ul"},"status/READY-TO-MERGE"),(0,a.kt)("li",{parentName:"ul"},"status/invalid"),(0,a.kt)("li",{parentName:"ul"},"status/wontfix"))),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"type/bug"),(0,a.kt)("li",{parentName:"ul"},"type/documentation"),(0,a.kt)("li",{parentName:"ul"},"type/enhancement"),(0,a.kt)("li",{parentName:"ul"},"type/feature")))))}m.isMDXComponent=!0}}]);