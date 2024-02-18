"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[91620],{72165:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=a(74848),s=a(28453);const i={title:"SkyWalking",keywords:["Seata","SkyWalking"],description:"Seata SkyWalking"},r="SkyWalking",l={id:"user/apm/skywalking",title:"SkyWalking",description:"Seata SkyWalking",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/user/apm/skywalking.md",sourceDirName:"user/apm",slug:"/user/apm/skywalking",permalink:"/seata.github.io/zh-cn/docs/v1.2/user/apm/skywalking",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/user/apm/skywalking.md",tags:[],version:"v1.2",frontMatter:{title:"SkyWalking",keywords:["Seata","SkyWalking"],description:"Seata SkyWalking"},sidebar:"docs",previous:{title:"\u51fd\u6570",permalink:"/seata.github.io/zh-cn/docs/v1.2/user/sqlreference/function"},next:{title:"Prometheus",permalink:"/seata.github.io/zh-cn/docs/v1.2/user/apm/prometheus"}},c={},d=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u7f16\u8bd1&amp;\u914d\u7f6e",id:"\u7f16\u8bd1\u914d\u7f6e",level:3},{value:"\u63a5\u5165\u76d1\u63a7",id:"\u63a5\u5165\u76d1\u63a7",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"skywalking",children:"SkyWalking"}),"\n",(0,t.jsx)(n.p,{children:"SkyWalking \u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684APM\uff08\u5e94\u7528\u6027\u80fd\u76d1\u63a7\uff09\u5b9e\u73b0."}),"\n",(0,t.jsx)(n.h2,{id:"\u9884\u5907\u5de5\u4f5c",children:"\u9884\u5907\u5de5\u4f5c"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u60a8\u5c06 SkyWalking \u6574\u5408\u5230\u60a8\u7684 Seata \u5de5\u7a0b\u524d\uff0c\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 SkyWalking \u670d\u52a1\uff0c\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 SkyWalking \u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"https://github.com/apache/skywalking/tree/master/docs",children:"SkyWalking \u5feb\u901f\u5165\u95e8"}),"\u3002\u5efa\u8bae\u4f7f\u7528 SkyWalking ",(0,t.jsx)(n.code,{children:"8.6.0"})," \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,t.jsx)(n.p,{children:'Seata \u878d\u5408 SkyWalking \u5e94\u7528\u6027\u80fd\u76d1\u63a7\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a"\u7f16\u8bd1&\u914d\u7f6e"\u4ee5\u53ca"\u63a5\u5165\u76d1\u63a7"\u8fd9\u4e24\u4e2a\u6b65\u9aa4\u3002'}),"\n",(0,t.jsx)(n.h3,{id:"\u7f16\u8bd1\u914d\u7f6e",children:"\u7f16\u8bd1&\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uff0c\u60a8\u9700\u8981\u4e0b\u8f7dSeata\u6e90\u7801\uff0c\u5e76\u5728\u6e90\u7801\u6839\u76ee\u5f55\u6267\u884c:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"mvn clean package -Dmaven.test.skip=true"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5c06",(0,t.jsx)(n.code,{children:"seata/ext/apm-skywalking/target/seata-skywalking-{version}.jar"}),"\u653e\u5165SkyWalking \u63a2\u9488\u63d2\u4ef6\u6587\u4ef6\u5939\u4e2d"]}),"\n",(0,t.jsx)(n.p,{children:"\u5f3a\u70c8\u5730\u63a8\u8350\u60a8\u4f7f\u7528 Seata \u6700\u65b0\u7248\uff1a"}),"\n",(0,t.jsx)(n.h3,{id:"\u63a5\u5165\u76d1\u63a7",children:"\u63a5\u5165\u76d1\u63a7"}),"\n",(0,t.jsxs)(n.p,{children:["Seata \u7684\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u63a5\u5165SkyWalking\u4e0e\u5176\u4ed6\u5e94\u7528\u670d\u52a1\u5e76\u65e0\u4e8c\u81f4\uff0c\u53ef\u53c2\u8003",(0,t.jsx)(n.a,{href:"https://github.com/apache/skywalking/blob/f3b567160ce61675cb692c3417101162d67093de/docs/en/setup/service-agent/java-agent/Setting-override.md",children:"SkyWalking \u63a2\u9488\u914d\u7f6e"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"Seata \u6d89\u53ca\u7684\u91cd\u8981\u53c2\u6570\u6709\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53c2\u6570"}),(0,t.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"skywalking.plugin.seata.server"}),(0,t.jsxs)(n.td,{children:["\u5e03\u5c14\u5c5e\u6027\uff0c\u5f53\u503c\u4e3a",(0,t.jsx)(n.code,{children:"true"}),"\uff0c\u6807\u8bc6\u672c\u5e94\u7528\u670d\u52a1\u662f\u5426\u4e3aSeata server"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"skywalking.plugin.jdbc.trace_sql_parameters"}),(0,t.jsxs)(n.td,{children:["\u5e03\u5c14\u5c5e\u6027\uff0c\u5f53\u503c\u4e3a",(0,t.jsx)(n.code,{children:"true"}),"\uff0c\u672c\u5e94\u7528\u670d\u52a1\u8bb0\u5f55sql\u53c2\u6570"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"skywalking.agent.service_name"}),(0,t.jsx)(n.td,{children:"\u5b57\u7b26\u4e32\u5c5e\u6027\uff0c\u6807\u8bc6\u672c\u5e94\u7528\u670d\u52a1\u5728SkyWalking\u7684\u552f\u4e00\u6807\u8bc6"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Seata\u5ba2\u6237\u7aef\u63a2\u9488\u53c2\u6570\u53ef\u53c2\u8003"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"java -javaagent:{path}/skywalking-agent.jar -Dskywalking.agent.service_name=seata_biz -Dskywalking.plugin.jdbc.trace_sql_parameters=true -jar seata_biz.jar\n"})}),"\n",(0,t.jsx)(n.p,{children:"Seata\u670d\u52a1\u7aef\u63a2\u9488\u53c2\u6570\u53ef\u53c2\u8003"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"java -javaagent:{path}/skywalking-agent.jar -Dskywalking.agent.service_name=seata_tc -Dskywalking.plugin.jdbc.trace_sql_parameters=true -Dskywalking.plugin.seata.server=true -jar seata_tc.jar\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f53\u524d\u53ea\u652f\u6301\u975e\u6279\u5904\u7406\uff08enableClientBatchSendRequest \u4e3a false\uff09\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u6a21\u5f0f"}),"\n"]})]})}function k(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>l});var t=a(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);