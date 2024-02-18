"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[48616],{70215:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=a(74848),t=a(28453);const r={hidden:!0,title:"Kubernetes\u90e8\u7f72",keywords:["kubernetes","ops"],description:"\u4f7f\u7528 Kubernetes \u90e8\u7f72 Seata Server",author:"helloworlde",date:new Date("2019-12-01T00:00:00.000Z")},o="\u4f7f\u7528 Kubernetes \u90e8\u7f72 Seata Server",i={id:"ops/deploy-by-kubernetes",title:"Kubernetes\u90e8\u7f72",description:"\u4f7f\u7528 Kubernetes \u90e8\u7f72 Seata Server",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/ops/deploy-by-kubernetes.md",sourceDirName:"ops",slug:"/ops/deploy-by-kubernetes",permalink:"/seata.github.io/zh-cn/docs/v1.4/ops/deploy-by-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/ops/deploy-by-kubernetes.md",tags:[],version:"v1.4",frontMatter:{hidden:!0,title:"Kubernetes\u90e8\u7f72",keywords:["kubernetes","ops"],description:"\u4f7f\u7528 Kubernetes \u90e8\u7f72 Seata Server",author:"helloworlde",date:"2019-12-01T00:00:00.000Z"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Docker compose \u5feb\u901f\u90e8\u7f72 Seata Server",permalink:"/seata.github.io/zh-cn/docs/v1.4/ops/deploy-by-docker-compose-142"},next:{title:"Helm\u90e8\u7f72",permalink:"/seata.github.io/zh-cn/docs/v1.4/ops/deploy-by-helm"}},l={},c=[{value:"\u5feb\u901f\u542f\u52a8",id:"\u5feb\u901f\u542f\u52a8",level:3},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4f7f\u7528-kubernetes-\u90e8\u7f72-seata-server",children:"\u4f7f\u7528 Kubernetes \u90e8\u7f72 Seata Server"}),"\n",(0,s.jsx)(n.h3,{id:"\u5feb\u901f\u542f\u52a8",children:"\u5feb\u901f\u542f\u52a8"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa ",(0,s.jsx)(n.code,{children:"seata-server.yaml"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  type: NodePort\n  ports:\n    - port: 8091\n      nodePort: 30091\n      protocol: TCP\n      name: http\n  selector:\n    k8s-app: seata-server\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      k8s-app: seata-server\n  template:\n    metadata:\n      labels:\n        k8s-app: seata-server\n    spec:\n      containers:\n        - name: seata-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_PORT\n              value: "8091"\n            - name: STORE_MODE\n              value: file\n          ports:\n            - name: http\n              containerPort: 8091\n              protocol: TCP\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f seata-server.yaml\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",children:"\u81ea\u5b9a\u4e49\u914d\u7f6e"}),"\n",(0,s.jsx)(n.h3,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,s.jsxs)(n.p,{children:["\u652f\u6301\u7684\u73af\u5883\u53d8\u91cf\u548c Docker \u76f8\u540c\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"./deploy-by-docker",children:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u901a\u8fc7\u6302\u8f7d\u6587\u4ef6\u6216\u4f7f\u7528 ConfigMap \u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u6302\u8f7d\u540e\u9700\u8981\u901a\u8fc7\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"SEATA_CONFIG_NAME"})," \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e\uff0c\u5e76\u4e14\u73af\u5883\u53d8\u91cf\u7684\u503c\u9700\u8981\u4ee5",(0,s.jsx)(n.code,{children:"file:"}),"\u5f00\u59cb, \u5982: ",(0,s.jsx)(n.code,{children:"file:/root/seata-config/registry"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deployment"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      k8s-app: seata-server\n  template:\n    metadata:\n      labels:\n        k8s-app: seata-server\n    spec:\n      containers:\n        - name: seata-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_CONFIG_NAME\n              value: file:/root/seata-config/registry\n          ports:\n            - name: http\n              containerPort: 8091\n              protocol: TCP\n          volumeMounts:\n            - name: seata-config\n              mountPath: /root/seata-config\n      volumes:\n        - name: seata-config\n          configMap:\n            name: seata-server-config\n\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-server-config\ndata:\n  registry.conf: |\n    registry {\n        type = "nacos"\n        nacos {\n          application = "seata-server"\n          serverAddr = "192.168.199.2"\n        }\n    }\n    config {\n      type = "nacos"\n      nacos {\n        serverAddr = "192.168.199.2"\n        group = "SEATA_GROUP"\n      }\n    }\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var s=a(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);