"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[32108],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),c=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=n,b=p["".concat(u,".").concat(y)]||p[y]||d[y]||o;return r?i.createElement(b,a(a({ref:t},l),{},{components:r})):i.createElement(b,a({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const o={title:"New contributor guide",keywords:["Seata","contributor"],description:"This is a guide for new comers who wants to contribute to Seata."},a="Reporting Security Issues",s={unversionedId:"developers/contributor-guide/reporting-security-issues_dev",id:"version-v1.4/developers/contributor-guide/reporting-security-issues_dev",title:"New contributor guide",description:"This is a guide for new comers who wants to contribute to Seata.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.4/developers/contributor-guide/reporting-security-issues_dev.md",sourceDirName:"developers/contributor-guide",slug:"/developers/contributor-guide/reporting-security-issues_dev",permalink:"/seata.github.io/docs/v1.4/developers/contributor-guide/reporting-security-issues_dev",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.4/developers/contributor-guide/reporting-security-issues_dev.md",tags:[],version:"v1.4",frontMatter:{title:"New contributor guide",keywords:["Seata","contributor"],description:"This is a guide for new comers who wants to contribute to Seata."},sidebar:"developers",previous:{title:"Test coverage guide",permalink:"/seata.github.io/docs/v1.4/developers/contributor-guide/test-coverage-guide_dev"},next:{title:"Contributing to Seata",permalink:"/seata.github.io/docs/v1.4/developers/guide_dev"}},u={},c=[{value:"REPORTING VULNERABILITY",id:"reporting-vulnerability",level:2},{value:"VULNERABILITY HANDLING",id:"vulnerability-handling",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reporting-security-issues"},"Reporting Security Issues"),(0,n.kt)("p",null,"The Seata Group takes a rigorous standpoint in annihilating the security issues in its software projects. Seata is highly sensitive and forthcoming to issues pertaining to its features and functionality."),(0,n.kt)("h2",{id:"reporting-vulnerability"},"REPORTING VULNERABILITY"),(0,n.kt)("p",null,"If you have apprehensions regarding Seata's security or you discover vulnerability or potential threat, don\u2019t hesitate to get in touch with the Seata Security Team by reporting it to ",(0,n.kt)("a",{parentName:"p",href:"https://security.alibaba.com/"},"ASRC(Alibaba Security Response Center)"),". In the report, specify the description of the issue or potential threat. You are also urged to recommend the way to reproduce and replicate the issue. The Seata community will get back to you after assessing and analysing the findings."),(0,n.kt)("p",null,"PLEASE PAY ATTENTION to report the security issue on ",(0,n.kt)("a",{parentName:"p",href:"https://security.alibaba.com/"},"ASRC(Alibaba Security Response Center)")," before disclosing it on public domain."),(0,n.kt)("h2",{id:"vulnerability-handling"},"VULNERABILITY HANDLING"),(0,n.kt)("p",null,"An overview of the vulnerability handling process is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The reporter reports the vulnerability privately to Apache."),(0,n.kt)("li",{parentName:"ul"},"The appropriate project's security team works privately with the reporter to resolve the vulnerability."),(0,n.kt)("li",{parentName:"ul"},"A new release of the Apache product concerned is made that includes the fix."),(0,n.kt)("li",{parentName:"ul"},"The vulnerability is publically announced.")))}d.isMDXComponent=!0}}]);