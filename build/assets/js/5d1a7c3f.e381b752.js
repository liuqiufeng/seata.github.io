"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[92411],{26088:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=r(74848),o=r(28453);const t={hidden:!0,title:"Deploy Seata Server By Docker Compose",keywords:["docker-compose","ops"],description:"Deploy Seata Server By Docker Compose",author:"zouwei",date:new Date("2021-12-05T00:00:00.000Z")},i="Deploy Seata Server By Docker Compose",a={id:"ops/deploy-by-docker-compose-142",title:"Deploy Seata Server By Docker Compose",description:"Deploy Seata Server By Docker Compose",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.0/ops/deploy-by-docker-compose-142.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker-compose-142",permalink:"/seata.github.io/docs/ops/deploy-by-docker-compose-142",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.0/ops/deploy-by-docker-compose-142.md",tags:[],version:"v2.0",frontMatter:{hidden:!0,title:"Deploy Seata Server By Docker Compose",keywords:["docker-compose","ops"],description:"Deploy Seata Server By Docker Compose",author:"zouwei",date:"2021-12-05T00:00:00.000Z"}},c={},d=[{value:"Version Deployment History",id:"version-deployment-history",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"<a>No Registration Center, File Storage</a>",id:"no-registration-center-file-storage",level:3},{value:"<a>No Registration Center, db Storage</a>",id:"no-registration-center-db-storage",level:3},{value:"<a>Nacos Registration Center, db Storage</a>",id:"nacos-registration-center-db-storage",level:3},{value:"<a>High Available Usage Deployment</a>",id:"high-available-usage-deployment",level:3},{value:"Environment variables",id:"environment-variables",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-seata-server-by-docker-compose",children:"Deploy Seata Server By Docker Compose"}),"\n",(0,s.jsx)(n.h2,{id:"version-deployment-history",children:"Version Deployment History"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ops/deploy-by-docker-compose-142/",children:"Version before 1.5.0"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ops/deploy-by-docker-compose/",children:"Version 1.5.0 and above"})}),"\n",(0,s.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Please avoid directly pulling the latest version image. The latest version is not necessarily a stable version. To avoid unnecessary problems, please go to ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/seataio/seata-server/tags",children:"docker image warehouse"})," to determine the image version to be pulled."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)("a",{href:"#file-file",children:"No Registration Center, File Storage"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)("a",{href:"#file-db",children:"No Registration Center, db Storage"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)("a",{href:"#nacos-db",children:"Nacos Registration Center, db Storage"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)("a",{href:"#ha-nacos-db",children:"High Available Usage Deployment"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"no-registration-center-file-storage",children:(0,s.jsx)("a",{id:"file-file",children:"No Registration Center, File Storage"})}),"\n",(0,s.jsx)(n.p,{children:"In this mode, there is no need for a registration center or any third-party storage center."}),"\n",(0,s.jsx)(n.p,{children:"docker-compose.yaml"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n'})}),"\n",(0,s.jsx)(n.h3,{id:"no-registration-center-db-storage",children:(0,s.jsx)("a",{id:"file-db",children:"No Registration Center, db Storage"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The db mode needs to create the corresponding table structure in the database, please refer to ",(0,s.jsx)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"[table creation script]"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(1) Prepare configuration file: file.conf"})}),"\n",(0,s.jsxs)(n.p,{children:["For more storage mode support, please refer to ",(0,s.jsx)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt",children:"More Storage Modes"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"# Storage mode\nstore.mode=db\n\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# Need to adjust driverClassName according to mysql version\n# Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n# Driver for versions below mysql8 is: com.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\n# Pay attention to adjusting the parameters host and port according to the actual production situation.\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n# database username\nstore.db.user=\n# Username Password\nstore.db.password=\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(2) Prepare file: registry.conf"})}),"\n",(0,s.jsxs)(n.p,{children:["For more registration center support, please refer to ",(0,s.jsx)("a",{href:"/docs/user/registry/",children:"Registration Center"})]}),"\n",(0,s.jsxs)(n.p,{children:["For more configuration center support, please refer to ",(0,s.jsx)("a",{href:"/docs/user/configuration/",children:"Configuration Center"})]}),"\n",(0,s.jsx)(n.p,{children:"Direct connection mode (no registration center)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'registry {\n   type = "file"\n}\n\nconfig {\n   type = "file"\n  \n   file {\n     name="file:/root/seata-config/file.conf"\n   }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(3) Prepare file: docker-compose.yaml"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n   seata-server:\n     image: seataio/seata-server:${latest-release-version}\n     hostname: seata-server\n     ports:\n       - "8091:8091"\n     environment:\n       - SEATA_PORT=8091\n       - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n     volumes:\n     # You need to put both file.conf and registry.conf in the ./seata-server/config folder\n       - "./seata-server/config:/root/seata-config"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"nacos-registration-center-db-storage",children:(0,s.jsx)("a",{id:"nacos-db",children:"Nacos Registration Center, db Storage"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The db mode needs to create the corresponding table structure in the database, please refer to ",(0,s.jsx)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"[table creation script]"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(1) Prepare file: registry.conf"})}),"\n",(0,s.jsx)(n.p,{children:"Nacos Registration Center."}),"\n",(0,s.jsxs)(n.p,{children:["For more registration center support, please refer to ",(0,s.jsx)("a",{href:"/docs/user/registry/",children:"Registration Center"})]}),"\n",(0,s.jsxs)(n.p,{children:["For more configuration center support, please refer to ",(0,s.jsx)("a",{href:"/docs/user/configuration/",children:"Configuration Center"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'registry {\n   type = "nacos"\n  \n   nacos {\n   # The alias the seata service is registered on nacos, and the client calls the service through this alias.\n     application = "seata-server"\n   # Please configure the IP and port of the nacos service according to the actual production environment.\n     serverAddr = "127.0.0.1:8848"\n   # The namespace specified on nacos\n     namespace = ""\n     cluster = "default"\n     username = "nacos"\n     password = "nacos"\n   }\n}\n\nconfig {\n   type = "nacos"\n  \n   nacos {\n     # Please configure the IP and port of the nacos service according to the actual production environment.\n     serverAddr = "127.0.0.1:8848"\n     # The namespace specified on nacos\n     namespace = ""\n     group = "SEATA_GROUP"\n     username = "nacos"\n     password = "nacos"\n   # Starting from v1.4.2, it has been supported to obtain all configuration information from one Nacos dataId. You only need to add an additional dataId configuration item.\n     dataId: "seataServer.properties"\n   }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(2) Prepare nacos configuration center configuration"})}),"\n",(0,s.jsxs)(n.p,{children:["For more storage mode support, please refer to ",(0,s.jsx)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt",children:"More storage modes"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"You need to create a new configuration in nacos, where the dataId is seataServer.properties"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:'# Storage mode\nstore.mode=db\n\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# Need to adjust driverClassName according to mysql version\n# Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n# Driver for versions below mysql8 is: com.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\n# Pay attention to adjusting the parameters host and port according to the actual production situation.\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n# database username\nstore.db.user= "usernanme"\n# Username Password\nstore.db.password= "password"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(3) Prepare file: docker-compose.yaml"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n   seata-server:\n     image: seataio/seata-server:${latest-release-version}\n     hostname: seata-server\n     ports:\n       - "8091:8091"\n     environment:\n       # Specify the seata service startup port\n       - SEATA_PORT=8091\n       # Specify the Ip registered to nacos. The client will access the seata service through this IP.\n       # Pay attention to the difference between public network IP and internal network IP.\n       - SEATA_IP=127.0.0.1\n       - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n     volumes:\n     # Because registry.conf is the nacos configuration center, you only need to put registry.conf in the ./seata-server/config folder\n       - "./seata-server/config:/root/seata-config"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"high-available-usage-deployment",children:(0,s.jsx)("a",{id:"ha-nacos-db",children:"High Available Usage Deployment"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Seata high availability usage deployment relies on the registration center and database, but does not depend on the configuration center."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The db mode needs to create the corresponding table structure in the database,  please refer to ",(0,s.jsx)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"[table creation script]"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(1) Prepare configuration file: file.conf"})}),"\n",(0,s.jsxs)(n.p,{children:["For more storage mode support, please refer to ",(0,s.jsx)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt",children:"More Storage Modes"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"# Storage mode\nstore.mode=db\n\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# Need to adjust driverClassName according to mysql version\n# Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n# Driver for versions below mysql8 is: com.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\n# Pay attention to adjusting the parameters host and port according to the actual production situation.\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n# database username\nstore.db.user=\n# Username Password\nstore.db.password=\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(2) Prepare file: registry.conf"})}),"\n",(0,s.jsx)(n.p,{children:"Nacos registration center."}),"\n",(0,s.jsxs)(n.p,{children:["For more registration center support, please refer to ",(0,s.jsx)("a",{href:"/docs/user/registry/",children:"Registration Center"})]}),"\n",(0,s.jsxs)(n.p,{children:["For more configuration center support, please refer to ",(0,s.jsx)("a",{href:"/docs/user/configuration/",children:"Configuration Center"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'registry {\n   type = "nacos"\n  \n   nacos {\n   # The alias the seata service is registered on nacos, and the client calls the service through this alias.\n     application = "seata-server"\n   #IP and port of nacos service\n     serverAddr = "127.0.0.1:8848"\n   # The namespace specified on nacos\n     namespace = ""\n     cluster = "default"\n     username = "nacos"\n     password = "nacos"\n   }\n}\n\nconfig {\n   type = "file"\n  \n   file {\n     name="file:/root/seata-config/file.conf"\n   }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(3) Prepare file: docker-compose.yaml"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["As long as the configuration is consistent, the seata service can be deployed on multiple instances on one machine or on multiple different hosts at the same time to achieve high service availability. ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ops/deploy-ha/",children:"High Availability Usage Deployment"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n   #seataservice1\n   seata-server-1:\n     image: seataio/seata-server:${latest-release-version}\n     hostname: seata-server\n     ports:\n       - "8091:8091"\n     environment:\n       # Specify the seata service startup port\n       - SEATA_PORT=8091\n       # Specify the Ip registered to nacos. The client will access the seata service through this IP.\n       # Pay attention to the difference between public network IP and internal network IP.\n       - SEATA_IP=127.0.0.1\n       - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n     volumes:\n     # You need to put both file.conf and registry.conf in the ./seata-server/config folder\n       - "./seata-server/config:/root/seata-config"\n   # seataservice2\n   seata-server-2:\n     image: seataio/seata-server:${latest-release-version}\n     hostname: seata-server\n     ports:\n       - "8092:8092"\n     environment:\n       # Specify the seata service startup port\n       - SEATA_PORT=8092\n       # Specify the Ip registered to nacos. The client will access the seata service through this IP.\n       # Pay attention to the difference between public network IP and internal network IP.\n       - SEATA_IP=127.0.0.1\n       - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n     volumes:\n     # You need to put both file.conf and registry.conf in the ./seata-server/config folder\n       - "./seata-server/config:/root/seata-config"\n  \n   # seata service 3......seata service N\n'})}),"\n",(0,s.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,s.jsx)(n.p,{children:"seata-server supports the following environment variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SEATA_IP"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Optional. It specifies the IP started by seata-server. This IP is used when registering with the registration center, such as eureka, etc."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SEATA_PORT"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Optional. It is used to specify the port where seata-server starts. The default port is ",(0,s.jsx)(n.code,{children:"8091"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"STORE_MODE"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Optional. It is used to specify the transaction log storage method of seata-server, supports ",(0,s.jsx)(n.code,{children:"db"}),", ",(0,s.jsx)(n.code,{children:"file"}),", ",(0,s.jsx)(n.code,{children:"redis"})," (supported by Seata-Server 1.3 and above). The default value is ",(0,s.jsx)(n.code,{children:"file"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SERVER_NODE"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Optional. It is used to specify the seata-server node ID, such as ",(0,s.jsx)(n.code,{children:"1"}),",",(0,s.jsx)(n.code,{children:"2"}),",",(0,s.jsx)(n.code,{children:"3"}),"... The default value is ",(0,s.jsx)(n.code,{children:"generated based on ip"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SEATA_ENV"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Optional. It is used to specify the seata-server operating environment, such as ",(0,s.jsx)(n.code,{children:"dev"}),", ",(0,s.jsx)(n.code,{children:"test"}),", etc. When the service is started, configurations such as ",(0,s.jsx)(n.code,{children:"registry-dev.conf"})," will be used."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SEATA_CONFIG_NAME"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Optional. It is used to specify the configuration file location, such as ",(0,s.jsx)(n.code,{children:"file:/root/registry"}),", which will load ",(0,s.jsx)(n.code,{children:"/root/registry.conf"})," as the configuration file. If you need to specify the ",(0,s.jsx)(n.code,{children:"file.conf"})," file at the same time, you need to change the value of ",(0,s.jsx)(n.code,{children:"config.file.name"})," in ",(0,s.jsx)(n.code,{children:"registry.conf"})," to something like ",(0,s.jsx)(n.code,{children:"file:/root/file.conf"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(96540);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);