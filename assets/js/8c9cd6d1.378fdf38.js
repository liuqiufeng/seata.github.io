"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[3467],{40475:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(74848),o=i(28453);const s={title:"Multi-configuration Isolation",keywords:["Seata"],description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."},r="Multi-configuration Isolation",l={id:"ops/multi-configuration-isolation",title:"Multi-configuration Isolation",description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/ops/multi-configuration-isolation.md",sourceDirName:"ops",slug:"/ops/multi-configuration-isolation",permalink:"/seata.github.io/docs/v1.2/ops/multi-configuration-isolation",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/ops/multi-configuration-isolation.md",tags:[],version:"v1.2",frontMatter:{title:"Multi-configuration Isolation",keywords:["Seata"],description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."},sidebar:"docs",previous:{title:"Version Upgrade Guide",permalink:"/seata.github.io/docs/v1.2/ops/upgrade"},next:{title:"Beginner Deployment Guide",permalink:"/seata.github.io/docs/v1.2/ops/deploy-guide-beginner"}},a={},c=[{value:"use case",id:"use-case",level:2},{value:"1.Environment Configuration",id:"1environment-configuration",level:3},{value:"2.Name the new configuration file",id:"2name-the-new-configuration-file",level:3}];function u(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"multi-configuration-isolation",children:"Multi-configuration Isolation"}),"\n",(0,t.jsx)(e.p,{children:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."}),"\n",(0,t.jsx)(e.h2,{id:"use-case",children:"use case"}),"\n",(0,t.jsx)(e.p,{children:"Suppose we now have a test environment in which we want to read only the configuration items corresponding to the test environment."}),"\n",(0,t.jsx)(e.h3,{id:"1environment-configuration",children:"1.Environment Configuration"}),"\n",(0,t.jsx)(e.p,{children:"Seata provides two ways to set up different environments:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"-e test"}),",where test is the name of the environment.(",(0,t.jsx)(e.strong,{children:"This can be only used for server side"}),")"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"\ne.g.(Linux)\n\nsh seata-server.sh -e test\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Use ",(0,t.jsx)(e.strong,{children:"SEATA_ENV"})," as the key of environment variable,and it's value will be the name of the environment.(",(0,t.jsx)(e.strong,{children:"This can be only used for client side"}),")[",(0,t.jsx)(e.strong,{children:"recommended"}),"]"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"\ne.g.(Linux)\n\n#vi /etc/profile \n\nexport SEATA_ENV=test\n\n:wq\n\n#source /etc/profile\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Use ",(0,t.jsx)(e.strong,{children:"seataEnv"})," as the key of jvm options,and it's value will be the name of the environment.(",(0,t.jsx)(e.strong,{children:"This can be only used for client side"}),")[",(0,t.jsx)(e.strong,{children:"recommended"}),"]"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"-DseataEnv=test\n"})}),"\n",(0,t.jsx)(e.h3,{id:"2name-the-new-configuration-file",children:"2.Name the new configuration file"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Copy and rename file.conf to file-env.conf,where env is the name of the environment. e.g. ",(0,t.jsx)(e.strong,{children:"file-test.conf"})]}),"\n",(0,t.jsxs)(e.li,{children:["Copy and rename registry.conf to registry-env.conf,where env is the name of the environment. e.g. ",(0,t.jsx)(e.strong,{children:"registry-test.conf"})]}),"\n",(0,t.jsx)(e.li,{children:"In the registry-test.conf file, modify as follows:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'registry {\n...\nfile {\n    name = "file-test.conf"\n  }\n\nconfig {\n...\nfile {\n    name = "file-test.conf"\n  }\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"After all the steps have been set up, you can start using Seata configuration isolation."})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var t=i(96540);const o={},s=t.createContext(o);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);