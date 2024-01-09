"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[33788],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(b,l(l({ref:t},p),{},{components:r})):a.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Label an Issue",keywords:["Seata"],description:"Label an Issue."},l="Label an Issue",o={unversionedId:"developers/committer-guide/label-an-issue-guide_dev",id:"version-v1.2/developers/committer-guide/label-an-issue-guide_dev",title:"Label an Issue",description:"Label an Issue.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/developers/committer-guide/label-an-issue-guide_dev.md",sourceDirName:"developers/committer-guide",slug:"/developers/committer-guide/label-an-issue-guide_dev",permalink:"/seata.github.io/docs/v1.2/developers/committer-guide/label-an-issue-guide_dev",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/developers/committer-guide/label-an-issue-guide_dev.md",tags:[],version:"v1.2",frontMatter:{title:"Label an Issue",keywords:["Seata"],description:"Label an Issue."},sidebar:"developers",previous:{title:"Contributing to Seata",permalink:"/seata.github.io/docs/v1.2/developers/guide_dev"},next:{title:"Website Guide",permalink:"/seata.github.io/docs/v1.2/developers/committer-guide/website-guide_dev"}},s={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"label-an-issue"},"Label an Issue"),(0,n.kt)("p",null,"If you are handling an issue, remember to ",(0,n.kt)("strong",{parentName:"p"},"mark the issue cearly with one or more labels")," whenever you think it's meaningful. With labels on, other developers can easily recognize problems, classify them or track progress. "),(0,n.kt)("p",null,"For issues or pull requests that need coding and further version release to fix, you should always ",(0,n.kt)("strong",{parentName:"p"},"mark it with a ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/seata/seata/milestones"},"milestone")),". "),(0,n.kt)("p",null,"Some frequently used labels:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Help Wanted"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"help wanted"),(0,n.kt)("li",{parentName:"ul"},"good first issue"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Prority"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"priority/blocker"),(0,n.kt)("li",{parentName:"ul"},"priority/high"),(0,n.kt)("li",{parentName:"ul"},"priority/low"),(0,n.kt)("li",{parentName:"ul"},"priority/normal"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Status"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"status/need-triage"),(0,n.kt)("li",{parentName:"ul"},"status/DO-NOT-MERGE"),(0,n.kt)("li",{parentName:"ul"},"status/READY-TO-MERGE"),(0,n.kt)("li",{parentName:"ul"},"status/invalid "),(0,n.kt)("li",{parentName:"ul"},"status/wontfix"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Type"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"type/bug"),(0,n.kt)("li",{parentName:"ul"},"type/documentation"),(0,n.kt)("li",{parentName:"ul"},"type/enhancement"),(0,n.kt)("li",{parentName:"ul"},"type/feature")))))}m.isMDXComponent=!0}}]);