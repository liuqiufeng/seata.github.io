"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[82806],{72131:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var a=s(74848),r=s(28453);const t={hidden:!0,title:"\u9ad8\u53ef\u7528\u90e8\u7f72",keywords:["kubernetes","ops"],description:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72",author:"helloworlde",date:new Date("2020-04-10T00:00:00.000Z")},o="Seata \u9ad8\u53ef\u7528\u90e8\u7f72",i={id:"ops/deploy-ha",title:"\u9ad8\u53ef\u7528\u90e8\u7f72",description:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.1/ops/deploy-ha.md",sourceDirName:"ops",slug:"/ops/deploy-ha",permalink:"/seata.github.io/zh-cn/docs/v1.1/ops/deploy-ha",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.1/ops/deploy-ha.md",tags:[],version:"v1.1",frontMatter:{hidden:!0,title:"\u9ad8\u53ef\u7528\u90e8\u7f72",keywords:["kubernetes","ops"],description:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72",author:"helloworlde",date:"2020-04-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"Helm\u90e8\u7f72",permalink:"/seata.github.io/zh-cn/docs/v1.1/ops/deploy-by-helm"}},c={},d=[{value:"Seata-Server",id:"seata-server",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"seata-\u9ad8\u53ef\u7528\u90e8\u7f72",children:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Seata \u7684\u9ad8\u53ef\u7528\u4f9d\u8d56\u4e8e\u6ce8\u518c\u4e2d\u5fc3\u3001\u914d\u7f6e\u4e2d\u5fc3\u548c\u6570\u636e\u5e93\u6765\u5b9e\u73b0"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"seata-server",children:"Seata-Server"}),"\n",(0,a.jsx)(n.p,{children:"Seata-Server \u9700\u8981\u4f7f\u7528\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5e76\u628a\u4e8b\u52a1\u6570\u636e\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u4ee5 Nacos \u4e3a\u4f8b"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4fee\u6539",(0,a.jsx)(n.code,{children:"registry.conf"}),"\u7684\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'registry {\n  type = "nacos"\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "192.168.199.2"\n    namespace = ""\n    cluster = "default"\n    username = ""\n    password = ""\n  }\n}\n\nconfig {\n  type = "nacos"\n  \n  nacos {\n    serverAddr = "192.168.199.2"\n    namespace = ""\n    group = "SEATA_GROUP"\n    username = ""\n    password = ""\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u9700\u8981\u4fee\u6539\u914d\u7f6e\u4e2d\u5fc3\u7684\u4ee5\u4e0b\u51e0\u4e2a\u914d\u7f6e(\u542bdb\u4e0eredis,\u4e8c\u8005\u9009\u5176\u4e00 \u6ce8",":redis","\u9700seata-server 1.3\u7248\u672c\u53ca\u4ee5\u4e0a)"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"service.vgroupMapping.my_test_tx_group=default\nstore.mode=db|redis\n-----db-----\nstore.db.datasource=druid\nstore.db.dbType=mysql\nstore.db.driverClassName=com.mysql.jdbc.Driver\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata?useUnicode=true\nstore.db.user=root\nstore.db.password=123456\n----redis----\nstore.redis.host=127.0.0.1\nstore.redis.port=6379\nstore.redis.maxConn=10\nstore.redis.minConn=1\nstore.redis.database=0\nstore.redis.password=null\nstore.redis.queryLimit=100\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["db\u6a21\u5f0f\u9700\u8981\u5728\u6570\u636e\u5e93\u521b\u5efa ",(0,a.jsx)(n.code,{children:"global_table"}),", ",(0,a.jsx)(n.code,{children:"branch_table"}),", ",(0,a.jsx)(n.code,{children:"lock_table"}),"\u8868"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u76f8\u5e94\u7684\u811a\u672c\u5728GitHub \u7684 ",(0,a.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"/script/server/db/"})," \u76ee\u5f55\u4e0b"]}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u6837\uff0c\u542f\u52a8\u591a\u4e2aseata-server\uff0c\u5373\u53ef\u5b9e\u73b0\u5176\u9ad8\u53ef\u7528"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5 Kubernetes \u4e3a\u4f8b\uff0c\u90e8\u7f72\u6587\u4ef6\u53c2\u8003:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: seata-ha-server\n  namespace: default\n  labels:\n    app.kubernetes.io/name: seata-ha-server\nspec:\n  type: ClusterIP\n  ports:\n    - port: 8091\n      protocol: TCP\n      name: http\n  selector:\n    app.kubernetes.io/name: seata-ha-server\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-ha-server\n  namespace: default\n  labels:\n    app.kubernetes.io/name: seata-ha-server\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: seata-ha-server\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: seata-ha-server\n    spec:\n      containers:\n        - name: seata-ha-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_CONFIG_NAME\n              value: file:/root/seata-config/registry\n          ports:\n            - name: http\n              containerPort: 8091\n              protocol: TCP\n          volumeMounts:\n            - name: seata-config\n              mountPath: /root/seata-config\n      volumes:\n        - name: seata-config\n          configMap:\n            name: seata-ha-server-config\n\n\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-ha-server-config\ndata:\n  registry.conf: |\n    registry {\n        type = "nacos"\n        nacos {\n          application = "seata-server"\n          serverAddr = "192.168.199.2"\n        }\n    }\n    config {\n      type = "nacos"\n      nacos {\n        serverAddr = "192.168.199.2"\n        group = "SEATA_GROUP"\n      }\n    }\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var a=s(96540);const r={},t=a.createContext(r);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);