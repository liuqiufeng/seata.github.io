"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[23190],{70789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(74848),o=a(28453);const s={title:"Seata AT Mode",keywords:["Seata","AT"],description:"User guide for Seata AT mode"},i="Seata AT Mode",r={id:"user/mode/at",title:"Seata AT Mode",description:"User guide for Seata AT mode",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1/user/mode/at.md",sourceDirName:"user/mode",slug:"/user/mode/at",permalink:"/seata.github.io/docs/v1.1/user/mode/at",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.1/user/mode/at.md",tags:[],version:"v1.1",frontMatter:{title:"Seata AT Mode",keywords:["Seata","AT"],description:"User guide for Seata AT mode"},sidebar:"docs",previous:{title:"The Seata Parameter Configuration",permalink:"/seata.github.io/docs/v1.1/user/configurations"},next:{title:"Seata TCC Mode",permalink:"/seata.github.io/docs/v1.1/user/mode/tcc"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Overall Mechanism",id:"overall-mechanism",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Getting Started",id:"getting-started",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"seata-at-mode",children:"Seata AT Mode"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"AT Mode is an innovative non-intrusive distributed transaction solution introduced by Seata. Seata internally incorporates a proxy layer for database operations. When using Seata AT Mode, we effectively utilize Seata's built-in data source proxy, where Seata adds various logic, such as inserting rollback undo_log logs and checking global locks."}),"\n",(0,n.jsxs)(t.p,{children:["In this document, we will focus on the usage of Seata AT Mode. If you are interested in the principles behind the AT Mode, please read the corresponding ",(0,n.jsx)(t.a,{href:"../../dev/mode/at-mode",children:"Developer Guide"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"overall-mechanism",children:"Overall Mechanism"}),"\n",(0,n.jsx)(t.p,{children:"Evolution of Two-Phase Commit Protocol:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"First Phase: Business data and rollback logs are committed in the same local transaction, releasing local locks and connection resources."}),"\n",(0,n.jsxs)(t.li,{children:["Second Phase:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Asynchronous commit, completed very quickly."}),"\n",(0,n.jsx)(t.li,{children:"Rollback is compensated through the rollback logs of the first phase."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Let's abstract a use case where, during a user's purchase action, we need to decrease inventory and reduce the account balance. When the ",(0,n.jsx)(t.code,{children:"stock_tbl"})," and ",(0,n.jsx)(t.code,{children:"account_tbl"})," tables are in the same database, we can easily implement the transaction using the capabilities of the relational database itself. However, if these two tables belong to different data sources, we need to leverage Seata's distributed transaction capabilities."]}),"\n",(0,n.jsx)(t.p,{children:"Examine the example code below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'@GlobalTransactional\npublic void purchase(String userId, String commodityCode, int count, int money) {\n    jdbcTemplateA.update("update stock_tbl set count = count - ? where commodity_code = ?", new Object[] {count, commodityCode});\n    jdbcTemplateB.update("update account_tbl set money = money - ? where user_id = ?", new Object[] {money, userId});\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["If you have used the Spring framework's ",(0,n.jsx)(t.code,{children:"@Transactional"})," annotation before, you can understand the functionality of ",(0,n.jsx)(t.code,{children:"@GlobalTransactional"})," based on a similar naming analogy. Yes, here we introduce an annotation to easily implement distributed transaction capabilities, and using AT Mode can minimize the cost of business refactoring."]}),"\n",(0,n.jsxs)(t.p,{children:["It is important to note that ",(0,n.jsx)(t.code,{children:"jdbcTemplateA"})," and ",(0,n.jsx)(t.code,{children:"jdbcTemplateB"})," use different data sources for construction, and both of these different data sources need to be wrapped using Seata's AT data source proxy class ",(0,n.jsx)(t.code,{children:"DataSourceProxy"}),". For information on what the data source proxy helps us achieve, please read the ",(0,n.jsx)(t.a,{href:"../appendix/isolation#%E4%BB%8E%E4%BB%A3%E7%90%86%E6%95%B0%E6%8D%AE%E6%BA%90%E8%AF%B4%E8%B5%B7",children:"Transaction Isolation"})," section in the appendix."]}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(t.p,{children:["Follow the ",(0,n.jsx)(t.a,{href:"../quickstart",children:"Quick Start"})," section to get hands-on experience with a complete example."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var n=a(96540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);