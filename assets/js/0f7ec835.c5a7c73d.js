"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[47044],{49866:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=s(74848),r=s(28453);const i={title:"SQL Restrictions",keywords:["Seata"],description:"Seata SQL restrictions"},o="SQL Restrictions",a={id:"user/sqlreference/sql-restrictions",title:"SQL Restrictions",description:"Seata SQL restrictions",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1/user/sqlreference/sql-restrictions.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/sql-restrictions",permalink:"/seata.github.io/docs/v1.1/user/sqlreference/sql-restrictions",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.1/user/sqlreference/sql-restrictions.md",tags:[],version:"v1.1",frontMatter:{title:"SQL Restrictions",keywords:["Seata"],description:"Seata SQL restrictions"},sidebar:"docs",previous:{title:"Data Source support",permalink:"/seata.github.io/docs/v1.1/user/datasource"},next:{title:"DML",permalink:"/seata.github.io/docs/v1.1/user/sqlreference/dml"}},c={},u=[{value:"Usage restrictions",id:"usage-restrictions",level:3}];function d(e){const t={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sql-restrictions",children:"SQL Restrictions"}),"\n",(0,n.jsx)(t.p,{children:"Seata transactions currently support some functions of the DML syntax of INSERT, UPDATE, and DELETE. These types have been verified by the Seata open source community. The scope of SQL support is still expanding, and it is recommended to use it within the limits of this article. If you are interested in helping the community support more types of SQL, please submit a PR."}),"\n",(0,n.jsx)(t.h3,{id:"usage-restrictions",children:"Usage restrictions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"SQL nesting is not supported"}),"\n",(0,n.jsxs)(t.li,{children:["Does not support multi-table complex SQL (Since version 1.6.0, MySQL supports UPDATE JOIN statement, ",(0,n.jsx)("a",{href:"./dml",children:"Please see details"}),")"]}),"\n",(0,n.jsx)(t.li,{children:"Stored procedures and triggers are not supported"}),"\n",(0,n.jsx)(t.li,{children:"Some databases do not support batch update, but support batch when using MySQL, Mariadb, PostgreSQL9.6+ as the database, the batch update method is as follows, taking Java as an example"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'    // use JdbcTemplate\n    public void batchUpdate() {\n        jdbcTemplate.batchUpdate(\n            "update storage_tbl set count = count -1 where id = 1",\n            "update storage_tbl set count = count -1 where id = 2"\n\t\t);\n    }\n\n    // use Statement\n    public void batchUpdateTwo() {\n        statement.addBatch("update storage_tbl set count = count -1 where id = 1");\n        statement.addBatch("update storage_tbl set count = count -1 where id = 2");\n        statement.executeBatch();\n    }\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);