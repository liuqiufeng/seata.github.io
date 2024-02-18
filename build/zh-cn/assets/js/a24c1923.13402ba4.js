"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[6614],{72727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var l=n(74848),s=n(28453);const r={title:"DML\u8bed\u53e5",keywords:["Seata"],description:"Seata DML\u8bed\u53e5"},i="DML\u8bed\u53e5",c={id:"user/sqlreference/dml",title:"DML\u8bed\u53e5",description:"Seata DML\u8bed\u53e5",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/sqlreference/dml.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/dml",permalink:"/seata.github.io/zh-cn/docs/v1.6/user/sqlreference/dml",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/sqlreference/dml.md",tags:[],version:"v1.6",frontMatter:{title:"DML\u8bed\u53e5",keywords:["Seata"],description:"Seata DML\u8bed\u53e5"},sidebar:"docs",previous:{title:"SQL\u9650\u5236",permalink:"/seata.github.io/zh-cn/docs/v1.6/user/sqlreference/sql-restrictions"},next:{title:"SQL\u4fee\u9970",permalink:"/seata.github.io/zh-cn/docs/v1.6/user/sqlreference/sql-decoration"}},d={},o=[];function x(e){const t={code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"dml\u8bed\u53e5",children:"DML\u8bed\u53e5"}),"\n",(0,l.jsx)(t.p,{children:"\u672c\u6587\u4ecb\u7ecd DML \u8bed\u53e5\u7c7b\u578b\u3001SQL \u5b9e\u4f8b\u4ee5\u53ca Seata \u662f\u5426\u652f\u6301\uff0c\u5e2e\u52a9\u60a8\u5728 Seata \u66f4\u987a\u7545\u7684\u4f7f\u7528 SQL\u3002"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u7c7b\u578b\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"SQL \u5b9e\u4f8b"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u652f\u6301\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"INSERT"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"INSERT INTO tb1_name (col_name,...) VALUES ({expr | FAULT},...),(...),..."}),"\u6216 ",(0,l.jsx)(t.code,{children:"INSERT INTO tb1_name SET col_name={expr | DEFAULT}, ..."})," \u6216",(0,l.jsx)(t.code,{children:"INSERT INTO tb1_name (col_name,...) VALUES ({expr | FAULT},...) ON DUPLICATE KEY UPDATE field1=value1,...;"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"UPDATE"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"UPDATE tb1_name SET col_name1=expr1 [, col_name2=expr2 ...][WHERE where_definition]"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"DELETE"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"DELETE FROM tb1_name [WHERE where_definition]"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"SELECT"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"SELECT [ALL | DISTINCT | DISTINCTROW ]select_expr, ... FROM tb1_name[WHERE where_definition]"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"REPLACE"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"REPLACE [LOW_PRIORITY | DELAYED][INTO] tb1_name [(col_name,...)]VALUES ({expr | DEFAULT},...),(...),..."}),"\u6216",(0,l.jsx)(t.code,{children:"REPLACE [LOW_PRIORITY | DELAYED][INTO] tb1_nameSET col_name={expr | DEFAULT}, ..."})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"TRUNCATE"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"TRUNCATE [TABLE] tb1_name"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"UPDATE JOIN"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"UPDATE tb1_name tb1 JOIN tb2_name tb2 ON tb2.col_name=tb1.col_name SET tb1.col_name1=expr1 [, tb1.col_name2=expr2 ...][ [WHERE where_definition]"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f since 1.6.0"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var l=n(96540);const s={},r=l.createContext(s);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);