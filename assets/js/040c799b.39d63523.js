"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[71517],{13144:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(74848),o=s(28453);const i={hidden:!0,title:"Deploy Seata Server By Docker",keywords:["docker","docker-compose","ops"],description:"Deploy Seata Server by Docker",author:"helloworlde",date:new Date("2019-11-25T00:00:00.000Z")},t="Deploy Seata Server By Docker",c={id:"ops/deploy-by-docker-142",title:"Deploy Seata Server By Docker",description:"Deploy Seata Server by Docker",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/ops/deploy-by-docker-142.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker-142",permalink:"/seata.github.io/docs/v1.2/ops/deploy-by-docker-142",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/ops/deploy-by-docker-142.md",tags:[],version:"v1.2",frontMatter:{hidden:!0,title:"Deploy Seata Server By Docker",keywords:["docker","docker-compose","ops"],description:"Deploy Seata Server by Docker",author:"helloworlde",date:"2019-11-25T00:00:00.000Z"},sidebar:"docs",previous:{title:"Deploy Server",permalink:"/seata.github.io/docs/v1.2/ops/deploy-server"},next:{title:"Deploy Seata Server By Docker Compose",permalink:"/seata.github.io/docs/v1.2/ops/deploy-by-docker-compose-142"}},a={},l=[{value:"Precautions",id:"precautions",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Start seata-server instance",id:"start-seata-server-instance",level:4},{value:"Specify seata-server IP and port to start",id:"specify-seata-server-ip-and-port-to-start",level:4},{value:"Docker compose startup",id:"docker-compose-startup",level:4},{value:"Container command line and view logs",id:"container-command-line-and-view-logs",level:2},{value:"Use custom configuration file",id:"use-custom-configuration-file",level:2},{value:"Environment variables",id:"environment-variables",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploy-seata-server-by-docker",children:"Deploy Seata Server By Docker"}),"\n",(0,r.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Please avoid directly pulling the latest version image. The latest version is not necessarily a stable version. To avoid unnecessary problems, please go to ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/seataio/seata-server/tags",children:"docker image warehouse"})," to determine the image version to be pulled."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsx)(n.h4,{id:"start-seata-server-instance",children:"Start seata-server instance"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker run --name seata-server -p 8091:8091 seataio/seata-server:1.4.2\n"})}),"\n",(0,r.jsx)(n.h4,{id:"specify-seata-server-ip-and-port-to-start",children:"Specify seata-server IP and port to start"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker run --name seata-server \\\n         -p 8091:8091 \\\n         -e SEATA_IP=192.168.1.1 \\\n         -e SEATA_PORT=8091 \\\n         seataio/seata-server\n"})}),"\n",(0,r.jsx)(n.h4,{id:"docker-compose-startup",children:"Docker compose startup"}),"\n",(0,r.jsxs)(n.p,{children:["Take ",(0,r.jsx)(n.code,{children:"docker-compose.yaml"})," for example"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3"\nservices:\n   seata-server:\n     image: seataio/seata-server:${latest-release-version}\n     hostname: seata-server\n     ports:\n       - "8091:8091"\n     environment:\n       - SEATA_PORT=8091\n       - STORE_MODE=file\n'})}),"\n",(0,r.jsx)(n.h2,{id:"container-command-line-and-view-logs",children:"Container command line and view logs"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker exec -it seata-server sh\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker logs -f seata-server\n"})}),"\n",(0,r.jsx)(n.h2,{id:"use-custom-configuration-file",children:"Use custom configuration file"}),"\n",(0,r.jsxs)(n.p,{children:["Custom configuration files need to be implemented by mounting files. Mount ",(0,r.jsx)(n.code,{children:"registry.conf"})," and ",(0,r.jsx)(n.code,{children:"file.conf"})," on the host to the corresponding directory in the container."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specify registry.conf"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When using a custom configuration file, the environment variable ",(0,r.jsx)(n.code,{children:"SEATA_CONFIG_NAME"})," must be specified, and the value needs to start with ",(0,r.jsx)(n.code,{children:"file:"}),", such as: ",(0,r.jsx)(n.code,{children:"file:/root/seata-config/registry"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker run --name seata-server \\\n         -p 8091:8091 \\\n         -e SEATA_CONFIG_NAME=file:/root/seata-config/registry \\\n         -v /User/seata/config:/root/seata-config \\\n         seataio/seata-server\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Among them ",(0,r.jsx)(n.code,{children:"-e"})," is used to configure environment variables, ",(0,r.jsx)(n.code,{children:"-v"})," is used to mount the host directory."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specify file.conf"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you also need to specify the ",(0,r.jsx)(n.code,{children:"file.conf"})," configuration file at the same time, you need to change the ",(0,r.jsx)(n.code,{children:"config"})," configuration in the ",(0,r.jsx)(n.code,{children:"registry.conf"})," file to the following content. The value of ",(0,r.jsx)(n.code,{children:"name"})," is the corresponding path in the container."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'config {\n   type = "file"\n\n   file {\n     name = "file:/root/seata-config/file.conf"\n   }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,r.jsx)(n.p,{children:"seata-server supports the following environment variables:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_IP"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Optional. It specifies the IP started by seata-server. This IP is used when registering with the registration center, such as eureka, etc."}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_PORT"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Optional. It is used to specify the port where seata-server starts. The default port is ",(0,r.jsx)(n.code,{children:"8091"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"STORE_MODE"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Optional. It is used to specify the transaction log storage method of seata-server, supports ",(0,r.jsx)(n.code,{children:"db"}),", ",(0,r.jsx)(n.code,{children:"file"}),", ",(0,r.jsx)(n.code,{children:"redis"})," (supported by Seata-Server 1.3 and above). The default value is ",(0,r.jsx)(n.code,{children:"file"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SERVER_NODE"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Optional. It is used to specify the seata-server node ID, such as ",(0,r.jsx)(n.code,{children:"1"}),",",(0,r.jsx)(n.code,{children:"2"}),",",(0,r.jsx)(n.code,{children:"3"}),"... The default value is ",(0,r.jsx)(n.code,{children:"generated based on ip"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_ENV"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Optional. It is used to specify the seata-server operating environment, such as ",(0,r.jsx)(n.code,{children:"dev"}),", ",(0,r.jsx)(n.code,{children:"test"}),", etc. When the service is started, configurations such as ",(0,r.jsx)(n.code,{children:"registry-dev.conf"})," will be used."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_CONFIG_NAME"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Optional. It is used to specify the configuration file location, such as ",(0,r.jsx)(n.code,{children:"file:/root/registry"}),", which will load ",(0,r.jsx)(n.code,{children:"/root/registry.conf"})," as the configuration file. If you need to specify the ",(0,r.jsx)(n.code,{children:"file.conf"})," file at the same time, you need to change the value of ",(0,r.jsx)(n.code,{children:"config.file.name"})," in ",(0,r.jsx)(n.code,{children:"registry.conf"})," to something like ",(0,r.jsx)(n.code,{children:"file:/root/file.conf"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(96540);const o={},i=r.createContext(o);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);