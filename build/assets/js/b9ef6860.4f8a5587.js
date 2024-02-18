"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[78965],{10457:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=s(74848),i=s(28453);const o={hidden:!0,title:"Deploy Seata Server By Docker",keywords:["docker"],description:"Deploy Seata Server By Docker",author:"helloworlde",date:new Date("2019-11-25T00:00:00.000Z")},c="Deploy Seata Server By Docker",l={id:"ops/deploy-by-docker",title:"Deploy Seata Server By Docker",description:"Deploy Seata Server By Docker",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.3/ops/deploy-by-docker.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker",permalink:"/seata.github.io/docs/v1.3/ops/deploy-by-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.3/ops/deploy-by-docker.md",tags:[],version:"v1.3",frontMatter:{hidden:!0,title:"Deploy Seata Server By Docker",keywords:["docker"],description:"Deploy Seata Server By Docker",author:"helloworlde",date:"2019-11-25T00:00:00.000Z"}},t={},a=[{value:"Quick Start",id:"quick-start",level:2},{value:"Start a seata-server instance",id:"start-a-seata-server-instance",level:4},{value:"Specify server IP and port",id:"specify-server-ip-and-port",level:4},{value:"Docker compose",id:"docker-compose",level:4},{value:"Access container and view log",id:"access-container-and-view-log",level:2},{value:"Using custom configuration file",id:"using-custom-configuration-file",level:2},{value:"Environment Variables",id:"environment-variables",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploy-seata-server-by-docker",children:"Deploy Seata Server By Docker"}),"\n",(0,r.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsx)(n.h4,{id:"start-a-seata-server-instance",children:"Start a seata-server instance"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker run --name seata-server -p 8091:8091 seataio/seata-server:1.4.2\n"})}),"\n",(0,r.jsx)(n.h4,{id:"specify-server-ip-and-port",children:"Specify server IP and port"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker run --name seata-server \\\n        -p 8091:8091 \\\n        -e SEATA_IP=192.168.1.1 \\\n        -e SEATA_PORT=8091 \\\n        seataio/seata-server\n"})}),"\n",(0,r.jsx)(n.h4,{id:"docker-compose",children:"Docker compose"}),"\n",(0,r.jsxs)(n.p,{children:["Example of ",(0,r.jsx)(n.code,{children:"docker-compose.yaml"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3"\nservices:\n  seata-server:\n    image: seataio/seata-server\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n'})}),"\n",(0,r.jsx)(n.h2,{id:"access-container-and-view-log",children:"Access container and view log"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker exec -it seata-server sh\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker logs -f seata-server\n"})}),"\n",(0,r.jsx)(n.h2,{id:"using-custom-configuration-file",children:"Using custom configuration file"}),"\n",(0,r.jsxs)(n.p,{children:["Custom configuration implement by mount ",(0,r.jsx)(n.code,{children:"registry.conf"})," and ",(0,r.jsx)(n.code,{children:"file.conf"})," to container."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specify registry.conf"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The environment variable",(0,r.jsx)(n.code,{children:"SEATA_CONFIG_NAME"})," is required when use a custom configuration , and the value must be started with ",(0,r.jsx)(n.code,{children:"file:"})," like ",(0,r.jsx)(n.code,{children:"file:/root/seata-config/registry"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker run --name seata-server \\\n        -p 8091:8091 \\\n        -e SEATA_CONFIG_NAME=file:/root/seata-config/registry \\\n        -v /User/seata/config:/root/seata-config  \\\n        seataio/seata-server\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The param ",(0,r.jsx)(n.code,{children:"-e"})," specify environment, and the param ",(0,r.jsx)(n.code,{children:"-v"})," specify mount volume."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specify file.conf"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you need specify ",(0,r.jsx)(n.code,{children:"file.conf"}),", just modify ",(0,r.jsx)(n.code,{children:"config"})," like below in ",(0,r.jsx)(n.code,{children:"registry.conf"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'config {\n  type = "file"\n\n  file {\n    name = "file:/root/seata-config/file.conf"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,r.jsx)(n.p,{children:"You can modify configuration of seata-server  by the environment variables like this:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_IP"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The variable is optional,  specifies registry IP instead of the container IP in registry center like eureka or others."}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_PORT"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The variable is optional, specifies seata-server port, default is ",(0,r.jsx)(n.code,{children:"8091"})]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"STORE_MODE"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The variable is optional, specifies the log store mode of seata-server,  support ",(0,r.jsx)(n.code,{children:"db"})," and ",(0,r.jsx)(n.code,{children:"file"}),", default is ",(0,r.jsx)(n.code,{children:"file"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SERVER_NODE"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The variable is optional, specifies  the seata-server node ID, like ",(0,r.jsx)(n.code,{children:"1"}),",",(0,r.jsx)(n.code,{children:"2"}),",",(0,r.jsx)(n.code,{children:"3"}),"..., default is ",(0,r.jsx)(n.code,{children:"1"})]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_ENV"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The variable is optional, specifies the seata-server environment, like ",(0,r.jsx)(n.code,{children:"dev"}),", ",(0,r.jsx)(n.code,{children:"test"})," etc. Then server will find file like ",(0,r.jsx)(n.code,{children:"registry-dev.conf"})," under the configuration path when start."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_CONFIG_NAME"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The variable is optional, specifies the configuration file path, like the ",(0,r.jsx)(n.code,{children:"file:/root/registry"}),", will load file",(0,r.jsx)(n.code,{children:"/root/registry.conf"})," as configuration. If need specify ",(0,r.jsx)(n.code,{children:"file.conf"})," configuration\uff0cthe ",(0,r.jsx)(n.code,{children:"config.file.name"})," value in ",(0,r.jsx)(n.code,{children:"registry.conf"})," file need to change as related config, like ",(0,r.jsx)(n.code,{children:"file:/root/file.conf"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var r=s(96540);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);