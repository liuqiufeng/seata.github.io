"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[52631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||f[m]||r;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(87462),i=(n(67294),n(3905));const r={title:"Multi-configuration Isolation",keywords:["Seata"],description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."},a="Multi-configuration Isolation",l={unversionedId:"ops/multi-configuration-isolation",id:"version-v1.3/ops/multi-configuration-isolation",title:"Multi-configuration Isolation",description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.3/ops/multi-configuration-isolation.md",sourceDirName:"ops",slug:"/ops/multi-configuration-isolation",permalink:"/seata.github.io/docs/v1.3/ops/multi-configuration-isolation",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.3/ops/multi-configuration-isolation.md",tags:[],version:"v1.3",frontMatter:{title:"Multi-configuration Isolation",keywords:["Seata"],description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."},sidebar:"docs",previous:{title:"Version Upgrade Guide",permalink:"/seata.github.io/docs/v1.3/ops/upgrade"},next:{title:"Beginner Deployment Guide",permalink:"/seata.github.io/docs/v1.3/ops/deploy-guide-beginner"}},s={},u=[{value:"use case",id:"use-case",level:2},{value:"1.Environment Configuration",id:"1environment-configuration",level:3},{value:"2.Name the new configuration file",id:"2name-the-new-configuration-file",level:3}],c={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multi-configuration-isolation"},"Multi-configuration Isolation"),(0,i.kt)("p",null,"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."),(0,i.kt)("h2",{id:"use-case"},"use case"),(0,i.kt)("p",null,"Suppose we now have a test environment in which we want to read only the configuration items corresponding to the test environment."),(0,i.kt)("h3",{id:"1environment-configuration"},"1.Environment Configuration"),(0,i.kt)("p",null,"Seata provides two ways to set up different environments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"-e test"),",where test is the name of the environment.(",(0,i.kt)("strong",{parentName:"li"},"This can be only used for server side"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\ne.g.(Linux)\n\nsh seata-server.sh -e test\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("strong",{parentName:"li"},"SEATA_ENV")," as the key of environment variable,and it's value will be the name of the environment.(",(0,i.kt)("strong",{parentName:"li"},"This can be only used for client side"),")","[",(0,i.kt)("strong",{parentName:"li"},"recommended"),"]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\ne.g.(Linux)\n\n#vi /etc/profile \n\nexport SEATA_ENV=test\n\n:wq\n\n#source /etc/profile\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("strong",{parentName:"li"},"seataEnv")," as the key of jvm options,and it's value will be the name of the environment.(",(0,i.kt)("strong",{parentName:"li"},"This can be only used for client side"),")","[",(0,i.kt)("strong",{parentName:"li"},"recommended"),"]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-DseataEnv=test\n")),(0,i.kt)("h3",{id:"2name-the-new-configuration-file"},"2.Name the new configuration file"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy and rename file.conf to file-env.conf,where env is the name of the environment. e.g. ",(0,i.kt)("strong",{parentName:"li"},"file-test.conf")),(0,i.kt)("li",{parentName:"ul"},"Copy and rename registry.conf to registry-env.conf,where env is the name of the environment. e.g. ",(0,i.kt)("strong",{parentName:"li"},"registry-test.conf")),(0,i.kt)("li",{parentName:"ul"},"In the registry-test.conf file, modify as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'registry {\n...\nfile {\n    name = "file-test.conf"\n  }\n\nconfig {\n...\nfile {\n    name = "file-test.conf"\n  }\n\n')),(0,i.kt)("p",null,"After all the steps have been set up, you can start using Seata configuration isolation."))}f.isMDXComponent=!0}}]);