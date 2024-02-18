"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[97332],{22405:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var i=s(74848),a=s(28453);const r={title:"Seata XA \u6a21\u5f0f",keywords:["Seata"],description:"Seata XA \u6a21\u5f0f\u3002"},c="Seata XA \u6a21\u5f0f",t={id:"dev/mode/xa-mode",title:"Seata XA \u6a21\u5f0f",description:"Seata XA \u6a21\u5f0f\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/dev/mode/xa-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/xa-mode",permalink:"/seata.github.io/zh-cn/docs/v1.4/dev/mode/xa-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/dev/mode/xa-mode.md",tags:[],version:"v1.4",frontMatter:{title:"Seata XA \u6a21\u5f0f",keywords:["Seata"],description:"Seata XA \u6a21\u5f0f\u3002"},sidebar:"docs",previous:{title:"Seata SAGA \u6a21\u5f0f",permalink:"/seata.github.io/zh-cn/docs/v1.4/dev/mode/saga-mode"},next:{title:"\u9886\u57df\u6a21\u578b\u6982\u8ff0",permalink:"/seata.github.io/zh-cn/docs/v1.4/dev/domain/overviewDomainModel"}},d={},l=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u6574\u4f53\u673a\u5236",id:"\u6574\u4f53\u673a\u5236",level:2},{value:"1. \u6574\u4f53\u8fd0\u884c\u673a\u5236",id:"1-\u6574\u4f53\u8fd0\u884c\u673a\u5236",level:4},{value:"2. \u6570\u636e\u6e90\u4ee3\u7406",id:"2-\u6570\u636e\u6e90\u4ee3\u7406",level:4},{value:"3. \u5206\u652f\u6ce8\u518c",id:"3-\u5206\u652f\u6ce8\u518c",level:4},{value:"XA \u6a21\u5f0f\u7684\u4f7f\u7528",id:"xa-\u6a21\u5f0f\u7684\u4f7f\u7528",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"seata-xa-\u6a21\u5f0f",children:"Seata XA \u6a21\u5f0f"}),"\n",(0,i.jsx)(n.h2,{id:"\u524d\u63d0",children:"\u524d\u63d0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u652f\u6301XA \u4e8b\u52a1\u7684\u6570\u636e\u5e93\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Java \u5e94\u7528\uff0c\u901a\u8fc7 JDBC \u8bbf\u95ee\u6570\u636e\u5e93\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6574\u4f53\u673a\u5236",children:"\u6574\u4f53\u673a\u5236"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Seata \u5b9a\u4e49\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u6846\u67b6\u5185\uff0c\u5229\u7528\u4e8b\u52a1\u8d44\u6e90\uff08\u6570\u636e\u5e93\u3001\u6d88\u606f\u670d\u52a1\u7b49\uff09\u5bf9 XA \u534f\u8bae\u7684\u652f\u6301\uff0c\u4ee5 XA \u534f\u8bae\u7684\u673a\u5236\u6765\u7ba1\u7406\u5206\u652f\u4e8b\u52a1\u7684\u4e00\u79cd \u4e8b\u52a1\u6a21\u5f0f\u3002"}),"\n",(0,i.jsx)("img",{src:"https://img.alicdn.com/tfs/TB1hSpccIVl614jSZKPXXaGjpXa-1330-924.png",style:{zoom:"50%"}}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u9636\u6bb5\uff1a"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53ef\u56de\u6eda\uff1a\u4e1a\u52a1 SQL \u64cd\u4f5c\u653e\u5728 XA \u5206\u652f\u4e2d\u8fdb\u884c\uff0c\u7531\u8d44\u6e90\u5bf9 XA \u534f\u8bae\u7684\u652f\u6301\u6765\u4fdd\u8bc1 ",(0,i.jsx)(n.em,{children:"\u53ef\u56de\u6eda"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u6301\u4e45\u5316\uff1aXA \u5206\u652f\u5b8c\u6210\u540e\uff0c\u6267\u884c XA prepare\uff0c\u540c\u6837\uff0c\u7531\u8d44\u6e90\u5bf9 XA \u534f\u8bae\u7684\u652f\u6301\u6765\u4fdd\u8bc1 ",(0,i.jsx)(n.em,{children:"\u6301\u4e45\u5316"}),"\uff08\u5373\uff0c\u4e4b\u540e\u4efb\u4f55\u610f\u5916\u90fd\u4e0d\u4f1a\u9020\u6210\u65e0\u6cd5\u56de\u6eda\u7684\u60c5\u51b5\uff09"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5b8c\u6210\u9636\u6bb5\uff1a"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5206\u652f\u63d0\u4ea4\uff1a\u6267\u884c XA \u5206\u652f\u7684 commit"}),"\n",(0,i.jsx)(n.li,{children:"\u5206\u652f\u56de\u6eda\uff1a\u6267\u884c XA \u5206\u652f\u7684 rollback"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"\u5de5\u4f5c\u673a\u5236",children:"\u5de5\u4f5c\u673a\u5236"}),"\n",(0,i.jsx)(n.h4,{id:"1-\u6574\u4f53\u8fd0\u884c\u673a\u5236",children:"1. \u6574\u4f53\u8fd0\u884c\u673a\u5236"}),"\n",(0,i.jsx)(n.p,{children:"XA \u6a21\u5f0f \u8fd0\u884c\u5728 Seata \u5b9a\u4e49\u7684\u4e8b\u52a1\u6846\u67b6\u5185\uff1a"}),"\n",(0,i.jsx)("img",{src:"https://img.alicdn.com/tfs/TB1uM2OaSslXu8jSZFuXXXg7FXa-1330-958.png",alt:"xa-fw",style:{zoom:"50%"}}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u9636\u6bb5\uff08E xecute\uff09\uff1a"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"XA start/XA end/XA prepare + SQL + \u6ce8\u518c\u5206\u652f"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5b8c\u6210\u9636\u6bb5\uff08F inish\uff09\uff1a"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"XA commit/XA rollback"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"2-\u6570\u636e\u6e90\u4ee3\u7406",children:"2. \u6570\u636e\u6e90\u4ee3\u7406"}),"\n",(0,i.jsx)(n.p,{children:"XA \u6a21\u5f0f\u9700\u8981 XAConnection\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u83b7\u53d6 XAConnection \u4e24\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65b9\u5f0f\u4e00\uff1a\u8981\u6c42\u5f00\u53d1\u8005\u914d\u7f6e XADataSource"}),"\n",(0,i.jsx)(n.li,{children:"\u65b9\u5f0f\u4e8c\uff1a\u6839\u636e\u5f00\u53d1\u8005\u7684\u666e\u901a DataSource \u6765\u521b\u5efa"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7b2c\u4e00\u79cd\u65b9\u5f0f\uff0c\u7ed9\u5f00\u53d1\u8005\u589e\u52a0\u4e86\u8ba4\u77e5\u8d1f\u62c5\uff0c\u9700\u8981\u4e3a XA \u6a21\u5f0f\u4e13\u95e8\u53bb\u5b66\u4e60\u548c\u4f7f\u7528 XA \u6570\u636e\u6e90\uff0c\u4e0e \u900f\u660e\u5316 XA \u7f16\u7a0b\u6a21\u578b\u7684\u8bbe\u8ba1\u76ee\u6807\u76f8\u8fdd\u80cc\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff0c\u5bf9\u5f00\u53d1\u8005\u6bd4\u8f83\u53cb\u597d\uff0c\u548c AT \u6a21\u5f0f\u4f7f\u7528\u4e00\u6837\uff0c\u5f00\u53d1\u8005\u5b8c\u5168\u4e0d\u5fc5\u5173\u5fc3 XA \u5c42\u9762\u7684\u4efb\u4f55\u95ee\u9898\uff0c\u4fdd\u6301\u672c\u5730\u7f16\u7a0b\u6a21\u578b\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u4f18\u5148\u8bbe\u8ba1\u5b9e\u73b0\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff1a\u6570\u636e\u6e90\u4ee3\u7406\u6839\u636e\u666e\u901a\u6570\u636e\u6e90\u4e2d\u83b7\u53d6\u7684\u666e\u901a JDBC \u8fde\u63a5\u521b\u5efa\u51fa\u76f8\u5e94\u7684 XAConnection\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7c7b\u6bd4 AT \u6a21\u5f0f\u7684\u6570\u636e\u6e90\u4ee3\u7406\u673a\u5236\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)("img",{src:"https://img.alicdn.com/tfs/TB11_LJcggP7K4jSZFqXXamhVXa-1564-894.png",alt:"ds1",style:{zoom:"50%"}}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u6709\u5c40\u9650\uff1a\u65e0\u6cd5\u4fdd\u8bc1\u517c\u5bb9\u7684\u6b63\u786e\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u8fd9\u79cd\u65b9\u6cd5\u662f\u5728\u505a\u6570\u636e\u5e93\u9a71\u52a8\u7a0b\u5e8f\u8981\u505a\u7684\u4e8b\u60c5\u3002\u4e0d\u540c\u7684\u5382\u5546\u3001\u4e0d\u540c\u7248\u672c\u7684\u6570\u636e\u5e93\u9a71\u52a8\u5b9e\u73b0\u673a\u5236\u662f\u5382\u5546\u79c1\u6709\u7684\uff0c\u6211\u4eec\u53ea\u80fd\u4fdd\u8bc1\u5728\u5145\u5206\u6d4b\u8bd5\u8fc7\u7684\u9a71\u52a8\u7a0b\u5e8f\u4e0a\u662f\u6b63\u786e\u7684\uff0c\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u9a71\u52a8\u7a0b\u5e8f\u7248\u672c\u5dee\u5f02\u5f88\u53ef\u80fd\u9020\u6210\u673a\u5236\u7684\u5931\u6548\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u70b9\u5728 Oracle \u4e0a\u4f53\u73b0\u975e\u5e38\u660e\u663e\u3002\u53c2\u89c1 Druid issue\uff1a",(0,i.jsx)(n.a,{href:"https://github.com/alibaba/druid/issues/3707",children:"https://github.com/alibaba/druid/issues/3707"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7efc\u5408\u8003\u8651\uff0cXA \u6a21\u5f0f\u7684\u6570\u636e\u6e90\u4ee3\u7406\u8bbe\u8ba1\u9700\u8981\u540c\u65f6\u652f\u6301\u7b2c\u4e00\u79cd\u65b9\u5f0f\uff1a\u57fa\u4e8e XA \u6570\u636e\u6e90\u8fdb\u884c\u4ee3\u7406\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7c7b\u6bd4 AT \u6a21\u5f0f\u7684\u6570\u636e\u6e90\u4ee3\u7406\u673a\u5236\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)("img",{src:"https://img.alicdn.com/tfs/TB1qJ57XZieb18jSZFvXXaI3FXa-1564-894.png",alt:"ds2",style:{zoom:"50%"}}),"\n",(0,i.jsx)(n.h4,{id:"3-\u5206\u652f\u6ce8\u518c",children:"3. \u5206\u652f\u6ce8\u518c"}),"\n",(0,i.jsx)(n.p,{children:"XA start \u9700\u8981 Xid \u53c2\u6570\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a Xid \u9700\u8981\u548c Seata \u5168\u5c40\u4e8b\u52a1\u7684 XID \u548c BranchId \u5173\u8054\u8d77\u6765\uff0c\u4ee5\u4fbf\u7531 TC \u9a71\u52a8 XA \u5206\u652f\u7684\u63d0\u4ea4\u6216\u56de\u6eda\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d Seata \u7684 BranchId \u662f\u5728\u5206\u652f\u6ce8\u518c\u8fc7\u7a0b\uff0c\u7531 TC \u7edf\u4e00\u751f\u6210\u7684\uff0c\u6240\u4ee5 XA \u6a21\u5f0f\u5206\u652f\u6ce8\u518c\u7684\u65f6\u673a\u9700\u8981\u5728 XA start \u4e4b\u524d\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5c06\u6765\u4e00\u4e2a\u53ef\u80fd\u7684\u4f18\u5316\u65b9\u5411\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"\u628a\u5206\u652f\u6ce8\u518c\u5c3d\u91cf\u5ef6\u540e\u3002\u7c7b\u4f3c AT \u6a21\u5f0f\u5728\u672c\u5730\u4e8b\u52a1\u63d0\u4ea4\u4e4b\u524d\u624d\u6ce8\u518c\u5206\u652f\uff0c\u907f\u514d\u5206\u652f\u6267\u884c\u5931\u8d25\u60c5\u51b5\u4e0b\uff0c\u6ca1\u6709\u610f\u4e49\u7684\u5206\u652f\u6ce8\u518c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f18\u5316\u65b9\u5411\u9700\u8981 BranchId \u751f\u6210\u673a\u5236\u7684\u53d8\u5316\u6765\u914d\u5408\u3002BranchId \u4e0d\u901a\u8fc7\u5206\u652f\u6ce8\u518c\u8fc7\u7a0b\u751f\u6210\uff0c\u800c\u662f\u751f\u6210\u540e\u518d\u5e26\u7740 BranchId \u53bb\u6ce8\u518c\u5206\u652f\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"xa-\u6a21\u5f0f\u7684\u4f7f\u7528",children:"XA \u6a21\u5f0f\u7684\u4f7f\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u4ece\u7f16\u7a0b\u6a21\u578b\u4e0a\uff0cXA \u6a21\u5f0f\u4e0e AT \u6a21\u5f0f\u4fdd\u6301\u5b8c\u5168\u4e00\u81f4\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u53c2\u8003 Seata \u5b98\u7f51\u7684\u6837\u4f8b\uff1a",(0,i.jsx)(n.a,{href:"https://github.com/apache/incubator-seata-samples/tree/master/seata-xa",children:"seata-xa"})]}),"\n",(0,i.jsx)(n.p,{children:"\u6837\u4f8b\u573a\u666f\u662f Seata \u7ecf\u5178\u7684\uff0c\u6d89\u53ca\u5e93\u5b58\u3001\u8ba2\u5355\u3001\u8d26\u6237 3 \u4e2a\u5fae\u670d\u52a1\u7684\u5546\u54c1\u8ba2\u8d2d\u4e1a\u52a1\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u6837\u4f8b\u4e2d\uff0c\u4e0a\u5c42\u7f16\u7a0b\u6a21\u578b\u4e0e AT \u6a21\u5f0f\u5b8c\u5168\u76f8\u540c\u3002\u53ea\u9700\u8981\u4fee\u6539\u6570\u636e\u6e90\u4ee3\u7406\uff0c\u5373\u53ef\u5b9e\u73b0 XA \u6a21\u5f0f\u4e0e AT \u6a21\u5f0f\u4e4b\u95f4\u7684\u5207\u6362\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'    @Bean("dataSource")\n    public DataSource dataSource(DruidDataSource druidDataSource) {\n        // DataSourceProxy for AT mode\n        // return new DataSourceProxy(druidDataSource);\n\n        // DataSourceProxyXA for XA mode\n        return new DataSourceProxyXA(druidDataSource);\n    }\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var i=s(96540);const a={},r=i.createContext(a);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);